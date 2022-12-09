import { GitIcon } from "./components/GitIcon"
import { ItemTimeLine } from "./components/ItemTimeLine"
import { LinkedinIcon } from "./components/LinkedinIcon"
import { Navbar } from "./components/Navbar"
import { Perfil } from "./components/Perfil"
import { SoftSkill } from "./components/SoftSkill"
import { TechExperience } from "./components/TechExperience"
import circle from './statics/circle-bg.svg'



export const App = () => {
  return (<>
    <div className="px-10 md:px-24 lg:px-56 max-w-full">
      <Navbar />
      <Perfil />

      <div>
        <a href="https://www.linkedin.com/in/camila-rivas-44622b25a/" target={"_blank"} rel="noreferrer" className="font-bold text-white border-b-2 p-2 h-10 hover:bg-zinc-900  px-2 border-[#fe7cd8] ">
          CONTACT ME
        </a>
      </div>

      <hr className="mt-28"></hr>

      {/* grid de 4 columnas para xl y 1 para sm */}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10">
        <TechExperience experience={'Estudiante'} tech={'HTML'} />
        <TechExperience experience={'Estudiante'} tech={'CSS'} />
        <TechExperience experience={'Estudiante'} tech={'JS'} />
        <TechExperience experience={'Estudiante'} tech={'REACT'} />
        <TechExperience experience={'Estudiante'} tech={'Agilidad'} />
      </div>

      <div>
        <div className="absolute -z-10 -right-28 ">
          <img src={circle} alt='circle'  ></img>
        </div>
        <h1 className="text-white text-5xl md:text-7xl  font-bold mt-20">
          Experiencia y Estudios
        </h1>

        {/* timeline  experiencia*/}


        <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-10">
          <ItemTimeLine time={'2015-2020'} title={'Derecho'} desc={'Estudiante de derecho, en la Universidad Central'} />
          <ItemTimeLine time={'2015-2020'} title={'Tutora de Relaciones Internacionales'} desc={'Universidad Central'} />
          <ItemTimeLine time={'2015-2020'} title={'Monitora Departamento de Admisión'} desc={'Universidad Central'} />
          <ItemTimeLine time={'2018-2019'} title={'Pasantía Fiscalía Metropolitana Sur'} desc={' Fiscalía San Miguel'} />
          <ItemTimeLine time={'2019'} title={'Examinadora Simce'} desc={'TATA Consultancy Service'} />
          <ItemTimeLine time={'2019-2022'} title={'Vendedora '} desc={'Casa Royal ltda'} />
          <ItemTimeLine time={'2021-2022'} title={'Consultor de Tecnología Educativa'} desc={'Centro de Entrenamientos Coaching Educacional'} />
        </ol>




      </div>

    </div>
    
    <div className="px-10 md:px-24 lg:px-56   bg-[#242424] py-20">
    
    <h1 className="text-white text-5xl md:text-7xl  font-bold mb-20">
        Habilidades Blandas
        <div className="absolute -z-10 -right-28 ">
          <img src={circle} alt='circle' ></img>
      </div>
        </h1>
      {/* Habilidades blandas  */}
      
      <div className="grid grid-cols-1  xl:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10">
        <SoftSkill desc={'Constantemente me estoy capacitando para poder aumentar mi conocimiento.'} skill={'Autodidacta'} />
        <SoftSkill desc={'Soy una persona sumamente comprometida con lo que hago por lo cual considero que la responsabilidad forma parte del compromiso. '} skill={'Responsable'} />
        <SoftSkill desc={'La puntualidad para mi es sinonimo de respeto por las demás personas que me rodean.'} skill={'Puntual'} />
        <SoftSkill desc={'Gran capacidad para relacionarme con otros, teneiendo en consideración la escucha activa y la transmisión de mi mensaje de manera eficaz.'} skill={'Capacidad para trabajar en equipo'} />
        <SoftSkill desc={'Capacidad de innovación'} skill={'Creatividad'} />
        <SoftSkill desc={'Autoconciencia de mis emociones propias y empatía con las emociones de los demás. '} skill={'Inteligencia Emocional'} />

        <SoftSkill desc={' Me adapto con facilidad a los cambios'} skill={'Capacidad de adaptación.'} />
        
        <SoftSkill desc={'Capacidad para dirigir a otras personas para el cumplimiento de objetivos comunes.'} skill={'Liderazgo'} />

        

      </div>
      
      <hr className="mt-20">
      </hr>
      <div className="flex pt-20">
        <div className="flex-1 ">
        <h1 className="text-white text-3xl font-bold  ">
          Camila Rivas
        </h1>
      </div>
        <div className='text-white  flex gap-5 '>
          <LinkedinIcon />
          <GitIcon />
            </div>
      </div>
    </div>
    </>
  )
}
