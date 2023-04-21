import { Link } from 'react-router-dom'
import { useState } from 'react'
import navigationCSS from './css/navigation.module.css'

const Nav = () =>{

    const [order, setOrder] = useState('desc')
    const [sortBy, setSortBy] = useState('votes')

    function onChangeOrder(event){
        setOrder(event.target.value)
    }
    function onChangeSortBy(event){
        setSortBy(event.target.value)
    }

    return(
        <>
        <div className={`${navigationCSS.navigation} ${navigationCSS.grid4}`}>
            <Link to="/" className={navigationCSS.link}>All</Link>
            <Link to={`/reviews?category=hidden-roles&order=${order}&sort_by=${sortBy}`} className={navigationCSS.link}>hidden-roles</Link>
            <Link to={`/reviews?category=dexterity&order=${order}&sort_by=${sortBy}`} className={navigationCSS.link}>dexterity</Link>
            <Link to={`/reviews?category=strategy&order=${order}&sort_by=${sortBy}`} className={navigationCSS.link}>strategy</Link>
            <Link to={`/reviews?category=push-your-luck&order=${order}&sort_by=${sortBy}`} className={navigationCSS.link}>push-your-luck</Link>
            <Link to={`/reviews?category=roll-and-write&order=${order}&sort_by=${sortBy}`} className={navigationCSS.link}>roll-and-write</Link>
            <Link to={`/reviews?category=deck-building&order=${order}&sort_by=${sortBy}`} className={navigationCSS.link}>deck-building</Link>
            <Link to={`/reviews?category=engine-building&order=${order}&sort_by=${sortBy}`} className={navigationCSS.link}>engine-building</Link>
        </div>
        <div className={`${navigationCSS.navigation} ${navigationCSS.grid2}`}>
            <select onChange={onChangeOrder} defaultValue={order}>
                <option key="desc" value="desc">Descending</option>
                <option key="asc" value="asc">Ascending</option>
            </select>
            <select onChange={onChangeSortBy} defaultChecked={sortBy}>
                <option value="votes">Votes</option>
                <option value="comment_count">Comment count</option>
                <option value="created_at">Date</option>
            </select>
        </div>
        </>
    )
}

export default Nav