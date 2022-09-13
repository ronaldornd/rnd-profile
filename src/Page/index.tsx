import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Share from "./components/Share";
import Info from "./components/Info";
import icon from "../images/icon.png"
import { Nav } from "react-bootstrap";
import Academic from "./components/Academic";

const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 }
}


export default function Page() {
    const [message, setMessage] = useState('');
    const [alerting, setAlerting] = useState(true);
    const [activeTab, setActiveTab] = useState("tab1");
    const [isVisible1, setIsVisible1] = useState<boolean>(false);
    const [isVisible2, setIsVisible2] = useState<boolean>(false);
    const [isVisible3, setIsVisible3] = useState<boolean>(false);


    function abort() {
        setAlerting(false);
    }

    const handleTab1 = () => {
        // update the state to tab1
        setIsVisible2(false);
        setIsVisible3(false);
        setActiveTab("tab1");
        setIsVisible1(true);
    };
    const handleTab2 = () => {
        // update the state to tab1
        setIsVisible1(false);
        setIsVisible3(false);
        setActiveTab("tab2");
        setIsVisible2(true);
    };
    const handleTab3 = () => {
        // update the state to tab1
        setIsVisible1(false);
        setIsVisible2(false);
        setActiveTab("tab3");
        setIsVisible3(true);
    };

    useEffect(() => {
        setAlerting(false);
        let seconds = 0;
        const timer = setInterval(() => {
            seconds += 1;
            console.log(seconds)

            switch (seconds) {
                case 1:
                    setMessage('Olá')
                    break;
                case 2:
                    setMessage('Obrigado pelo interesse no meu perfil 🥰')
                    break;
                case 4:
                    setMessage('Estou testando uma nova ferramenta 🚧')
                    break;
                case 7:
                    setMessage('E gostaria muito que você pudesse me ajudar!')
                    break;
                case 10:
                    setMessage('É só clicar no botão de download e instalar o app 😁💕')
                    break;
                case 13:
                    setMessage('Fica tranquilo que é tudo seguro, só não tive 💵 para colocar na PlayStore ')
                    break;
                case 17:
                    abort()
                    clearInterval(timer)
                    break;
            }

        }, 3000);

        return (() => clearInterval(timer))
    }, []);


    return (
        <>
            <div className="flex-row h-screen w-screen items-center justify-around self-center content-center">
                {alerting ?
                    (
                        <div className="flex-col p-5 h-full ease-out justify-center">
                        </div>
                    ) :
                    (
                        <div className="Tabs" >
                            <ul className="nav fixed lg:flex-col sm:flex-row sm:w-full  justify-center flex p-4 gap-2 bg-green-600 items-center h-14 w-full lg:w-36 lg:h-full ">
                                <div className="h-14 w-14 lg:h-28 lg:w-28 lg:mt-3 left-1 lg:left-5 lg:top-5  absolute justify-center">

                                    <img src={icon} />
                                </div>

                                <li onMouseEnter={handleTab1} className={activeTab == "tab1" ? "transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  text-gray-300 hover:bg-black hover:text-white self-center px-3 py-2 rounded-md lg:text-lg font-medium bg-black" : "transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  text-gray-300 hover:bg-black hover:text-white self-center px-3 py-2 rounded-md lg:text-lg font-medium"} >Básico</li>
                                <li onMouseEnter={handleTab2} className={activeTab == "tab2" ? "transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  text-gray-300 hover:bg-black hover:text-white self-center px-3 py-2 rounded-md lg:text-lg font-medium bg-black" : "transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  text-gray-300 hover:bg-black hover:text-white self-center px-3 py-2 rounded-md lg:text-lg font-medium"} >Acadêmico</li>
                                <li onMouseEnter={handleTab3} className={activeTab == "tab3" ? "transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  text-gray-300 hover:bg-black hover:text-white self-center px-3 py-2 rounded-md lg:text-lg font-medium bg-black" : "transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  text-gray-300 hover:bg-black hover:text-white self-center px-3 py-2 rounded-md lg:text-lg font-medium"} >Habilidades</li>

                            </ul>


                            {activeTab === "tab1" ?

                                <div


                                    className="outlet p-5 lg:ml-36 items-center w-full h-full">
                                    <div className=" flex flex-row gap-2 items-center w-full h-full">
                                        <Info /><Share />
                                    </div>
                                </div>



                                : activeTab === 'tab2' ?
                                    <div

                                        className="outlet p-5 lg:ml-36 items-center w-full h-full">
                                        <Academic />
                                    </div>
                                    :
                                    <div
                                        className="outlet p-5 lg:ml-36 items-center w-full h-full">
                                        <Info />
                                    </div>


                            }

                        </div >

                    )
                }
            </div >
        </>
    )
}