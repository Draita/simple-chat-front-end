import { useRouter } from "vue-router";
import axios from "axios";

async function getUser() {
  try {
    const response = axios.get("/users/self", {});
    return response;
  } catch (error) {
    console.log(error); // Handle error
    return error;
  }
}

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

async function getFriendRequests() {
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

async function getRoomList() {
  try {
    const response = axios.get("/room/list").catch(function (error) {
      return error;
    });

    return response;
  } catch (error) {
    console.log(error); // Handle error
    return error;
  }
}

async function cancelFriendRequest(addressee) {
  try {
    const response = axios.put("/friend/cancel", {
      addressee,
    });
    return response;
  } catch (error) {
    console.log(error); // Handle error
    return error;
  }
}

async function acceptFriendRequest(requester) {
  try {
    console.log(requester);
    const response = axios.put("/friend/accept", {
      requester,
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
      usernameAndTag,
    });
    return response;
  } catch (error) {
    console.log(error); // Handle error
    return error;
  }
}

async function clearNotification(notificationId) {
  try {
    const response = axios.post("/notification/clear", {
      notificationId,
    });
    return response;
  } catch (error) {
    console.log(error); // Handle error
    return error;
  }
}


async function saveProfile(data) {
  try {
    const response = await axios.post("/users/update_profile", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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
  getFriendRequests,
  addFriend,
  cancelFriendRequest,
  acceptFriendRequest,
  getRoomList,
  getUser,
  saveProfile,
  clearNotification
};
