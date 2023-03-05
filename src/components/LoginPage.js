import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

// function LoginPage() {
//   const [username, setUsername] = useState("");

//   const handleInputChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleLogin = () => {
//     // Здесь можно добавить логику для обработки входа пользователя
//     console.log(`Пользователь ${username} вошел в систему!`);
//   };

//   return (
//     <div className="login-container">
//       <img
//         src="https://www.graphicsprings.com/filestorage/stencils/68ea7d075a2064907de0c873ea1d81f3.png?width=500&height=500"
//         alt="Технологии"
//       />
//       <form>
//         <label>
//           Login:
//           <input type="text" value={username} onChange={handleInputChange} />
//         </label>
//         <button type="button" onClick={handleLogin}>
//           Войти
//         </button>
//       </form>
//     </div>
//   );
// }
function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  function handleLogin() {
    if (username.length >= 4 && username.length <= 16) {
      localStorage.setItem("user", username);
      setUsernameError(false);
      onLogin();
      navigate("/booklist");
    } else {
      setUsernameError(true);
    }
  }

  return (
    <div>
      <img src="logo.png" alt="Logo" />
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && (
          <span style={{ color: "red" }}>
            Username must be between 4 and 16 characters.
          </span>
        )}
      </label>
      <button
        disabled={username.length < 4 || username.length > 16}
        onClick={handleLogin}
      >
        Log in
      </button>
    </div>
  );
}

export default LoginPage;
