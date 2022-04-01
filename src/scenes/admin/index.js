import "./admin.css";
import { useEffect, useState } from "react";
import Logo from "../../assets/image/Logo.png";
import { getToken } from "../../utils/token";

const AdminManagementScreen = () => {
  //TODO make usersList pretty and meaningful
  //TODO make users clickable
  //TODO user view where their information is expanded and they can be deleted
  //TODO make new user function

  const token = getToken();
  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/admin";

  const [users, setUsers] = useState([]);

  let usersList = users.map((user) => (
    <div key={user.user_id}>
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
    <div className="screen__admin">
      <div className="header__admin">
        <img src={Logo} alt="logo" />
        <p className="title__admin">Manage Users</p>
      </div>
      <div className="list__users">{usersList}</div>
    </div>
  );
};

export default AdminManagementScreen;
