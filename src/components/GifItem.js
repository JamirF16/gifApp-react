import React from 'react'

export const GifItem = (props) => {
    const { url, title } = props

    return (
        <div className='card'>
            <a href={url} className='url'>
                <img src={url} alt={title} className='card__img' />
                <p> {title} </p>
            </a>
        </div>
    )
}
