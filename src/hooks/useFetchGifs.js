import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//custom hook

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGifs( category )
            .then( imgs => { 

                //Tras incluir las animaciones css ya no es necesario el setTimeout
                // setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    });

                // }, 3000);

            });
    }, //El segundo parámetro es la lista de dependecias, de qué depende que se dispare, 
    //si la categoria cambia, queremos volver a ejecutar este efecto 
    [ category ]);

    return state;
};
