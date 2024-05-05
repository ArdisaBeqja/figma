import * as React from "react";
 import '../../style/Style_manager/navBar.css';
function IconImage({ src, alt }) {
  return <img src={src} alt={alt} className="icon-image" />;
}

function MenuItem({ icon, label }) {
  return (
    <div className="menu-item">
      <IconImage src={icon} alt={`${label} icon`} />
      <div className="menu-label">{label}</div>
    </div>
  );
}

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/842c972f9d2d86defb3c59763c8c9243c9b63b4556404e8ddd597cf738bef6ad?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Add Manager" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6f9b915e8865ea00b742e67b1c6c91799a7685c32c592f3ac1dbf641d6039b4?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Performance" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27ee2d674f250f1b0ce1fa95c0d14df9edf162c56964b2b77568a512a866fb1c?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Survey" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e554708e55f8dc42bef6a7e1418e261cb39176d012bde7702a7081437917cae?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Settings" },
];

function Nav_manager() {
  return (
  
      
      
      <div className="container_nav_manager">
        <header className="header">Kosherja</header>
        
        <section className="managers-section">
          <div className="managers-button">
            <IconImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c5ef321dde204f987138062f8c1924d86dd11556ade7b269c708e6b5b74592d?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" alt="All Managers icon" />
            <div className="managers-label">All Managers</div>
          </div>
        </section>
        
        <nav className="menu-section">
          {menuItems.map(({ icon, label }) => (
            <MenuItem key={label} icon={icon} label={label} />
          ))}
        </nav>
        
        <div className="logout-section">
        </div>
      </div>
  );
}
export default Nav_manager;