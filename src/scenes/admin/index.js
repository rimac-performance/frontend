import "./admin.css";
import { useEffect, useState } from "react";
import Logo from "../../assets/image/Logo.png";
import { getToken } from "../../utils/token";
import { PrimaryButton } from "../../components/atoms/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AdminManagementScreen = () => {
  //TODO make usersList pretty and meaningful
  //TODO user view where their information is expanded and they can be deleted
  //TODO make new user function

  const token = getToken();
  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/admin";
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const newUser = () => {
    console.log("adding new user");
    navigate({ pathname: "./newUser" });
  };

  const editUser = () => {
    //TODO
    console.log("editing user");
  };

  const deleteUser = () => {
    //TODO
    console.log("deleting user");
  };

  let usersList = users.map((user) => (
    <div className="list__users__user" key={user.user_id}>
      <p className="user__name">{user.last_name}</p>
      <p className="user__name">{user.first_name}</p>
      <p className="user__email">{user.email}</p>
      <div className="user__buttons">
        <FontAwesomeIcon icon={faPen} onClick={editUser} />
        <FontAwesomeIcon icon={faTrashCan} onClick={deleteUser} />
      </div>
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
      <div className="list__users__header">
        <p className="user__name__header">Last Name</p>
        <p className="user__name__header">First Name</p>
        <p className="user__email__header">User Email</p>
        <p className="user__buttons__header">Actions</p>
      </div>
      <div className="list__users">{usersList}</div>
      <PrimaryButton text={"Add User"} onClick={newUser} />
    </div>
  );
};

export default AdminManagementScreen;
