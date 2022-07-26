import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';


const clientId = "OAuth Web Client ID"; // Google Client ID

export default function GoogleButton({ onSocial }) {
  const onSuccess = async (response) => {
    console.log(response);

    const { googleId, profileObj: { email, name } } = response;


    // console.log(response);
    await onSocial({
      socialId : googleId,
      socialType: 'google',
      email,
      nickname: name
    });
  }

  const onFailure = (error) => {
    console.log(error);
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure} />
    </div>
  )
}