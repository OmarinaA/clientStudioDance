import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // получение данных пользователя из API
    // и установка значений в state
    const fetchUserData = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    // отправка отредактированных данных на сервер
    // и обновление значений в state
    const response = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUserData(data);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={userData.profilePicture} alt="Profile" />
      <div>
        <div>Name: {userData.name}</div>
        <div>Email: {userData.email}</div>
        <div>Phone: {userData.phone}</div>
      </div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
          />
          <input
            type="text"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleEdit}>Edit Profile</button>
      )}
    </div>
  );
};

export default Profile;
