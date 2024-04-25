"use client"
import Image from "next/image";
import Link from "next/link";
import pages from "./constants/pages";
import { csrf } from "./services/Csrf";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter()
  const handleGuest = async () => {
    // const csrfTemp = await csrf()
    // setCookie("csrf", csrfTemp)
    navigate.push(pages.simulate)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <Image src={'https://listradigital.com.br/wp-content/uploads/2020/11/LISTRA_roxo_verde.png'} height={200} width={200} alt="Logo listra" />
        <div className="my-10"><p className="text-zinc-500">Espero que gostem do projeto!</p></div>
        <button onClick={() => { handleGuest() }} className=" bg-violet-700 p-4 hover:bg-violet-800 text-white rounded-md">Iniciar</button>
      </div>
    </main>
  );
}
