import { useEffect, useState } from "react";
import downloadImage from "../images/download.svg";
import qrImage from "../images/frame.svg";
import Typical from 'react-typical'
import { X } from "phosphor-react";




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
                case 2:
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
            <div className="flex-col p-10 w-screen items-center justify-center self-center ontent-center">
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
                    <div className="flex flex-col gap-12 items-center justify-center h-screem w-sreen">
                        <h1 className="text-5xl flex justify-self-center font-serif font-bold self-center">Compartilhe!</h1>
                        <img src={qrImage} className='flex h-64 self-center' />
                        <a className="h-full " href="https://r10hqg.dm.files.1drv.com/y4mBEQSw2w76dMxdVsIx_3oLyfnliv8Z_cMZo0ASFgXMUW0DqKmDM7siXhS2A_NsU9v4C6foOWToeFjACBS1T-ps7ut8SmTPLygYtFq2kgYHNgK3AobJTdvUYXaJvKe-LfnkGCPW_HnbaZt9gg9lduOdUiuH9WY7oTMy0lbNkTCG15v-WEx0NLL11H87FgxWDGli4osn--25S6OT3_qFMHWfg">
                            <div className="flex flex-row self-center gap-2 p-3  rounded-2xl align-text-middle justify-center w-full bg-green-500">

                                <img src={downloadImage} className='flex w-10 self-center h-10' />
                                <h1 className="flex self-center text-4xl p-2 text-black font-mono font-bold">Download</h1>
                            </div>
                        </a>

                    </div>
                }
            </div>
        </>
    )
}