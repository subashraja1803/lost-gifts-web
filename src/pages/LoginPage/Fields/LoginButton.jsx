import React from "react";
import PropTypes from "prop-types";
import styles from "../Login.module.scss";
import { Button } from "antd";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../service/serviceFunctions";
import Utility from "../../../Utils/Utility";
import { EMPTY_STRING } from "../../../constants/frozenObjects";
import { checkLoginPayload } from "../loginUtils";
import { LOGIN_RESPONSE_CODES } from "../../../constants/loginConstants";
import { toast } from "react-toastify";
import { LostGiftsActionHandlers } from "../../../store/actionHandlers";

function LoginButton({
  loginDetails,
  loginProps,
  setUserDetails,
  userDetails,
}) {
  const navigate = useNavigate();
  const onLoginClick = () => {
    const loginPayload = {
      password: loginDetails?.password || EMPTY_STRING,
    };
    if (checkLoginPayload(loginDetails)) {
      if (Utility.checkValidEmail(loginDetails?.username))
        loginPayload.email = loginDetails?.username;
      else loginPayload.username = loginDetails?.username;
      const encryptedPW = Utility.encryptPassword(loginPayload?.password);
      loginUser({
        ...loginPayload,
        password: encryptedPW,
      })
        .then(({ status, data, responseCode, message }) => {
          if (
            status === "ok" &&
            responseCode === LOGIN_RESPONSE_CODES.SUCCESS
          ) {
            const { token } = data;
            document.cookie = `token=${token}`;
            document.cookie = `user=${loginPayload.username}`;
            setUserDetails({
              ...userDetails,
              isLoggedIn: true,
            });
            navigate("/");
            toast.error(message);
          } else if (status === "not ok") {
            toast.error(message);
          }
        })
        .catch(() => {
          toast("Internal Server Error, Try again later");
        });
    }
  };
  return (
    <div className={styles.loginButton}>
      <Button
        type="primary"
        style={{
          fontFamily: "Quick Kiss",
          fontSize: "2rem",
          height: "fit-content",
        }}
        onClick={onLoginClick}
      >
        Login
      </Button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  loginDetails: state.loginDetails,
  userDetails: state.userDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (payload) =>
    dispatch(LostGiftsActionHandlers.setUserDetails(payload)),
});

LoginButton.propTypes = {
  userDetails: PropTypes.object.isRequired,
  loginDetails: PropTypes.object.isRequired,
  setUserDetails: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
