import ProgressBar from "@ramonak/react-progress-bar";
import { GraduationCap, Certificate } from "@phosphor-icons/react";
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
                className="flex border-2 border-transparent hover:rounded-lg hover:border-white flex-col items-center"
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
                className="flex border-2 border-transparent hover:rounded-lg hover:border-white flex-col items-center"
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
          <span className="flex flex-col w-full rounded-lg bg-zinc-900 m-2 p-2 h-full">
            <span className="flex flex-col gap-1 w-full h-full mx-2">
              <span className="flex gap-2 w-max h-max 2xl:text-xl">
                <img
                  src="https://assets.dio.me/N3ET28fsUKPyJZb6mh6vdqhVziWjbk3xPNlE_velBWs/f:webp/h:120/q:80/L3RyYWNrcy85NzIyOTdkYy00MzU3LTRhZjQtYWJlYS04OWEzODg1M2E5NDkucG5n"
                  className="w-9 h-9"
                />
                <p>Formação Github Certification</p>
              </span>
              <span>
                <ProgressBar
                  baseBgColor="transparent"
                  bgColor="#4287f5"
                  completed={30}
                  className="flex"
                  height="5px"
                  isLabelVisible={false}
                />
              </span>
            </span>
            <span className="flex flex-col gap-1 w-full h-full mx-2">
              <span className="flex gap-2 w-max h-max 2xl:text-xl">
                <img
                  src="https://assets.dio.me/edWxcdumDa-fk1QfOovjY_yYhaudgnoQvlUpyhpV8zg/f:webp/h:120/q:80/L3RyYWNrcy9kNTJiNzBiOC04MjE0LTQ0ZGQtYTlmNC05MmE0OGRjNzk4MTgucG5n"
                  className="w-9 h-9"
                />
                <p>Formação Node.js Fundamentals</p>
              </span>
              <span>
                <ProgressBar
                  baseBgColor="transparent"
                  bgColor="#4287f5"
                  completed={10}
                  className="flex"
                  height="5px"
                  isLabelVisible={false}
                />
              </span>
            </span>
            <span className="flex flex-col gap-1 w-full h-full mx-2">
              <span className="flex gap-2 w-max h-max 2xl:text-xl">
                <img
                  src="https://assets.dio.me/1sqn3R--VWHRW4eb4-KnqeFKGFbnaxNKz3Q883q-HkI/f:webp/h:120/q:80/L3RyYWNrcy9lMGI0YWQ1MS1hNGM3LTRlNjEtYTY4My1jMDRmNmQzNzZlOWMucG5n"
                  className="w-9 h-9"
                />
                <p>Microsoft Copilot AI</p>
              </span>
              <span>
                <ProgressBar
                  baseBgColor="transparent"
                  bgColor="#4287f5"
                  completed={1}
                  className="flex"
                  height="5px"
                  isLabelVisible={false}
                />
              </span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
