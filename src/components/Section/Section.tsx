import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './Section.css'
import {RootState} from "../../store/types";
import {fetchCats} from "../../store/cats/action";


function Section() {
    const dispatch = useDispatch()
    const [limit, setLimit] = useState<number>(10)
    const {cats} = useSelector((state: RootState) => state.cats)
    const requestCatsOptions = {
        route: `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=1`,
    }

    useEffect(() => {
        dispatch(fetchCats(requestCatsOptions))
    }, [limit])

    const fetchMore = (e: any) => {
        e.preventDefault()
        setLimit(prevState => prevState + 10)
    }
    return (
        <div className='section'>
            <div className='section-content'>
                {cats.map(cat => {
                    return <img src={cat.url} alt='Cat' key={cat.id}/>
                })}
            </div>
            {cats && (
                <button className='fetch-btn' onClick={fetchMore}>
                    Load More...
                </button>
            )}
        </div>
    )
}

export default Section
