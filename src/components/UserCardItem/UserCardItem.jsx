import PropTypes from "prop-types";
import styles from "./UserCardItem.module.scss"
import logo from "../../images/Logo.svg";
import avatarImg from "../../images/Hansel.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setFollowersCountAction,
  setToggleFollowingAction,
} from "../../redux/usersSlice";
import { selectFollowingStatud } from "../../redux/usersSelector";
import clsx from "clsx";


const UserCardItem = ({ user }) => {
  const dispatch = useDispatch();
  const { avatar, tweets, followers, id } = user;

  const followingStatus = useSelector(selectFollowingStatud);
  
  const isFollowing = followingStatus[id] ?? false;  

  const followersCount = useSelector(
    (state) => state.users.followersCount[id] ?? followers
  );
  
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
    <li className={styles.card}>
      <img src={logo} alt="Logo" className={styles.logoGO} />

      <img src={avatar || avatarImg} alt="User avatar" className={styles.avatar} />

      <ul className={styles.description}>
        <li className={clsx(styles.text, styles.mrBtn16)}>{tweets} TWEETS</li>
        <li className={clsx(styles.text, styles.mrBtn26)}>
          {followersCount.toLocaleString("en-US")} FOLLOWERS
        </li>

        <button
          onClick={handleOnFollow}
          className={isFollowing ? clsx(styles.button, styles.active) : clsx(styles.button)}
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
