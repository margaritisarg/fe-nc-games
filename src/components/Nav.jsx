import { Link } from 'react-router-dom'
import navigationCSS from './css/navigation.module.css'

const Nav = () =>{
    return(
        <div className={navigationCSS.navigation}>
            <Link to="/" className={navigationCSS.link}>All</Link>
            <Link to="/reviews/hidden-roles" className={navigationCSS.link}>hidden-roles</Link>
            <Link to="/reviews/dexterity" className={navigationCSS.link}>dexterity</Link>
            <Link to="/reviews/strategy" className={navigationCSS.link}>strategy</Link>
            <Link to="/reviews/push-your-luck" className={navigationCSS.link}>push-your-luck</Link>
            <Link to="/reviews/roll-and-write" className={navigationCSS.link}>roll-and-write</Link>
            <Link to="/reviews/deck-building" className={navigationCSS.link}>deck-building</Link>
            <Link to="/reviews/engine-building" className={navigationCSS.link}>engine-building</Link>
        </div>
    )
}

export default Nav