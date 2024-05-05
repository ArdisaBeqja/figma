

import GroupComponent from "./GroupComponent";
import "../../style/Style_admin/Prove.css";
import Frame from "./Frame";

const Prove = () => {
  return (
    <div className="prove">
      <main className="line-parent">
        <img className="frame-child" loading="lazy" alt="" />
        <section className="frame-parent">
          {/* <GroupComponent /> */}
          <Frame/>
          <header className="bell-notification-icon">
            <div className="circle-shape" />
            <img
              className="iconoirbell-notification"
              loading="lazy"
              alt=""
              src="/iconoirbellnotification.svg"
            />
            <img
              className="bell-notification-icon-child"
              loading="lazy"
              alt=""
              src="/ellipse-6@2x.png"
            />
            
          </header>
          <body>
          
          </body>
        </section>
      </main>
    </div>
  );
};

export default Prove;
