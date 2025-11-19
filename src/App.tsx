import { Routes, Route, Navigate } from "react-router-dom";

// Auth
import Login from "./Feature/Auth/Components/Login";
import Register from "./Feature/Auth/Components/Register";
import RecoverPassword from "./Feature/Auth/Components/RecoverPassword";

// Dashboard Layout
import MainLayout from "./Shared/Components/ui/MainLayout";

// Dashboard Pages
import Dashboard from "./Feature/Dashboard/Components/Dashboard.Index";
// import Products from "./Feature/Products/Products.Index";
// import Clients from "./Feature/Clients/Clients.Index";
// import Orders from "./Feature/Orders/Orders.Index";
// import Providers from "./Feature/Providers/Providers.Index";
// import Sales from "./Feature/Sales/Sales.Index";
// import Users from "./Feature/Users/Users.Index";
// import Roles from "./Feature/Roles/Roles.Index";
// import Returns from "./Feature/Returns/Returns.Index";
// import Categories from "./Feature/Categories/Categories.Index";
// import Shoppings from "./Feature/Shoppings/Shoppings.Index";

function App() {
  return (
    <Routes>
      {/* RUTAS PUBLICAS */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover" element={<RecoverPassword />} />

      {/* RUTAS PRIVADAS CON LAYOUT */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shoppings" element={<Shoppings />} /> */}
      </Route>

      {/* CUALQUIER OTRA RUTA */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
