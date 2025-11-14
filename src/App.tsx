import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Feature/Auth/Components/Login";
import Register from "./Feature/Auth/Components/Register";
import RecoverPassword from "./Feature/Auth/Components/RecoverPassword";
import Dashboard from "./Feature/Dashboard/Components/Dashboard.Index";

function App() {
  const handleLogin = (email: string, password: string) => {
    console.log("Login:", email, password);
    return true;
  };

  const handleRegister = (name: string, email: string, password: string) => {
    console.log("Register:", name, email, password);
    return true;
  };

  const handleRecover = (email: string) => {
    console.log("Recover password for:", email);
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<Register onRegister={handleRegister} />} />
      <Route path="/recover" element={<RecoverPassword onRecover={handleRecover} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
