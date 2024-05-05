import { useMemo } from "react";
import "../../style/Style_admin/Column.css";
import "../../style/Style_admin/TableCell.css"
import "../../style/Style_admin/global.css";


const Column = ({
  headerTitle,
  link,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  propWidth,
  propColor,
}) => {
  const columnStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const linkStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="column3" style={columnStyle}>
      <div className="header-cell3">
        <div className="checkbox4">
          <div className="box4" />
        </div>
        <div className="header-title3">{headerTitle}</div>
      </div>
      <div className="table-cell13">
        <div className="link10">{link}</div>
      </div>
      <div className="table-cell14">
        <div className="link11">{link1}</div>
      </div>
      <div className="table-cell15">
        <div className="link12" style={linkStyle}>
          {link2}
        </div>
      </div>
      <div className="table-cell16">
        <div className="link13">{link3}</div>
      </div>
      <div className="table-cell17">
        <div className="link14">{link4}</div>
      </div>
      <div className="table-cell18">
        <div className="link15">{link5}</div>
      </div>
      <div className="table-cell19">
        <div className="link16">{link6}</div>
      </div>
      <div className="table-cell20">
        <div className="link17">{link7}</div>
      </div>
      <div className="table-cell21">
        <div className="link18">project.com/user849</div>
      </div>
      <div className="table-cell22">
        <div className="link19">project.com/user849</div>
      </div>
    </div>
  );
};

export default Column;
