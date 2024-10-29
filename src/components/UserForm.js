import { useState } from 'react';

const UserForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default UserForm;
