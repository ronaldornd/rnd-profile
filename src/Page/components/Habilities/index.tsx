import ProgressBar from "@ramonak/react-progress-bar";
import html5svg from "../../../images/HTML.svg";
import officesvg from "../../../images/office.svg";
import languagesvg from "../../../images/language.svg";
import logicsvg from "../../../images/logic.svg";
import csssvg from "../../../images/css.svg";
import reactsvg from "../../../images/react.svg";
import apksvg from "../../../images/apk.svg";
import cleansvg from "../../../images/clean.svg";
import createsvg from "../../../images/create.svg";
import backsvg from "../../../images/back.svg";
import glasssvg from "../../../images/glass.svg";
import { AndroidLogo, CheckCircle, ClockClockwise, Disc, DotsNine, Eraser, FigmaLogo, GearSix, GoogleChromeLogo, GooglePlayLogo, LinuxLogo, ScribbleLoop, WindowsLogo, Wrench } from "phosphor-react";

export default function Habilities() {

    return (
        <>
            <div className="flex flex-col pt-14 gap-5 lg:pt-0 w-full h-full">
                <span className="grid grid-flow-row grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-1 justify-between">
                    <span className="flex flex-col w-max items-center  m-1 p-2 border-2 border-green-700 bg-black rounded-lg">
                        <span className="flex w-full flex-row items-center justify-center gap-1">
                            <img src={officesvg} className="h-5 w-5" />
                            Office
                        </span>
                        <span className="flex flex-row w-max h-max  border-2 rounded-xl border-zinc-800">

                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={10} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />

                        </span>
                    </span>

                    <span className="flex flex-col w-max items-center self-center m-1 p-2 border-2 border-green-700 bg-black rounded-lg">
                        <span className="flex w-full flex-row items-center justify-center gap-1">

                            <img src={languagesvg} className="h-5 w-5 " />
                            Inglês
                        </span>
                        <span className="flex flex-row w-max h-max  border-2 rounded-xl border-zinc-800">


                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />


                            <ProgressBar completed={50} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={10} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />

                        </span>
                    </span>
                    <span className="flex flex-col w-max items-center self-center m-1 p-2 border-2 border-green-700 bg-black rounded-lg">
                        <span className="flex w-full flex-row items-center justify-center gap-1">

                            <img src={logicsvg} className="h-5 w-5" />
                            Lógica
                        </span>
                        <span className="flex flex-row w-max h-max  border-2 rounded-xl border-zinc-800">


                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />


                            <ProgressBar completed={50} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={10} baseBgColor="transparent" className="w-5" bgColor="#22ff59" height="8px" isLabelVisible={false} />

                        </span>
                    </span>
                    <span className="flex flex-col w-max items-center self-center m-1 p-2 border-2 border-orange-700 bg-black rounded-lg">
                        <span className="flex w-full flex-row items-center justify-center gap-1">

                            <img src={html5svg} className="h-5 w-5" />
                            HTML5
                        </span>
                        <span className="flex flex-row w-max h-max  border-2 rounded-xl border-zinc-800">


                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#d76b00" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#d76b00" height="8px" isLabelVisible={false} />


                            <ProgressBar completed={50} baseBgColor="transparent" className="w-5" bgColor="#d76b00" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={10} baseBgColor="transparent" className="w-5" bgColor="#d76b00" height="8px" isLabelVisible={false} />

                        </span>
                    </span>
                    <span className="flex flex-col w-max items-center self-center m-1 p-2 border-2 border-blue-700 bg-black rounded-lg">
                        <span className="flex w-full flex-row items-center justify-center gap-1">

                            <img src={csssvg} className="h-5 w-5" />
                            CSS
                        </span>
                        <span className="flex flex-row w-max h-max  border-2 rounded-xl border-zinc-800">


                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#255be9 " height="8px" isLabelVisible={false} />
                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#255be9" height="8px" isLabelVisible={false} />


                            <ProgressBar completed={50} baseBgColor="transparent" className="w-5" bgColor="#255be9" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={10} baseBgColor="transparent" className="w-5" bgColor="#255be9" height="8px" isLabelVisible={false} />

                        </span>
                    </span>
                    <span className="flex flex-col w-max items-center self-center m-1 p-2 border-2 border-purple-700 bg-black rounded-lg">
                        <span className="flex w-full flex-row items-center justify-center gap-1">

                            <img src={reactsvg} className="h-5 w-5" />
                            React.JS
                        </span>
                        <span className="flex flex-row w-max h-max  border-2 rounded-xl border-zinc-800">


                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#800080" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={100} baseBgColor="transparent" className="w-5" bgColor="#800080" height="8px" isLabelVisible={false} />


                            <ProgressBar completed={50} baseBgColor="transparent" className="w-5" bgColor="#800080" height="8px" isLabelVisible={false} />
                            <ProgressBar completed={10} baseBgColor="transparent" className="w-5" bgColor="#800080" height="8px" isLabelVisible={false} />

                        </span>
                    </span>
                </span>
                <div className="lg:grid flex flex-col grid-cols-1 gap-5 grid-rows-auto grid-flow-col lg:grid-flow-row  lg:grid-rows-auto lg:grid-cols-3  w-full h-max items-center justify-center">
                    <span className="flex flex-col gap-5 row-span-1 w-full h-max">
                        <span className="flex flex-col  w-full h-max bg-zinc-800 rounded-lg border-green-800 border-2 p-2 items-center justify-center">
                            <h1 className="text-xl m-2">Instalação de sistemas</h1>
                            <div className=" bg-zinc-900 rounded-lg w-full p-2">
                                <div className="lg:flex w-full flex-row grid grid-flow-col grid-rows-2 grid-cols-2 gap-2 text-center items-justify-items-center" >
                                    <span className="col-span-1 flex w-full lg:flex-col items-center justify-center flex-row">
                                        <WindowsLogo className="h-8 w-8 m-1" />
                                        Windows
                                    </span>
                                    <span className="col-span-1 flex w-full lg:flex-col items-center justify-center flex-row">
                                        <LinuxLogo className="h-8 w-8 m-1" />center
                                    </span>
                                    <span className="col-span-1 flex w-full lg:flex-col items-center justify-center flex-row">
                                        <AndroidLogo className="h-8 w-8 m-1" />
                                        Android
                                    </span>
                                    <span className="col-span-1 flex w-full lg:flex-col items-center justify-center flex-row">
                                        <GoogleChromeLogo className="h-8 w-8 m-1" />
                                        ChromeOS
                                    </span>
                                </div>
                            </div>
                        </span>
                        <span className="flex flex-col w-full h-max bg-zinc-800 rounded-lg border-green-800 border-2 p-2 items-center justify-center">
                            <h1 className="text-xl m-2">Celulares</h1>
                            <div className=" bg-zinc-900 rounded-lg w-full p-2">
                                <div className="flex flex-col gap-2" >
                                    <span className="flex flex-row items-center">
                                        <GearSix className="h-6 w-6 m-1" />
                                        Flash de rom
                                    </span>
                                    <span className="flex flex-row items-center">
                                        <Wrench className="h-6 w-6 m-1" />
                                        Reparo de peças
                                    </span>
                                    <span className="flex flex-row items-center">
                                        <img src={glasssvg} className="h-6 w-6 m-1" />
                                        Aplicação de peliculas
                                    </span>
                                    <span className="flex flex-row items-center">
                                        <GooglePlayLogo className="h-6 w-6 m-1" />
                                        Auxilio para instalação de serviços
                                    </span>

                                </div>
                            </div>
                        </span>
                    </span>
                    <span className="flex flex-col gap-5 col-span-1 w-full h-max">

                        <span className="flex flex-col w-full h-max bg-zinc-800 rounded-lg border-green-800 border-2 p-2 items-center text-center justify-center">
                            <h1 className="text-xl m-2">Manutenção de computadores</h1>

                            <span className="grid rounded-lg w-full grid-cols-2 p-2 bg-zinc-900 gap-2" >
                                <span className="flex flex-row col-span-1 justify-center items-center text-center">
                                    <Eraser className="h-6 w-6 m-1 " />
                                    Formatação
                                </span>
                                <span className="flex flex-row col-span-1 justify-center items-center text-center">
                                    <Disc className="h-6 w-6 m-1 " />
                                    Instalação
                                </span>
                                <span className="flex w-max flex-row col-span-1 justify-center items-center text-center">
                                    <Wrench className="h-6 w-6 m-1" />

                                    Troca de peças
                                </span>
                                <span className="flex flex-row col-span-1 justify-center items-center text-center">
                                    <img src={cleansvg} className="h-6 w-6 m-1 " />
                                    Limpeza
                                </span>
                                <span className="flex flex-row  justify-center items-center text-center col-span-2">
                                    <ClockClockwise className="h-6 w-6 m-1 " />
                                    Backup e Recuperação de Dados
                                </span>
                            </span>

                        </span>
                        <span className="flex flex-col w-full h-max bg-zinc-800 rounded-lg border-green-800 border-2 p-2 items-center text-center justify-center">
                            <h1 className="text-xl m-2">WEB</h1>

                            <span className="grid rounded-lg w-full grid-cols-2 p-2 bg-zinc-900 gap-2" >
                                <span className="flex flex-row justify-center items-center text-center">
                                    <FigmaLogo className="h-6 w-6 m-1" />
                                    Prototipação
                                </span>
                                <span className="flex flex-row justify-center items-center text-center">
                                    <img src={createsvg} className="h-6 w-6 m-1 " />

                                    Criação
                                </span>
                                <span className="flex flex-row justify-center items-center text-center">
                                    <ScribbleLoop className="h-6 w-6 m-1" />
                                    Logotipo
                                </span>
                                <span className="flex flex-row justify-center items-center text-center">
                                    <img src={backsvg} className="h-6 w-6 m-1 " />
                                    Back-end
                                </span>
                                <span className="flex flex-row justify-center items-center text-center col-span-2">
                                    <img src={apksvg} className="h-6 w-6 m-1" />
                                    Criação de versão mobile (APK)
                                </span>
                            </span>

                        </span>
                    </span>
                    <div className="flex flex-col col-span-1 row-span-1 h-max gap-2">
                        <span className="flex flex-col w-full h-full text-center text-3xl m-2 p-2">
                            Habilidades
                        </span>

                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" />
                            Facilidade no aprendizado
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" />
                            Desenvolvimento de bases de dados
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" />
                            Resolução de problemas e depuração
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" /> Criação de programas em Java
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" />Gerenciamento de banco de dados
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" /> Fundamentos de hardware
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" /> Desenvolvimento de páginas web
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" /> Implementação de JavaScript
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" /> Gerenciamento de redes
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <CheckCircle color="#22ff59" /> Engenharia de Software
                        </span>
                    </div>

                </div>
                <div className="h-full w-full bg-zinc-700">

                </div>

            </div>
        </>
    )
}