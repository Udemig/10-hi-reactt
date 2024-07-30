import { useState } from "react";

const Button = () => {
  const [message, setMessage] = useState(null);

  const handleClick = () => {
    if (message) {
      setMessage(null);
    } else {
      setMessage("Herkese açık wifi'lara dikkat edin");
    }
  };

  return (
    <div style={{ margin: "40px" }}>
      <button style={{ background: "orange" }} onClick={handleClick}>
        {message ? "Gizle" : "Göster"}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Button;
