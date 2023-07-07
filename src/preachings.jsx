import React, { useState, useEffect } from 'react';

const Preachings = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const date = new Date();
    let timeOfDay;
    if (date.getHours() < 12) {
      timeOfDay = 'morning';
    } else if (date.getHours() >= 12 && date.getHours() < 17) {
      timeOfDay = 'afternoon';
    } else {
      timeOfDay = 'evening';
    }
    setTimeOfDay(timeOfDay);
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('login.php', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setLoggedIn(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('register.php', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Registration successful!');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>
            Good {timeOfDay} {username}
          </h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Preachings;
