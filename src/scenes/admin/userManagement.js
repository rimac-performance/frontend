import { useEffect, useState } from "react";
import Logo from "../../assets/image/Logo.png";
import { LogoutArrow } from "../../components/atoms/arrows";
import { getToken } from "../../utils/token";

const UserManagementScreen = () => {
  //TODO make usersList pretty and meaningful
  //TODO make users clickable
  //TODO user view where their information is expanded and they can be deleted
  //TODO make new user function

  const token = getToken();
  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/admin";

  const [users, setUsers] = useState([]);

  let usersList = users.map((user) => (
    <div>
      <p>{user.email}</p>
    </div>
  ));

  useEffect(() => {
    fetch(`${apiUrl}/all`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((allUsers) => {
        setUsers(allUsers);
      });
  }, []);

  return (
    <div className="user__management__screen">
      <LogoutArrow to={"/admin"} />
      <div className="header__cars">
        <img src={Logo} alt="logo" />
        <p className="title__cars">Manage Users</p>
      </div>
      <div className="users__list">{usersList}</div>
    </div>
  );
};

export default UserManagementScreen;
