import { useDispatch, useSelector } from "react-redux";
import UserCardItem from "../UserCardItem/UserCardItem";
import { selectFollowingStatud, selectStatus, selectUsers } from "../../redux/usersSelector";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../redux/operations";
import "./UserCardList.scss";
import { Link } from "react-router-dom";
import { LIMIT_PER_PAGE } from "../../constans/operation.constans";
import { STATUS } from "../../constans/status";
import { Loader } from "../Loader/Loader";
import { ButtonLoadMore } from "../Buttons/ButtonLoadMore";
import { Filter } from "../Filter/Filter";
// import { setFilterAction } from "../../redux/usersSlice";
import { FILTER } from "../../constans/filter.constans";

export const UserCardList = () => {
  const [page] = useState(1);
  const users = useSelector(selectUsers);
  const status = useSelector(selectStatus);
  const followingStatus = useSelector(selectFollowingStatud);
  const [filteredUsers, setFilteredUsers] = useState(users)
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(LIMIT_PER_PAGE);
  const [selectedSortOption, setSelectedSortOption] = useState(FILTER.showAll);

  useEffect(() => {
    dispatch(fetchUsers({ page, limit }));   
  }, [dispatch, page, limit, selectedSortOption]);

  useEffect(()=>{
    if(selectedSortOption==FILTER.follow) {
      return setFilteredUsers(users.filter(user=>!followingStatus[user.id]))
      
    }
    if(selectedSortOption===FILTER.followings) {
      return setFilteredUsers(users.filter(user=>followingStatus[user.id]))
    }
    
    if(selectedSortOption===FILTER.showAll) {
      return setFilteredUsers(users)
    }
  }, [followingStatus, selectedSortOption, users])

  const handleOnLoadMore = () => {
    setLimit((prev) => prev + 3);
  };

  // const filteredUsers = useMemo(
  //  (users, selectedSortOption, followingStatus) => {
  //     if (selectedSortOption === FILTER.showAll) {
  //       console.log(users);
  //       return users;
  //     } else if (selectedSortOption===FILTER.follow) {
  //       return users.filter(user=>!followingStatus[user.id])
  //     } else if(selectedSortOption===FILTER.followings) {
  //       return users.filter(user=>followingStatus[user.id])
  //     }
  //     return []
      
  //   }, []
  // );

  console.log(filteredUsers);

  console.log(selectedSortOption===FILTER.showAll);

  return (
    <div className="container">
      <div className="wrapper-card-list-header">
        <Link to={location?.state?.from ?? "/"} state={{ from: location }}>
          <button className="btn-back"> &#10094; Back </button>
        </Link>
        <Filter setSelectedSortOption={setSelectedSortOption} />
      </div>

      {status === STATUS.loading ? (
        <Loader />
      ) : (
        <>
          <ul className="user-cards">
            {filteredUsers?.map((user) => (
              <UserCardItem key={user.id} user={user} />
            ))}
          </ul>
          {users.length < limit ? (
            ""
          ) : (
            <ButtonLoadMore onClickFn={handleOnLoadMore} text="Load More" />
          )}
        </>
      )}
    </div>
  );
};
