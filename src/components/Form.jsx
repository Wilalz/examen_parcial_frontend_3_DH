import React, { useState } from 'react'
import Card from './Card';

export const Form = () => {
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [isFormValid, setIsFormValid] = useState(false)
    const [isError, setIsError] = useState(false)

    const handlerSubmit = (e) => {
        e.preventDefault();

        const nameWithOutSpaces = name.trim()
        const countryWithOutSpaces = country.trim()
        
        if (nameWithOutSpaces.length >= 3 && countryWithOutSpaces.length >= 6) {
            setIsFormValid(true);
            setIsError(false)
            setTimeout(() => {
                setIsFormValid(false);
                setName("")
                setCountry("")
            }, 3000);
            console.log("Datos enviados: Nombre = " + name + " y País = " + country)
        } else {
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 2000)
            console.warn("La información aún no ha sido enviada")
        }
    }
    

    return (
        <>
            <form onSubmit={handlerSubmit} className="form">
                <input 
                    type="text"
                    value={name}
                    placeholder='Nombre'
                    onChange={e => setName(e.target.value)}
                    />
                <input 
                    type="text" 
                    value={country}
                    placeholder='País'
                    onChange={e => setCountry(e.target.value)}
                />
                <button 
                    type="submit">Enviar
                </button>

                {isFormValid && 
                    <Card 
                        name={name} 
                        country={country} 
                    /> 
                }
                {isError && 
                    <p className="error_msg">Por favor chequea que la información sea correcta</p>
                }
            </form>
        </>
    )
}
