import { userLogin } from "../redux/reducers/auth/authAction";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Privde All Feilds");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
    e,
    name,
    role,
    email,
    password,
    phone,
    organisationName,
    address,
    hospitalName,
    website
  ) => {
    e.preventDefault();
    try {
      console.log("register")
    } catch (error) {
      console.log(error);
    }
  };