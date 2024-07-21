import React from "react";
import styles from "../Login.module.scss";
import { Button } from "antd";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../service/serviceFunctions";
import Utility from "../../../Utils/Utility";
import { EMPTY_STRING } from "../../../constants/frozenObjects";
import { checkLoginPayload } from "../loginUtils";

function LoginButton({ loginDetails }) {
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
        .then(({ status }) => {
          if (status === "ok") navigate("/");
        })
        .catch(console.log);
    }
  };
  return (
    <div className={styles.loginButton}>
      <Button
        type="primary"
        style={{
          fontFamily: "Quick Kiss",
          fontSize: "1.5rem",
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
});

export default connect(mapStateToProps, null)(LoginButton);
