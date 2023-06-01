import PropTypes from "prop-types";
import "./UserCardItemStyles.scss";
// import styles from "./UserCardItemStyles.scss?inline"
import logo from "../../images/Logo.svg";
import avatarImg from "../../images/Hansel.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setFollowersCountAction,
  setToggleFollowingAction,
} from "../../redux/usersSlice";
import { selectFollowingStatud } from "../../redux/usersSelector";
// import { selectStatus } from "../../redux/usersSelector";

const UserCardItem = ({ user }) => {
  const dispatch = useDispatch();
  const { avatar, tweets, followers, id } = user;

    const followingStatus = useSelector(selectFollowingStatud);

  // console.log(followingStatus);
  const isFollowing = followingStatus[id] ?? false;
  // console.log(isFollowing);

  const followersCount = useSelector(
    (state) => state.users.followersCount[id] ?? followers
  );

  // console.log(followersCount);

  const handleOnFollow = () => {
    const updatedFollowersCoutn = isFollowing
      ? followersCount - 1
      : followersCount + 1;

    dispatch(
      setFollowersCountAction({
        userId: id,
        followersCount: updatedFollowersCoutn,
      })
    );

    dispatch(
      setToggleFollowingAction({ userId: id, isFollowing: !isFollowing })
    );
  };

  return (
    <li className="user-card">
      <img src={logo} alt="Logo" className="logoGO" />

      <img src={avatar || avatarImg} alt="User avatar" className="avatar" />

      <ul className="description">
        <li className="text mrBtn16">{tweets} TWEETS</li>
        <li className="text mrBtn26">
          {followersCount.toLocaleString("en-US")} FOLLOWERS
        </li>

        <button
          onClick={handleOnFollow}
          className={isFollowing ? "button active" : "button"}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </ul>
    </li>
  );
};

UserCardItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCardItem;
