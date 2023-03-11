import { useRouter } from "vue-router";
import axios from "axios";

async function register(username, email, password) {
  try {
    const response = axios.post("/register", {
      email,
      password,
      username,
    });
    return response;
  } catch (error) {
    console.log(error); // Handle error
    return error;
  }
}

async function login(email, password) {
  try {
    const response = axios.post("/login", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error); // Handle error
    return error;
  }
}

async function getUsersAndGroupsList() {
  try {
    const response = axios.get("/friend/requests").catch(function (error) {
      return error;
    });

    return response;
  } catch (error) {
    console.log(error); // Handle error
    return error;
  }
}

async function addFriend(usernameAndTag) {
  try {
    const response = axios.post("/friend/add", {
      usernameAndTag
    });
    return response;
  } catch (error) {
    console.log(error); // Handle error
    return error;
  }
}

export default {
  register,
  login,
  getUsersAndGroupsList,
  addFriend,
};
