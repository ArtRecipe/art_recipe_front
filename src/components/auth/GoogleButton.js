import React from "react";
import GoogleLogin from "react-google-login";

const GoogleButton = ({ onSocial }) => {
  const onSuccess = async (response) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name },
    } = response;

    await onSocial({
      socialId: googleId,
      socialType: "google",
      email,
      nickname: name,
    });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={
          "1022881329351-g61719f230dt6lpt3cnn7lulua9i6b0u.apps.googleusercontent.com"
        }
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default GoogleButton;
