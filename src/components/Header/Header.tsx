import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Header.css'
import {RootState} from "../../store/types";
import {fetchCategories} from "../../store/categories/action";

function Header() {
    const dispatch = useDispatch()
    const requestCategoriesOptions = {
        route: 'https://api.thecatapi.com/v1/categories'
    }
    useEffect(() => {
        dispatch(fetchCategories(requestCategoriesOptions))
    }, [])
    const {categories} = useSelector((state: RootState) => state.categories)
    return (
        <div className='header'>
            <ul>
                {categories.map((category) => {
                    return <li key={category.id}>{category.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Header
