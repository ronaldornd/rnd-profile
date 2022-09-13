import profile from "../../../images/profile.jpg";


export default function Info() {
    return (

        <>
            <div className="flex lg:mt-0 mt-14 flex-col h-full w-full justify-between gap-5">

                <div className="flex  flex-col lg:flex-row w-max gap-5 justify-between">
                    <div className="flex gap-5 flex-col lg:flex-row bg-zinc-800 rounded-xl  border-green-800 lg:w-max h-fit border-2 p-4  items-center justify-center">
                        <img className="h-28 w-28 rounded-lg" src={profile}></img>
                        <div className="flex-col flex justify-between rounded-xl py-2 px-5 bg-zinc-900 w-auto lg:w-auto h-auto">
                            <h1 className="text-center text-2xl w-auto text-zinc-400 pb-3    ">Básico</h1>
                            <p className="text-2xl lg:text-xl w-max text-center ">Ronaldo da Silva Barbosa</p>
                            <div className="flex-row flex justify-between  w-auto">
                                <h1 className="text-xl w-max">24 anos</h1><h1 className="text-xl w-max">Solteiro</h1>
                            </div>
                        </div>

                    </div>
                    <div className="flex bg-zinc-800 rounded-xl  border-green-800 flex-row border-2 p-4  items-center justify-center">
                        <div className="flex-col flex justify-between rounded-xl py-2 px-5 bg-zinc-900 w-auto h-auto">
                            <h1 className="text-center text-2xl w-auto text-zinc-400 pb-3    ">Contatos</h1>
                            <div className="flex-row  justify-between  w-auto">
                                <h1 className="text-xl ">ronaldo.s.barbosa@outlook.com</h1>
                                <h1 className="text-xl ">(11)95690-3190 (81)98291-4552</h1>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex w-full bg-zinc-800 rounded-xl border-green-800 flex-row  h-auto border-2 p-4  items-center justify-center">
                    <div className="flex-col rounded-xl py-2 px-5 bg-zinc-900 w-auto h-auto">
                        <h1 className="text-center text-2xl w-auto text-zinc-400 pb-3    ">Blá, blá, blá...</h1>
                        <span>É bem dificil isso de se descrever, mas como eu encaro todo desafio, vms tentar.
                            Sobre "eu" como pessoa, só tenho a dizer que acredito ser uma boa companhia, eu apoio meus amigo nas loucuras, e até hoje não tive alguém pra chamar de nemesys. ('<a className="line-through italic decoration-double">Inscriçoes abertas</a>')
                            <br />Brincadeiras a parte, sobre o "eu" profissioalmente falando, não tenho muito o que falar, só que minha maior meta agora é me desenvolver ao max pra quando a oportunidade aparecer, eu estar bem preparado!
                        </span>
                    </div>

                </div>

            </div>

        </>
    )
}