export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=YadvaJlhmXDjJrZT1amHV9VQ9bu3LPFP&limit=12`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Error al hacer la consulta")
        }
        const { data } = await response.json()
        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })
        return gifs
    } catch (error) {
        console.log(error)
    }
}