import profile from "../../../../images/profile.jpg";

export default function Profile() {
    return (

        <>
            <img className="h-20 w-20 2xl:w-48 2xl:h-48 md:h-28 md:w-28 rounded-lg" src={profile}></img>
            <div className="md:flex-col sm:flex-row justify-between rounded-xl p-2 bg-zinc-900 w-full lg:w-max h-auto">
                <h1 className="text-center lg:text-3xl text-2xl w-auto text-zinc-400 pb-3    ">Básico</h1>
                <p className="text-xl 2xl:text-3xl w-auto text-center ">Ronaldo da Silva Barbosa</p>
                <div className="flex-row flex lg:justify-between justify-around  lg:w-auto">
                    <h1 className="text-xl  2xl:text-3xl w-max">25 anos</h1><h1 className="text-xl 2xl:text-3xl w-max">Solteiro</h1>
                </div>
            </div>
        </>
    )
};
