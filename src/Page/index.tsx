import { useEffect, useState } from "react";
import Info from "./components/Info";
import icon from "../images/icon.png";
import Academic from "./components/Academic";
import Habilities from "./components/Habilities";
import { X } from "@phosphor-icons/react";

const variants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

export default function Page() {
  const [alerting, setAlerting] = useState(true); // Defina como true para testar
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
    const alerted = localStorage.getItem("alerted");
    console.log(alerted);
    if (alerted === "false" || alerted === null) {
      if (alerting) {
        let steps = 0;
        const timer = setInterval(() => {
          steps++;
          console.log(steps);
          if (steps === 8) {
            setAlerting(false);
            clearInterval(timer);
          }
          console.log(timer);
        }, 500);
      }
    } else {
      setAlerting(false);
    }
  }, [alerting]);

  function abort() {
    setAlerting(false);
    localStorage.setItem("alerted", "true");
  }

  return (
    <>
      <div className="flex xl:flex-row flex-col h-sreen w-screen items-center justify-center self-center content-center">
        {alerting ? (
          <div className="flex flex-col gap-2 p-3  ease-out justify-center h-screen w-screen bg-green-300 rounded-xl border-4  border-black text-black text-center items-center text-5xl font-thin">
            <X
              className="absolute top-5 right-5 hover:border-2 hover:bg-gray-400 border-black rounded-md"
              onClick={abort}
            />
            <span>Olá,</span>
            <span>Seja bem vindo!</span>
            <span>Obrigado pelo interesse no meu perfil 🥰</span>
            <span>
              Fique a vontade para deixar um feedback no icone abaixo 👇
            </span>
          </div>
        ) : (
          <>
            <ul className="flex xl:flex-col justify-start xl:justify-center md:gap-3 bg-green-600 items-center h-14 w-screen xl:w-40 2xl:w-52 xl:h-screen xl:left-0 ">
              <span className="h-14 w-14 xl:h-28 xl:w-28 2xl:w-40 xl:mt-3 left-0 xl:left-4 xl:top-4 xl:fixed justify-center">
                <img src={icon} />
              </span>

              <li
                onMouseOver={handleTab1}
                className={
                  activeTab == "tab1"
                    ? "transition ease-in-out delay-150  xl:hover:-translate-y-1 xl:hover:scale-110  text-white hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium bg-black"
                    : "transition ease-in-out delay-150  xl:xl:hover:-translate-y-1 hover:-translate-y-20 xl:hover:scale-110   text-black hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium"
                }
              >
                Básico
              </li>
              <li
                onMouseOver={handleTab2}
                className={
                  activeTab == "tab2"
                    ? "transition ease-in-out delay-150  xl:hover:-translate-y-1 xl:hover:scale-110  text-white hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium bg-black"
                    : "transition ease-in-out delay-150  xl:xl:hover:-translate-y-1 hover:-translate-y-20 xl:hover:scale-110   text-black hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium"
                }
              >
                Acadêmico
              </li>
              <li
                onMouseOver={handleTab3}
                className={
                  activeTab == "tab3"
                    ? "transition ease-in-out delay-150  xl:hover:-translate-y-1 xl:hover:scale-110  text-white hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium bg-black"
                    : "transition ease-in-out delay-150  xl:xl:hover:-translate-y-1 hover:-translate-y-20 xl:hover:scale-110   text-black hover:bg-black hover:text-white self-center px-2 py-2 rounded-md xl:text-lg 2xl:text-2xl font-medium"
                }
              >
                Habilidades
              </li>
            </ul>

            {activeTab === "tab1" ? (
              <div className="flex  w-full">
                <div className=" flex flex-col xl:flex-row  items-center w-full xl:h-screen h-full p-3 gap-3">
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
        )}
      </div>
    </>
  );
}
