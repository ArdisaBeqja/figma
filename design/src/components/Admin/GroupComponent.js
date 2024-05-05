import "../../style/Style_admin/GroupComponent.css";
import "../../style/Style_admin/global.css";

const GroupComponent = () => {
  return (
    <div className="rectangle-parent">
      <div className="frame-item" />
      <button className="vector-parent">
        <img className="frame-inner" alt="" src="/rectangle-4.svg" />
        <div className="all-managers">All Managers</div>
        <img
          className="icon-profile-2user"
          alt=""
          src="/-icon-profile-2user.svg"
        />
      </button>
      <div className="add-manager-button">
        <div className="add-manager-button-child" />
        <h1 className="kosherja">Kosherja</h1>
      </div>
      <div className="rooms-furniture-settings">
        <div className="rooms-furniture-settings-child" />
        <div className="rooms">Rooms</div>
        <img
          className="furniturebed-icon"
          loading="lazy"
          alt=""
          src="/furniturebed.svg"
        />
        <div className="add-manager">Add Manager</div>
        <div className="buildings">Buildings</div>
        <div className="settings">Settings</div>
        <img
          className="logout-icon-1"
          loading="lazy"
          alt=""
          src="/logouticon-1.svg"
        />
        <div className="logout">Logout</div>
        <img
          className="banking-financechartbars"
          loading="lazy"
          alt=""
          src="/banking--financechartbars.svg"
        />
        <div className="survey">Survey</div>
        <img
          className="buildings-landmarksbuilding"
          loading="lazy"
          alt=""
          src="/buildings--landmarksbuilding3.svg"
        />
        <img
          className="softwareadd-layer-icon"
          loading="lazy"
          alt=""
          src="/softwareadd-layer.svg"
        />
        <img
          className="essentialsgear-icon"
          loading="lazy"
          alt=""
          src="/essentialsgear.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
