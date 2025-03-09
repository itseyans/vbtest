import React from "react";

const ApprovalQueuePanel = () => {
  const users = [
    { id: "00001", name: "Shenron Golden", email: "", contact: "" },
    { id: "00069", name: "Pumba", email: "", contact: "" },
    { id: "00420", name: "Joseph, Libres", email: "", contact: "" },
    // Add more users here...
  ];

  const handleEditUser = (userId) => {
    // Implement your edit user logic here
    console.log(`Edit user ${userId}`);
  };

  const handleReject = (userId) => {
    // Implement your reject logic here
    console.log(`Reject user ${userId}`);
  };

  const handleAccept = (userId) => {
    // Implement your accept logic here
    console.log(`Accept user ${userId}`);
  };

  return (
    <div
      style={{
        width: "80%", // Adjust width as needed
        maxWidth: "800px", // Maximum width
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0", // Light grey background
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow
        margin: "20px auto", // Center the panel
      }}
    >
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        Approval Queue
      </h2>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            backgroundColor: "white",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontWeight: "bold" }}>{user.name}</p>
            <p>Email: {user.email}</p>
            <p>Contact No: {user.contact}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => handleEditUser(user.id)}
              style={{
                marginRight: "10px",
                padding: "8px 12px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: "gold",
              }}
            >
              Edit User
            </button>
            <button
              onClick={() => handleReject(user.id)}
              style={{
                marginRight: "10px",
                padding: "8px 12px",
                border: "none",
                backgroundColor: "red",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Reject
            </button>
            <button
              onClick={() => handleAccept(user.id)}
              style={{
                padding: "8px 12px",
                border: "none",
                backgroundColor: "green",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Accept
            </button>
          </div>
          <div style={{ marginLeft: "20px" }}>ID {user.id}</div>
        </div>
      ))}
    </div>
  );
};

export default ApprovalQueuePanel;
