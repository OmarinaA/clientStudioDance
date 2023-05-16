import axios from "axios";
const API_URL = "http://localhost:8081/auth/";
class AuthService {

    takeUsers() {
        
        return axios
            .get(API_URL + "takeUsers")
            .then(response => {
                return response;
            });
    
    }

    login(email, password) {
        return axios
            .post(API_URL + "signin", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user",
                        JSON.stringify(response.data));
                }
                return response;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, login, phone, email, password) {
        return axios
          .post(API_URL + "signup", {
            username,
            login,
            phone,
            email,
            password,
            roles: ['user']
        })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user",
                        JSON.stringify(response.data));
                }
                return response;
          });
      }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
    VkRes(){
        return axios
            .get(API_URL + "/login")
            .then(response => {
                console.log(response)
                return response;
            });

    }
}

export default new AuthService()