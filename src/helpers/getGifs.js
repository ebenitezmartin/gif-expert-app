

export const getGifs = async( category ) => {
        
    // const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=GEr0C7r05WHPNRYPMqUDelFj8MCBAx8k';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category) }&limit=10&api_key=GEr0C7r05WHPNRYPMqUDelFj8MCBAx8k`;

    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}