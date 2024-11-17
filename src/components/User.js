import { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Count : {count}</h2>
      <h2>Vikas</h2>
      <h2>Hyderabad</h2>
    </div>
  );
};

export default User;
