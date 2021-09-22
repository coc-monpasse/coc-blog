import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";
// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//      query{
//   projects(take:1){
//     id
//     name
//     status
//   }
// }
//     `,
//   });

//   return {
//     props: {
//       projects: data.projects
//     },
//   };
// }

export default function Home() {
  const [correo, Setcorreo] =useState("");
  return (
    <Layout title="home">
      <div className="w-full mx-auto px-4  font-sans bg-black text-white">
        <div className="flex mx-auto flex-col shadow-xl mb-10">
          <div
            className="h-3/4 flex flex-col lg:flex-row content-center justify-center"
            id="hero"
          >
            {/* <Image src="/man-wall.png" height={150} width={150} alt="man" layout="responsive"/> */}
            <div className="w-1/2 mx-auto flex justify-center">
              <Image
                className="mx-auto w-1/2"
                src="/coding.png"
                height={600}
                width={400}
                alt="man"
                layout="intrinsic"
                priority={true}
              />
            </div>
            <div className="lg:w-1/2 text-center  flex content-center lg:justify-evenly flex-col ">
              <h1 className=" text-2xl lg:text-9xl font-extrabold ">
                Armando Contreras
              </h1>
              <h2 className="  text-2xl font-bold lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-300 to-pink-600">
                software developer
              </h2>
              <h3 className=" text-md font-bold lg:text-2xl ">
                codear es mi pasion,empezo como un hobby ahora un estilo de
                vida,tengo año y medio trabajando en desarrollo de sotware y
              </h3>
              <div className="flex flex-row justify-evenly mt-6">
                <button className="font-bold bg-gradient-to-r from-green-300 to-green-700 w-1/3 rounded-xl text-sm lg:h-12 h-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150">
                  <Link href="/about">sobre mi</Link>
                </button>
                <button className="font-bold bg-gradient-to-r from-yellow-300 to-yellow-700 w-1/3 rounded-xl text-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150">
                  <Link href="/projects">mis proyectos</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-auto flex-col shadow-xl">
          <div
            className="h-3/4 flex flex-col lg:flex-row content-center justify-center"
            id="hero"
          >
            <div className="lg:w-1/2 text-center flex content-center lg:justify-evenly flex-col bg-black">
              <h1 className=" text-2xl lg:text-6xl font-extrabold ">
                suscribete a mi
              </h1>
              <h2 className="  text-xs font-bold lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                NEWSLETTER
              </h2>
              <h3 className=" text-xs font-bold lg:text-2xl ">
                quieres mantenerte aprendiendo junto conmigo?
              </h3>
              <div className="flex flex-row justify-evenly">
                <input value={correo} onChange={(e)=>Setcorreo(e.target.value)}  class=" text-black focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent h-10 w-2/3 rounded-xl" />
                <button class="w-2/4 h-10 font-bold text-sm bg-yellow-600 rounded-xl hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 ...">
                  Suscribirse
                </button>
              </div>
            </div>
            {/* <Image src="/man-wall.png" height={150} width={150} alt="man" layout="responsive"/> */}
            <div className="w-1/2 mx-auto flex justify-center">
              <Image
                className="mx-auto w-1/2"
                src="/medi.png"
                height={600}
                width={400}
                alt="man"
                layout="intrinsic"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
