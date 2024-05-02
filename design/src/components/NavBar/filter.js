import * as React from "react";
function ActionItem({ icon, label }) {
  return (
    <div className="action-item">
      <img src={icon} alt="" className="action-icon" />
      <div className="action-label">{label}</div>
    </div>
  );
}
const actions = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/da7f3c8eef26cbcea37542b69290ea9b3965022e40e4953661a97072b1b5b4de?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "CREATE FORM" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1acfb0001dd42be8f6c1a7ae1d87b53b83772ebd58dd8a2be2595239b952a894?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "DOWNLOAD" },
];
function FilterItem({ icon, label, value }) {
  return (
    <div className="filter-item">
      <img src={icon} alt="" className="filter-icon" />
      <div className="filter-value">{value}</div>
      <div className="filter-label">{label}</div>
    </div>
  );
}
const filters = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e416045d14de1d6398e05c59587281fcdb5116ea86b7f009f1e9f10760437d9?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "Filter:", value: "aLL" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31e94694dcfb28626e96228530d3737945ef15f090dba8e831ed7e0f12ce0d0d?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&", label: "SORT:", value: "a-z" },
];
function filter() {
  return (
    <>
      <div className="dashboard">
        <div className="header">
          <div className="actions">
            <h2 className="section-title">Actions</h2>
            <div className="action-list">
              {actions.map((action) => (
                <ActionItem
                  key={action.label}
                  icon={action.icon}
                  label={action.label}
                />
              ))}
            </div>
          </div>
          <div className="last-edited">Last Edited</div>
        </div>
        <div className="table-header">
          <div className="place">Place</div>
          <div className="date-created">Date Created</div>
          <div className="table-controls">
            <div className="table-title">
              <h1 className="title">Dashboard</h1>
              <div className="filters">
                {filters.map((filter) => (
                  <FilterItem
                    key={filter.label}
                    icon={filter.icon}
                    label={filter.label}
                    value={filter.value}
                  />
                ))}
              </div>
            </div>
            <div className="table-columns">
              <div className="form-name">Form Name</div>
              <div className="user-name">User Name</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .dashboard {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .dashboard {
            gap: 40px;
          }
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 20px;
          margin-top: 51px;
        }
        @media (max-width: 991px) {
          .header {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .actions {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .section-title {
          color: #535353;
          margin: 35px 0 0 37px;
          font: 500 16px Rubik, sans-serif;
        }
        @media (max-width: 991px) {
          .section-title {
            margin-left: 10px;
          }
        }
        .action-list {
          display: flex;
          gap: 20px;
          font-size: 12px;
          color: #778ca2;
          font-weight: 700;
          line-height: 133%;
        }
        .action-item {
          display: flex;
          gap: 10px;
          flex: 1;
        }
        .action-label {
          font-family: Rubik, sans-serif;
          margin: auto 0;
        }
        .action-icon {
          width: 16px;
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
        }
        .last-edited {
          color: #535353;
          margin-top: 51px;
          font: 500 16px Rubik, sans-serif;
        }
        @media (max-width: 991px) {
          .last-edited {
            margin-top: 40px;
          }
        }
        .table-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .table-header {
            flex-wrap: wrap;
            max-width: 100%;
          }
        }
        .place {
          color: #535353;
          margin-top: 103px;
          font: 500 16px Rubik, sans-serif;
        }
        @media (max-width: 991px) {
          .place {
            margin-top: 40px;
          }
        }
        .date-created {
          color: #535353;
          margin-top: 103px;
          font: 500 16px Rubik, sans-serif;
        }
        @media (max-width: 991px) {
          .date-created {
            margin-top: 40px;
          }
        }
        .table-controls {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-self: stretch;
        }
        .table-title {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          width: 100%;
          padding-left: 76px;
        }
        @media (max-width: 991px) {
          .table-title {
            padding-left: 20px;
            white-space: initial;
          }
        }
        .title {
          color: #4d7cfe;
          text-align: center;
          align-self: flex-end;
          font: 600 18px/133% Rubik, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .filters {
          display: flex;
          gap: 20px;
          font-size: 12px;
          font-weight: 700;
          margin-top: 38px;
          align-self: flex-start;
        }
        @media (max-width: 991px) {
          .filters {
            white-space: initial;
          }
        }
        .filter-item {
          display: flex;
          gap: 8px;
          flex: 1;
          padding: 0 1px;
        }
        @media (max-width: 991px) {
          .filter-item {
            white-space: initial;
          }
        }
        .filter-value {
          color: #252631;
          font-family: Rubik, sans-serif;
          text-transform: uppercase;
          margin: auto 0;
        }
        .filter-label {
          color: #778ca2;
          font-family: Rubik, sans-serif;
          line-height: 133%;
          margin: auto 0;
        }
        .filter-icon {
          width: 16px;
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
        }
        .table-columns {
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: #535353;
          font-weight: 500;
          margin-top: 36px;
        }
        .form-name {
          font-family: Rubik, sans-serif;
        }
        .user-name {
          font-family: Rubik, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
      `}</style>
    </>
  );
}

export default filter;