import TableCell from "./TableCell";
import Column from "./Column";
import styles from "../../style/Style_admin/AllManagers.css";
import ManagersList from "./fetch_managers.js";


const AllManagersMain = () => {
  return (
    <form className={styles.allManagersMain}>
      <div className={styles.div}>
        <span className={styles.txt}>
          <span className={styles.span}>{`1     ...     11     `}</span>
          <span className={styles.span1}>12</span>
          <span
            className={styles.span2}
          >{`     13     14     15     16     17     18     19     20     `}</span>
        </span>
      </div>
      <div className={styles.prev}>{`Prev `}</div>
      <div className={styles.next}>{`Next `}</div>
      <main className={styles.frameParent}>
      <ManagersList />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <button className={styles.vectorParent}>
            <img className={styles.frameItem} alt="" src="/rectangle-4.svg" />
            <div className={styles.allManagers}>All Managers</div>
            <img
              className={styles.iconProfile2user}
              alt=""
              src="/-icon-profile-2user.svg"
            />
          </button>
          <div className={styles.kosherjaLabelTech}>
            <div className={styles.kosherjaLabelTechChild} />
            <h1 className={styles.kosherja}>Kosherja</h1>
          </div>
          <div className={styles.logoutButtonTech}>
            <div className={styles.logoutButtonTechChild} />
            <div className={styles.rooms}>Rooms</div>
            <img
              className={styles.furniturebedIcon}
              alt=""
              src="/furniturebed.svg"
            />
            <div className={styles.addManager}>Add Manager</div>
            <div className={styles.buildings}>Buildings</div>
            <div className={styles.settings}>Settings</div>
            <img
              className={styles.logoutIcon1}
              loading="lazy"
              alt=""
              src="/logouticon-1.svg"
            />
            <div className={styles.logout}>Logout</div>
            <img
              className={styles.bankingFinancechartbars}
              alt=""
              src="/banking--financechartbars.svg"
            />
            <div className={styles.survey}>Survey</div>
            <img
              className={styles.buildingsLandmarksbuilding}
              alt=""
              src="/buildings--landmarksbuilding3.svg"
            />
            <img
              className={styles.softwareaddLayerIcon}
              alt=""
              src="/softwareadd-layer.svg"
            />
            <img
              className={styles.essentialsgearIcon}
              alt=""
              src="/essentialsgear.svg"
            />
          </div>
        </div>
        <header className={styles.tableTemplateTech}>
          <div className={styles.tableTemplateTechChild} />
          <img
            className={styles.iconoirbellNotification}
            loading="lazy"
            alt=""
            src="/iconoirbellnotification.svg"
          />
          <img
            className={styles.subContentsTech}
            loading="lazy"
            alt=""
            src="/ellipse-6@2x.png"
          />
        </header>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/group-56.svg"
        />
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-170@2x.png"
        />
        <img
          className={styles.searchIconTech}
          loading="lazy"
          alt=""
          src="/vector-24.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-23.svg"
        />
      </main>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.filterInstanceTech}>
          <img
            className={styles.filterInstanceTechChild}
            alt=""
            src="/line-10.svg"
          />
          <div className={styles.tableContentTemplate}>
            <div className={styles.column}>
              <div className={styles.headerCell}>
                <div className={styles.checkbox}>
                  <div className={styles.box} />
                </div>
                <div className={styles.headerTitle}>Owner</div>
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
            <div className={styles.column1}>
              <button className={styles.headerCell1}>
                <div className={styles.checkbox1}>
                  <div className={styles.box1} />
                </div>
                <div className={styles.headerTitle1}>Building</div>
              </button>
              <div className={styles.tableCell}>
                <div className={styles.link}>A</div>
              </div>
              <div className={styles.tableCell1}>
                <div className={styles.link1}>B</div>
              </div>
              <div className={styles.tableCell2}>
                <div className={styles.link2}>C</div>
              </div>
              <div className={styles.tableCell3}>
                <div className={styles.link3}>A</div>
              </div>
              <div className={styles.tableCell4}>
                <div className={styles.link4}>B</div>
              </div>
              <div className={styles.tableCell5}>
                <div className={styles.link5}>B</div>
              </div>
              <div className={styles.tableCell6}>
                <div className={styles.link6}>A</div>
              </div>
              <div className={styles.tableCell7}>
                <div className={styles.link7}>C</div>
              </div>
              <div className={styles.tableCell8}>
                <div className={styles.link8}>project.com/user849</div>
              </div>
              <div className={styles.tableCell9}>
                <div className={styles.link9}>project.com/user849</div>
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
            <div className={styles.column2}>
              <div className={styles.headerCell2}>
                <div className={styles.checkbox2}>
                  <div className={styles.box2} />
                </div>
                <div className={styles.headerTitle2}>Actions</div>
              </div>
              <img
                className={styles.cellActionButton}
                loading="lazy"
                alt=""
                src="/cell-action-button@2x.png"
              />
              <img
                className={styles.cellActionButton1}
                loading="lazy"
                alt=""
                src="/cell-action-button-1@2x.png"
              />
              <img className={styles.infoIcon} alt="" src="/24info.svg" />
              <img
                className={styles.cellActionButton2}
                loading="lazy"
                alt=""
                src="/cell-action-button-2@2x.png"
              />
              <img
                className={styles.cellActionButton3}
                loading="lazy"
                alt=""
                src="/cell-action-button-3@2x.png"
              />
              <img className={styles.infoIcon1} alt="" src="/24info-1.svg" />
              <img
                className={styles.cellActionButton4}
                loading="lazy"
                alt=""
                src="/cell-action-button-4@2x.png"
              />
              <img
                className={styles.cellActionButton5}
                alt=""
                src="/cell-action-button-5@2x.png"
              />
              <img className={styles.infoIcon2} alt="" src="/24info-2.svg" />
              <img
                className={styles.cellActionButton6}
                loading="lazy"
                alt=""
                src="/cell-action-button-6@2x.png"
              />
              <img
                className={styles.cellActionButton7}
                alt=""
                src="/cell-action-button-7@2x.png"
              />
              <img
                className={styles.cellActionButton8}
                alt=""
                src="/cell-action-button-8.svg"
              />
              <img
                className={styles.cellActionButton9}
                loading="lazy"
                alt=""
                src="/cell-action-button-9@2x.png"
              />
              <img
                className={styles.cellActionButton10}
                loading="lazy"
                alt=""
                src="/cell-action-button-10@2x.png"
              />
              <img
                className={styles.cellActionButton11}
                alt=""
                src="/cell-action-button-11.svg"
              />
              <img
                className={styles.cellActionButton12}
                loading="lazy"
                alt=""
                src="/cell-action-button-12@2x.png"
              />
              <img
                className={styles.cellActionButton13}
                loading="lazy"
                alt=""
                src="/cell-action-button-13@2x.png"
              />
              <img className={styles.infoIcon3} alt="" src="/24info-3.svg" />
              <img
                className={styles.cellActionButton14}
                loading="lazy"
                alt=""
                src="/cell-action-button-14@2x.png"
              />
              <img
                className={styles.cellActionButton15}
                alt=""
                src="/cell-action-button-15@2x.png"
              />
              <img className={styles.infoIcon4} alt="" src="/24info-4.svg" />
              <img
                className={styles.cellActionButton16}
                loading="lazy"
                alt=""
                src="/cell-action-button-16@2x.png"
              />
              <img
                className={styles.cellActionButton17}
                alt=""
                src="/cell-action-button-17@2x.png"
              />
              <img className={styles.infoIcon5} alt="" src="/24info-5.svg" />
              <div className={styles.tableCell10}>
                <img
                  className={styles.cellActionButton18}
                  alt=""
                  src="/cell-action-button-18@2x.png"
                />
                <img
                  className={styles.cellActionButton19}
                  alt=""
                  src="/cell-action-button-19@2x.png"
                />
                <img
                  className={styles.cellActionButton20}
                  alt=""
                  src="/cell-action-button-20@2x.png"
                />
              </div>
              <div className={styles.tableCell11}>
                <img
                  className={styles.cellActionButton21}
                  alt=""
                  src="/cell-action-button-21@2x.png"
                />
                <img
                  className={styles.cellActionButton22}
                  alt=""
                  src="/cell-action-button-22@2x.png"
                />
                <img
                  className={styles.cellActionButton23}
                  alt=""
                  src="/cell-action-button-23@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header2}>
        <div className={styles.search}>
          <img
            className={styles.iconSearchMagnifyingGlass}
            alt=""
            src="/icon--search-magnifying-glass@2x.png"
          />
          <input className={styles.search1} placeholder="Search" type="text" />
        </div>
        <button className={styles.buttons}>
          <div className={styles.download}>Filter</div>
          <div className={styles.tool}>
            <img className={styles.filterIcon} alt="" src="/filter.svg" />
          </div>
        </button>
        <button className={styles.buttons1}>
          <div className={styles.download1}>Download</div>
          <img
            className={styles.downloadCloudIcon}
            alt=""
            src="/24downloadcloud.svg"
          />
        </button>
      </div>
    </form>
);
};

export default AllManagersMain;