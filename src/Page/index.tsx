import { useEffect, useState } from "react";

import Typical from 'react-typical'
import { X } from "phosphor-react";
import Share from "./components/Share";
import Info from "./components/info";
import Head from "./components/Head";




export default function Page() {
    const [message, setMessage] = useState('');
    const [alerting, setAlerting] = useState(true)


    function abort() {
        setAlerting(false);
    }

    useEffect(() => {
        setAlerting(true)
        let seconds = 0;
        const timer = setInterval(() => {
            seconds += 1;
            console.log(seconds)

            switch (seconds) {
                case 1:
                    setMessage('Olá')
                    break;
                case 1:
                    setMessage('Obrigado pelo interesse no meu perfil 🥰')
                    break;
                case 4:
                    setMessage('Estou testando uma nova ferramenta 🚧')
                    break;
                case 7:
                    setMessage('E gostaria muito que você pudesse me ajudar!')
                    break;
                case 10:
                    setMessage('É só clicar no botão de download e instalar o app 😁💕')
                    break;
                case 13:
                    setMessage('Fica tranquilo que é tudo seguro, só não tive 💵 para colocar na PlayStore ')
                    break;
                case 17:
                    abort()
                    clearInterval(timer)
                    break;
            }

        }, 3000);

        return (() => clearInterval(timer))
    }, []);


    return (
        <>
            <div className="flex-row w-screen items-center justify-between self-center ontent-center">
                {alerting ?
                    (
                        <div className="flex-col ease-out mt-10 justify-center">
                            <div className="flex py-60  flex-col h-96 border-4 border-black shadow-2xl shadow-green-800 text-center rounded-xl  justify-center  bg-green-500">
                                <X size={40} onClick={() => { abort() }} className="text-black absolute top-20 m-2 right-10" />
                                <Typical
                                    steps={[message]}
                                    loop={10}
                                    wrapper="h1"
                                    className="text-black text-3xl font-semibold p-10"
                                />
                            </div>

                        </div>
                    ) :
                    <>
                        <Head />
                        <Info />
                        <Share />
                    </>
                }
            </div>
        </>
    )
}