import axios from "axios";

const API_URL = "http://ff69eef5-3875-48ae-8448-47b076427a39.mock.pstmn.io/auth";

type ForgotPasswordRequest = {
  email_address: string,
}

type ForgotResponse = {
  token: string,
  username: string,
  message: string
}

type ResetPasswordRequest = {
  username: string,
  new_password: string,
  new_password2: string,
}

type ResetPasswordResponse = {
  username: string,
}

class RestorePasswordService {

  async forgot(forgotRequest: ForgotPasswordRequest) {
    try {
      const { data } = await axios
        .post<ForgotResponse>(API_URL + "/forgot_password",
          forgotRequest,
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          }
        );
      if (data.token) {
        localStorage.setItem("forgotenToken", data.token);
      }
      return data;
    } catch (error) {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred'
    }
  }

  async reset(resetRequest: ResetPasswordRequest) {
    try {
      const { data } = await axios
        .post<ResetPasswordResponse>(API_URL + "/reset_password",
        resetRequest,
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          }
        );
      if (data.username) {
        localStorage.setItem("authenticated", "true");
      }
      return data;
    } catch (error) {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred'
    }
  }
}

export default new RestorePasswordService();
