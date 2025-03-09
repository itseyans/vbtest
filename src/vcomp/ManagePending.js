import React from "react";

const UserVerificationPanel = () => {
  const users = [
    {
      id: 1,
      username: "Joseph Libres",
      mail: "fjglibres@vroomble.com",
      role: "taga nood sa orange site",
      checked: true,
    },
    {
      id: 2,
      username: "Ian Silva",
      mail: "hisilva@vroomble.com",
      role: "seller",
      checked: true,
    },
    {
      id: 3,
      username: "Kim Sobrepena",
      mail: "kmsobrepena@vroomble.com",
      role: "seller",
      checked: true,
    },
    {
      id: 4,
      username: "Shenron",
      mail: "AmoyKulob@vroomble.com",
      role: "Air Freshener",
      checked: true,
    },
  ];

  const handleApply = () => {
    // Implement your apply logic here
    console.log(
      "Apply button clicked. Processing users:",
      users.filter((user) => user.checked)
    );
  };

  return (
    <div
      style={{
        width: "600px", // Adjust width as needed
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0", // Light grey background
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow
        margin: "20px auto", // Center the panel
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Manage Pending User Verification</h2>
      <p>Pendings:</p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            ></th>
            <th
              style={{
                textAlign: "left",
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              Username
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              Mail
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td
                style={{
                  textAlign: "center",
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <input type="checkbox" checked={user.checked} readOnly />
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                {user.username}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                {user.mail}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                {user.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleApply}
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          float: "right",
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default UserVerificationPanel;
