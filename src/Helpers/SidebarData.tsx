import PeopleIcon from "@mui/icons-material/People";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CustomerDetails from "../components/CustomerDetails";
import React from "react";

export const SidebarData = [
  {
    title: "Customer Details",
    icon: <PeopleIcon />,
    Link: "/CustomerDetails",
  },
  {
    title: "Room Details",
    icon: <BedroomChildIcon />,
    Link: "/RoomDetails",
  },
  {
    title: "Food Details",
    icon: <RestaurantIcon />,
    Link: "/FoodDetails",
  },
];
