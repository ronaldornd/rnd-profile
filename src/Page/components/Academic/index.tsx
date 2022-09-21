import ProgressBar from "@ramonak/react-progress-bar";



import { Barricade, GraduationCap, MapPin } from "phosphor-react";
import rocket from "../../../images/rocket.svg";
export default function Academic() {
    return (
        <>
            <div className="grid pt-14 lg:pt-0 lg:grid-cols-2 w-full h-full items-center  justify-center gap-5">
                <div className="flex flex-col w-full h-full bg-zinc-800 rounded-lg  border-green-800 border-2 p-2 ">
                    <div className=" flex flex-col bg-black w-full p-2 rounded-lg">
                        <div className="flex flex-row justify-between w-full"><span className="flex flex-row font-bold items-center"> <GraduationCap className="h-6 w-6 m-1" /><h1 className="m-1">Ensino Médio</h1><h2 className="text-zinc-500 m-1 font-bold">2015</h2></span><MapPin className="h-6 w-6 m-1" /></div>
                        <span className="flex flex-col w-full ">
                            <span className="flex flex-row w-full justify-between"><span className="font-thin">Inicial</span><span className="font-thin">Intermediário</span><span className="font-thin">Completo</span></span>
                            <ProgressBar completed={100} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="5px" isLabelVisible={false} />
                        </span>

                    </div>
                    <span className="flex text-justify m-2 p-2 rounded-lg bg-zinc-900">Não temos muito o que falar do ensino médio né? O diferencial do meu foi que no 3° ano nós fizemos um trabalho voluntário, onde iamos a um asilo da cidade para levarmos a ajuda que podiamos, seja numa necessidade, ou apenas para alegrar e tornar o dia deles melhor.</span>
                </div>
                <div className="flex flex-col w-full h-full bg-zinc-800 rounded-lg  border-green-800 border-2 p-2  items-center justify-center">
                    <div className=" flex flex-col bg-black w-full p-2 rounded-lg">
                        <span className="flex flex-col w-full ">
                            <div className="flex flex-row justify-between"><span className="flex flex-row font-bold items-center"> <GraduationCap className="h-6 w-6 m-1" /><h1 className="m-1">Técnico</h1><h2 className="text-zinc-500 m-1 font-bold">2016/18</h2></span><MapPin className="h-6 w-6 m-1" /></div>
                            <span className="flex flex-row w-full justify-between"><span className="font-thin">Inicial</span><span className="font-thin">Intermediário</span><span className="font-thin">Completo</span></span>
                            <ProgressBar completed={70} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="5px" isLabelVisible={false} />
                        </span>

                    </div>
                    <span className="flex text-justify m-2 p-2 rounded-lg bg-zinc-900">Meu "primeiro" tecnico oficial foi onde despertei a paixão por programação. Nós eramos estimulados a criar soluções para empresas de forma a atender suas necessidades. Estava me saindo muito bem, e desenvolvi muito minha lógia que ja era be trabalhada, so que em jogos rsrs. Mas por motivos familiares eu tive que abandonar o curso.</span>
                </div>
                <div className="w-auto h-full bg-zinc-800 rounded-lg  border-green-800 flex-row border-2 p-2  items-center justify-center">
                    <div className=" flex flex-col bg-black w-full p-2 rounded-lg">
                        <div className="flex flex-row justify-between w-full"><span className="flex flex-row font-bold items-center"> <GraduationCap className="h-6 w-6 m-1" /><h1 className="m-1">Técnico</h1><h2 className="text-zinc-500 m-1 font-bold">2019/22</h2></span><MapPin className="h-6 w-6 m-1" /></div>
                        <span className="flex flex-col w-full ">
                            <span className="flex flex-row w-full justify-between"><span className="font-thin">Inicial</span><span className="font-thin">Intermediário</span><span className="font-thin">Completo</span></span>
                            <ProgressBar completed={80} baseBgColor="transparent" className="w-full" bgColor="#22ff59" height="5px" isLabelVisible={false} />
                        </span>

                    </div>
                    <span className="flex text-justify m-2 p-2 rounded-lg bg-zinc-900">Após ter resolvido minhas pendencias, eu ingressei nesse curso, ele foi o divisor de aguás pra eu ter certeza que é nessa area que quero me especializar. Revi muitos conceitos e serviu pra lubrificar as engrenagens que estavam paradas desde o ultimo. Nesse o foco era desenvolver para o mercado online, o que mais cresce atualmente. Como no anterior eu estava indo bem, e até fui monitor bolsista em uma matéria que tive excelência (WEB 2), mas antes do inicio do ultimo periodo eu cedi a minha necessidade de ver meus familiares que não via a 6 anos e dessa vez fui mais esperto e tranquei a matricula para um possivel retorno 😉.</span>
                </div>
                <div className="flex w-auto h-full bg-zinc-800 rounded-lg  border-purple-800 flex-col border-2 p-2  items-center justify-center">
                    <div className=" flex flex-col bg-black w-full p-2 rounded-lg">
                        <div className="flex flex-row justify-between"><span className="flex flex-row font-bold items-center"> <img src={rocket} className="h-6 w-6 m-1" /><h1 className="m-1">Autodidata</h1><h2 className="text-zinc-500 m-1 font-bold"></h2> </span></div>
                        <span className="flex flex-col w-full ">
                            <span className="flex flex-row w-full justify-between"><span className="font-thin">Inicial</span><span className="font-thin">Intermediário</span><span className="font-thin">Completo</span></span>
                            <span className="flex "><ProgressBar baseBgColor="transparent" completed={50} className="w-full" height="5px" isLabelVisible={false} /></span>
                        </span>
                    </div>
                    <span className="flex flex-col w-full rounded-lg bg-zinc-900 m-2 p-2 h-full">
                        <span className="flex w-max h-max  text-lg font-sans px-3 self-center p-1 rounded-lg justify-center bg-black">
                            Trilhas
                        </span>
                        <span className="flex flex-col w-full h-full m-2">
                            <span className="flex w-max h-max">
                                Conectar
                            </span>
                            <span >
                                <span ><ProgressBar baseBgColor="transparent" completed={50} className="w-full" height="5px" isLabelVisible={false} /></span>

                            </span>
                        </span>
                        <span className="flex flex-col w-full h-full m-2">
                            <span className="flex w-max h-max">
                                Fundamentar
                            </span>
                            <span >
                                <span ><ProgressBar baseBgColor="transparent" completed={50} className="w-full" height="5px" isLabelVisible={false} /></span>

                            </span>
                        </span>
                        <span className="flex flex-col w-full h-full m-2">
                            <span className="flex w-max h-max">
                                Conectar
                            </span>
                            <span >
                                <span ><ProgressBar baseBgColor="transparent" completed={50} className="w-full" height="5px" isLabelVisible={false} /></span>

                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}