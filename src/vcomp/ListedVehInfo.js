import React from 'react';

const VehiclePanel = () => {
  return (
    <div style={{
      width: '400px', // Adjust width as needed
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0', // Light grey background
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Optional shadow
    }}>
      {/* Vehicle Title */}
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '20px', 
        fontSize: '24px', 
        fontWeight: 'bold' 
      }}>
        Skyline GT-R V-SPEC
      </h2>

      {/* Vehicle Image */}
      <div style={{ 
        marginBottom: '20px', 
        textAlign: 'center' 
      }}>
        <img 
          src="URL_TO_YOUR_VEHICLE_IMAGE" // Replace with your image URL
          alt="Skyline GT-R V-SPEC" 
          style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            borderRadius: '8px' 
          }} 
        />
      </div>

      {/* Vehicle Details Section 1 */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '20px', 
        backgroundColor: 'white', // White background for the details box
        padding: '15px',
        borderRadius: '8px'
      }}>
        <div>
          <p>NISSAN Japan</p>
          <p>2002 Production Car</p>
          <p>2.6L Twin-Turbocharged 16</p>
          <p>327 bhp (244kw)</p>
        </div>
        <div style={{ borderLeft: '1px solid #ddd', paddingLeft: '20px' }}>
          <p>Front-Engine</p>
          <p>All-Wheel Drive</p>
          <p>1550 KG</p>
          <p>6 Speed Trans</p>
        </div>
      </div>

      {/* Owner Details Section */}
      <div style={{ 
        backgroundColor: 'white', // White background for the details box
        padding: '15px',
        borderRadius: '8px'
      }}>
        <p>Juan Miguel Molina</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p>General Meetup Location:</p>
            <p>Metro Manila, Makati</p>
          </div>
          <div style={{ borderLeft: '1px solid #ddd', paddingLeft: '20px' }}>
            <p>+0915 555 5555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclePanel;