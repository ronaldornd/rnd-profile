import { useEffect, useState } from "react";
import axios from "axios";
import Info from "./Profile/Info";
import icon from "../images/icon.png";
import Academic from "./Profile/Academic";
import Habilities from "./Profile/Habilities";
import { X } from "@phosphor-icons/react";
import Profile from "./Profile";

const variants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

export default function Page() {
  const [alerting, setAlerting] = useState(true); // Defina como true para testar
  const [option, setOption] = useState(""); 
  const [activeTab, setActiveTab] = useState("tab1");
  const [isVisible1, setIsVisible1] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [isVisible3, setIsVisible3] = useState<boolean>(false);

  useEffect(() => {
    const alerted = localStorage.getItem("alerted");
    if (alerted === "false" || alerted === null) {
      setAlerting(true);
    } else {
      setAlerting(false);
    }
  }, []);

  function abort() {
    setAlerting(false);
    localStorage.setItem("alerted", "true");
  }

  function handleViewProfile() {
    setAlerting(false);
    setOption("profile");
    localStorage.setItem("alerted", "true");
    // Lógica para ver o currículo
  }

  function handleScheduleAppointment() {
    setAlerting(false);
    setOption("appointment");
    localStorage.setItem("alerted", "true");
    // Lógica para agendar atendimento
  }

  return (
    <>
      <div className="flex xl:flex-row flex-col h-sreen w-screen items-center justify-center self-center content-center">
        {alerting ? (
          <div className="flex flex-col gap-2 p-3  ease-out justify-center h-screen w-screen bg-green-300 rounded-xl border-4  border-black text-black text-center items-center text-5xl font-thin">
            <X
              className="absolute animate-pulse border-2 top-5 right-5 hover:border-2 hover:bg-gray-400 border-black rounded-md"
              onClick={handleViewProfile}
            />
            <span>Olá,</span>
            <span>Seja bem vindo!</span>
            <span>Obrigado pelo interesse no meu perfil 🥰</span>
            
            {/*
            <div className="flex flex-col gap-4 mt-4">
              <span>O que você deseja?</span>
              <div className="flex flex-row gap-2 justify-around">
                <button
                  className="bg-green-800 hover:border-white hover:bg-green-600 hover:border-black border-2 w-max text-3xl text-white px-4 py-1 rounded"
                  onClick={handleViewProfile}
                >
                  Ver Currículo
                </button>
                <button
                  className="bg-green-800 hover:border-white hover:bg-green-600 hover:border-black border-2 w-max text-3xl text-white px-4 py-1 rounded"
                  onClick={handleScheduleAppointment}
                >
                  Agendar Atendimento
                </button>
              </div>
              */}
              <span>
              Fique a vontade para deixar um feedback no icone abaixo 👇
            </span>
            </div>
          
        ) : (
          <>
          {option === "profile" ? (
           <Profile />
          ) : (
            <span className="w-screen h-screen flex text-3xl items-center justify-center">Em Construçao</span>
          )}
          </>
        )}
      </div>
    </>
  );
}