import axios from "axios";

export const loginUser = async (config) => {
  console.log("Login user tut");

  return await axios
    .post("http://localhost:1337/api/auth/local", config)
    .then((data) => {
      const response = JSON.stringify(data.data);
      console.log("AxiosQuery", data.data);
      localStorage.setItem("user", response);
      console.log("Axios ok");
      return response ? true : false;
    })
    .catch((e)=>{
      console.log("Faild fetch, ERROR: ",e)
    });
};
