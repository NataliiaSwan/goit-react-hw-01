import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendListItem
            key={id}
            id={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
};
export default FriendList;
