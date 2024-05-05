import TableCell from "./TableCell";
import Column from "./Column";
import "../../style/Style_admin/Frame.css";
import "../../style/Style_admin/global.css";


const Frame = () => {
  return (
    <div className="frame-root">
      <section className="rectangle-parent">
        <div className="frame-item" />
        <form className="table-content-template">
          <div className="column">
            <div className="header-cell">
              <div className="checkbox">
                <div className="box" />
              </div>
              <div className="header-title">Owner</div>
            </div>
            <TableCell
              avatar="/avatar@2x.png"
              cellContent="Balaji Nant"
              subContent="Lead Product Designer"
            />
            <TableCell
              avatar="/avatar-1@2x.png"
              cellContent="Nithya Menon"
              subContent="UI Designer"
            />
            <TableCell
              avatar="/avatar-2@2x.png"
              cellContent="Meera Gonzalez"
              subContent="Product Designer"
            />
            <TableCell
              avatar="/avatar-3@2x.png"
              cellContent="Karthik Subramanian"
              subContent="Sub Content"
            />
            <TableCell
              avatar="/avatar-4@2x.png"
              cellContent="Mithra B"
              subContent="Product Designer"
            />
            <TableCell
              avatar="/avatar-5@2x.png"
              cellContent="Jagathesh Narayanan"
              subContent="UX Designer"
            />
            <TableCell
              avatar="/avatar-6@2x.png"
              cellContent="Steve Rogers"
              subContent="Developer"
            />
            <TableCell
              avatar="/avatar-7@2x.png"
              cellContent="Richard Hendricks"
              subContent="Sr. Developer"
            />
          </div>
          <Column
            headerTitle="Email Address"
            link="balajinant.com"
            link1="project.com/"
            link2="project.com/"
            link3="project.com/user849"
            link4="project.com/user849"
            link5="project.com/user849"
            link6="project.com/user849"
            link7="project.com/user849"
          />
          <Column
            headerTitle="Phone Number"
            link="balajinant.com"
            link1="project.com/"
            link2="project.com/user849"
            link3="project.com/user849"
            link4="project.com/user849"
            link5="project.com/user849"
            link6="project.com/user849"
            link7="project.com/user849"
            propWidth="185px"
            propColor="#101018"
          />
          <div className="column1">
            <button className="header-cell1">
              <div className="checkbox1">
                <div className="box1" />
              </div>
              <div className="header-title1">Building</div>
            </button>
            <div className="table-cell">
              <div className="link">A</div>
            </div>
            <div className="table-cell1">
              <div className="link1">B</div>
            </div>
            <div className="table-cell2">
              <div className="link2">C</div>
            </div>
            <div className="table-cell3">
              <div className="link3">A</div>
            </div>
            <div className="table-cell4">
              <div className="link4">B</div>
            </div>
            <div className="table-cell5">
              <div className="link5">B</div>
            </div>
            <div className="table-cell6">
              <div className="link6">A</div>
            </div>
            <div className="table-cell7">
              <div className="link7">C</div>
            </div>
            <div className="table-cell8">
              <div className="link8">project.com/user849</div>
            </div>
            <div className="table-cell9">
              <div className="link9">project.com/user849</div>
            </div>
          </div>
          <Column
            headerTitle="No. Of Students"
            link="20"
            link1="30"
            link2="25"
            link3="45"
            link4="52"
            link5="27"
            link6="44"
            link7="55"
            propWidth="128px"
            propColor="#101018"
          />
          <div className="column2">
            <div className="header-cell2">
              <div className="checkbox2">
                <div className="box2" />
              </div>
              <div className="header-title2">Actions</div>
            </div>
            <img
              className="cell-action-button"
              loading="lazy"
              alt=""
              src="/cell-action-button@2x.png"
            />
            <img
              className="cell-action-button1"
              loading="lazy"
              alt=""
              src="/cell-action-button-1@2x.png"
            />
            <img
              className="info-icon"
              loading="lazy"
              alt=""
              src="/24info.svg"
            />
            <img
              className="cell-action-button2"
              loading="lazy"
              alt=""
              src="/cell-action-button@2x.png"
            />
            <img
              className="cell-action-button3"
              loading="lazy"
              alt=""
              src="/cell-action-button-1@2x.png"
            />
            <img className="info-icon1" alt="" src="/24info.svg" />
            <img
              className="cell-action-button4"
              loading="lazy"
              alt=""
              src="/cell-action-button@2x.png"
            />
            <img
              className="cell-action-button5"
              loading="lazy"
              alt=""
              src="/cell-action-button-1@2x.png"
            />
            <img className="info-icon2" alt="" src="/24info.svg" />
            <img
              className="cell-action-button6"
              loading="lazy"
              alt=""
              src="/cell-action-button@2x.png"
            />
            <img
              className="cell-action-button7"
              loading="lazy"
              alt=""
              src="/cell-action-button-1@2x.png"
            />
            <img
              className="cell-action-button8"
              loading="lazy"
              alt=""
              src="/cell-action-button-8.svg"
            />
            <img
              className="cell-action-button9"
              loading="lazy"
              alt=""
              src="/cell-action-button@2x.png"
            />
            <img
              className="cell-action-button10"
              loading="lazy"
              alt=""
              src="/cell-action-button-1@2x.png"
            />
            <img
              className="cell-action-button11"
              loading="lazy"
              alt=""
              src="/cell-action-button-8.svg"
            />
            <img
              className="cell-action-button12"
              loading="lazy"
              alt=""
              src="/cell-action-button@2x.png"
            />
            <img
              className="cell-action-button13"
              loading="lazy"
              alt=""
              src="/cell-action-button-1@2x.png"
            />
            <img className="info-icon3" alt="" src="/24info.svg" />
            <img
              className="cell-action-button14"
              loading="lazy"
              alt=""
              src="/cell-action-button@2x.png"
            />
            <img
              className="cell-action-button15"
              loading="lazy"
              alt=""
              src="/cell-action-button-1@2x.png"
            />
            <img className="info-icon4" alt="" src="/24info.svg" />
            <img
              className="cell-action-button16"
              loading="lazy"
              alt=""
              src="/cell-action-button@2x.png"
            />
            <img
              className="cell-action-button17"
              loading="lazy"
              alt=""
              src="/cell-action-button-1@2x.png"
            />
            <img
              className="info-icon5"
              loading="lazy"
              alt=""
              src="/24info.svg"
            />
            <div className="table-cell10">
              <img
                className="cell-action-button18"
                alt=""
                src="/cell-action-button@2x.png"
              />
              <img
                className="cell-action-button19"
                alt=""
                src="/cell-action-button-1@2x.png"
              />
              <img
                className="cell-action-button20"
                alt=""
                src="/cell-action-button-20@2x.png"
              />
            </div>
            <div className="table-cell11">
              <img
                className="cell-action-button21"
                alt=""
                src="/cell-action-button@2x.png"
              />
              <img
                className="cell-action-button22"
                alt=""
                src="/cell-action-button-1@2x.png"
              />
              <img
                className="cell-action-button23"
                alt=""
                src="/cell-action-button-20@2x.png"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Frame;
