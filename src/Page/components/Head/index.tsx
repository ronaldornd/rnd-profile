import icon from "../../../images/icon.png";
export default function Head() {
  return (
    <div className="absolute xl:h-full xl:w-36 w-full">
      <nav className="bg-green-600 items-center h-14 sm:w-full xl:w-36 xl:h-full ">
        <div className="h-full w-full">
          <div className="flex gap-4  w-full h-full items-center xl:w-36 ">
            <div className="xl:flex-col xl:w-36 xl:h-full gap-3 sm:flex-row w-full   flex items-center justify-start">
              <img
                src={icon}
                className="h-14 w-14 xl:h-24 xl:w-24 xl:mt-3 absolute"
              />
              <div className="xl:flex-col sm:flex-row w-full sm:h-max xl:h-full justify-center flex ">
                <div className="xl:flex-col sm:flex-row sm:w-full sm:h-max xl:h-full xl:w-full justify-center flex items-center gap-2">
                  <a
                    href="#"
                    className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    <p className="select-none">Dashboard</p>
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white self-center px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <p className="select-none">Team</p>
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white self-center px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <p className="select-none">Projects</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
