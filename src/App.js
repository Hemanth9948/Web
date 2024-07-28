// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext'; // Adjust the path as needed
import Login from './components/auth/login'; // Adjust the path as needed
import Home from './components/home';
import Userpage from './components/Userpage';
import SignUp from './components/auth/register'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Define other routes here */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
