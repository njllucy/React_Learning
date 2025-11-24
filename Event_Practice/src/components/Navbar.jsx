import { useState } from "react";

function Navbar() {
  // State to track mode
  const [darkMode, setDarkMode] = useState(false);

  // Toggle function
  const toggleMode = () => setDarkMode(!darkMode);

  // Dynamic styles based on mode
  const navbarStyle = {
    backgroundColor: darkMode ? "#333" : "#f5f5f5",
    color: darkMode ? "#fff" : "#000",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    color: darkMode ? "#fff" : "#000",
    marginLeft: "15px",
    textDecoration: "none",
  };

  return (
    <div style={navbarStyle}>
      <div>
        <strong>MyApp</strong>
      </div>
      <div>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#contact" style={linkStyle}>Contact</a>
        <button
          onClick={toggleMode}
          style={{
            marginLeft: "15px",
            padding: "5px 10px",
            cursor: "pointer",
            backgroundColor: darkMode ? "#555" : "#ddd",
            color: darkMode ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;

