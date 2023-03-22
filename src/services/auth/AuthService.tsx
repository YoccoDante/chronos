import axios from "axios";

const API_URL = "http://localhost:5000/auth";

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
      const { data, status } = await axios
        .post<LoginResponse>(API_URL + "/login",
          loginRequest,
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          }
        );
      if (data.token) {
        localStorage.setItem("authenticated", "true");
      }
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
