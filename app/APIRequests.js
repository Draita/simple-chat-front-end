import { useRouter } from 'vue-router'
import axios from 'axios';

async function register(username,email,password) {
    try {
        const response = axios.post("/register", {
            email,
            password,
            username,
        })
        return response

      } catch (error) {
        console.log(error); // Handle error
        return error
      }
}


export default {
    register,
}