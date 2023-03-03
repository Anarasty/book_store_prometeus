import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    // Здесь можно добавить логику для обработки входа пользователя
    console.log(`Пользователь ${username} вошел в систему!`);
  };

  return (
    <div className="login-container">
      <img
        src="https://www.graphicsprings.com/filestorage/stencils/68ea7d075a2064907de0c873ea1d81f3.png?width=500&height=500"
        alt="Технологии"
      />
      <form>
        <label>
          Login:
          <input type="text" value={username} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleLogin}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
