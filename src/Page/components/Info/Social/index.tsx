import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
// componente para links sociais
export default function Social() {
    return (
        <>
            <div className="flex flex-col w-full h-full">
                <span className="text-center lg:text-3xl text-2xl flex text-white pb-3 self-center">Redes</span>
                <div className="flex flex-row justify-between lg:grid grid-cols-2 w-full h-max place-items-center ">

                    <a href="https://github.com/ronaldornd">
                        <GithubLogo className="col-span-1 h-16 2xl:h-20 w-max items-center" color="#22ff59" />
                    </a>

                    <a href="https://www.linkedin.com/in/ronaldosbarbosaa/">
                        <LinkedinLogo className="col-span-1 h-16 2xl:h-20 w-max  items-center" color="#22ff59" />
                    </a>

                    <a href="https://www.instagram.com/ronaldornd/">
                        <InstagramLogo className="col-span-1 h-16 2xl:h-20 w-max  items-center" color="#22ff59" />
                    </a>

                    <FacebookLogo className="col-span-1 h-16 2xl:h-20 w-max  items-center" color="#22ff59" />
                </div>
            </div>
        </>
    )
};
