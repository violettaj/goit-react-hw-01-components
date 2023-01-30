import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
<ul className={css['friend-list']}>
{friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
</ul>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.array
  };