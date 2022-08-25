import { createContext, useState, useEffect } from "react";
import {devicesApi} from "../../services/devicesAPI";


export const devicesContext = createContext("Ma Nishma");

export default function Devices({ children }) {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    devicesApi().then((res)=>{setDevices(res)})
  }, []);

  return (
    <devicesContext.Provider value={{ devices, setDevices }}>
      {children}
    </devicesContext.Provider>
  );
}
