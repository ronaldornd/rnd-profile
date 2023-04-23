import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import profile from "../../../images/profile.jpg";


export default function Info() {
    return (

        <>
            <div className=" flex lg:mt-0  flex-col h-full w-full justify-center gap-3">

                <div className="flex gap-3 flex-col lg:flex-row  w-full justify-between">
                    <div className="flex gap-3 flex-col lg:flex-row md:flex-row bg-zinc-800 rounded-xl w-full border-green-800 lg:w-max h-fit border-2 p-3  items-center justify-center">
                        <img className="h-20 w-20 2xl:w-48 2xl:h-48 md:h-28 md:w-28 rounded-lg" src={profile}></img>
                        <div className="md:flex-col sm:flex-row justify-between rounded-xl p-2 bg-zinc-900 w-full lg:w-max h-auto">
                            <h1 className="text-center lg:text-3xl text-2xl w-auto text-zinc-400 pb-3    ">Básico</h1>
                            <p className="text-xl 2xl:text-3xl w-auto text-center ">Ronaldo da Silva Barbosa</p>
                            <div className="flex-row flex lg:justify-between justify-around  lg:w-auto">
                                <h1 className="text-xl  2xl:text-3xl w-max">25 anos</h1><h1 className="text-xl 2xl:text-3xl w-max">Solteiro</h1>
                            </div>
                        </div>

                    </div>
                    <div className="flex w-auto h-full bg-zinc-800 rounded-xl  border-green-800 flex-row border-2 p-3  items-center justify-center">
                        <div className="flex-col flex justify-between rounded-xl p-2 bg-zinc-900 w-full h-auto">
                            <h1 className="text-center lg:text-3xl text-2xl w-auto text-zinc-400 pb-3    ">Contatos</h1>
                            <div className="flex-col flex items-center justify-center  w-auto">
                                <h1 className=" text-lg lg:text-xl 2xl:text-3xl w-auto">ronaldo.s.barbosa@outlook.com</h1>
                                <h1 className="text-lg lg:text-xl 2xl:text-3xl w-auto">(11)95690-3190 (81)98291-4552</h1>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex w-auto bg-zinc-800 rounded-xl border-green-800 flex-row  h-max border-2 p-3  items-center justify-center">
                    <div className="flex-col rounded-xl p-2 bg-zinc-900 w-auto h-auto">
                        <h1 className="text-center lg:text-3xl text-2xl w-auto text-zinc-400 pb-3    ">Blá, blá, blá...</h1>
                        <span className="2xl:text-2xl">É bem difícil isso de se descrever, mas como eu encaro todo desafio, vamos tentar. Sobre "eu" como pessoa, só tenho a dizer que acredito ser uma boa companhia, eu apoio meus amigos nas loucuras, e até hoje não tive alguém pra chamar de nemesys.  ('<a className="line-through italic decoration-double">'Inscrições Abertas</a>')
                            <br />Brincadeiras a parte, sobre o "eu" profissionalmente falando, não tenho muito o que falar, só que minha maior meta agora é me desenvolver ao max pra quando a oportunidade aparecer, eu estar bem preparado!
                        </span>
                    </div>

                </div>

                <div className="flex flex-col">
                    <span className="text-center lg:text-3xl text-2xl flex text-white pb-3 self-center">Sociais</span>
                    <div className=" grid-flow-row grid grid-cols-2 lg:grid-cols-4"  >
                        <a href="https://github.com/ronaldornd">
                            <GithubLogo className="flex h-16 2xl:h-20 w-full items-center" color="#22ff59" />
                        </a>

                        <a href="https://www.linkedin.com/in/ronaldosbarbosaa/">
                            <LinkedinLogo className="flex h-16 2xl:h-20 w-full  items-center" color="#22ff59" />
                        </a>

                        <a href="https://www.instagram.com/ronaldornd/">
                            <InstagramLogo className="flex h-16 2xl:h-20 w-full  items-center" color="#22ff59" />
                        </a>

                        <FacebookLogo className="flex h-16 2xl:h-20 w-full  items-center" color="#22ff59" />
                    </div>
                </div>

            </div>

        </>
    )
}