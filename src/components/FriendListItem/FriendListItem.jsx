import css from "./FriendListItem.module.css";

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <div className={css.item} key={id}>
      <li>
        <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        {/* <p className={isOnline ? 'online' : 'offline'}>{isOnline ? 'Online' : 'Offline'}</p> */}
        <p className={isOnline ? css.onlineStatus : css.offlineStatus}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </li>
    </div>
  );
};
export default FriendListItem;
