import ProgressBar from "@ramonak/react-progress-bar";



import { Barricade, GraduationCap, MapPin } from "phosphor-react";
import rocket from "../../../images/rocket.svg";
export default function Academic() {
    return (
        <>
            <div className="grid p-3 lg:grid-cols-2 w-full h-full items-center  justify-center gap-3">
                <div className="flex flex-col w-full h-full bg-zinc-800 rounded-lg  border-green-800 border-2 ">
                    <div className=" flex flex-col bg-black w-full p-2 rounded-b-xl rounded-lg">
                        <div className="flex flex-row justify-between w-full items-center">
                            <GraduationCap className="h-6 w-6 2xl:w-10 2xl:h-10 m-1" />
                            <span className="m-1 flex-col w-full">
                                <h1 className="text-lg 2xl:text-3xl font-bold"> E.E. Cel. Benedito Ramos Arantes</h1>
                                <h2 className="flex flex-row text-sm 2xl:text-xl font-semibold gap-2 items-center">
                                    <h2 className="text-sm 2xl:text-xl font-semibold">
                                        Ensino Médio
                                    </h2>
                                    <h2 className="text-zinc-500 font-bold">
                                        2015
                                    </h2>
                                </h2>
                            </span>
                        </div>
                        <span className="flex flex-col w-full ">
                            <span className="flex flex-row w-full justify-between"><span className="font-thin 2xl:text-xl">Inicial</span><span className="font-thin 2xl:text-xl">Intermediário</span><span className="font-thin 2xl:text-xl">Completo</span></span>
                            <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="5px" isLabelVisible={false} />
                        </span>

                    </div>
                    <span className="flex text-justify 2xl:text-2xl m-2 p-2 rounded-lg bg-zinc-900">Não temos muito o que falar do ensino médio né? O diferencial do meu foi que no 3° ano nós fizemos um trabalho voluntário, onde íamos a um asilo da cidade para levarmos a ajuda que podíamos, seja numa necessidade, ou apenas para alegrar e tornar o dia deles melhor.</span>
                </div>
                <div className="flex flex-col w-full h-full bg-zinc-800 rounded-lg  border-green-800 border-2 ">
                    <div className=" flex flex-col bg-black w-full p-2 rounded-b-xl rounded-lg">
                        <span className="flex flex-col w-full ">
                            <div className="flex flex-row justify-between w-full items-center">
                                <GraduationCap className="h-6 w-6 2xl:w-10 2xl:h-10 m-1" />
                                <span className="m-1 flex-col w-full">
                                    <h1 className="text-lg 2xl:text-3xl font-bold"> ETE Miguel Batista</h1>
                                    <h2 className="flex flex-row text-sm 2xl:text-xl font-semibold gap-2 items-center">
                                        <h2 className="text-sm 2xl:text-xl font-semibold">
                                            Desenv. de Sistemas
                                        </h2>
                                        <h2 className="text-zinc-500 font-bold">
                                            2016/18
                                        </h2>
                                    </h2>

                                </span>
                            </div>

                            <span className="flex flex-row w-full justify-between"><span className="font-thin 2xl:text-xl">Inicial</span><span className="font-thin 2xl:text-xl">Intermediário</span><span className="font-thin 2xl:text-xl">Completo</span></span>
                            <ProgressBar completed={70} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="5px" isLabelVisible={false} />
                        </span>

                    </div>
                    <span className="flex text-justify 2xl:text-2xl  m-2 p-2 rounded-lg bg-zinc-900">Meu "primeiro" técnico oficial foi onde despertei a paixão por programação. Nós éramos estimulados a criar soluções para empresas de forma a atender suas necessidades. Estava me saindo muito bem, e desenvolvi muito minha lógica que já era bem trabalhada, só que em jogos rsrs. Mas por motivos familiares eu tive que abandonar o curso.</span>
                </div>
                <div className="w-auto h-full bg-zinc-800 rounded-lg  border-green-800 flex-row border-2  items-center justify-center">
                    <div className=" flex flex-col bg-black w-full p-2 rounded-b-xl rounded-lg">
                        <div className="flex flex-row justify-between w-full items-center">
                            <GraduationCap className="h-6 w-6 2xl:w-10 2xl:h-10 m-1" />
                            <span className="m-1 flex-col w-full">
                                <h1 className="text-lg 2xl:text-3xl font-bold">IFPE Campus Jaboatão</h1>
                                <h2 className="flex flex-row text-sm 2xl:text-xl font-semibold gap-2 items-center">
                                    <h2 className="text-sm 2xl:text-xl font-semibold">
                                        Informática para Internet
                                    </h2>
                                    <h2 className="text-zinc-500 font-bold">
                                        2019/22
                                    </h2>
                                </h2>

                            </span>
                        </div>

                        <span className="flex flex-col w-full ">
                            <span className="flex flex-row w-full justify-between"><span className="font-thin 2xl:text-xl">Inicial</span><span className="font-thin 2xl:text-xl">Intermediário</span><span className="font-thin 2xl:text-xl">Completo</span></span>
                            <ProgressBar completed={80} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="5px" isLabelVisible={false} />
                        </span>

                    </div>
                    <span className="flex text-justify 2xl:text-2xl m-2 p-2 rounded-lg bg-zinc-900">Esse foi o divisor de águas pra eu ter certeza que é nessa área que quero me especializar.  O foco era desenvolver para o mercado online, o que mais cresce atualmente. Como no anterior eu estava indo bem, e até fui monitor bolsista em uma matéria que tive excelência (WEB 2), mas antes do início do último período eu cedi á minha necessidade de ver meus familiares que não via há 6 anos e dessa vez fui mais esperto e tranquei a matricula para um possível retorno 😉.</span>
                </div>
                <div className="flex w-full h-full bg-zinc-800 rounded-lg  border-purple-800 flex-col border-2 items-center justify-center">
                    <div className=" flex flex-col bg-black w-full p-2 rounded-b-xl rounded-lg">
                        <div className="flex flex-row justify-between w-full items-center">
                            <img src={rocket} className="h-6 w-6 2xl:w-10 2xl:h-10 m-1" />
                            <span className="m-1 flex-col w-full">
                                <h1 className="text-lg 2xl:text-3xl font-bold"> Rocketseat</h1>
                                <h2 className="flex flex-row text-sm 2xl:text-xl font-semibold"> Autodidata
                                </h2>
                            </span>
                        </div>

                        <span className="flex flex-col w-full ">
                            <span className="flex flex-row w-full justify-between"><span className="font-thin 2xl:text-xl">Inicial</span><span className="font-thin 2xl:text-xl">Intermediário</span><span className="font-thin 2xl:text-xl">Completo</span></span>
                            <span className="flex "><ProgressBar baseBgColor="transparent" completed={50} className="w-full" height="5px" isLabelVisible={false} /></span>
                        </span>
                    </div>
                    <span className="flex flex-col w-full rounded-lg bg-zinc-900 m-2 p-2 h-full">
                        <span className="flex w-max h-max 2xl:text-2xl  text-lg font-sans px-3 self-center p-1 rounded-lg justify-center bg-black">
                            Trilhas
                        </span>
                        <span className="flex flex-col w-full h-full mx-2">
                            <span className="flex w-max h-max 2xl:text-xl">
                                Conectar (Revisando)
                            </span>
                            <span>
                                <span ><ProgressBar baseBgColor="transparent" completed={18} className="flex" height="5px" isLabelVisible={false} /></span>

                            </span>
                        </span>
                        <span className="flex flex-col w-full h-full mx-2">
                            <span className="flex w-max h-max 2xl:text-xl">
                                Fundamentar
                            </span>
                            <span >
                                <span ><ProgressBar baseBgColor="transparent" completed={13} className="w-full" height="5px" isLabelVisible={false} /></span>

                            </span>
                        </span>
                        <span className="flex flex-col w-full h-full mx-2">
                            <span className="flex w-max h-max 2xl:text-xl">
                                Especializar
                            </span>
                            <span >
                                <span ><ProgressBar baseBgColor="transparent" completed={1} className="w-full" height="5px" isLabelVisible={false} /></span>

                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}