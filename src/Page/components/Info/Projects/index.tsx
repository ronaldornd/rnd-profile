import Row from "react-bootstrap/Row";
import reactredsvg from "../../../../images/reactred.svg";
import logosvg from "../../../../images/logo.svg";
import exposvg from "../../../../images/expo.svg";
import typesvg from "../../../../images/typescript.svg";
import vitesvg from "../../../../images/vite.svg";
import html2 from "../../../../images/html2.svg";
import css2 from "../../../../images/css2.svg";
import javascript from "../../../../images/javascript.svg";
import figma from "../../../../images/figma.svg";

import rndlinks1 from "../../../../images/rndlinks1.png";
import rndlinks2 from "../../../../images/rndlinks2.png";
import live1 from "../../../../images/live1.jpg";
import live2 from "../../../../images/live2.jpg";
import live3 from "../../../../images/live3.jpg";
import app1 from "../../../../images/app1.png";
import app2 from "../../../../images/app2.png";
import Col from "react-bootstrap/Col";
import { Dialog } from "@headlessui/react";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import {
  AndroidLogo,
  GithubLogo,
  Link,
  Planet,
  X,
} from "@phosphor-icons/react";

export default function Projects() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  let index = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      index += 1;
      if (isOpen3 && index === 2) {
        index = 0;
      }
      console.log(isOpen);
      if (index === 2) {
        index = 0;
      }

      switch (index) {
        case 0:
          console.log("1");
          setCarouselIndex(index);
          break;
        case 1:
          console.log("2");
          setCarouselIndex(index);
          break;
      }
    }, 7000);

    return () => clearInterval(timer); // Limpa o intervalo quando o componente desmonta
  }, [isOpen3]);

  function handleDialog() {
    console.log(isOpen);
    index = 0;
    setCarouselIndex(index);
  }

  return (
    <Row className="grid justify-items-center grid-cols-3 grid-rows-2 gap-2 h-max w-full">
      <Row className="col-span-3 flex xl:text-3xl text-2xl w-full h-max justify-center text-center">
        Projetos
      </Row>

      <Col
        className=" col-span-1 xl:row-span-1 row-span-2 border-2 rounded-xl w-max justify-center justify-items-center self-center  border-red-600  "
        onMouseEnter={() => {
          setIsOpen(true);
          handleDialog();
        }}
      >
        <span className="flex p-2 xl:flex-row flex-col items-center w-full justify-center">
          <img src={logosvg} className="h-10  mx-1" />
          <h1 className="mx-1 xl:text-sm 2xl:text-xl flex flex-row">
            Messages
            <Planet size={18} className="align-super ml-1" />
          </h1>
        </span>
        <Dialog
          className="fixed flex  w-full h-full p-2 xl:top-1 bottom-0"
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Dialog.Panel className=" flex 2xl:ml-48 xl:ml-36 xl:h-fit  flex-col w-full h-full rounded-lg border-2 border-red-500 bg-zinc-800">
            <Dialog.Title className="md:text-4xl text-2xl font-bold text-center m-2 w-full">
              Live Messages
              <span className=" align-super text-xs ml-1">(web)</span>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5"
              >
                <X size={35} />
              </button>
            </Dialog.Title>
            <Dialog.Description className="grid gap-2 xl:grid-flow-row py-2 xl:grid-cols-2 ">
              <span className="flex xl:h-[calc(100vh-18rem)] row-span-2 items-center justify-center content-center place-items-center">
                <Carousel
                  indicators={false}
                  controls={false}
                  className="xl:h-full  mx-4"
                  activeIndex={carouselIndex}
                >
                  <Carousel.Item>
                    <img
                      src={live1}
                      className="h-[calc(100vh-25rem)] xl:h-96 2xl:h-[calc(100vh-20rem)] border-2 rounded-3xl"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      src={live2}
                      className="h-[calc(100vh-25rem)] xl:h-96 2xl:h-[calc(100vh-20rem)] border-2 rounded-3xl"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={live3}
                      className="h-[calc(100vh-25rem)] xl:h-96 2xl:h-[calc(100vh-20rem)] border-2 rounded-3xl"
                    />
                  </Carousel.Item>
                </Carousel>
              </span>

              <span className="flex flex-col justify-center h-max w-max  rounded-lg place-self-center mb-0 p-2 text-center text-lg xl:text-xl 2xl:text-2xl bg-black">
                Techs:
                <span className="flex text-sm flex-row w-max justify-between mx-4 xl:mt-4 xl:mx-5 2xl:mx-11">
                  <span className="flex flex-col justify-center m-2">
                    <img
                      src={vitesvg}
                      className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600"
                    />

                    <span className="xl:text-sm 2xl:text-xl">Vite</span>
                  </span>
                  <span className="flex flex-col justify-center m-2">
                    <img
                      src={typesvg}
                      className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600"
                    />

                    <span className="xl:text-sm 2xl:text-xl">TypeScript</span>
                  </span>
                  <span className="flex flex-col justify-center m-2">
                    <img
                      src={reactredsvg}
                      className=" mt-2 h-8 md:h-12 2xl:h-20 text-red-600"
                    />

                    <span className="xl:text-sm 2xl:text-xl">ReactJS</span>
                  </span>
                  <span className="flex flex-col justify-center m-2 items-center">
                    <GithubLogo
                      className="h-10 w-10 md:h-16 md:w-16 2xl:h-24 2xl:w-24"
                      color="red"
                    />

                    <span className="xl:text-sm 2xl:text-xl">OAuth</span>
                  </span>
                </span>
                <span className=" text-end xl:text-base text-xs xl:w-full text-gray-500">
                  *feito com ajuda da Rocketseat
                </span>
              </span>
              <span className=" h-10vh mx-4 flex xl:h-32 2xl:h-56 self-end p-3 xl:m-16  text-lg md:text-2xl 2xl:text-5xl rounded-xl border-2 border-red-900 bg-zinc-900 font-thin">
                {carouselIndex == 0
                  ? "O objetivo era criar uma aplicação para troca de mensagens entre os usuários em tempo real."
                  : carouselIndex == 1
                  ? "Nós utilizamos o sistema de autenticação do github para pegar as informações do usuário."
                  : "Os estilos cores e fonte que vocè vê nas imagens eu que escolhi para treinar o que aprendi. "}
              </span>
            </Dialog.Description>
          </Dialog.Panel>
        </Dialog>
      </Col>
      <Col
        className=" col-span-1 xl:row-span-1 row-span-2 border-2 rounded-xl h-max w-max justify-center justify-items-center self-center  border-red-600  "
        onMouseEnter={() => {
          setIsOpen2(true);
          handleDialog();
        }}
      >
        <span className="flex p-2 xl:flex-row flex-col items-center w-full justify-center">
          <img src={logosvg} className="h-10  mx-1" />
          <h1 className="mx-1 xl:text-sm 2xl:text-xl flex flex-row">
            Messages
            <AndroidLogo size={18} className="align-super ml-1" />
          </h1>
        </span>
        <Dialog
          className="fixed flex  w-full h-full p-2 xl:top-1 bottom-0"
          open={isOpen2}
          onClose={() => {
            setIsOpen2(false);
          }}
        >
          <Dialog.Panel className=" flex 2xl:ml-48 xl:ml-36 xl:h-fit  flex-col w-full h-full rounded-lg border-2 border-red-500 bg-zinc-800">
            <Dialog.Title className="md:text-4xl text-2xl font-bold text-center m-2 w-full">
              Live Messages
              <span className=" align-super text-xs ml-1">(app)</span>
              <button
                onClick={() => setIsOpen2(false)}
                className="absolute top-5 right-5"
              >
                <X size={35} />
              </button>
            </Dialog.Title>
            <Dialog.Description className="grid gap-2 xl:grid-flow-row py-2 xl:grid-cols-2 ">
              <span className="flex xl:h-[calc(100vh-18rem)] row-span-2 items-center justify-center content-center place-items-center">
                <Carousel
                  indicators={false}
                  controls={false}
                  className="xl:h-full mx-4"
                  activeIndex={carouselIndex}
                >
                  <Carousel.Item>
                    <img
                      src={live1}
                      className="h-[calc(100vh-24rem)] xl:h-96 2xl:h-[calc(100vh-20rem)] border-2 rounded-3xl"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={app1}
                      className="h-[calc(100vh-24rem)] xl:h-[calc(100vh-20rem)]  border-2 rounded-3xl"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      src={app2}
                      className="h-[calc(100vh-24rem)] xl:h-[calc(100vh-20rem)] border-2 rounded-3xl"
                    />
                  </Carousel.Item>
                </Carousel>
              </span>

              <span className="flex flex-col justify-center h-max w-max  rounded-lg place-self-center mb-0 p-2 text-center text-lg xl:text-xl 2xl:text-2xl bg-black">
                Techs:
                <span className="flex text-sm flex-row w-max justify-between mx-4 xl:mt-4 xl:mx-5 2xl:mx-11">
                  <span className="flex flex-col justify-center m-2">
                    <img
                      src={exposvg}
                      className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600"
                    />

                    <span className="xl:text-sm 2xl:text-xl">Expo</span>
                  </span>
                  <span className="flex flex-col justify-center m-2">
                    <img
                      src={typesvg}
                      className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600"
                    />

                    <span className="xl:text-sm 2xl:text-xl">TypeScript</span>
                  </span>
                  <span className="flex flex-col justify-center m-2">
                    <img
                      src={reactredsvg}
                      className="mt-2 h-8 md:h-12 2xl:h-20 text-red-600"
                    />

                    <span className="xl:text-sm 2xl:text-xl">React Native</span>
                  </span>
                  <span className="flex flex-col justify-center m-2 items-center">
                    <GithubLogo
                      className="h-10 w-10 md:h-16 md:w-16 2xl:h-24 2xl:w-24"
                      color="red"
                    />

                    <span className="xl:text-sm 2xl:text-xl">OAuth</span>
                  </span>
                </span>
                <span className=" text-end xl:text-base text-xs xl:w-full text-gray-500">
                  *feito com ajuda da Rocketseat
                </span>
              </span>
              <span className=" h-10vh mx-4  flex xl:h-32 2xl:h-56 self-end p-3 xl:m-16  text-lg md:text-2xl 2xl:text-5xl rounded-xl border-2 border-red-900 bg-zinc-900 font-thin">
                {carouselIndex == 0
                  ? "Versão mobile do Live Messages. Procurei fazer o mais parecido o possivel com a versão web."
                  : carouselIndex == 1
                  ? "Ele foi escrito em React Native utilizando o Expo, tornando-o compativel com android e ios."
                  : "A base de dados é a mesma que a versão web, portanto as mensagens aparecem em todas as versões."}
              </span>
            </Dialog.Description>
          </Dialog.Panel>
        </Dialog>
      </Col>
      <Col
        className="col-span-1 xl:row-span-1 row-span-2 border-2 rounded-xl h-max w-max justify-center justify-items-center self-center border-purple-600"
        onMouseEnter={() => {
          setIsOpen3(true);
          handleDialog();
        }}
      >
        <span className="flex p-2 xl:flex-row flex-col items-center w-full justify-center">
          <Link size={32} className="h-10 mx-1" color="#651ad6" />
          <h1 className="mx-1 xl:text-sm 2xl:text-xl flex flex-row">
            RND Links
            <Planet size={18} className="align-super ml-1" />
          </h1>
        </span>
        <Dialog
          className="fixed flex w-full h-full p-2 xl:top-1 bottom-0"
          open={isOpen3}
          onClose={() => {
            setIsOpen3(false);
          }}
        >
          <Dialog.Panel className="flex 2xl:ml-48 xl:ml-36 xl:h-fit flex-col w-full h-full rounded-lg border-2 border-purple-500 bg-zinc-800">
            <Dialog.Title className="md:text-4xl text-2xl font-bold text-center m-2 w-full">
              RND Links
              <button
                onClick={() => setIsOpen3(false)}
                className="absolute top-5 right-5"
              >
                <X size={35} />
              </button>
            </Dialog.Title>
            <Dialog.Description className="grid gap-2 xl:grid-flow-row py-2 xl:grid-cols-2">
              <span className="flex xl:h-[calc(100vh-18rem)] row-span-2 items-center justify-center content-center place-items-center">
                <Carousel
                  indicators={false}
                  controls={false}
                  className="xl:h-full mx-4"
                  activeIndex={carouselIndex}
                >
                  <Carousel.Item>
                    <img
                      src={rndlinks1}
                      className="h-[calc(100vh-25rem)] xl:h-96 2xl:h-[calc(100vh-20rem)] border-2 border-purple-600 rounded-3xl"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={rndlinks2}
                      className="h-[calc(100vh-25rem)] xl:h-96 2xl:h-[calc(100vh-20rem)] border-2 border-purple-600 rounded-3xl"
                    />
                  </Carousel.Item>
                </Carousel>
              </span>
              <span className="flex flex-col justify-center h-max w-max rounded-lg place-self-center mb-0 p-2 text-center text-lg xl:text-xl 2xl:text-2xl bg-black">
                Techs:
                <span className="flex text-sm flex-row w-max justify-between mx-4 xl:mt-4 xl:mx-5 2xl:mx-11">
                  <span className="flex flex-col justify-center m-2">
                    <img src={figma} className="mt-2 h-8 md:h-12 2xl:h-20" />
                    <span className="xl:text-sm 2xl:text-xl">Figma</span>
                  </span>
                  <span className="flex flex-col justify-center m-2">
                    <img src={html2} className="mt-2 h-8 md:h-12 2xl:h-20" />
                    <span className="xl:text-sm 2xl:text-xl">HTML</span>
                  </span>
                  <span className="flex flex-col justify-center m-2">
                    <img src={css2} className="mt-2 h-8 md:h-12 2xl:h-20" />
                    <span className="xl:text-sm 2xl:text-xl">CSS</span>
                  </span>
                  <span className="flex flex-col justify-center m-2">
                    <img
                      src={javascript}
                      className="mt-2 h-8 md:h-12 2xl:h-20"
                    />
                    <span className="xl:text-sm 2xl:text-xl">Javascript</span>
                  </span>
                </span>
                <span className=" text-end xl:text-base text-xs xl:w-full text-gray-500">
                  *feito com ajuda da Rocketseat
                </span>
              </span>
              <span className="h-10vh mx-4 flex xl:h-32 2xl:h-56 self-end p-3 xl:m-16 text-lg md:text-2xl 2xl:text-5xl rounded-xl border-2 border-purple-900 bg-zinc-900 font-thin">
                O RND Links é um agregador de links para usar como cartão de
                visitas online. E para mim, uma forma de direcionar os
                interessados ao meu portfólio como Dev{" "}
              </span>
            </Dialog.Description>
          </Dialog.Panel>
        </Dialog>
      </Col>
      {/* 
      <Col className="row-span-2 xl:row-span-1">
        <span className="flex gap-2 flex-col h-full items-center xl:flex-row animate-pulse">
          <span className="row-span-1 flex text-5xl text-center">+</span>
          <span className="row-span-1 flex text-lg xl:text-4xl text-center">
            em breve
          </span>
        </span>
      </Col>
      */}
    </Row>
  );
}
