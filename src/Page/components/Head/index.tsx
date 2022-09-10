export default function Head() {

    return (
        <div className="min-h-full absolute  w-36">
            <nav className="bg-green-600">
                <div className="mx-auto">
                    <div className="flex  h-screen w-36 items-center justify-between">
                        <div className="flex-col gap-3 h-max w-36 flex items-center">
                            <div className="absolute top-5">
                                icon
                            </div>
                            <div className="flex-col flex  h-max">
                                <div className=" h-max justify-between flex flex-col items-baseline space-x-4">
                                    <a href="#" className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </nav >

            <header className="bg-zinc-600 shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>

            </main>
        </div >
    )
}