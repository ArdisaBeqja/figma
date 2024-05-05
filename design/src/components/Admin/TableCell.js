import "../../style/Style_admin/TableCell.css";
import "../../style/Style_admin/global.css";


const TableCell = ({ avatar, cellContent, subContent }) => {
  return (
    <div className="table-cell12">
      <div className="checkbox3">
        <div className="box3" />
      </div>
      <img className="avatar-icon" loading="lazy" alt="" src={avatar} />
      <div className="nested-table-cell">
        <b className="cell-content">{cellContent}</b>
        <div className="sub-content">{subContent}</div>
      </div>
    </div>
  );
};

export default TableCell;
