import { useSelector } from "react-redux";
import UserCardItem from "../userCardItem/userCardItem";
import { selectUsers } from "../../redux/usersSelector";

const UserCardList = () => {
  const users =useSelector(selectUsers);
  
  return (
    <>
      <ul>
        {users.map(user=>(
          <UserCardItem key={user.id} user={user}
          //  tweets={tweets} followers={followers} avatarUrl={avatar}
          />
        ))}
        
      </ul>
    </>
  );
};

export default UserCardList;
