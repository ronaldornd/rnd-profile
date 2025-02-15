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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { AndroidLogo, CheckCircle, ClockClockwise, Disc, Eraser, FigmaLogo, GearSix, GoogleChromeLogo, GooglePlayLogo, LinuxLogo, ScribbleLoop, WindowsLogo, Wrench, X } from "@phosphor-icons/react"
import 'bootstrap/dist/css/bootstrap.css';

export default function Habilities() {










    return (


        <Container className="grid xl:h-screen xl:grid-flow-row gap-3 justify-items-center p-3 mb-14 xl:mb-0 w-max">
            <Row className="grid grid-flow-row w-full h-full grid-cols-3 xl:grid-cols-6 items-center justify-items-center xl:gap-4 gap-3 justify-between">
                <span className="flex flex-col w-full items-center 2xl:gap-3 gap-2 m-1 p-2 border-2 border-green-700 bg-black rounded-lg">
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-2xl">
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
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-2xl">

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
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-2xl">

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
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-2xl">

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
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-2xl">

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
                    <span className="flex flex-row items-center justify-center gap-1 2xl:text-2xl">

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
            <Row className="grid grid-cols-1 grid-rows-3 gap-3 xl:gap-0 xl:grid-rows-1 grid-flow-col xl:grid-flow-row xl:grid-cols-3 xl:w-max w-full h-max items-center justify-center">
                <span className="flex flex-col gap-3 grid-col-span-1 w-full h-full">
                    {/* habilidades com sistemas*/}
                    <span className="flex flex-col gap-2 w-full h-max bg-zinc-800 rounded-lg border-green-800 border-2 p-2 items-center justify-center">
                        <h1 className="text-xl 2xl:p-1  2xl:text-2xl">Instalação de sistemas</h1>
                        <div className=" bg-zinc-900 rounded-lg w-full p-2">
                            <div className="w-full flex-row grid grid-flow-col grid-rows-2 grid-cols-2 gap-2 text-center items-justify-items-center" >
                                <span className="col-span-1 flex xl:flex-col items-center justify-center flex-row 2xl:text-xl w-max">
                                    <WindowsLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Windows
                                </span>
                                <span className="col-span-1 flex xl:flex-col items-center justify-center flex-row 2xl:text-xl w-max">
                                    <LinuxLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />Linux
                                </span>
                                <span className="col-span-1 flex xl:flex-col items-center justify-center flex-row 2xl:text-xl w-max">
                                    <AndroidLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Android
                                </span>
                                <span className="col-span-1 flex xl:flex-col items-center justify-center flex-row 2xl:text-xl w-max">
                                    <GoogleChromeLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    ChromeOS
                                </span>
                            </div>
                        </div>
                    </span>

                    {/* habilidades com celulares*/}
                    <span className="flex flex-col w-full h-max bg-zinc-800 rounded-lg sm:gap-2 border-green-800 border-2 p-2 items-center justify-center">
                        <h1 className="text-xl 2xl:p-1  2xl:text-2xl">Celulares</h1>
                        <div className=" bg-zinc-900 rounded-lg w-full p-2">
                            <div className="flex flex-col gap-2 " >
                                <span className="flex flex-row items-center 2xl:text-xl w-max">
                                    <GearSix className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Flash de rom
                                </span>
                                <span className="flex flex-row items-center 2xl:text-xl w-max">
                                    <Wrench className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Reparo de peças
                                </span>
                                <span className="flex flex-row items-center 2xl:text-xl w-max">
                                    <img src={glasssvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Aplicação de peliculas
                                </span>
                                <span className="flex flex-row items-center 2xl:text-xl w-max">
                                    <GooglePlayLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                    Auxilio para instalação de app's
                                </span>

                            </div>
                        </div>
                    </span>
                </span>
                <span className="flex flex-col gap-3 grid-col-span-1 w-full h-full">

                    {/* habilidades com computadores*/}
                    <span className="flex flex-col w-full h-max bg-zinc-800 rounded-lg sm:gap-2 border-green-800 border-2 p-2 items-center text-center justify-center">
                        <h1 className="text-xl 2xl:p-1  2xl:text-2xl">Manutenção de computadores</h1>

                        <span className="grid rounded-lg w-full grid-cols-2 p-2 bg-zinc-900 gap-2" >
                            <span className="flex flex-row col-span-1 justify-center items-center text-center 2xl:text-xl w-max">
                                <Eraser className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Formatação
                            </span>
                            <span className="flex flex-row col-span-1 justify-center items-center text-center 2xl:text-xl w-max">
                                <Disc className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Instalação
                            </span>
                            <span className="flex flex-row col-span-1 justify-center items-center text-center 2xl:text-xl w-max">
                                <Wrench className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />

                                Troca de peças
                            </span>
                            <span className="flex flex-row col-span-1 justify-center items-center text-center 2xl:text-xl w-max">
                                <img src={cleansvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Limpeza
                            </span>
                            <span className="flex flex-row 2xl:text-xl w-max justify-center items-center text-center col-span-2">
                                <ClockClockwise className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Backup e Recuperação de Dados
                            </span>
                        </span>

                    </span>

                    {/* habilidades com sites*/}
                    <span className="flex flex-col w-full h-max bg-zinc-800 rounded-lg sm:gap-2 border-green-800 border-2 p-2 items-center text-center justify-center">
                        <h1 className="flex flex-row text-xl 2xl:p-1  2xl:text-2xl">WEB <h2 className="text-lg ml-1 align-super">(React)</h2></h1>

                        <span className="grid rounded-lg w-full grid-cols-2 p-2 bg-zinc-900 gap-2" >
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-xl w-max">
                                <FigmaLogo className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                Prototipação
                            </span>
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-xl w-max">
                                <img src={createsvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Criação
                            </span>
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-xl w-max">
                                <ScribbleLoop className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                Logotipo
                            </span>
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-xl w-max">
                                <img src={backsvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10 " />
                                Back-end
                            </span>
                            <span className="flex flex-row justify-center items-center text-center 2xl:text-xl w-max col-span-2">
                                <img src={apksvg} className="h-6 w-6 m-1 2xl:w-10 2xl:h-10" />
                                Criação de versão mobile (APK)
                            </span>
                        </span>
                    </span>
                </span>
                <div className="flex flex-col col-span-1 row-span-1 w-full h-full gap-1">
                    <span className="flex flex-col w-full h-max text-center xl:text-3xl text-2xl p-2">
                        Habilidades
                    </span>
                    <div className="flex flex-col h-full justify-between my-3">

                        <span className="flex flex-row gap-2 items-center xl:text-sm 2xl:text-xl w-full">
                            <CheckCircle color="#22ff59" />
                            Facilidade no aprendizado
                        </span>
                        <span className="flex flex-row gap-2 items-center xl:text-sm 2xl:text-xl w-full">
                            <CheckCircle color="#22ff59" />
                            Desenvolvimento de bases de dados
                        </span>
                        <span className="flex flex-row gap-2 items-center xl:text-sm 2xl:text-xl w-full">
                            <CheckCircle color="#22ff59" />
                            Resolução de problemas e depuração
                        </span>
                        <span className="flex flex-row gap-2 items-center xl:text-sm 2xl:text-xl w-full">
                            <CheckCircle color="#22ff59" />Gerenciamento de banco de dados
                        </span>
                        <span className="flex flex-row gap-2 items-center xl:text-sm 2xl:text-xl w-full">
                            <CheckCircle color="#22ff59" /> Fundamentos de hardware
                        </span>
                        <span className="flex flex-row gap-2 items-center xl:text-sm 2xl:text-xl w-full">
                            <CheckCircle color="#22ff59" /> Desenvolvimento de páginas web
                        </span>
                        <span className="flex flex-row gap-2 items-center xl:text-sm 2xl:text-xl w-full">
                            <CheckCircle color="#22ff59" /> Implementação de JavaScript
                        </span>
                        <span className="flex flex-row gap-2 items-center xl:text-sm 2xl:text-xl w-full">
                            <CheckCircle color="#22ff59" /> Gerenciamento de redes
                        </span>
                        <span className="flex flex-row gap-2 items-center xl:text-sm 2xl:text-xl w-full">
                            <CheckCircle color="#22ff59" /> Engenharia de Software
                        </span>
                    </div>
                </div>

            </Row>
           

        </Container>

    )
}