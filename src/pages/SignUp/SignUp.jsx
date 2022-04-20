import React, { useState} from 'react';
import Nav from '../../components/nav/Nav';

const Signup = () => {

    const handleSubmit = () => {
        console.log('submitted');
    }

    const handleChange = () => {
        console.log('change');
    }

    return (
        <>
            <Nav/>
            <div className='signup'>
                <h2>CREAR CUENTA</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">Nombre
                        <div className='multiple-input-container'>
                            <input
                                id="first_name"
                                type="text"
                                name="first_name"
                                placeholder="Nombre"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                        </div>
                        </label> 

                        <label htmlFor="dob_day">Cumpleaños
                        <div className='multiple-input-container'>
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="dd"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="mm"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="aaaa"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                        </div>
                        </label> 

                        <label htmlFor="gender_identify">Género
                        <div className='multiple-input-container'>
                            <label htmlFor="man-gender_identify">Gato</label>
                            <input
                                id="man-gender_identify"
                                type="radio"
                                name="gender_identify"                                
                                required={true}
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender_identify">Gata</label>
                            <input
                                id="woman-gender_identify"
                                type="radio"
                                name="gender_identify"                               
                                required={true}
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="other-gender_identify">Otros</label>
                            <input
                                id="more-gender_identify"
                                type="radio"
                                name="gender_identify"                    
                                required={true}
                                value="more"
                                onChange={handleChange}
                                checked={false}
                            />
                        </div>
                        </label> 

                        <label htmlFor="animal">
                        <div className='multiple-input-container'>
                            <input
                                id="animal"
                                type="radio"
                                name="animal"
                                placeholder="animal"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                        </div>
                        </label> 

                        <label htmlFor="show_me">Muéstrame
                        <div className='multiple-input-container'>
                            <label htmlFor="man-gender_interest">Gato</label>
                            <input
                                id="man-gender_interest"
                                type="radio"
                                name="gender_interest"                                
                                required={true}
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender_interest">Gata</label>
                            <input
                                id="woman-gender_interest"
                                type="radio"
                                name="gender_interest"                               
                                required={true}
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="everyone-gender_interest">Todos</label>
                            <input
                                id="everyone-gender_interest"
                                type="radio"
                                name="gender_interest"                    
                                required={true}
                                value="everyone"
                                onChange={handleChange}
                                checked={false}
                            />
                        </div>
                        </label> 
                       
                    </section>

                </form> 

            </div>
        {/* // <>Crear una cuenta
        //     <form action="/signup" method="">
        //         <label for="firstName">
        //             <p>Nombre</p>
        //             <input name="firstName" type="text"/>
        //         </label>

        //         <label for="lastName">
        //             <p>Apellidos</p>
        //             <input name="lastName" type="text"/>
        //         </label>

        //         <label for="birthday">
        //             <p>Cumpleaños</p>
        //             <input name="day" type="number"/> 
        //             <input name="month" type="number"/> 
        //             <input name="year" type="number"/> 
        //         </label>  

        //         <label for="gender">
        //             <p>Gender</p>
        //         </label>

        //         <label for="animal">
        //             <p>Animal</p>
        //         </label>

        //         <label for="showme">
        //             <p>Interesado en</p>
        //         </label>

        //         <label for="aboutme">
        //             <p>Sobre mí</p>
        //             <textarea name="aboutme" type="text"/>
        //         </label>

        //         <label for="email">
        //             <p>Email</p>
        //             <input name="email" type="text"/>
        //         </label>

        //         <label for="password">
        //             <p>Contraseña</p>
        //             <input name="password" type="password"/>
        //         </label>

        //         <label for="password">
        //             <p>Confirmar contraseña</p>
        //             <input name="password" type="password"/>
        //         </label>

        //         <input type="submit" value="Enviar"/>



        //     </form>
        
        // </> */}
        </>
    );
}

export default Signup;
