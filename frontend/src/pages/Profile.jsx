import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="page-container">
        <h2>No User Found</h2>
      </div>
    );
  }

  return (
    <div className="auth-card">
      <h2 className="text-center mb-4">
        👤 My Profile
      </h2>

      <p>
        <strong>Username:</strong>{" "}
        {user.username}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {user.email}
      </p>
    </div>
  );
}

export default Profile;