import { useFetchGif } from '../hooks/useFetchGif'
import { GifItem } from './GifItem'

export const GifList = (props) => {
    const { category } = props
    const {data, loading} = useFetchGif(category)

    return (
        <div className='container'>
            {
                data.map(gif => {
                    return (
                        <GifItem
                            key={gif.id}
                            url={gif.url}
                            title={gif.title}
                        />
                    )
                })
            }
        </div>
    )
}
