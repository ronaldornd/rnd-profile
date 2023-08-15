import { Phone, At } from "phosphor-react";
import profile from "../../../../images/profile.jpg";

export default function Profile() {
    return (

        <div className="flex flex-col xl:flex-row items-center gap-3 w-full">
            <img className="h-28 w-28 2xl:w-48 2xl:h-48 md:h-28 md:w-28 rounded-lg" src={profile}></img>
            <div className="md:flex-col justify-between rounded-xl p-2 bg-zinc-900 w-full xl:w-full h-auto content-cente">
                <h1 className="text-center xl:text-3xl text-2xl w-auto text-zinc-400 md:pb-3">Básico</h1>
                <p className="text-xl 2xl:text-3xl w-auto text-center ">Ronaldo da Silva Barbosa</p>
                <div className="flex flex-col w-full text-xl 2xl:text-3xl align-center  items-center">
                    <div className="flex flex-row w-full text-center">

                    <p className="w-full">25 anos</p><p className="w-full">Solteiro</p>
                    
                    </div>
                    <div className="flex flex-col xl:flex-row w-full xl:text-2xl text-lg justify-between ">

                        <p className="flex w-max gap-1 self-center items-center"> <At  />ronaldo.s.barbosa@outlook.com</p>
                        <p className="flex w-max gap-1 self-center items-center"><Phone  /> (81)98291-4552</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
