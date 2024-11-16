import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style['friend-item']}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={isOnline ? style['online'] : style['offline']}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
