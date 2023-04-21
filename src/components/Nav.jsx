import { useState } from 'react';import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import navigationCSS from './css/navigation.module.css'


const Nav = () =>{

    const [searchParams, setSearchParams] = useSearchParams();
    const [order, setOrder] = useState()
    const [sortBy, setSortBy] = useState()

    const navigate = useNavigate()

    function handleOnChange(event){
        const newParams = new URLSearchParams(searchParams)
        const changedValue = event.target.value
        
        if(changedValue === 'asc' || changedValue === 'desc') newParams.set('order', changedValue)
        else newParams.set('sort_by', changedValue)
        
        setSearchParams(newParams)
    }

    function handleOnClick(event){
        const newParams = new URLSearchParams(searchParams)
        newParams.set('category', event.target.value)
        setSearchParams(newParams)
    }

    return(
        <>
            <div className={`${navigationCSS.navigation} ${navigationCSS.grid4}`}>
                
                <button onClick={() => navigate('/')} className={navigationCSS.link}>All</button>

                <button value="hidden-roles" onClick={handleOnClick} className={navigationCSS.link}>hidden roles</button>                              
                <button value="dexterity" onClick={handleOnClick} className={navigationCSS.link}>Dexterity</button>            
                <button value="strategy" onClick={handleOnClick} className={navigationCSS.link}>Strategy</button>
                <button value="push-your-luck" onClick={handleOnClick} className={navigationCSS.link}>Push your luck</button>
                <button value="roll-and-write" onClick={handleOnClick} className={navigationCSS.link}>Roll and write</button>
                <button value="deck-building" onClick={handleOnClick} className={navigationCSS.link}>Deck building</button>
                <button value="engine-building" onClick={handleOnClick} className={navigationCSS.link}>Engine building</button>
            </div>

            <div className={`${navigationCSS.navigation} ${navigationCSS.grid2}`}>
                <select onChange={handleOnChange} defaultValue={order}>
                    <option key="desc" value="desc">Descending</option>
                    <option key="asc" value="asc">Ascending</option>
                </select>
                <select onChange={handleOnChange} defaultChecked={sortBy}>
                    <option value="votes">Votes</option>
                    <option value="comment_count">Comment count</option>
                    <option value="created_at">Date</option>
                </select>
            </div>
        </>
    )
}

export default Nav