import React from "react";
import "./sidebar.css";
// import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <h1 className="raa-heading">RAA Digitizing</h1>
        {/* <img src={logo} alt="Ecommerce" /> */}
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
                >
          <TreeItem nodeId="1" label="Products" style={{padding:"2rem"}}>
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      

        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
                >
          <TreeItem nodeId="1" label="Projects" style={{padding:"2rem"}}>
            <Link to="/admin/projects">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/project">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      {/* <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link> */}
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>

      <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
                >
          <TreeItem nodeId="1" label="Custom Orders" style={{padding:"2rem"}}>
            <Link to="/admin/pending-custom-orders">
              <TreeItem nodeId="2" label="Pending Custom Orders" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/confirmed-custom-orders">
              <TreeItem nodeId="3" label="Confirmed Custom Orders" icon={<AddIcon />} />
            </Link>
            <Link to="/admin/assigned-custom-orders">
              <TreeItem nodeId="3" label="Assigned Custom Orders" icon={<AddIcon />} />
            </Link>

          </TreeItem>
        </TreeView>
    </div>
  );
};

export default Sidebar;
