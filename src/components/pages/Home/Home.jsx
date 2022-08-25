import "./Home.css";
import React from "react";
import { devicesContext } from "../../contexts/devices";
import { useContext } from "react";

function Home() {
  const context = useContext(devicesContext);
  console.log(context.devices);
  return <div className="home"></div>;
}

export default Home;
