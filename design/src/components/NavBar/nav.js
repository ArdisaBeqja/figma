import * as React from "react";

const UserInfo = () => (
  <div className="user-info">
    <div className="user-details">
      John Doe
      <br />
      <span className="user-role">(Admin)</span>
    </div>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0fe7e17432a74844e8027cc92884e1f5b9fc01e5eda8e407668e8a3fe45680f?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" alt="User avatar" className="user-avatar" />
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/22c0068d368c720247dfe4d4f9d3663eccba809105f915da0aa5731acfb86cca?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" alt="Notification icon" className="notification-icon" />
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc94151cbcaf9ae33b3e1b30b47360afebf8f28adc32695cffe6cd484d27deb1?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" alt="Settings icon" className="settings-icon" />
  </div>
);

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-input">Search Client, User, Form etc.</div>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd3342d43389ef2ec1052c19526e1bff9bcfe3ab5de60cbaa266009f0029478c?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" alt="Search icon" className="search-icon" />
  </div>
);

const CreateUserButton = () => (
  <button className="create-user-button">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c54f48ecfe3ff42ed3c46b11a078d28f13c00a30643d301049bfe7250297a90e?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" alt="Add user icon" className="add-user-icon" />
    <span>CREATE USER</span>
  </button>
);

const Header = () => (
  <header className="header">
    <div className="header-content">
      <UserInfo />
      <div className="header-actions">
        <CreateUserButton />
        <SearchBar />
      </div>
    </div>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeaed9473538ea58f5098d73f14d28a33b7a1d0443cb4f53cc59df4c981aeac2?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" alt="Company logo" className="company-logo" />
  </header>
);

function Nav() {
  return (
    <>
      <Header />
      <style jsx>{`
        .header {
          background-color: #fff;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          padding: 12px 33px;
        }
        
        @media (max-width: 991px) {
          .header {
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        
        .header-content {
          display: flex;
          gap: 20px;
          margin: auto 0;
        }
        
        @media (max-width: 991px) {
          .header-content {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        
        .user-info {
          display: flex;
          gap: 14px;
          font-size: 12px;
          color: #4d7cfe;
          font-weight: 500;
          text-align: right;
          line-height: 20px;
        }
        
        .user-details {
          font-family: Rubik, sans-serif;
        }
        
        .user-role {
          color: rgba(77, 124, 254, 1);
        }
        
        .user-avatar {
          width: 32px;
          height: 32px;
          object-fit: cover;
          border-radius: 50%;
        }
        
        .notification-icon,
        .settings-icon {
          width: 24px;
          height: 24px;
          margin: auto 0;
        }
        
        .notification-icon {
          width: 18px;
          height: 18px;
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-grow: 1;
        }
        
        .create-user-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border-radius: 8px;
          background-color: #4d7cfe;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          line-height: 133%;
          border: none;
          cursor: pointer;
        }
        
        .add-user-icon {
          width: 16px;
          height: 16px;
        }
        
        .search-bar {
          display: flex;
          align-items: center;
          flex-grow: 1;
        }
        
        .search-input {
          color: #778ca2;
          font: 500 14px/129% Rubik, -apple-system, Roboto, Helvetica, sans-serif;
          flex-grow: 1;
        }
        
        .search-icon {
          width: 24px;
          height: 24px;
          margin: auto 0;
        }
        
        .company-logo {
          width: 204px;
          max-width: 100%;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}

export default Nav;