import "../../style/Style_manager/header.css";
import "../../style/Style_manager/global2.css";
import mag from '../../images/search.png';
import filter from '../../images/Filter.png';
import cloud from '../../images/cloud.png';
const Header = () => {
  return (
    <div className="header-2">
      <div className="search">
        <img
          className="icon-search-magnifying-glass"
          loading="lazy"
          alt=""
          src={mag}
        />
        <div className="search1">Search</div>
      </div>
      <button className="buttons">
        <div className="download">Filter</div>
        <div className="tool">
          <img className="filter-icon" alt="" src={filter} />
        </div>
      </button>
      <button className="buttons1">
        <div className="download1">Download</div>
        <img
          className="download-cloud-icon"
          alt=""
          src={cloud}
        />
      </button>
    </div>
  );
};

export default Header;
