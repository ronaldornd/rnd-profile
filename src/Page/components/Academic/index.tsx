import ProgressBar from "@ramonak/react-progress-bar";
import {
  GraduationCap,
  Certificate,
  LockLaminated,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import rocket from "../../../images/rocket.svg";

export default function Academic() {
  return (
    <>
      <div className="grid p-3 xl:grid-cols-2 w-full h-full items-center  justify-center gap-3">
        <div className="flex flex-col w-full h-full bg-zinc-800 rounded-lg  border-green-800 border-2 ">
          <div className=" flex flex-col bg-black w-full p-2 rounded-b-xl rounded-lg">
            <div className="flex flex-row justify-between w-full items-center">
              <GraduationCap className="h-6 w-6 2xl:w-10 2xl:h-10 m-1" />
              <span className="m-1 flex-col w-full">
                <h1 className="text-lg 2xl:text-3xl font-bold">
                  E.E. Cel. Benedito Ramos Arantes
                </h1>
                <h2 className="flex flex-row text-sm 2xl:text-xl font-semibold gap-2 items-center">
                  <h2 className="text-sm 2xl:text-xl font-semibold">
                    Ensino Médio
                  </h2>
                  <h2 className="text-zinc-500 font-bold">2015</h2>
                </h2>
              </span>
              <a
                href="https://drive.google.com/file/d/12lCNAdCWe0Do9WwBp2AKeYrtdG3CFZ0U/view?usp=sharing"
                target="_blank"
                className="flex border-1 border rounded-lg hover:border-2 hover:border-green-400 animate-pulse flex-col items-center"
              >
                <Certificate className="h-6 w-6 2xl:w-10 2xl:h-10 m-1 animate-pulse" />
              </a>
            </div>
            <span className="flex flex-col w-full ">
              <span className="flex flex-row w-full justify-between">
                <span className="font-thin 2xl:text-xl">Inicial</span>
                <span className="font-thin 2xl:text-xl">Intermediário</span>
                <span className="font-thin 2xl:text-xl">Completo</span>
              </span>
              <ProgressBar
                completed={100}
                baseBgColor="transparent"
                className="w-full"
                bgColor="#22ff59"
                height="5px"
                isLabelVisible={false}
              />
            </span>
          </div>
          <span className="flex text-justify 2xl:text-2xl m-2 p-2 rounded-lg bg-zinc-900">
            Não temos muito o que falar do ensino médio né? O diferencial do meu
            foi que no 3° ano nós fizemos um trabalho voluntário, onde íamos a
            um asilo da cidade para levarmos a ajuda que podíamos, seja numa
            necessidade, ou apenas para alegrar e tornar o dia deles melhor.
          </span>
        </div>
        <div className="flex flex-col w-full h-full bg-zinc-800 rounded-lg  border-green-800 border-2 ">
          <div className=" flex flex-col bg-black w-full p-2 rounded-b-xl rounded-lg">
            <span className="flex flex-col w-full ">
              <div className="flex flex-row justify-between w-full items-center">
                <GraduationCap className="h-6 w-6 2xl:w-10 2xl:h-10 m-1" />
                <span className="m-1 flex-col w-full">
                  <h1 className="text-lg 2xl:text-3xl font-bold">
                    ETE Miguel Batista
                  </h1>
                  <h2 className="flex flex-row text-sm 2xl:text-xl font-semibold gap-2 items-center">
                    <h2 className="text-sm 2xl:text-xl font-semibold">
                      Desenv. de Sistemas
                    </h2>
                    <h2 className="text-zinc-500 font-bold">2016/18</h2>
                  </h2>
                </span>
                <h2 className="text-center font-semibold">Sem Cerificado</h2>
              </div>

              <span className="flex flex-row w-full justify-between">
                <span className="font-thin 2xl:text-xl">Inicial</span>
                <span className="font-thin 2xl:text-xl">Intermediário</span>
                <span className="font-thin 2xl:text-xl">Completo</span>
              </span>
              <ProgressBar
                completed={70}
                baseBgColor="transparent"
                className="w-full"
                bgColor="#22ff59"
                height="5px"
                isLabelVisible={false}
              />
            </span>
          </div>
          <span className="flex text-justify 2xl:text-2xl  m-2 p-2 rounded-lg bg-zinc-900">
            Meu "primeiro" técnico oficial foi onde despertei a paixão por
            programação. Nós éramos estimulados a criar soluções para empresas
            de forma a atender suas necessidades. Estava me saindo muito bem, e
            desenvolvi muito minha lógica que já era bem trabalhada, só que em
            jogos rsrs. Mas por motivos familiares eu tive que abandonar o
            curso.
          </span>
        </div>
        <div className="w-auto h-full bg-zinc-800 rounded-lg  border-green-800 flex-row border-2  items-center justify-center">
          <div className=" flex flex-col bg-black w-full p-2 rounded-b-xl rounded-lg">
            <div className="flex flex-row justify-between w-full items-center">
              <GraduationCap className="h-6 w-6 2xl:w-10 2xl:h-10 m-1" />
              <span className="m-1 flex-col w-full">
                <h1 className="text-lg 2xl:text-3xl font-bold">
                  IFPE Campus Jaboatão
                </h1>
                <h2 className="flex flex-row text-sm 2xl:text-xl font-semibold gap-2 items-center">
                  <h2 className="text-sm 2xl:text-xl font-semibold">
                    Informática para Internet
                  </h2>
                  <h2 className="text-zinc-500 font-bold">
                    Concluído e em espera do diploma
                  </h2>
                </h2>
              </span>
              <a
                href="https://drive.google.com/file/d/1xm2ydqBhD9ZDOWl9W9g0jelTBTy6D5ct/view?usp=sharing"
                target="_blank"
                className="flex border-1 border rounded-lg hover:border-2 hover:border-green-400 animate-pulse flex-col items-center"
              >
                <Certificate className="h-6 w-6 2xl:w-10 2xl:h-10 m-1" />
              </a>
            </div>

            <span className="flex flex-col w-full ">
              <span className="flex flex-row w-full justify-between">
                <span className="font-thin 2xl:text-xl">Inicial</span>
                <span className="font-thin 2xl:text-xl">Intermediário</span>
                <span className="font-thin 2xl:text-xl">Completo</span>
              </span>
              <ProgressBar
                completed={100}
                baseBgColor="transparent"
                className="w-full"
                bgColor="#22ff59"
                height="5px"
                isLabelVisible={false}
              />
            </span>
          </div>
          <span className="flex text-justify 2xl:text-2xl m-2 p-2 rounded-lg bg-zinc-900">
            Esse foi o divisor de águas pra eu ter certeza que é nessa área que
            quero me especializar. O foco era desenvolver para o mercado online.
            Fui monitor bolsista em uma matéria que tive excelência (WEB 2), mas
            antes do início do último período eu cedi á minha necessidade de ver
            meus familiares que não via há 6 anos e dessa vez fui mais esperto e
            tranquei a matricula para um possível retorno 😉.
          </span>
        </div>
        <div className="flex w-full h-full bg-zinc-800 rounded-lg  border-cyan-800 flex-col border-2 items-center justify-center">
          <div className=" flex flex-col bg-black w-full p-2 rounded-b-xl rounded-lg">
            <div className="flex flex-row justify-between w-full items-center">
              <img
                src="https://assets.dio.me/VTgUqMiPAIgvsFdSvgSnVAB5lrqnNxY_N8h8LknnQys/f:webp/q:80/w:120/L2Fzc2V0cy9kaW9tZS9sb2dvLWZ1bGwuc3Zn"
                className="h-6 w-8 2xl:w-16 2xl:h-10 m-1"
              />
              <span className="m-1 flex-col w-full">
                <h1 className="text-lg 2xl:text-3xl font-bold"> Dio.me</h1>
                <h2 className="flex flex-row text-sm 2xl:text-xl font-semibold">
                  Autodidata
                </h2>
              </span>
            </div>

            <span className="flex flex-col w-full ">
              <span className="flex flex-row w-full justify-between">
                <span className="font-thin 2xl:text-xl">Inicial</span>
                <span className="font-thin 2xl:text-xl">Intermediário</span>
                <span className="font-thin 2xl:text-xl">Completo</span>
              </span>
              <span className="flex ">
                <ProgressBar
                  baseBgColor="transparent"
                  bgColor="#4287f5"
                  completed={50}
                  className="w-full"
                  height="5px"
                  isLabelVisible={false}
                />
              </span>
            </span>
          </div>
          <span className="grid grid-flow-row grid-cols-2 md:grid-cols-4 grid-rows-2 w-full rounded-lg bg-black m-2 p-2 gap-2 h-full">
            {/* github */}
            <span className="border-1 rounded-md p-1 col-span-1 row-span-1 flex flex-col gap-1 w-full h-full">
              <span className="flex flex-row justify-around w-full px-2 items-center h-max">
                <img
                  src="https://assets.dio.me/N3ET28fsUKPyJZb6mh6vdqhVziWjbk3xPNlE_velBWs/f:webp/h:120/q:80/L3RyYWNrcy85NzIyOTdkYy00MzU3LTRhZjQtYWJlYS04OWEzODg1M2E5NDkucG5n"
                  className="h-16 md:h-14 bg-zinc-800 p-1 rounded-3xl border-1 border-zinc-600"
                />
                <span className="text-small md:text-base font-semibold">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1SlvFmNhTK5RyGSxTk3IMVqW7FVuN10or/view?usp=sharing"
                    className="flex h-14 w-full md:h-14 md:w-full flex-col rounded-md border-2 animate-pulse justify-center items-center bg-black "
                  >
                    <span className="flex items-center flex-col p-1 h-full justify-between">
                      <GraduationCap className="h-7 w-7 2xl:w-10 2xl:h-10 m-1  animate-pulse" />
                    </span>
                    <span className="flex w-full">
                      <ProgressBar
                        baseBgColor="transparent"
                        bgColor="white"
                        completed={100}
                        className="relative bottom-0 w-full pb-0"
                        height="5px"
                        isLabelVisible={false}
                      />
                    </span>
                  </a>
                  <p>Concluído</p>
                </span>
              </span>
              <p className="w-full text-base">
                Introdução aos Conceitos de Git e Github
              </p>
            </span>

            {/* Node.js */}
            <span className="border-1 border-green-700 rounded-md p-1 col-span-1 row-span-1 flex flex-col gap-1 w-full h-full">
              <span className="flex flex-row justify-around w-full items-center h-max">
                <img
                  src="https://assets.dio.me/edWxcdumDa-fk1QfOovjY_yYhaudgnoQvlUpyhpV8zg/f:webp/h:120/q:80/L3RyYWNrcy9kNTJiNzBiOC04MjE0LTQ0ZGQtYTlmNC05MmE0OGRjNzk4MTgucG5n"
                  className="h-16 md:h-14 bg-zinc-800 p-1 rounded-3xl border-1 border-green-600"
                />
                <span className="text-small md:text-base font-semibold">
                  <span className="flex h-14 w-full md:h-14 md:w-30 flex-col rounded-md border-2 border-green-500 justify-between items-center bg-black ">
                    <span className="flex items-center flex-col p-1 h-full justify-between">
                      <ArrowsClockwise className="h-7 w-7 2xl:w-7 2xl:h-8 m-1 animate-spin-slow" />
                    </span>
                    <span className="flex w-full">
                      <ProgressBar
                        baseBgColor="transparent"
                        bgColor="#42f55d"
                        completed={40}
                        className="relative bottom-0 w-full pb-0"
                        height="5px"
                        isLabelVisible={false}
                      />
                    </span>
                  </span>
                  <p>Revisando</p>
                </span>
              </span>
              <p className="w-full text-base">Formação Node.js Fundamentals</p>
            </span>

            {/* JavaScript */}
            <span className="border-1 border-yellow-700 rounded-md p-1 col-span-1 row-span-1 flex flex-col gap-1 w-full h-full">
              <span className="flex flex-row justify-around w-full items-center h-max">
                <img
                  src="https://assets.dio.me/_ImeVq2qMIfyFkoYC-epZ9o-1X9soGtq69WUykqhiL4/f:webp/h:120/q:80/L3RyYWNrcy81NWU3MDQwZi03NzViLTQ3ZTUtYThmYi02OWQwMDJjYTE3YTkucG5n"
                  className="h-16 md:h-14 bg-zinc-800 p-1 rounded-3xl border-1 border-yellow-600"
                />
                <span className="text-small md:text-base font-semibold">
                  <span className="flex h-14 w-full md:h-14 md:w-30 flex-col rounded-md border-2 border-yellow-500 justify-between items-center bg-black">
                    <span className="flex items-center flex-col p-1 h-full justify-between">
                      <ArrowsClockwise className="h-7 w-7 2xl:w-7 2xl:h-8 m-1 animate-spin-slow" />
                    </span>
                    <span className="flex w-full">
                      <ProgressBar
                        baseBgColor="transparent"
                        bgColor="#ecf542"
                        completed={60}
                        className="relative bottom-0 w-full pb-0"
                        height="5px"
                        isLabelVisible={false}
                      />
                    </span>
                  </span>
                  <p>Revisando</p>
                </span>
              </span>
              <p className="w-full text-base">Formação JavaScript Developer</p>
            </span>
            {/* HTML5 */}

            <span className="border-1 border-orange-700 rounded-md p-1 col-span-1 row-span-1 flex flex-col gap-1 w-full h-full">
              <span className="flex flex-row justify-around w-full items-center h-max">
                <img
                  src="https://hermes.dio.me/tracks/62ed1f1d-8d76-4bbc-905f-e73d20cb82f5.png"
                  className="h-16 md:h-14 bg-zinc-800 p-1 rounded-3xl border-1 border-orange-600"
                />

                <span className="text-small md:text-base font-semibold">
                  <span className="flex h-14 w-full md:h-14 md:w-30 flex-col rounded-md border-2 border-orange-500 justify-between items-center bg-black ">
                    <span className="flex items-center flex-col p-1 h-full justify-between">
                      <ArrowsClockwise className="h-7 w-7 2xl:w-7 2xl:h-8 m-1 animate-spin-slow" />
                    </span>
                    <span className="flex w-full">
                      <ProgressBar
                        baseBgColor="transparent"
                        bgColor="#f5a142"
                        completed={80}
                        className="relative bottom-0 w-full pb-0"
                        height="5px"
                        isLabelVisible={false}
                      />
                    </span>
                  </span>
                  <p>Revisando</p>
                </span>
              </span>
              <p className="w-full text-base">Formação HTML Web Developer</p>
            </span>
            {/* CSS */}

            <span className="border-1 border-blue-700 rounded-md p-1 col-span-1 row-span-1 flex flex-col gap-1 w-full h-full">
              <span className="flex flex-row justify-around w-full items-center h-max">
                <img
                  src="https://hermes.dio.me/tracks/da043c7a-7189-441e-bf28-adc2d05a4934.png"
                  className="h-16 md:h-14 bg-zinc-800 p-1 rounded-3xl border-1 border-blue-600"
                />
                <span className="text-small md:text-base font-semibold">
                  <span className="flex h-14 w-full md:h-14 md:w-30 flex-col rounded-md border-2 border-blue-500 justify-between items-center bg-black ">
                    <span className="flex items-center flex-col p-1 h-full justify-between">
                      <ArrowsClockwise className="h-7 w-7 2xl:w-7 2xl:h-8 m-1 animate-spin-slow" />
                    </span>
                    <span className="flex w-full">
                      <ProgressBar
                        baseBgColor="transparent"
                        bgColor="#427ef5"
                        completed={45}
                        className="relative bottom-0 w-full pb-0"
                        height="5px"
                        isLabelVisible={false}
                      />
                    </span>
                  </span>
                  <p>Revisando</p>
                </span>
              </span>
              <p className="w-full text-base">Formação CSS Developer</p>
            </span>

            <span className="border-1 border-cyan-700 rounded-md p-1 col-span-1 row-span-1 flex flex-col gap-1 w-full h-full">
              <span className="flex flex-row justify-around w-full items-center h-max">
                <img
                  src="https://assets.dio.me/9XhjEF1d-0HiFWFjN1Sj7_6Q7hQIZ6Kg5jZsTeGAqZk/f:webp/h:120/q:80/L3RyYWNrcy82OGM4MTg4Ny1hMWMyLTQ0MGQtYTdlYS03Nzc3YmMxMGNkNDEucG5n"
                  className="h-16 md:h-14 bg-zinc-800 p-1 rounded-3xl border-1 border-cyan-600"
                />
                <span className="text-small md:text-base font-semibold">
                  <span className="flex h-14 w-full md:h-14 md:w-30 flex-col rounded-md border-2 border-cyan-500 justify-between items-center bg-black">
                    <span className="flex items-center flex-col p-1 h-full justify-between">
                      <ArrowsClockwise className="h-7 w-7 2xl:w-7 2xl:h-8 m-1 animate-spin-slow" />
                    </span>
                    <span className="flex w-full">
                      <ProgressBar
                        baseBgColor="transparent"
                        bgColor="#42aaf5"
                        completed={60}
                        className="relative bottom-0 w-full pb-0"
                        height="5px"
                        isLabelVisible={false}
                      />
                    </span>
                  </span>
                  <p>Revisando</p>
                </span>
              </span>
              <p className="w-full text-base">Formação React Developer</p>
            </span>

            <span className="border-1 rounded-md p-1 col-span-1 row-span-1 flex flex-col gap-1 w-full h-full">
              <span className="flex flex-row justify-around w-full items-center h-max">
                <img
                  src="https://assets.dio.me/XeSGwYIOI2Xvl-7_WTEcgvxCHX-BBwsBtkI5fY7ParU/f:webp/h:120/q:80/L3RyYWNrcy80ZGViNDBkZS03ZmI2LTQyMjktYTZhNS05NzE4NTM4MWQ1NzcucG5n"
                  className="h-16 md:h-14 bg-zinc-800 p-1 rounded-3xl border-1 border-blue-400"
                />

                <span className="text-center text-small md:text-base font-semibold animate-pulse">
                  em <br /> breve
                </span>
              </span>
              <p className="w-full text-base">
                Formação Fundamentos de Inteligência Artificial
              </p>
            </span>
            <span className="border-1 border-pink-700 rounded-md p-1 col-span-1 row-span-1 flex flex-col gap-1 w-full h-full">
              <span className="flex flex-row justify-around w-full items-center h-max">
                <img
                  src="https://assets.dio.me/1sqn3R--VWHRW4eb4-KnqeFKGFbnaxNKz3Q883q-HkI/f:webp/h:120/q:80/L3RyYWNrcy9lMGI0YWQ1MS1hNGM3LTRlNjEtYTY4My1jMDRmNmQzNzZlOWMucG5n"
                  className="h-16 md:h-14 bg-zinc-800 p-1 rounded-3xl border-1 border-pink-600"
                />
                <span className="text-center text-small md:text-base font-semibold animate-pulse">
                  em <br /> breve
                </span>
              </span>
              <p className="w-full text-base">Microsoft Copilot AI</p>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
