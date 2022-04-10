import "./admin.css";
import { useEffect, useState } from "react";
import Logo from "../../assets/image/Logo.png";
import { getToken } from "../../utils/token";
import { PrimaryButton } from "../../components/atoms/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Dialog } from "../../components/molecules/dialogs";
import { roles } from "../../utils/roles";

const AdminManagementScreen = () => {
  const token = getToken();
  const apiUrl = "https://rimacperformance-dev.ryacom.org/api/admin";
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);

  function removeSelectedUser() {
    let temp = [...users];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].user_id == selectedUser.user_id) {
        temp.splice(i, 1);
      }
    }
    setUsers(temp);
  }

  const newUser = () => {
    navigate({ pathname: "./newUser" });
  };

  const editUser = (user) => {
    let args = [
      user.first_name,
      user.last_name,
      user.email,
      user.phone,
      user.user_role,
      user.user_id,
    ];
    navigate(`./editUser/${args}`);
  };

  const openDeleteDialog = (user) => {
    setSelectedUser(user);
    setIsDeleting(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleting(false);
    setSelectedUser({});
  };

  const deleteUser = () => {
    fetch(apiUrl + `?user_id=${selectedUser.user_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response);
    });
    console.log("deleting user: " + selectedUser.email);
    removeSelectedUser();
    closeDeleteDialog();
  };

  useEffect(() => {
    fetch(`${apiUrl}/all`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((allUsers) => {
        allUsers.sort((a, b) => {
          return a.email.localeCompare(b.email);
        });
        setUsers(allUsers);
      });
  }, [token]);

  let usersList = users.map((user) => (
    <div className="list__users__user" key={user.user_id}>
      <p className="user__name">{user.last_name}</p>
      <p className="user__name">{user.first_name}</p>
      <p className="user__email">{user.email}</p>
      <div className="user__buttons">
        <FontAwesomeIcon icon={faPen} onClick={() => editUser(user)} />
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => openDeleteDialog(user)}
        />
      </div>
    </div>
  ));

  const deleteDialog = (
    <Dialog
      message={`Are you sure you want to delete: ${
        roles[selectedUser.user_role]
      } ${selectedUser.last_name}, ${selectedUser.first_name}; ${
        selectedUser.email
      }?`}
      acceptText="Delete"
      closeText="Cancel"
      onAccept={deleteUser}
      onClose={closeDeleteDialog}
    />
  );

  return (
    <div className="screen__admin">
      {isDeleting ? deleteDialog : <></>}
      <div className="header__admin">
        <img src={Logo} alt="logo" />
        <p className="title__admin">Manage Users</p>
      </div>
      <div className="list__admin">
        <div className="list__users__header">
          <p className="user__name__header">Last Name</p>
          <p className="user__name__header">First Name</p>
          <p className="user__email__header">User Email</p>
          <p className="user__buttons__header">Actions</p>
        </div>
        <div className="list__users">{usersList}</div>
      </div>
      <PrimaryButton text={"Add User"} onClick={newUser} />
    </div>
  );
};

export default AdminManagementScreen;
