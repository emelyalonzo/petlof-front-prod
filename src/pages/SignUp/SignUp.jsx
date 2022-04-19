import React from 'react';

const Signup = () => {
    return (
        <>Crear una cuenta
            <form action="/signup" method="">
                <label for="firstName">
                    <p>Nombre</p>
                    <input name="firstName" type="text"/>
                </label>

                <label for="lastName">
                    <p>Apellidos</p>
                    <input name="lastName" type="text"/>
                </label>

                <label for="birthday">
                    <p>Cumpleaños</p>
                    <input name="day" type="number"/> 
                    <input name="month" type="number"/> 
                    <input name="year" type="number"/> 
                </label>  

                <label for="gender">
                    <p>Gender</p>
                </label>

                <label for="animal">
                    <p>Animal</p>
                </label>

                <label for="showme">
                    <p>Interesado en</p>
                </label>

                <label for="aboutme">
                    <p>Sobre mí</p>
                    <textarea name="aboutme" type="text"/>
                </label>

                <label for="email">
                    <p>Email</p>
                    <input name="email" type="text"/>
                </label>

                <label for="password">
                    <p>Contraseña</p>
                    <input name="password" type="password"/>
                </label>

                <label for="password">
                    <p>Confirmar contraseña</p>
                    <input name="password" type="password"/>
                </label>

                <input type="submit" value="Enviar"/>



            </form>
        
        </>
    );
}

export default Signup;
