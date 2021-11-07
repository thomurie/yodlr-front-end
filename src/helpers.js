const axios = require("axios");

const URL = "http://localhost:4000";

const CreateUser = (userObj) => {
  axios
    .post(`${URL}/users`, userObj)
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const GetAllUsers = async () => {
  try {
    const response = await axios.get(`${URL}/users`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const GetUser = async (userObj) => {
  try {
    const response = await axios.get(`${URL}/users/${userObj.id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { CreateUser, GetAllUsers, GetUser };
