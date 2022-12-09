import React from 'react'
import img from '../statics/foto-perfil.jpeg'
import circle from '../statics/circle-bg.svg'



export const Perfil = () => {
  return (
    <>
          <div className="absolute -z-10 top-34 -left-28 ">
        <img src={circle} alt='circle' ></img>
      </div>
      <div className="flex flex-col xl:flex-row justify-between gap-10 py-20">
        <div className="text-center xl:text-start">
          <h1 className=" text-5xl  md:text-7xl  font-bold text-white ">
            Bienvenid@s a mi portafolio

          </h1>
          <h1 className=" text-5xl  md:text-7xl   font-bold text-white " >
            <u style={{ 'textDecorationColor': '#fe7cd8' }}>Camila Rivas</u><strong className="text-decoration: ;">.</strong>
          </h1>
          <p className=" text-gray-400 font-thin text-xl py-5 xl:max-w-xl">
              Me defino como una persona con muchas ganas de aprender, por lo cual me encuentro en la búsqueda de aprender nuevas tecnologías relacionadas con el mundo de la programación; tengo conocimientos en tecnologías de Frontend, por lo demás conozco metodologías ágiles y herramientas para su implementación, mi principal objetivo es lograr convertirme en Desarrolladora Full Stack. 
          </p>
        </div>
        <div className=" w-full flex justify-center items-center xl:w-96">
          <div className="  xl:absolute w-96 xl:w-[30rem] top-0 right-0 2xl:right-56 -z-10">
            <img src={img} alt='perfil' className="w-full"  ></img>
          </div>
        </div>
      </div>
    </>
  )
}
