import React from "react";
import { Home, PlusCircle, List, ShoppingBag, Users, Settings, ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ collapsed, toggleSidebar }) => {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="brand-name">
            {
              collapsed ? <img src="../../public/logo.svg" alt="logo" className="brand-logo" />
                : <div className="brand-logo">
                  <span className="brand-text-dark">Fresh</span>
                  <span className="brand-text-accent">Khana</span>
                </div>
            }
          </span>
          <button className="collapse-btn" onClick={toggleSidebar}>
            {collapsed ? <ChevronRight className="collapse-icon" size={20} /> : <ChevronLeft className="collapse-icon" size={20} />}
          </button>
        </div>
      </div>

      <div className="sidebar-content">
        <div className="sidebar-options">
          <NavLink to="/dashboard" className="sidebar-option">
            <Home className="home-icon" size={20} />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink to="/add-items" className="sidebar-option">
            <PlusCircle className="plus-icon" size={20} />
            {!collapsed && <span>Add Items</span>}
          </NavLink>

          <NavLink to="/items-list" className="sidebar-option">
            <List className="list-icon" size={20} />
            {!collapsed && <span>Items List</span>}
          </NavLink>

          <NavLink to="/orders" className="sidebar-option">
            <ShoppingBag className="bag-icon" size={20} />
            {!collapsed && <span>Orders</span>}
          </NavLink>

          <NavLink to="/customers" className="sidebar-option">
            <Users className="users-icon" size={20} />
            {!collapsed && <span>Customers</span>}
          </NavLink>
        </div>

        <div className="sidebar-footer">
          <NavLink to="/settings" className="sidebar-option">
            <Settings className="settings-icon" size={20} />
            {!collapsed && <span>Settings</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;