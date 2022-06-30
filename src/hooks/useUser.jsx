import { useContext, useState, useEffect } from "react";
import Context from "../context/StaticContext";
import { userApi } from "../services";

const useUser = () => {
  const [user, setUser] = useState([]);
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

  return {
    user,
    edit,
  };
};

export default useUser;
