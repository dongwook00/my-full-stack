import React, { useEffect } from "react";
import axios from "axios";

export default function LandingPage(props) {
  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  }, []);

  const handleLogout = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("Failed to logout");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Landing Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
