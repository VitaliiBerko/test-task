import styles from "./UserCardList.module.scss"
import { useDispatch, useSelector } from "react-redux";
import UserCardItem from "../UserCardItem/UserCardItem";
import {
  selectFollowingStatud,
  selectStatus,
  selectUsers,
} from "../../redux/usersSelector";
import { useMemo, useEffect, useState } from "react";
import { fetchUsers } from "../../redux/operations";
import { useNavigate } from "react-router-dom";
import { LIMIT_PER_PAGE } from "../../constans/operation.constans";
import { STATUS } from "../../constans/status";
import { Loader } from "../Loader/Loader";
import { ButtonLoadMore } from "../Buttons/ButtonLoadMore";
import { Filter } from "../Filter/Filter";
import { FILTER } from "../../constans/filter.constans";

export const UserCardList = () => {
  const [page] = useState(1);
  const users = useSelector(selectUsers);
  const status = useSelector(selectStatus);
  const followingStatus = useSelector(selectFollowingStatud);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [limit, setLimit] = useState(LIMIT_PER_PAGE);
  const [selectedSortOption, setSelectedSortOption] = useState(FILTER.showAll);

  useEffect(() => {
    dispatch(fetchUsers({ page, limit }));
  }, [dispatch, page, limit]);

  const handleOnLoadMore = () => {
    setLimit((prev) => prev + 3);
  };

  const getFilteredUsers = (users, selectedSortOption, followingStatus) => {
    if (selectedSortOption === FILTER.showAll) {
       return users;
    } else if (selectedSortOption === FILTER.follow) {
      return users.filter((user) => !followingStatus[user.id]);
    } else if (selectedSortOption === FILTER.followings) {
      return users.filter((user) => followingStatus[user.id]);
    }
    return [];
  };

  const filteredUsers = useMemo(
    () => getFilteredUsers(users, selectedSortOption, followingStatus),
    [followingStatus, selectedSortOption, users]
  );
  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <button className={styles.btnBack} onClick={onBack}>
          {" "}
          &#10094; Back{" "}
        </button>

        <Filter setSelectedSortOption={setSelectedSortOption} />
      </div>

      {status === STATUS.loading ? (
        <Loader />
      ) : (
        <>
          <ul className={styles.userCards}>
            {filteredUsers?.map((user) => (
              <UserCardItem key={user.id} user={user} />
            ))}
          </ul>
          {users?.length < limit ? (
            ""
          ) : (
            <ButtonLoadMore onClickFn={handleOnLoadMore} text="Load More" />
          )}
        </>
      )}
    </div>
  );
};
