// import React, { useEffect, useState } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    //si la categoria cambia, queremos volver a ejecutar este efecto (unicamente si cambia)
    const { data:images, loading } = useFetchGifs( category );


    //Sustituiremos esto por el custom hook useFetchGifs()
    /** 
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs( category )
        // .then( imgs => setImages(imgs) );
        .then( setImages );
    }, //El segundo parámetro es la lista de dependecias, de qué depende que se dispare, 
    //si la categoria cambia, queremos volver a ejecutar este efecto 
    [ category ]);
    */

    //Esto no tiene por que estar en este componente ya que trabaja para él pero no es propio de él
    /**
    const getGifs = async() => {
        
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

        // console.log( gifs );
        //Tras recibir los datos cargamos el state
        setImages( gifs );
    }
    */
    //Si dejamos esto aquí, cualquier cambio en la aplicacion recargará la página una y otra vez (volverá a leer todo esto)
    // getGifs();


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                { 
                    images.map( img => (
                        <GifGridItem 
                        key={ img.id } 
                        //Es mejor usarlo asi ya que se envía cada propiedad como un valor independiente:
                        { ...img }
                        //Que así
                        // img={ img } 
                        />
                    )) 
                }
            </div>

            
        </>
    )
}
