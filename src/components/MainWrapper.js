import React from 'react'
import TodoItem from './TodoItem'

import '../styles/MainWrapper.css'

function MainWrapper()
{
    return(
        <div class="TaskWrapper">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}
export default MainWrapper