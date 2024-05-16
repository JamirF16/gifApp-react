import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifList } from './components/GifList'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Sylas"])
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory
                setCategories={setCategories}
                categories={categories}
            />

            {
                categories.map(c => (
                    <>
                    <h3 className='category__name'>{c}</h3>
                        <GifList
                            key={c}
                            category={c}
                        />
                    </>
                ))
            }
        </div>
    )
}
