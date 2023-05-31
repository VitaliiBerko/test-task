import { useDispatch, useSelector } from "react-redux";
import UserCardItem from '../UserCardItem/UserCardItem'
import { selectUsers } from "../../redux/usersSelector";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../redux/operations";
import "./UserCardList.scss";
import { Link } from "react-router-dom";
import { LIMIT_PER_PAGE } from "../../constans/operation.constans";

export const UserCardList = () => {
  const [page]= useState(1);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch(); 


  useEffect(() => {
    dispatch(fetchUsers({page, limit: LIMIT_PER_PAGE}));
  }, [dispatch, page]);

  return (
    <div className="container">
      <div className="wrapper-card-list-header">
        <Link to={location?.state?.from ?? "/"} state={{ from: location }}>
          <button className="btn-back"> &#10094; Back </button>
        </Link>

        <div className="wrapper-filter">
          <h2 className="title-filter">Filter:</h2>
          <select name="select">
            <option value="value1">
              Show all
            </option>
            <option value="value2">Follow</option>
            <option value="value3">Followings</option>
          </select>
        </div>
      </div>

      <ul className="user-cards">
        {users?.map((user) => (
          <UserCardItem key={user.id} user={user} />
        ))}
      </ul>
      <button className="btn-load-more">Load more</button>
    </div>
  );
};
