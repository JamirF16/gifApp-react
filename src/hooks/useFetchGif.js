import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGif"

export const useFetchGif = (category) => {
    const [obj, setObj] = useState({ data: [], loading: true })

    useEffect(() => {
        getGifs(category)
            .then(gif => {
                setTimeout(() => {
                    setObj({
                        data: gif,
                        loading: false
                    })
                }, 3000)
            })
    }, [category])
    return obj
}
