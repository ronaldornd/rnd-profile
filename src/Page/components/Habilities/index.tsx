import ProgressBar from "@ramonak/react-progress-bar";
import html5svg from "../../../images/HTML.svg";
import officesvg from "../../../images/office.svg";
import languagesvg from "../../../images/language.svg";
import logicsvg from "../../../images/logic.svg";
import csssvg from "../../../images/css.svg";
import reactsvg from "../../../images/react.svg";
import reactredsvg from "../../../images/reactred.svg";
import apksvg from "../../../images/apk.svg";
import cleansvg from "../../../images/clean.svg";
import createsvg from "../../../images/create.svg";
import backsvg from "../../../images/back.svg";
import glasssvg from "../../../images/glass.svg";
import logosvg from "../../../images/logo.svg";
import exposvg from "../../../images/expo.svg";
import typesvg from "../../../images/typescript.svg";
import vitesvg from "../../../images/vite.svg";
import icon from "../../../images/icon.png"

import live1 from "../../../images/live1.jpg";
import live2 from "../../../images/live2.jpg";
import live3 from "../../../images/live3.jpg";
import app1 from "../../../images/app1.png";
import app2 from "../../../images/app2.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AndroidLogo, CheckCircle, ClockClockwise, Disc, DotsNine, Eraser, FigmaLogo, GearSix, GithubLogo, GoogleChromeLogo, GooglePlayLogo, LinuxLogo, Planet, Repeat, ScribbleLoop, WindowsLogo, Wrench, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Habilities() {


    const [carouselIndex, setCarouselIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    let index = 0;




    useEffect(() => {


        const timer = setInterval(() => {
            index += 1;
            console.log(isOpen)
            if (index == 3) {
                index = 0
            }

            switch (index) {
                case 0:
                    console.log("1");
                    setCarouselIndex(index);
                    break;
                case 1:
                    console.log("2");
                    setCarouselIndex(index);
                    break;
                case 2:
                    console.log("3");
                    setCarouselIndex(index);
                    break;

            }
        }, 7000);

    }, []);


    function handleDialog() {
        console.log(isOpen)
        index = 0
        setCarouselIndex(index);



    };









    return (


        <Container className="grid lg:h-screen 2xl:mx-36 lg:grid-flow-row gap-3 justify-items-center p-3 mb-14 lg:mb-0 w-full">
            <Row className="grid grid-flow-row w-full h-full grid-cols-3 lg:grid-cols-6 items-center justify-items-center lg:gap-4 gap-3 justify-between">
                <span className="flex flex-col w-full items-center 2xl:gap-3 gap-2 m-1 p-2 border-2 border-green-700 bg-black rounded-lg">
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-3xl">
                        <img src={officesvg} className="h-5 w-5 2xl:h-10 2xl:w-10" />
                        Office
                    </span>
                    <span className="flex flex-row w-full h-max  border-2 rounded-xl border-zinc-800">

                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={10} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />

                    </span>
                </span>

                <span className="flex flex-col w-full items-center 2xl:gap-3 gap-2 m-1 p-2 border-2 border-green-700 bg-black rounded-lg">
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-3xl">

                        <img src={languagesvg} className="h-5 w-5 2xl:h-10 2xl:w-10 " />
                        Inglês
                    </span>
                    <span className="flex flex-row w-full h-max  border-2 rounded-xl border-zinc-800">


                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />


                        <ProgressBar completed={50} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={10} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />

                    </span>
                </span>
                <span className="flex flex-col w-full items-center 2xl:gap-3 gap-2 m-1 p-2 border-2 border-green-700 bg-black rounded-lg">
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-3xl">

                        <img src={logicsvg} className="h-5 w-5 2xl:h-10 2xl:w-10" />
                        Lógica
                    </span>
                    <span className="flex flex-row w-full h-max  border-2 rounded-xl border-zinc-800">


                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />


                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={10} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="8px" isLabelVisible={false} />

                    </span>
                </span>
                <span className="flex flex-col w-full items-center self-center m-1 p-2 border-2  2xl:gap-3 gap-2 border-orange-700 bg-black rounded-lg">
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-3xl">

                        <img src={html5svg} className="h-5 w-5 2xl:h-10 2xl:w-10" />
                        HTML5
                    </span>
                    <span className="flex flex-row w-full h-max  border-2 rounded-xl border-zinc-800">


                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#d76b00" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#d76b00" height="8px" isLabelVisible={false} />


                        <ProgressBar completed={50} baseBgColor="transparent" className="w-full" bgColor="#d76b00" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={10} baseBgColor="transparent" className="w-full" bgColor="#d76b00" height="8px" isLabelVisible={false} />

                    </span>
                </span>
                <span className="flex flex-col w-full items-center self-center m-1 p-2 border-2  2xl:gap-3 gap-2 border-blue-700 bg-black rounded-lg">
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-3xl">

                        <img src={csssvg} className="h-5 w-5 2xl:h-10 2xl:w-10" />
                        CSS
                    </span>
                    <span className="flex flex-row w-full h-max  border-2 rounded-xl border-zinc-800">


                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#255be9 " height="8px" isLabelVisible={false} />
                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#255be9" height="8px" isLabelVisible={false} />


                        <ProgressBar completed={50} baseBgColor="transparent" className="w-full" bgColor="#255be9" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={10} baseBgColor="transparent" className="w-full" bgColor="#255be9" height="8px" isLabelVisible={false} />

                    </span>
                </span>
                <span className="flex flex-col w-full items-center self-center m-1 p-2 border-2  2xl:gap-3 gap-2 border-purple-700 bg-black rounded-lg">
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-3xl">

                        <img src={reactsvg} className="h-5 w-5 2xl:h-10 2xl:w-10" />
                        React.JS
                    </span>
                    <span className="flex flex-row w-full h-max  border-2 rounded-xl border-zinc-800">


                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#800080" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#800080" height="8px" isLabelVisible={false} />


                        <ProgressBar completed={10} baseBgColor="transparent" className="w-full" bgColor="#800080" height="8px" isLabelVisible={false} />
                        <ProgressBar completed={10} baseBgColor="transparent" className="w-full" bgColor="#800080" height="8px" isLabelVisible={false} />

                    </span>
                </span>
            </Row>
            {/*descrição de habilidades*/}
            <Row className="grid grid-cols-1 grid-rows-3 gap-3 lg:gap-0 lg:grid-rows-1 grid-flow-col lg:grid-flow-row lg:grid-cols-3 lg:w-max w-full h-full items-center justify-center">
                <span className="flex flex-col gap-3 grid-col-span-1 w-full h-full">
                    {/* habilidades com sistemas*/}
                    <span className="flex flex-col gap-2 w-full h-max bg-zinc-800 rounded-lg border-green-800 border-2 p-2 items-center justify-center">
                        <h1 className="text-xl 2xl:p-3  2xl:text-3xl">Instalação de sistemas</h1>
                        <div className=" bg-zinc-900 rounded-lg w-full p-2">
                            <div className="w-full flex-row grid grid-flow-col grid-rows-2 grid-cols-2 gap-2 text-center items-justify-items-center" >
                                <span className="col-span-1 flex lg:flex-col items-center justify-center flex-row 2xl:text-2xl w-max">
                                    <WindowsLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Windows
                                </span>
                                <span className="col-span-1 flex lg:flex-col items-center justify-center flex-row 2xl:text-2xl w-max">
                                    <LinuxLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />Linux
                                </span>
                                <span className="col-span-1 flex lg:flex-col items-center justify-center flex-row 2xl:text-2xl w-max">
                                    <AndroidLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Android
                                </span>
                                <span className="col-span-1 flex lg:flex-col items-center justify-center flex-row 2xl:text-2xl w-max">
                                    <GoogleChromeLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    ChromeOS
                                </span>
                            </div>
                        </div>
                    </span>

                    {/* habilidades com celulares*/}
                    <span className="flex flex-col w-full h-max bg-zinc-800 rounded-lg sm:gap-2 border-green-800 border-2 p-2 items-center justify-center">
                        <h1 className="text-xl 2xl:p-3  2xl:text-3xl">Celulares</h1>
                        <div className=" bg-zinc-900 rounded-lg w-full p-2">
                            <div className="flex flex-col gap-2 " >
                                <span className="flex flex-row items-center 2xl:text-2xl w-max">
                                    <GearSix className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Flash de rom
                                </span>
                                <span className="flex flex-row items-center 2xl:text-2xl w-max">
                                    <Wrench className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Reparo de peças
                                </span>
                                <span className="flex flex-row items-center 2xl:text-2xl w-max">
                                    <img src={glasssvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Aplicação de peliculas
                                </span>
                                <span className="flex flex-row items-center 2xl:text-2xl w-max">
                                    <GooglePlayLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Auxilio para instalação de serviços
                                </span>

                            </div>
                        </div>
                    </span>
                </span>
                <span className="flex flex-col gap-3 grid-col-span-1 w-full h-full">

                    {/* habilidades com computadores*/}
                    <span className="flex flex-col w-full h-max bg-zinc-800 rounded-lg sm:gap-2 border-green-800 border-2 p-2 items-center text-center justify-center">
                        <h1 className="text-xl 2xl:p-3  2xl:text-3xl">Manutenção de computadores</h1>

                        <span className="grid rounded-lg w-full grid-cols-2 p-2 bg-zinc-900 gap-2" >
                            <span className="flex flex-row col-span-1 justify-center items-center text-center 2xl:text-2xl w-max">
                                <Eraser className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Formatação
                            </span>
                            <span className="flex flex-row col-span-1 justify-center items-center text-center 2xl:text-2xl w-max">
                                <Disc className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Instalação
                            </span>
                            <span className="flex flex-row col-span-1 justify-center items-center text-center 2xl:text-2xl w-max">
                                <Wrench className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />

                                Troca de peças
                            </span>
                            <span className="flex flex-row col-span-1 justify-center items-center text-center 2xl:text-2xl w-max">
                                <img src={cleansvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Limpeza
                            </span>
                            <span className="flex flex-row 2xl:text-2xl w-max justify-center items-center text-center col-span-2">
                                <ClockClockwise className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Backup e Recuperação de Dados
                            </span>
                        </span>

                    </span>

                    {/* habilidades com sites*/}
                    <span className="flex flex-col w-full h-max bg-zinc-800 rounded-lg sm:gap-2 border-green-800 border-2 p-2 items-center text-center justify-center">
                        <h1 className="flex flex-row text-xl 2xl:p-3  2xl:text-3xl">WEB <h2 className="text-lg ml-1 align-super">(React)</h2></h1>

                        <span className="grid rounded-lg w-full grid-cols-2 p-2 bg-zinc-900 gap-2" >
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-2xl w-max">
                                <FigmaLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                Prototipação
                            </span>
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-2xl w-max">
                                <img src={createsvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Criação
                            </span>
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-2xl w-max">
                                <ScribbleLoop className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                Logotipo
                            </span>
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-2xl w-max">
                                <img src={backsvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Back-end
                            </span>
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-2xl w-max col-span-2">
                                <img src={apksvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                Criação de versão mobile (APK)
                            </span>
                        </span>
                    </span>
                </span>
                <div className="flex flex-col col-span-1 row-span-1 w-full h-full gap-1">
                    <span className="flex flex-col w-full h-max text-center lg:text-3xl text-2xl p-2">
                        Habilidades
                    </span>

                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" />
                        Facilidade no aprendizado
                    </span>
                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" />
                        Desenvolvimento de bases de dados
                    </span>
                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" />
                        Resolução de problemas e depuração
                    </span>
                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" /> Criação de programas em Java
                    </span>
                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" />Gerenciamento de banco de dados
                    </span>
                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" /> Fundamentos de hardware
                    </span>
                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" /> Desenvolvimento de páginas web
                    </span>
                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" /> Implementação de JavaScript
                    </span>
                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" /> Gerenciamento de redes
                    </span>
                    <span className="flex flex-row gap-2 items-center lg:text-lg 2xl:text-2xl w-max">
                        <CheckCircle color="#22ff59" /> Engenharia de Software
                    </span>
                </div>

            </Row>
            <Row className="grid justify-items-center grid-cols-3 grid-rows-3 gap-2 h-max w-full">
                <Row className="col-span-3 flex lg:text-3xl text-2xl w-full h-full justify-center text-center">Projetos</Row>

                <Col className=" col-span-1 lg:row-span-1 row-span-2 border-2 rounded-xl w-max justify-center justify-items-center self-center  border-red-600  " onMouseEnter={() => { setIsOpen(true); handleDialog() }}>
                    <span className="flex p-2 lg:flex-row flex-col items-center w-full justify-center">
                        <img src={logosvg} className="h-10  mx-1" />
                        <h1 className="mx-1 lg:text-lg 2xl:text-2xl flex flex-row">
                            Messages
                            <Planet size={18} className="align-super ml-1" />
                        </h1>

                    </span>
                    <Dialog className="fixed flex  w-full h-full p-2 lg:top-1 bottom-0" open={isOpen} onClose={() => { setIsOpen(false) }}>
                        <Dialog.Panel className=" flex 2xl:ml-48 lg:ml-36 lg:h-fit  flex-col w-full h-full rounded-lg border-2 border-red-500 bg-zinc-800">
                            <Dialog.Title className="md:text-4xl text-2xl font-bold text-center m-2 w-full">

                                Live Messages
                                <span className=" align-super text-xs ml-1">(web)</span>
                                <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5"><X size={35} /></button>

                            </Dialog.Title>
                            <Dialog.Description className="grid gap-2 lg:grid-flow-row py-2 lg:grid-cols-2 ">


                                <span className="flex lg:h-[calc(100vh-18rem)] row-span-2 items-center justify-center content-center place-items-center">

                                    <Carousel indicators={false} controls={false} className="lg:h-full  mx-4"
                                        activeIndex={carouselIndex}
                                    >
                                        <Carousel.Item>
                                            <img
                                                src={live1}
                                                className="h-[calc(100vh-25rem)] lg:h-96 2xl:h-full border-2 rounded-3xl"
                                            />

                                        </Carousel.Item>

                                        <Carousel.Item >
                                            <img
                                                src={live2}
                                                className="h-[calc(100vh-25rem)] lg:h-96 2xl:h-full border-2 rounded-3xl"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item >
                                            <img
                                                src={live3}
                                                className="h-[calc(100vh-25rem)] lg:h-96 2xl:h-full border-2 rounded-3xl"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </span>

                                <span className="flex flex-col justify-center h-max w-max  rounded-lg place-self-center mb-0 p-2 text-center text-lg lg:text-xl 2xl:text-3xl bg-black">
                                    Techs:
                                    <span className="flex text-sm flex-row w-max justify-between mx-4 lg:mt-4 lg:mx-5 2xl:mx-11">

                                        <span className="flex flex-col justify-center m-2">
                                            <img src={vitesvg} className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600" alt="React Native" />

                                            <span className="lg:text-sm 2xl:text-xl">Vite</span>
                                        </span>
                                        <span className="flex flex-col justify-center m-2">
                                            <img src={typesvg} className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600" alt="React Native" />

                                            <span className="lg:text-sm 2xl:text-xl">TypeScript</span>
                                        </span>
                                        <span className="flex flex-col justify-center m-2">
                                            <img src={reactredsvg} className=" mt-2 h-8 md:h-12 2xl:h-20 text-red-600" alt="React Native" />

                                            <span className="lg:text-sm 2xl:text-xl">ReactJS</span>
                                        </span>
                                        <span className="flex flex-col justify-center m-2 items-center">
                                            <GithubLogo className="h-8 w-8 md:h-14 md:w-14 2xl:h-20 2xl:w-20" color="red" />

                                            <span className="lg:text-sm 2xl:text-xl">OAuth</span>
                                        </span>

                                    </span>
                                    <span className=" text-end lg:text-base text-xs lg:w-full text-gray-500">
                                        *feito com ajuda da Rocketseat

                                    </span>
                                </span>
                                <span className=" h-10vh mx-4 flex lg:h-32 2xl:h-56 self-end p-3 lg:m-16  text-lg md:text-2xl 2xl:text-5xl rounded-xl border-2 border-red-900 bg-zinc-900 font-thin">{carouselIndex == 0 ? "O objetivo era criar uma aplicação para troca de mensagens entre os usuários em tempo real." : carouselIndex == 1 ? "Nós utilizamos o sistema de autenticação do github para pegar as informações do usuário." : "Os estilos cores e fonte que vocè vê nas imagens eu que escolhi para treinar o que aprendi. "}</span>
                            </Dialog.Description>

                        </Dialog.Panel>
                    </Dialog>

                </Col>
                <Col className=" col-span-1 lg:row-span-1 row-span-2 border-2 rounded-xl h-max w-max justify-center justify-items-center self-center  border-red-600  " onMouseEnter={() => { setIsOpen2(true); handleDialog() }}>
                    <span className="flex p-2 lg:flex-row flex-col items-center w-full justify-center">
                        <img src={logosvg} className="h-10  mx-1" />
                        <h1 className="mx-1 lg:text-lg 2xl:text-2xl flex flex-row">
                            Messages
                            <AndroidLogo size={18} className="align-super ml-1" />
                        </h1>

                    </span>
                    <Dialog className="fixed flex  w-full h-full p-2 lg:top-1 bottom-0" open={isOpen2} onClose={() => { setIsOpen2(false) }}>
                        <Dialog.Panel className=" flex 2xl:ml-48 lg:ml-36 lg:h-fit  flex-col w-full h-full rounded-lg border-2 border-red-500 bg-zinc-800">
                            <Dialog.Title className="md:text-4xl text-2xl font-bold text-center m-2 w-full">

                                Live Messages
                                <span className=" align-super text-xs ml-1">(app)</span>
                                <button onClick={() => setIsOpen2(false)} className="absolute top-5 right-5"><X size={35} /></button>

                            </Dialog.Title>
                            <Dialog.Description className="grid gap-2 lg:grid-flow-row py-2 lg:grid-cols-2 ">



                                <span className="flex lg:h-[calc(100vh-18rem)] row-span-2 items-center justify-center content-center place-items-center">

                                    <Carousel indicators={false} controls={false} className="lg:h-full mx-4"
                                        activeIndex={carouselIndex}
                                    >
                                        <Carousel.Item >
                                            <img
                                                src={live1}
                                                className="h-[calc(100vh-24rem)] lg:h-96 2xl:h-full border-2 rounded-3xl"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                src={app1}
                                                className="h-[calc(100vh-24rem)] lg:h-[calc(100vh-20rem)] border-2 rounded-3xl"
                                            />

                                        </Carousel.Item>

                                        <Carousel.Item >
                                            <img
                                                src={app2}
                                                className="h-[calc(100vh-24rem)] lg:h-[calc(100vh-20rem)] border-2 rounded-3xl"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </span>

                                <span className="flex flex-col justify-center h-max w-max  rounded-lg place-self-center mb-0 p-2 text-center text-lg md :text-xl 2xl:text-3xl bg-black">
                                    Techs:
                                    <span className="flex text-sm flex-row w-max justify-between mx-4 lg:mt-4 lg:mx-5 2xl:mx-11">

                                        <span className="flex flex-col justify-center m-2">
                                            <img src={exposvg} className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600" alt="React Native" />

                                            <span className="lg:text-sm 2xl:text-xl">Expo</span>
                                        </span>
                                        <span className="flex flex-col justify-center m-2">
                                            <img src={typesvg} className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600" alt="React Native" />

                                            <span className="lg:text-sm 2xl:text-xl">TypeScript</span>
                                        </span>
                                        <span className="flex flex-col justify-center m-2">
                                            <img src={reactredsvg} className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600" alt="React Native" />

                                            <span className="lg:text-sm 2xl:text-xl">React Native</span>
                                        </span>
                                        <span className="flex flex-col justify-center m-2 items-center">
                                            <GithubLogo className="h-8 w-8 md:h-14 md:w-14 2xl:h-20 2xl:w-20" color="red" />

                                            <span className="lg:text-sm 2xl:text-xl">OAuth</span>
                                        </span>

                                    </span>
                                    <span className=" text-end lg:text-base text-xs lg:w-full text-gray-500">
                                        *feito com ajuda da Rocketseat

                                    </span>
                                </span>
                                <span className=" h-10vh mx-4  flex lg:h-32 2xl:h-56 self-end p-3 lg:m-16  text-lg md:text-2xl 2xl:text-5xl rounded-xl border-2 border-red-900 bg-zinc-900 font-thin">{carouselIndex == 0 ? "Versão mobile do Live Messages. Procurei fazer o mais parecido o possivel com a versão web." : carouselIndex == 1 ? "Ele foi escrito em React Native utilizando o Expo, tornando-o compativel com android e ios." : "A base de dados é a mesma que a versão web, portanto as mensagens aparecem em todas as versões."}</span>
                            </Dialog.Description>
                        </Dialog.Panel>
                    </Dialog>
                </Col>
                <Col className="row-span-2">
                    <span className="flex flex-col animate-pulse"><span className="row-span-1 text-5xl text-center">+</span><span className="row-span-1 text-lg">em breve</span></span>
                </Col>
                {/* 
                
                <Col className="col-span-1 lg:row-span-1 row-span-2 p-0 h-full flex flex-col gap-2 lg:flex-row  justify-items-center self-center">


                    <Col className="row-span-1 border-2 rounded-xl w-full border-white lg:justify-center " onMouseEnter={() => { setIsOpen3(true); handleDialog() }} onMouseLeave={() => setIsOpen3(false)}>
                        <span className="flex flex-row items-center lg:justify-center  w-full h-full">
                            <img src={icon} className="2xl:h-10 h-8  mx-1" />
                            <h1 className="lg:text-lg 2xl:text-2xl flex flex-row">
                                RND
                                <Planet size={15} className="align-super ml-1" />
                            </h1>

                        </span>
                        <Dialog className="fixed flex lg:w-max lg:h-max h-full p-2 lg:right-9 lg:top-8 bottom-0 lg:mr-8  " open={isOpen3} onClose={() => { setIsOpen3(false) }}>
                            <Dialog.Panel className=" flex p-1 flex-col lg:w-96 w-full h-full justify-between rounded-lg border-2 border-white bg-zinc-800">
                                <Dialog.Title className="lg:text-3xl text-2xl font-bold text-center m-2 w-full">
                                    <button onClick={() => handleDialog()} className="absolute top-5 left-5"><Repeat size={35} /></button>

                                    Live Messages
                                    <span className=" align-super text-xs ml-1">(app)</span>
                                    <button onClick={() => setIsOpen3(false)} className="absolute top-5 right-5"><X size={35} /></button>

                                </Dialog.Title>
                                <Dialog.Description>


                                    <span className="flex items-center justify-center content-center place-items-center">

                                        <Carousel indicators={false} controls={false} className="lg:h-full mx-4"
                                            activeIndex={carouselIndex}
                                        >
                                            <Carousel.Item>
                                                <img
                                                    src={live1}
                                                    className="lg:h-full h-96  border-2 rounded-3xl"
                                                />

                                            </Carousel.Item>

                                            <Carousel.Item >
                                                <img
                                                    src={live2}
                                                    className="lg:h-full h-96 border-2 rounded-3xl"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item >
                                                <img
                                                    src={live3}
                                                    className="lg:h-full h-96 border-2 rounded-3xl"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </span>

                                </Dialog.Description>
                                <span className="p-3 m-2 h-max text-2xl lg:text-lg 2xl:text-2xl rounded-xl border-2 border-red-900 bg-zinc-900 font-semibold">{carouselIndex == 0 ? "Versão mobile do Live Messages. Procurei fazer o mais parecido o possivel com a versão web." : carouselIndex == 1 ? "Ele foi escrito em React Native utilizzando o Expo, tornando-o compativel com android e ios." : "A base de dados é a mesma que a versão web, portanto as mensagens aparecem em todas as versões."}</span>
                            </Dialog.Panel>
                        </Dialog>
                    </Col>

                    <Col className="row-span-1 border-2 rounded-xl w-full border-white  " onMouseEnter={() => { setIsOpen4(true); handleDialog() }} onMouseLeave={() => setIsOpe4(false)}>

                        <span className="flex flex-row  items-center lg:justify-center w-full h-full">
                            <img src={icon} className="2xl:h-10 h-8  mx-1" />
                            <h1 className="lg:text-lg 2xl:text-2xl flex flex-row">
                                RND
                                <AndroidLogo size={15} className="align-super ml-1" />
                            </h1>

                        </span>
                        <Dialog className="fixed flex lg:w-max lg:h-max h-full p-2 lg:right-96 lg:top-8 bottom-0 lg:mr-8  " open={isOpen4} onClose={() => { setIsOpen4(false) }}>
                            <Dialog.Panel className=" flex p-1 flex-col lg:w-96 w-full h-full justify-between rounded-lg border-2 border-white bg-zinc-800">
                                <Dialog.Title className="lg:text-3xl text-2xl font-bold text-center m-2 w-full">
                                    <button onClick={() => handleDialog()} className="absolute top-5 left-5"><Repeat size={35} /></button>

                                    Live Messages
                                    <span className=" align-super text-xs ml-1">(app)</span>
                                    <button onClick={() => setIsOpen4(false)} className="absolute top-5 right-5"><X size={35} /></button>

                                </Dialog.Title>
                                <Dialog.Description>


                                    <span className="flex items-center justify-center content-center place-items-center">

                                        <Carousel indicators={false} controls={false} className="lg:h-full mx-4"
                                            activeIndex={carouselIndex}
                                        >
                                            <Carousel.Item>
                                                <img
                                                    src={live1}
                                                    className="lg:h-full h-96  border-2 rounded-3xl"
                                                />

                                            </Carousel.Item>

                                            <Carousel.Item >
                                                <img
                                                    src={live2}
                                                    className="lg:h-full h-96 border-2 rounded-3xl"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item >
                                                <img
                                                    src={live3}
                                                    className="lg:h-full h-96 border-2 rounded-3xl"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </span>

                                </Dialog.Description>
                                <span className="p-3 m-2 h-max text-2xl lg:text-lg 2xl:text-2xl rounded-xl border-2 border-red-900 bg-zinc-900 font-semibold">{carouselIndex == 0 ? "Versão mobile do Live Messages. Procurei fazer o mais parecido o possivel com a versão web." : carouselIndex == 1 ? "Ele foi escrito em React Native utilizzando o Expo, tornando-o compativel com android e ios." : "A base de dados é a mesma que a versão web, portanto as mensagens aparecem em todas as versões."}</span>
                            </Dialog.Panel>
                        </Dialog>
                    </Col>

                </Col>
 */}
            </Row>

        </Container>

    )
}