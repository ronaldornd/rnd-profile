import downloadImage from "../../../images/download.svg";
import qrImage from "../../../images/frame.svg";
export default function Share() {
    return (
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
    )
} 