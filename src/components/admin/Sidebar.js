import React, { useState } from "react";
import "react-select-search/style.css";
import { FaBars } from "react-icons/fa";
import { MdAppRegistration, MdInventory2, MdPayment } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { BsFillFilePersonFill, BsReceiptCutoff } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import {
  AiFillBank,
  AiTwotoneHome,
  AiFillAlipayCircle,
  AiFillAccountBook,
  AiFillPropertySafety,
} from "react-icons/ai";
import { BiSolidInstitution } from "react-icons/bi";

import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Set isOpen to false initially
  const [activeMenu, setActiveMenu] = useState(null); // State to track the active top-level menu item

  const toggle = () => {
    setIsOpen(!isOpen);
    setActiveMenu(null); // Close all submenus when collapsing the sidebar
  };

  const menuItem = [
    {
      name: "Property",
      icon: <AiFillPropertySafety />,
      subMenu: [
        // Submenu items for Property
        {
          path: "/",
          name: "Registration",
          icon: <MdAppRegistration />,
        },
        {
          path: "/tenant",
          name: "Tenant",
          icon: <AiTwotoneHome />,
        },
        {
          path: "/payroll",
          name: "Payroll",
          icon: <AiFillAlipayCircle />,
        },
        {
          path: "/inventory",
          name: "Inventory",
          icon: <MdInventory2 />,
        },
        {
          path: "/daybook",
          name: "Daybook",
          icon: <AiFillAccountBook />,
        },
        {
          path: "/empolyee",
          name: "Empolyee",
          icon: <BsFillFilePersonFill />,
        },
        {
          path: "/payment",
          name: "Payment",
          icon: <MdPayment />,
        },
        {
          path: "/receipt",
          name: "Receipt",
          icon: <BsReceiptCutoff />,
        },
        {
          path: "/expense",
          name: "Expense",
          icon: <GiExpense />,
        },
      ],
    },
    {
      name: "Institute",
      icon: <BiSolidInstitution />,
      subMenu: [
        {
          path: "/student",
          name: "Student",
          icon: <PiStudentFill />,
        },
      ],
    },
    {
      name: "Banks",
      icon: <AiFillBank />,
      subMenu: [
        {
          path: "/bankform",
          name: "Bank",
          icon: <AiFillBank />,
        },
      ],
    },
  ];

  const handleMenuClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName); // Toggle active top-level menu
  };

  return (
    <div className="container sideBar-div">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}
      >
        <div className="top_section">
          {/* Conditionally render the "Admin Panel" name above the menu button */}
          {isOpen && <h3 className="logo">Admin Panel</h3>}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => handleMenuClick(item.name)} // Pass item.name as an argument
              className="link text-decoration-none"
            >
              <div className="link-content">
                <div className="icon">{item.icon}</div>
                {/* Conditionally render the menu name based on isOpen */}
                {isOpen && <div className="link-text">{item.name}</div>}
              </div>
            </div>
            {item.subMenu && isOpen && activeMenu === item.name && (
              <div className="submenu">
                {item.subMenu.map((subItem, subIndex) => (
                  <NavLink
                    to={subItem.path}
                    key={subIndex}
                    className="sublink text-decoration-none"
                    activeClassName="active"
                  >
                    <div className="link-content submenu-item">
                      <div className="icon">{subItem.icon}</div>
                      <div className="submenu-text">{subItem.name}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={`children ${isOpen ? "expanded" : "collapsed"}`}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
