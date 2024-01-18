import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
        nombre='Shawn'
        pais='Singapour'
        imagen='shawn'
        cargo='Ingeniero en Software'
        empresa='Amazon'
        textoS='freeCodeCamp cambió mi vida".'
        Testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software '/>
        
        <Testimonio 
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='sarah'     
        cargo='Ingeniera en Software'
        empresa='ChatDesk'
        textoA='FreeCodeCamp fue la puerta de entrada a mi carrera"'
        Testimonio=' como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'/>

        <Testimonio 
        nombre='Emma Bostin'
        pais='Suecia'
        imagen='emma'
        cargo='Ingeniera en Software'
        empresa='Spotify'
        textoE='freeCodeCamp me dio las habilidades'
        textoM='y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'
        Testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en'/>

        


        
        
      
      </div>
    </div>
  );
}

export default App;
