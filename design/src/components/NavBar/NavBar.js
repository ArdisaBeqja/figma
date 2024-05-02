import * as React from "react";

function Avatar({ src, alt }) {
  return <img className="avatar" src={src} alt={alt} />;
}

function Button({ icon, label }) {
  return (
    <button className="button">
      {icon && <img className="button-icon" src={icon} alt="" />}
      <span className="button-label">{label}</span>
    </button>
  );
}

function Header() {
  const avatars = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0fe7e17432a74844e8027cc92884e1f5b9fc01e5eda8e407668e8a3fe45680f?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", alt: "User avatar" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f82a24be5c1963e1da6ad8a6f809a3e0acde7707293d4974120f24dd2e452c6?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", alt: "Notification icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c48311527c7e20d516c83d5d9bb719bb1f083b4585cb12eb18080e970da7c53?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", alt: "Settings icon" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="user-info">
            <div className="user-details">
              John Doe
              <br />
              <span className="user-role">(Admin)</span>
            </div>
            {avatars.map((avatar, index) => (
              <Avatar key={index} {...avatar} />
            ))}
          </div>
          <div className="header-actions">
            <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/85847adbf4ff6043ca65936dd70dfeac341cc9a9e9919c2fd60ed7c6d58067d0?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" label="CREATE USER" />
            <div className="search-input">Search Client, User, Form etc.</div>
            <img className="search-icon" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c482fdca9819a62f0b119dbaa73b36cad700fb7ca88d0585a81883124519800?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" alt="Search icon" />
          </div>
        </div>
        <img className="logo" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeaed9473538ea58f5098d73f14d28a33b7a1d0443cb4f53cc59df4c981aeac2?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" alt="Company logo" />
      </header>
      <div className="header-divider" />
    </>
  );
}

function Nav() {
  return (
    <>
      <div className="container">
        <Header />
      </div>

      <style jsx>{`
        .container {
          background-color: #fff;
          display: flex;
          width: 100%;
          padding-top: 12px;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .container {
            max-width: 100%;
          }
        }

        .header {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1374px;
          gap: 20px;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            flex-wrap: wrap;
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
          padding: 0 20px;
        }

        .user-details {
          font-family: Rubik, sans-serif;
        }

        .avatar {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 32px;
          border-radius: 50%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-grow: 1;
          padding: 0 20px;
        }

        .button {
          justify-content: center;
          border-radius: 8px;
          background-color: #4d7cfe;
          display: flex;
          gap: 8px;
          font-size: 12px;
          color: #fff;
          font-weight: 700;
          line-height: 133%;
          padding: 8px;
          border: none;
          cursor: pointer;
        }

        .button-icon {
          aspect-ratio: 1;
          object-fit: contain;
          width: 16px;
        }

        .button-label {
          font-family: Rubik, sans-serif;
          margin: auto 0;
        }

        .search-input {
          color: #778ca2;
          flex-grow: 1;
          margin: auto 0;
          font: 500 14px/129% Rubik, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .search-icon {
          aspect-ratio: 1;
          object-fit: contain;
          width: 24px;
          margin: auto 0;
        }

        .logo {
          aspect-ratio: 4.17;
          object-fit: contain;
          width: 204px;
          max-width: 100%;
        }

        .header-divider {
          background: linear-gradient(
            180deg,
            rgba(9, 30, 66, 0.13) 0%,
            rgba(9, 30, 66, 0.13) 25%,
            rgba(9, 30, 66, 0.08) 25.01%,
            rgba(9, 30, 66, 0) 100%
          );
          min-height: 4px;
          margin-top: 11px;
          width: 100%;
        }

        @media (max-width: 991px) {
          .header-divider {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Nav;