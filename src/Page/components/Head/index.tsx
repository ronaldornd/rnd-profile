import icon from "../../../images/icon.png"
export default function Head() {

    return (
        <div className="absolute lg:h-full lg:w-36 w-full">
            <nav className="bg-green-600 items-center h-14 sm:w-full lg:w-36 lg:h-full ">
                <div className="h-full w-full">
                    <div className="flex  w-full h-full items-center lg:w-36 ">
                        <div className="lg:flex-col lg:w-36 lg:h-full gap-3 sm:flex-row w-full   flex items-center justify-start">
                            <img src={icon} className="h-14 w-14 lg:h-24 lg:w-24 lg:mt-3 absolute" />
                            <div className="lg:flex-col sm:flex-row w-full sm:h-max lg:h-full justify-center flex ">
                                <div className="lg:flex-col sm:flex-row sm:w-full sm:h-max lg:h-full lg:w-full justify-center flex  items-center gap-2">
                                    <a href="#" className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white self-center px-3 py-2 rounded-md text-sm font-medium">Team</a>

                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white self-center px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </nav >
        </div >
    )
}