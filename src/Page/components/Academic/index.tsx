import construction from "../../../images/construction.svg";
export default function Academic() {
    return (
        <>

            <div className=" flex flex-1 lg:mt-0 mt-14 flex-col h-full w-full items-center justify-center gap-5">
                <div className="flex flex-col w-full h-full  justify-center">
                    <div className="flex gap-5 flex-col  bg-zinc-800 rounded-xl  border-green-800 w-full h-full border-2 p-4  self-center justify-center">
                        <img src={construction} className=" h-200" />
                        Under construction!!
                    </div>
                </div>
            </div>
        </>
    )
}