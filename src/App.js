import { useState } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import SkeletonLoader from './components/SkeletonLoader'; // Import skeleton component
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const fetchUserDetails = async (username) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
      setUser(null);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  const resetSearch = () => {
    setUser(null);  // Clear the user data
    setUsername(''); // Clear the input field
  };

  return (
    <div className="app-container">
      <h1 className="title">GitHub User Finder  <i className="fab fa-github"></i></h1>
      <UserForm onSearch={fetchUserDetails} />
      {loading ? <SkeletonLoader /> : <UserDetails user={user} />}
    </div>
    
  );
};

export default App;
