import downloadImage from "../../../../images/download.svg";
import qrImage from "../../../../images/frame.svg";
export default function Share() {
    return (
        <div className="flex flex-col gap-2 w-full lg:w-max">
            <div className="flex bg-zinc-800 rounded-xl border-green-800 flex-col border-2 p-3 h-max w-full gap-4 items-center justify-center ">
                <h1 className="text-2xl 2xl:text-3xl w-max flex justify-self-center font-serif font-bold self-center">Me dá um help aew!</h1>
                <img src={qrImage} className='flex w-40 2xl:w-56  self-center' />
                <h1 className="text-2xl 2xl:text-3xl w-max flex justify-self-center font-serif font-bold self-center">Compartilhe essa pág</h1>

            </div>
            <span className="text-2xl font-thin text-center h-max">OU</span>
            <div className="flex bg-zinc-800 rounded-xl border-green-800 flex-col border-2 p-3 h-max w-full gap-3 items-center justify-center ">
                <span className="text-xl 2xl:text-3xl w-max flex justify-self-center font-serif font-bold self-center">Teste a versão mobile:</span>
                <a href="https://r10hqg.dm.files.1drv.com/y4mBEQSw2w76dMxdVsIx_3oLyfnliv8Z_cMZo0ASFgXMUW0DqKmDM7siXhS2A_NsU9v4C6foOWToeFjACBS1T-ps7ut8SmTPLygYtFq2kgYHNgK3AobJTdvUYXaJvKe-LfnkGCPW_HnbaZt9gg9lduOdUiuH9WY7oTMy0lbNkTCG15v-WEx0NLL11H87FgxWDGli4osn--25S6OT3_qFMHWfg">
                    <div className="flex flex-row self-center gap-2 p-3  rounded-2xl align-text-middle justify-center w-max h-max bg-green-500">

                        <img src={downloadImage} className='flex w-6 self-center h-6' />
                        <h1 className="flex self-center lg:text-2xl 2xl:text-3xl  text-black font-mono font-bold">Download</h1>
                    </div>
                </a>
                <span className="text-sm 2xl:text-base flex justify-self-center font-serif font-bold self-center">*Disponível apenas para Android 😬</span>
            </div>
        </div>
    )
} 