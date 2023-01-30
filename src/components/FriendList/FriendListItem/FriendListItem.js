import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
            return (
                <li class={css.item} >
                <span className={isOnline ? css.active : css.status}></span>
                <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p class={css.name}>{name}</p>
              </li>
      )
 
    
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };