import { useEffect, useState } from "react";
import UserView from "../views/UserView";
import UserModel from "../models/UserModel";

// Controller: Kullanıcı Etkileşimlerini karşılar
const UserController = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserModel.getUsers()
    .then((users) => setUsers(users));
  }, []);

  return <UserView users={users} />;
};

export default UserController;
