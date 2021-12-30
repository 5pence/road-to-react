import React from 'react'

const List = ({ list }) => {
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span> by
                        <span> {item.author} | </span>
                        <span>comments: {item.num_comments} | </span>
                        <span>points: {item.points}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List
