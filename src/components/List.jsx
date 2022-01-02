import React from 'react'

const List = ({ list }) => {
    return (
        <div>
            <ul>        
                {list.map((item) => (
                    <li key={item.id}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span> by
                        <span> {item.by} | </span>
                        <span>points: {item.score}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List
