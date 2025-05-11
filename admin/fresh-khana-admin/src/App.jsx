import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddItems from "./pages/AddItems";
import ItemsList from "./pages/ItemsList";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import "./styles/sidebar.css";
import "./styles/AddItems.css"; // Import the new CSS file

const App = () => {

  const url = "http://localhost:4000";
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        <main className={`main-content ${collapsed ? "sidebar-collapsed" : ""}`}>
          <Routes>
            <Route path="/" element={<Dashboard url={url} />} />
            <Route path="/dashboard" element={<Dashboard url={url} />} />
            <Route path="/add-items" element={<AddItems url={url} />} />
            <Route path="/items-list" element={<ItemsList url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
            <Route path="/customers" element={<Customers url={url} />} />
            <Route path="/settings" element={<Settings url={url} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;