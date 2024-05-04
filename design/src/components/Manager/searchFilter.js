import * as React from "react";
import '../../style/Style_manager/searchFilter.css';

function SearchFilter() {
  return (
    <>
      <div className="containerSearch">
        <div className="user-actions">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f48582295c9b847420576e1468c83b9ca37458f09b742f4e7a80aec4814dae6f?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&"
            className="menu-icon"
            alt="Menu icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/27e1e3ef8532e28e06366b47a7a3ca2d3108766f8913baaf82cefb8e0a42cfff?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&"
            className="user-avatar"
            alt="User avatar"
          />
        </div>
        <div className="search-filter">
          <div className="search-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b51db706e22f00a15b945198593eaaf4d2a2c1fda07733b96851bfa41528d193?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&"
              className="search-icon"
              alt="Search icon"
            />
            <div className="search-text">Search</div>
          </div>
          <div className="actions-container">
            <div className="filter-container">
              <div className="filter-text">Filter</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfbb02bd22d44b47c5ce9292686772b311364dd1529f3e5898b48d4a16727a81?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&"
                className="filter-icon"
                alt="Filter icon"
              />
            </div>
            <div className="download-container">
              <div className="download-text">Download</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/63fb9f9be170b1405f8e70dde31648d0e895cae8e2f64dd536c7725bc8ebee77?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&"
                className="download-icon"
                alt="Download icon"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  );
}

export default SearchFilter;