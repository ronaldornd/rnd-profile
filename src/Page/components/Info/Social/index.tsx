import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
// componente para links sociais
export default function Social() {
    return (
        <>
            <div className="flex flex-col">
                <span className="text-center lg:text-3xl text-2xl flex text-white pb-3 self-center">Sociais</span>
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full place-items-center ">

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
