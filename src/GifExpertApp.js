import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
// Estructura de archivos ydirectorios
// https://es.reactjs.org/docs/faq-structure.html
// https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samuray', 'Dragion Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {

    //     //Se puede hacer de estas dos maneras (la primera es mejor)
    //     setCategories( cat => [ ...cat, 'Sailor Moon' ] );
    //     // setCategories( [...categories, 'Sailor Moon'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/** Así le podemos pasar una función propia a otro componente */}
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* Si queremos agregar algo, debemos asegurarnos que no lo haremos sobre una constante, usaremos el hook useState */}
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {/** Hay que recordar que el key no puede ser nunca un índice, debe ser clave única */}
                {/* { categories.map( category => {
                    return <li key={ category }>{ category }</li>;
                } ) } */}

                { categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                ) ) } 
                
            </ol>
        </>
    )


}

export default GifExpertApp;