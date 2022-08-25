import { createContext, useState, useEffect } from "react";

export const devicesContext = createContext("Ma Nishma");

export default function Devices({ children }) {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Jeck99/fake-server/devices")
      .then((res) => res.json())
      .then((response) => setDevices(response));
  }, []);

  return (
      <devicesContext.Provider value={{ devices, setDevices }}>
        {children}
      </devicesContext.Provider>
  );
}
