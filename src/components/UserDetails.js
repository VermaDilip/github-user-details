// import React from 'react';
// import './UserDetails.css';


// const UserDetails = ({ user }) => {
//     // if (!user) return <p>No user found.</p>;
//     if (!user) {
//         // Replace the "No user found" message with a GIF
//         return (
//           <div className="no-user-container">
//             <img
//               src="https://cdn.pixabay.com/animation/2022/07/29/14/46/14-46-54-82_512.gif"
//               alt="No user found"
//               className="noo-user-gif"
//             />
//             {/* <p>Oops! No user found. Try again.</p> */}
//           </div>
//         );
//       }
//       if (!user.name) {
//         // Replace the "No user found" message with a GIF
//         return (
//           <div className="no-user-container">
//             <img
//               src="https://images.lemonly.com/wp-content/uploads/2018/08/07150313/Homebase_Thumb_v01.gif"
//               alt="No user found"
//               className="no-user-gif"
//             />
//             <p style={{color:'red'}}>Oops! No user found. Try again.</p>
//           </div>
//         );
//       }
  
//     return (
//       <div className="user-card">
//         <img src={user.avatar_url} alt={user.login} />
//         <h2>{user.name || 'No Name Available'}</h2>
//         <p>Username: {user.login}</p>
//         <p>Bio: {user.bio || 'No bio available'}</p>
//         <p>Location: {user.location || 'Not specified'}</p>
//         <p>Public Repos: {user.public_repos}</p>
//         <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
//         <i className="fab fa-github"></i> View GitHub Profile
//         </a>
//       </div>
//     );
//   };
  
//   export default UserDetails;

//Advance Version after login need to make it
  

// import React from 'react';
// import './UserDetails.css';

// const UserDetails = ({ user }) => {
//   if (!user) {
//     // Display a GIF if no user is found
//     return (
//       <div className="no-user-container">
//         <img
//           src="https://cdn.pixabay.com/animation/2022/07/29/14/46/14-46-54-82_512.gif"
//           alt="No user found"
//           className="no-user-gif"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="user-banner-card">
//       <div className="avatar-container">
//         <img src={user.avatar_url} alt={user.login} className="avatar" />
//       </div>
//       <div className="banner-content">
//         <h2>{user.name || 'No Name Available'}</h2>
//         <p><strong>Username:</strong> {user.login}</p>
//         <p><strong>Bio:</strong> {user.bio || 'No bio available'}</p>
//         <p><strong>Location:</strong> {user.location || 'Not specified'}</p>
//         <p><strong>Company:</strong> {user.company || 'Not specified'}</p>
//         <p><strong>Public Repos:</strong> {user.public_repos}</p>
//         <p><strong>Followers:</strong> {user.followers} | <strong>Following:</strong> {user.following}</p>
//         <p><strong>Member Since:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
//         <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
//           <i className="fab fa-github"></i> View GitHub Profile
//         </a>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;




//-=--=-=- Pro Advance Version-=-=-=//

import React, { useEffect, useState } from 'react';
import './UserDetails.css';
import axios from 'axios';

const UserDetails = ({ user }) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch followers and following data
      axios.get(user.followers_url).then((res) => setFollowers(res.data));
      axios
        .get(user.following_url.replace('{/other_user}', ''))
        .then((res) => setFollowing(res.data));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="no-user-container">
        <img
          src="https://cdn.pixabay.com/animation/2022/07/29/14/46/14-46-54-82_512.gif"
          alt="No user found"
          className="no-user-gif"
        />
      </div>
    );
  }

  return (
    <><div className="user-banner-card">
          <div className="avatar-container">
              <img src={user.avatar_url} alt={user.login} className="avatar" />
          </div>
          <div className="banner-content">
              <h2>{user.name || 'No Name Available'}</h2>
              <p><strong>Username:</strong> {user.login}</p>
              <p><strong>Bio:</strong> {user.bio || 'No bio available'}</p>
              <p><strong>Location:</strong> {user.location || 'Not specified'}</p>
              <p><strong>Company:</strong> {user.company || 'Not specified'}</p>
              <p><strong>Public Repos:</strong> {user.public_repos}</p>
              <p><strong>Followers:</strong> {user.followers} | <strong>Following:</strong> {user.following}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
                  <i className="fab fa-github"></i> View GitHub Profile
              </a>
          </div>
      </div><div className="section-container">
              <h3>Followers</h3>
              <div className="grid-container">
                  {followers.map((follower) => (
                      <div className="user-card-small" key={follower.id}>
                          <img src={follower.avatar_url} alt={follower.login} className="small-avatar" />
                          <p>{follower.login}</p>
                          <a href={follower.html_url} target="_blank" rel="noopener noreferrer" className="small-profile-link">
                              <i className="fab fa-github"></i> Profile
                          </a>
                      </div>
                  ))}
              </div>
          </div><div className="section-container">
              <h3>Following</h3>
              <div className="grid-container">
                  {following.map((followedUser) => (
                      <div className="user-card-small" key={followedUser.id}>
                          <img src={followedUser.avatar_url} alt={followedUser.login} className="small-avatar" />
                          <p>{followedUser.login}</p>
                          <a href={followedUser.html_url} target="_blank" rel="noopener noreferrer" className="small-profile-link">
                              <i className="fab fa-github"></i> Profile
                          </a>
                      </div>
                  ))}
              </div>
          </div></>
  
  );
};

export default UserDetails;

