import { useEffect, useState } from "react";
import { GetAllUsers } from "./helpers";

const AdminConsole = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const allUsers = await GetAllUsers();
      setUsers(allUsers);
    }
    getUsers();
  }, []);

  return <ul>{users ? users.map((u) => <li>{u.firstName}</li>) : <></>}</ul>;
};

export default AdminConsole;
