import "../sass/_technologies.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// FETCH DE DATOS AL JSON CON LAS TECHNOLOGIAS

const Technologies = () => {

  const [techs, setTechs] = useState([]);

  useEffect(() => {

    const GetData = async () => {

      try { 
        let resp = await fetch("../data/technologies.json");
        // let data = await resp.json();
        // setTechs(resp)
        console.log(resp);
      }
      catch(err){
        console.log(`Error en el fetch de datos "technologies": ${err}`);
      }finally{
        console.log('Fetch a datos reslizado con exito');
      } 

    }  

    GetData()

  }, [])
    
  return (
    <div className="m-auto">
      {techs.map((t) => (
        <Link to={t.web} key={t.name}>
          <img className="techImage" src={t.image} alt={t.name} />
        </Link>
      ))}
    </div>
  );
};

export default Technologies;
