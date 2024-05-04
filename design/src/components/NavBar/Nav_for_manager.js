import * as React from "react";
import '../../style/nav_for_manager.css';

function MenuItem({ icon, label }) {
  return (
    <div className="menu-item">
      <img src={icon} alt="" className="menu-icon" />
      <div className="menu-label">{label}</div>
    </div>
  );
}

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/db1dd51124b3a8085cca006a6e5e80f4d381e6b5dc9ab388586f24983729e0bc?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Dashboard" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa2cea091384f12593a3c103ea1d933b1c89ab24b89960d513c5740ddb35d3bc?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Lab Test" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/809b1761bedebc7720f5c52949ac5b47e8d13d4104b42f1ca65976b229b2660c?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Add Coordinator" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2353dabc4a17a4e20c7c67d04cd63d40bdd2441403e228ce7854579ac79decba?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Bonus" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36875b3a6cdc8c6bbcfacc8999e5881007ab08a6525a4ce42a00daeed75d40ea?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Performance" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b168603d8058eef5f24cce362575b8ec5a78632935800f782432f82b8f6a5d0?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Payment" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/19940b9f9a25c1b24cd4248cd2345f1f18236232be82caa394b7ba6bd04afde2?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Settings" },
];

function UpdatedNav() {
  return (
    <>
      <div className="container">
        <nav className="menu">
          {menuItems.map((item, index) => (
            <MenuItem key={index} icon={item.icon} label={item.label} />
          ))}
        </nav>
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  );
}
export default UpdatedNav;