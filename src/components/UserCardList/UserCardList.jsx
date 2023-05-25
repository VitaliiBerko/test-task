import { useDispatch, useSelector } from "react-redux";
import UserCardItem from "../userCardItem/userCardItem";
import { selectUsers } from "../../redux/usersSelector";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/operations";
import "./UserCardList.scss";
import { Link } from "react-router-dom";

export const UserCardList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <Link to={location?.state?.from ?? "/"} state={{ from: location }}>
        <button className="btn-back mrTop16"> Back </button>
      </Link>

      <ul className="user-cards">
        {users.map((user) => (
          <UserCardItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
