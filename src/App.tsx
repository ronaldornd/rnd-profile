import { Widget } from "./components/Widget";
import Page from "./Page";
import "./global.css";
import { useEffect, useState } from "react";
import logo from "./images/icon.png"; // Atualize o caminho para a sua logo
import ProgressBar from "@ramonak/react-progress-bar";

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    localStorage.setItem("alerted", "false");
    // Define o tempo total de carregamento em milissegundos
    const totalLoadingTime = 5000;
    const intervalTime = 1000; // Intervalo de atualização em milissegundos
    const increment = (intervalTime / totalLoadingTime) * 100;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          return 100;
        }
        return newProgress;
      });
    }, intervalTime);

    // Limpa o timer quando o componente desmonta
    return () => clearInterval(timer);
  }, []);
  return isLoading ? (
    // Se a página ainda estiver carregando, exibe a splash screen
    <div className="flex bg-black flex-col items-center justify-center h-screen">
      <img src={logo} alt="Logo" className="mb-4 animate-pulse" />
      <ProgressBar
        completed={progress}
        baseBgColor="white"
        className="w-1/2"
        bgColor="#22ff59"
        height="5px"
        isLabelVisible={false}
      />
    </div>
  ) : (
    <div className="App">
      <Page />
      <Widget />
    </div>
  );
}
