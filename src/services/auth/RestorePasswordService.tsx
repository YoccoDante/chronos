import axios from "axios";

const API_URL = "http://localhost:5000/auth";

type RestorePasswordRequest = {
  username: string,
  newpassword: string,
  confirmnewpassword: string,
}

class RestorePasswordService {

  async restore(RestoreRequest: RestorePasswordRequest) {
    try {
      return true;
    } catch (error) {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred'
    }
  }
}

export default new RestorePasswordService();
