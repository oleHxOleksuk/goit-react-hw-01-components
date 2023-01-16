import './User.css'
import PropTypes from 'prop-types'

const User = ({username,tag,location,avatar,stats})=>{
    return (
        <div className={CSS.profile}>
        <div className={CSS.description}>
          <img src={avatar} alt={username} width="300" className={CSS.avatar} />
          <p className={CSS.name}>{username}</p>
          <p className={CSS.tag}>@{tag}</p>
          <p className={CSS.location}>{location}</p>
        </div>
  
        <ul className={CSS.stats}>
          <li>
            <span className={CSS.label}>Followers</span>
            <span className={CSS.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={CSS.label}>Views</span>
            <span className={CSS.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={CSS.label}>Likes</span>
            <span className={CSS.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    )
}

User.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  };

export default User;