import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
<div class={css.profile}>
  <div class={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      class={css.avatar}
    />
    <p class={css.name}>{username}</p>
    <p class={css.tag}>{tag}</p>
    <p class={css.location}>{location}</p>
  </div>

  <ul class={css.stats}>
    <li>
      <span class={css.label}>Followers</span>
      <span class={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span class={css.label}>Views</span>
      <span class={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span class={css.label}>Likes</span>
      <span class={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.protoType = {
    stats: PropTypes.shape({
        label: PropTypes.string,
    quantity: PropTypes.number
    }),
    username: PropTypes.string,
    tag: PropTypes.string,
    avatar: PropTypes.object
    }