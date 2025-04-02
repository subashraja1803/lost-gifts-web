import { Button, Flex, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOTP } from "../../service/serviceFunctions";

function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const onSendOTP = () => {
    verifyOTP({
      otp,
    })
      .then(({ status, responseCode }) => {
        if (status === "ok" && responseCode === 1) {
          navigate("/login-redirect");
        }
      })
      .catch(console.log);
  };
  const onOTPChange = (value) => {
    setOtp(value);
  };
  return (
    <div
      style={{
        padding: "3rem",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Quick Kiss",
        fontSize: "2rem",
      }}
    >
      <Flex vertical gap="2rem" align="center">
        <span>Enter the OTP received through email:</span>
        <Input.OTP
          type="number"
          maxLength
          length={6}
          style={{ width: "fit-content" }}
          value={otp}
          onChange={onOTPChange}
        />
        <Flex align="center" justify="center" gap="3rem">
          <Button type="primary" danger onClick={() => navigate("/register")}>
            Back
          </Button>
          <Button type="primary" onClick={onSendOTP}>
            Send
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default OTPVerification;
