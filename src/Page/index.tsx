import { useEffect, useState } from "react";

import Typical from 'react-typical'
import { X } from "phosphor-react";
import Share from "./components/Share";
import Info from "./components/Info";
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
            <div className="flex-row h-screen w-screen items-center justify-around self-center content-center">
                {alerting ?
                    (
                        <div className="flex-col p-5 h-full ease-out justify-center">
                            <div className="flex  flex-col h-full border-4 border-black shadow-2xl shadow-green-800 text-center rounded-xl  justify-center  bg-green-500">
                                <X size={40} onClick={() => { abort() }} className="text-black absolute top-10 m-2 right-10" />
                                <Typical
                                    steps={[message]}
                                    loop={10}
                                    wrapper="h1"
                                    className="text-black text-3xl font-semibold p-10"
                                />
                            </div>

                        </div>
                    ) :
                    (
                        <>
                            <Head />

                            <div className="flex lg:flex-row flex-col items-center  h-full w-auto justify-between p-5 gap-2  lg:ml-36   ">
                                <Info />
                                <Share />
                            </div>
                        </>)
                }
            </div>
        </>
    )
}