import '../../style/Style_manager/provaGr.css';
import '../../style/global.css';
import p1 from '../../images/a1.png';
import p2 from '../../images/layer.png';
import p3 from '../../images/3.png';
import p4 from '../../images/bed.png';
import p5 from '../../images/bars.png';
import p6 from '../../images/Icon.png';
import p7 from '../../images/Group.png';
import { useNavigate } from 'react-router-dom';

const GroupComponent = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    // Perform any logout actions if needed

    // Navigate to the authentication page
    navigate('/');
  };
    return (
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="manager-info">
          <img className="manager-info-child" alt="" src="/rectangle-4.svg" />
          <div className="all-managers">All Students</div>
          <img
            className="icon-profile-2user"
            alt=""
            src={p1}
          />
        </div>
        <div className="manager-name">
          <div className="manager-name-child" />
          <h1 className="kosherja">Kosherja</h1>
        </div>
        <div className="navigation">
          <div className="navigation-background" />
          <div className="rooms">Rooms</div>
          <img
            className="furniturebed-icon"
            loading="lazy"
            alt=""
        src={p4}
          />
          <div className="add-manager1">Add Manager</div>
          <div className="buildings">Buildings</div>
          <div className="settings">Settings</div>
          <img
            className="logout-icon-1"
            loading="lazy"
            alt=""
            src={p7}
          />
          <div className="logout" ><button onClick={handleLogout} id="logOutbtn">Logout</button></div>

          <img
            className="banking-financechartbars"
            loading="lazy"
            alt=""
            src={p5}
          />
          <div className="survey">Survey</div>
          <img
            className="buildings-landmarksbuilding"
            loading="lazy"
            alt=""
            src={p3}
          />
          <img
            className="softwareadd-layer-icon"
            loading="lazy"
            alt=""
            src={p2}
          />
          <img
            className="essentialsgear-icon"
            loading="lazy"
            alt=""
            src={p6}
          />
        </div>
      </div>
    );
  };
  
  export default GroupComponent;
  