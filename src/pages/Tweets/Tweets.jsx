import { useDispatch, useSelector } from "react-redux";
import UserCardItem from "../../components/userCardItem/userCardItem";
import { selectUsers } from "../../redux/usersSelector";
import  "./Tweets.scss"
import { useEffect } from "react";
import { fetchUsers } from "../../redux/operations";

const Tweets = () => {
  const users =useSelector(selectUsers);
  const dispatch = useDispatch();  

  useEffect(()=>{dispatch(fetchUsers())}, [dispatch]);
  
  return (
    <>
      <button> Back </button>
      <ul className="user-cards">
        {users.map(user=>(
          <UserCardItem key={user.id} user={user}
          //  tweets={tweets} followers={followers} avatarUrl={avatar}
          />
        ))}
        
      </ul>
    </>
  );
};

export default Tweets;
