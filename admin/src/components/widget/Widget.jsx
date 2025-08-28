import React, { useState, useEffect } from "react";
import "./widget.scss";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import axios from "axios";

const Widget = ({ type }) => {
  const [count, setCount] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint;
        switch (type) {
          case "user":
            endpoint = "/users/count";
            break;
          case "order":
            endpoint = "/hotels/countHotel";
            break;
          case "balance":
            endpoint = "/reservations/count";
            break;
          case "earning":
            endpoint = "/reservations/totalearnings";
            break;
          default:
            return;
        }
        const response = await axios.get(endpoint, { withCredentials: true });
        if (type === "earning") {
          setEarnings(response.data.totalEarnings);
        } else {
          setCount(response.data.count);
        }
      } catch (error) {
        console.error(`Failed to fetch ${type} data:`, error);
      }
    };

    fetchData();
  }, [type]);

  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "/users",
        linkText: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        )
      };
      break;
    case "order":
      data = {
        title: "HOTELS",
        isMoney: false,
        link: "/hotels",
        linkText: "View all hotels",
        icon: (
          <ApartmentOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "/earnings",
        linkText: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "RESERVATIONS",
        isMoney: false,
        link: "/reservations",
        linkText: "View reservations",
        icon: (
          <LocalShippingOutlinedIcon  
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "₹"} 
          {type === "earning" 
            ? earnings.toFixed(2) 
            : (type === "user" || type === "order" || type === "balance") 
              ? count 
              : 0}
        </span>
        <Link to={data.link} className="link" style={{color:"inherit", textDecoration: "none" }}>
          {data.linkText}
        </Link>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;