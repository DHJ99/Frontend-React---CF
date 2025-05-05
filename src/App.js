import {useNavigate } from 'react-router-dom'
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Customer Form</h1>
        <button className="add-userbtn" onClick={() => navigate('/users')}>Add User</button>
      </header>
    </div>
  );
}

export default App;
