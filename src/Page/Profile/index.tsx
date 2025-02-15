import { useEffect, useState } from "react";
import Info from "./Info";
import icon from "../../images/icon.png";
import Academic from "./Academic";
import Habilities from "./Habilities";
import { X } from "@phosphor-icons/react";

export default function Profile() {
  const [alerting, setAlerting] = useState(true); // Defina como true para testar
  const [option, setOption] = useState(""); 
  const [activeTab, setActiveTab] = useState("tab1");
  const [isVisible1, setIsVisible1] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [isVisible3, setIsVisible3] = useState<boolean>(false);

  const handleTab1 = () => {
    setIsVisible2(false);
    setIsVisible3(false);
    setActiveTab("tab1");
    setIsVisible1(true);
  };

  const handleTab2 = () => {
    setIsVisible1(false);
    setIsVisible3(false);
    setActiveTab("tab2");
    setIsVisible2(true);
  };

  const handleTab3 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setActiveTab("tab3");
    setIsVisible3(true);
  };

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
    <>
      <ul className="flex xl:flex-col justify-start xl:justify-center md:gap-3 bg-green-600 items-center h-14 w-screen xl:w-40 2xl:w-52 xl:h-screen xl:left-0 ">
        <span className="h-14 w-14 xl:h-28 xl:w-28 2xl:w-40 xl:mt-3 left-0 xl:left-4 xl:top-4 xl:fixed justify-center p-1">
          <img src={icon} />
        </span>

        <li
          onMouseOver={handleTab1}
          className={
            activeTab == "tab1"
              ? "transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-110 text-white hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium bg-black"
              : "transition ease-in-out delay-150 xl:hover:-translate-y-1 hover:-translate-y-20 xl:hover:scale-110 text-black hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium"
          }
        >
          Básico
        </li>
        <li
          onMouseOver={handleTab2}
          className={
            activeTab == "tab2"
              ? "transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-110 text-white hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium bg-black"
              : "transition ease-in-out delay-150 xl:hover:-translate-y-1 hover:-translate-y-20 xl:hover:scale-110 text-black hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium"
          }
        >
          Acadêmico
        </li>
        <li
          onMouseOver={handleTab3}
          className={
            activeTab == "tab3"
              ? "transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-110 text-white hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium bg-black"
              : "transition ease-in-out delay-150 xl:hover:-translate-y-1 hover:-translate-y-20 xl:hover:scale-110 text-black hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium"
          }
        >
          Habilidades
        </li>
      </ul>

      {activeTab === "tab1" ? (
        <div className="flex w-full">
          <div className="flex flex-col xl:flex-row items-center w-full xl:h-screen h-full p-3 gap-3">
            <Info />
          </div>
        </div>
      ) : activeTab === "tab2" ? (
        <div className="flex w-full h-full">
          <Academic />
        </div>
      ) : (
        <div className="flex w-full h-full">
          <Habilities />
        </div>
      )}
    </>
  );
}