import React from "react";
import styles from "../Register.module.scss";
import { Button } from "antd";
import { connect } from "react-redux";
import { registerUser } from "../../../service/serviceFunctions";
import { checkValidRegisterPayload } from "../registerUtils";
import { useNavigate } from "react-router-dom";
import Utility from "../../../Utils/Utility";

function RegisterButton({ registerDetails }) {
  const navigate = useNavigate();
  const onRegisterClick = () => {
    if (checkValidRegisterPayload(registerDetails)) {
      const { password } = registerDetails;
      console.log(Utility.encryptPassword(password));
      registerUser({
        username: registerDetails?.username,
        email: registerDetails?.email,
        fullName: registerDetails?.fullName,
        password: Utility.encryptPassword(password),
      }).then(({ status }) => {
        if (status === "ok") {
          navigate("/register/otp-verification");
        }
      });
    }
  };
  return (
    <div className={styles.registerButton}>
      <Button
        type="primary"
        style={{
          fontFamily: "Quick Kiss",
          fontSize: "2rem",
          height: "fit-content",
        }}
        onClick={onRegisterClick}
      >
        Register
      </Button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  registerDetails: state.registerDetails,
});

export default connect(mapStateToProps, null)(RegisterButton);
