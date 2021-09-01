import axios from "axios";
import * as types from './actionType'

const url="../../../db.json"
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users
});

const userAdded=()=>({
  type:types.ADD_USERS
})

// Define hanh dong se gui len cho reducer tiep nhan
// not Pure object: khong phai object nguyen thuy -> moi phai dung middleware de xu ly: redux-thunk
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${url}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};


export const AddUsers = (user) => {
  return function (dispatch) {
    axios
      .post(`${url}`,user)
      .then((res) => {
        console.log("res", res);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};


