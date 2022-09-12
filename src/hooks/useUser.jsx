import { useContext, useState, useEffect } from "react";
import Context from "../context/StaticContext";
import { userApi } from "../services";

const useUser = () => {
  const [user, setUser] = useState([]);
  const [errAPI, setErrAPI] = useState();

  const { userContext, setUserContext } = useContext(Context);

  useEffect(() => {
    userContext && setUser(userContext);
  }, [userContext]);

  const edit = async (formData) => {
    try {
      const { data } = await userApi.edit(formData);
      console.log("data useUser", data);
      setUserContext(data);
      localStorage.removeItem("FirstStep");
    } catch (error) {
      console.error(error);
    }
  };

  const add = async (isSignUp, email, password) => {
    try {
      console.log("hola")
      const response = await userApi.add(isSignUp, { email: email, hashed_password: password });
      console.log("hola")
      setUser(response.data)
      console.log("hola")
      return;
    } catch (error) {
      console.log("hola")
      console.log(error);
      setErrAPI(error.response.data)
      return;
    }
  }

  return {
    user,
    edit,
    add, 
    errAPI
  };
};

export default useUser;
