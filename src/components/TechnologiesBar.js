import '../sass/_technologiesBar.scss'
import {Link} from 'react-router-dom'

//OPTIMIZAR INFORMACION (ALOJAR EN ALGUN OTRO LADO)
const techs = [{name: 'HTML', image: '', web: 'https://lenguajehtml.com/html/'}, {name: 'CSS', image: '', web: 'https://lenguajecss.com/css/'}, {name: 'SASS', image: '', web: 'https://sass-lang.com/'}]

const TechnologiesBar = () => {

    return(
        <div className='m-auto'>
            {techs.map( (t) => (
                <Link to={t.web} key={t.name}>
                    <img className='techImage' src={t.image} alt={t.name} />
                </Link>
            ))}
        </div>
    )
}

export default TechnologiesBar