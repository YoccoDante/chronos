import axios from "axios";

const API_URL = "http://ff69eef5-3875-48ae-8448-47b076427a39.mock.pstmn.io/auth";

type LoginRequest = {
  username: string,
  password: string
}

type LoginResponse = {
  token: string,
  username: string
}

class AuthService {

  async login(loginRequest: LoginRequest) {
    try {
      const { data } = await axios
        .post<LoginResponse>(API_URL + "/login",
          loginRequest,
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          }
        );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message', error.message)
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred'
      }

    }
  }

}

export default new AuthService();
