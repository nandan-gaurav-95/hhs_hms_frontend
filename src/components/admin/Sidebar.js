import React, { useState } from "react";
import "react-select-search/style.css";
import {

    FaBars,

} from "react-icons/fa";
import {
    MdAppRegistration,
    MdInventory2,
    MdPayment,
} from "react-icons/md";
import {
    GiExpense,
} from "react-icons/gi";
import {
    BsFillFilePersonFill,
    BsReceiptCutoff,
} from "react-icons/bs";
import {
    AiTwotoneHome,
    AiFillAlipayCircle,
    AiFillAccountBook,
<<<<<<< HEAD
    AiFillBank,
=======
>>>>>>> d04171144032451eaaf49e14d23f24edb91b2ee4
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
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
<<<<<<< HEAD
            name: "Employee",
=======
            name: "Empolyee",
>>>>>>> d04171144032451eaaf49e14d23f24edb91b2ee4
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
<<<<<<< HEAD
        {
            path: "/bankform",
            name: "Bank",
            icon: <AiFillBank />,
        },
=======
>>>>>>> d04171144032451eaaf49e14d23f24edb91b2ee4
    ];
    return (
        <div className="container sideBar-div">

            <div
                style={{ width: isOpen ? "200px" : "50px" }}
                className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}
            >
                <div className="top_section">
                    <h2
                        style={{ display: isOpen ? "block" : "none" }}
                        className="logo"
                    >
                        Admin Panel
                    </h2>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="link text-decoration-none"
                        activeClassName="active"
                    >
                        <div className="link-content">
                            <div className="icon">{item.icon}</div>
                            <div className={`link-text ${isOpen ? '' : 'hidden-text'}`}>
                                {isOpen ? item.name : ''}
                            </div>
                        </div>
                    </NavLink>
                ))}

            </div>
            <div className={`children ${isOpen ? "expanded" : "collapsed"}`}>
<<<<<<< HEAD
        
        <main>{children}</main>
      </div>
=======
                <main>{children}</main>
            </div>
>>>>>>> d04171144032451eaaf49e14d23f24edb91b2ee4

        </div>
    );
};

export default Sidebar;
