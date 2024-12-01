import logo from "./images/icon.png"; // Atualize o caminho para a sua logo
import ProgressBar from "@ramonak/react-progress-bar";
import { supabase } from "../supabaseClient";
import axios from "axios";
import { useEffect, useState } from "react";

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Função para registrar o acesso
    const registerAccess = async () => {
      try {
        // Verifica se o acesso já foi registrado
        const accessRegistered = localStorage.getItem("accessRegistered");
        if (accessRegistered) {
          console.log("Acesso já registrado anteriormente.");
          return;
        }

        // Obtém o endereço IP do usuário
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
        const ipAddress = ipResponse.data.ip;

        const { data, error } = await supabase
          .from("accesslog")
          .insert([{ ip_address: ipAddress, user_agent: navigator.userAgent }]);

        if (error) {
          console.error("Erro ao registrar acesso:", error);
        } else {
          console.log("Acesso registrado com sucesso:", data);
          // Marca o acesso como registrado
          localStorage.setItem("accessRegistered", "true");
        }
      } catch (error) {
        console.error("Erro ao registrar acesso:", error);
      }
    };

    // Chama a função para registrar o acesso
    registerAccess();
    localStorage.setItem("alerted", "false");
    // Define o tempo total de carregamento em milissegundos
    const totalLoadingTime = 5000;

    // Simula o progresso do carregamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, totalLoadingTime / 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex bg-black flex-col items-center justify-center h-screen">
          <img src={logo} alt="Logo" className="mb-4 h-60 animate-pulse" />
          <ProgressBar completed={progress} baseBgColor="white" className="w-1/2" />
        </div>
      ) : (
        <div>
          {/* Conteúdo da página após o carregamento */}
        </div>
      )}
    </div>
  );
}