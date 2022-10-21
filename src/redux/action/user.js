import Axios from "axios";
// import { API_URL } from "../../Constant/API";

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    Axios.get(`http://localhost:2001/users`, {
      params: {
        email,
      },
    })
      .then((result) => {
        console.log(result.data[0].email);
        if (email === result.data[0].email) {
          if (password === result.data[0].password) {
            delete result.data[0].password;

            dispatch({
              type: "USER_LOGIN",
              payload: result.data[0],
            });
          } else {
            // handle eror rong pass
            dispatch({
              type: "USER_ERROR",
              payload: "Kata Sandi Salah",
            });
          }
        } else {
          // handle eror user name not found
          dispatch({
            type: "USER_ERROR",
            payload: "User name atau email tidak ditemukan",
          });
        }
      })
      .catch((err) => {
        alert(`terjadi kesalahan ke server`);
      });
  };
};

export const LogoutUser = () => {
  localStorage.removeItem("userDataKepo");
  return {
    type: "USER_LOGOUT",
  };
};
