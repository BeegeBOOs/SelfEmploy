import Router from "next/router";

import axios from "axios";

export const userService = {
  loginUser,
  logout,
  registerUser,
  createRate,
  updateRate,
  getAll,
  getById,
  update,
  delete: _delete
};

function loginRed(username, password) {
  return fetchWrapper
    .post(`${baseUrl}/authenticate`, { username, password })
    .then((user) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}

export async function loginUser (config) {
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
    .catch((e) => {
      console.log("Faild fetch, ERROR: ", e);
    });
};

export async function registerUser(config){
  console.log("Register user tut");
  return await axios
    .post("http://localhost:1337/api/tasks", config)
    .then((data) => {
      const response = JSON.stringify(data.data);
      console.log("AxiosQueryRegister", data.data);
      localStorage.setItem("user", response);
      console.log("Axios register ok");
      return response ? true : false;
    })
    .catch((e) => {
      console.log("Faild fetch, ERROR: ", e);
    });
}

export async function createRate(config) {
  console.log('Create rate tut');
  return await axios
    .post('http://localhost:1337/api/tasks/', config)
    .then((data) => {
      const response = JSON.stringify(data.data);
      console.log('AxiosQueryRegister', data.data);
      return response ? true : false;
    })
    .catch((e) => {
      console.log('Faild fetch, ERROR: ', e);
    });
}

export async function updateRate(id,config) {
  console.log('Update rate tut');
  return await axios
    .put(`http://localhost:1337/api/tasks/${id}`, config)
    .then((data) => {
      const response = JSON.stringify(data.data);
      console.log('AxiosQueryRegister', data.data);
      return response ? true : false;
    })
    .catch((e) => {
      console.log('Faild fetch, ERROR: ', e);
    });
}


function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/account/login");
}



// function registerUser(user) {
//   return fetchWrapper.post(`${baseUrl}/register`, user);
// }

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params).then((x) => {
    // update stored user if the logged in user updated their own record
    if (id === userSubject.value.id) {
      // update local storage
      const user = { ...userSubject.value, ...params };
      localStorage.setItem("user", JSON.stringify(user));

      // publish updated user to subscribers
      userSubject.next(user);
    }
    return x;
  });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}
