import React from "react";
import styles from "../Register.module.scss";
import { Button } from "antd";
import { connect } from "react-redux";
import bcrypt from "bcryptjs-react";
import { registerUser } from "../../../service/serviceFunctions";
import { checkValidRegisterPayload } from "../registerUtils";

function RegisterButton({ registerDetails }) {
  const onRegisterClick = () => {
    if (checkValidRegisterPayload(registerDetails)) {
      const { password } = registerDetails;
      bcrypt.hash(password, 10).then((hashedPW) => {
        registerUser({
          username: registerDetails?.username,
          email: registerDetails?.email,
          fullName: registerDetails?.fullName,
          password: hashedPW,
        });
      });
    }
  };
  return (
    <div className={styles.registerButton}>
      <Button
        type="primary"
        style={{
          fontFamily: "Quick Kiss",
          fontSize: "1.5rem",
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
