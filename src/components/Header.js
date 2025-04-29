import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { FaBell, FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import CalendarPopup from "./CalendarPopup";

const Header = () => {
  const navigate = useNavigate();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="header">
        <h1 className="header-title">🌿 Yucca Plant Monitor</h1>
        <div className="header-icons">
          <FaBell
            className="header-icon"
            title="Notifications"
            onClick={() => setShowNotification(!showNotification)}
          />
          <FaCalendarAlt
            className="header-icon"
            title="Calendar"
            onClick={() => setCalendarOpen(true)}
          />
          <div className="user-menu-wrapper">
            <FaUserCircle
              className="header-icon user-icon"
              title="User Menu"
              onClick={() => setShowUserMenu(!showUserMenu)}
            />
            {showUserMenu && (
              <div className="user-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Calendar Popup */}
      <CalendarPopup
        isOpen={calendarOpen}
        onClose={() => setCalendarOpen(false)}
      />

      {/* Notification Popup Placeholder */}
      {showNotification && (
        <div className="notification-popup">
          <p>🔔 You have no new notifications</p>
        </div>
      )}
    </>
  );
};

export default Header;
