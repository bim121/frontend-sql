import { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"
import Item from './Item';

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('http://localhost:5000/user');
      setUsers(data);
    };
    fetchUsers();
  }, );
  
  return (
    <>
      <h1>Форма додавання нового користувача</h1>
      <div className='form'>
        <label>username: </label>
        <input 
          name='username'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}>
        </input>

        <label>password: </label>
        <input 
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}>
        </input>

        <label>email: </label>
        <input 
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}>
        </input>

        <button onClick={async (e) => {
          const form = {
            username : username,
            email: email,
            password: password
          };
          console.log(form);
          await axios.post("http://localhost:5000/user/add", form); 
          }}>
          Додати нового користувача
        </button>
      </div>

      <div className='wrapper'>
        <div className='row'>
          <div className='cell'>
            id
          </div>
          <div className='cell'>
            username
          </div>
          <div className='cell'>
            password
          </div>
          <div className='cell'>
            email
          </div>
          <div className='cell'>
            actions
          </div>
        </div>
        {users.map(user =>
         <Item
          key={user.id}
          user={user}
        />
        )}
      </div>
    </>
  );
}

export default App;
