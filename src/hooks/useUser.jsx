import { useContext, useState, useEffect } from "react";
import Context from "../context/StaticContext";
import { userApi } from "../services";

const UseUser = () => {
  const [user, setUser] = useState([]);
  const { userContext, setUserContext } = useContext(Context);

  useEffect(() => {
    userContext && setUser(userContext);
  }, [userContext]);

  const add = ({ email, hashed_password }) => {
    try {
      const { data } = userApi.add({ email, hashed_password });
      setUserContext(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    add,
  };
};

export default UseUser;
