import GroupComponent from './provaGr';
import '../../style/global.css';
import '../../style/Style_manager/prova.css';
import Bell from '../../images/Vector.png';
import Profile from '../../images/Ellipse 6.png';

const AddManager = () => {
    return (
      <div className="add-manager">
        <main className="main-interface">
          <GroupComponent />
          <header className="notifications">
            <div className="notifications-child" />
            <img
              className="iconoirbell-notification"
              loading="lazy"
              alt=""
              src={Bell}
            />
            <img
              className="profile-picture-icon"
              loading="lazy"
              alt=""
              src={Profile}
            />
          </header>
        </main>
      </div>
    );
  };

export default AddManager;