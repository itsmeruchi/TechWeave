import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  // Toggle the Products dropdown
  const toggleProductMenu = () => {
    setIsProductOpen(!isProductOpen);
  };

  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

      <div className="sidebarItem">
        <p onClick={toggleProductMenu}>
          <ImportExportIcon /> Products <ExpandMoreIcon />
        </p>
        {isProductOpen && (
          <div className="subMenu">
            <Link to="/admin/products">
              <p>
                <PostAddIcon /> All Products
              </p>
            </Link>
            <Link to="/admin/product">
              <p>
                <AddIcon /> Create Product
              </p>
            </Link>
          </div>
        )}
      </div>

      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
