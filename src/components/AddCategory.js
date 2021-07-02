import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    //Si no ponemos un ('') en el useState, no le estaremos informando el tipo, será undefined, por lo que cascará error al hacer click en el inputk
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = ( e ) => {
        //Para evitar el post del submit (que no redirija)
        e.preventDefault();

        if ( inputValue.trim().length > 2 ){
            setCategories( cat => [ inputValue, ...cat ] );
            setInputValue( '' );
        }

    };
    
    const handleReset = ( e ) => {
        setInputValue( '' );
    };


    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" onChange={ handleInputChange } onClick={ handleReset } value={ inputValue }/>
        </form>
    );
};

//Así nos aseguramos que la función vendrá
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
};