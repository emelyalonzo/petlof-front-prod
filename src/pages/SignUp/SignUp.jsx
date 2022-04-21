import React, { useState} from 'react';
import Nav from '../../components/nav/Nav';

const Signup = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        first_name: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_me: '',
        gender_identify:'',
        gender_interest: '',
        email: '',
        password: '',
        url: '',
        about: '',
        matches: []
    })

    const handleSubmit = () => {
        console.log('submitted');
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.value
        const name = e.target.name
        console.log('value' + value, 'name' + name);

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <Nav/>
            <div className='signUp'>
                <h2>CREAR CUENTA</h2>

                <form onSubmit={handleSubmit} className="signUpForm">
                    <section className='signUpForm__section'>
                        <label htmlFor="first_name">Nombre
                        <div className='signUpForm__multipleInput'>
                            <input className='signUpForm__input'
                                id="first_name"
                                type="text"
                                name="first_name"
                                placeholder="Nombre"
                                required={true}
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        </label> 

                        <label htmlFor="dob_day" >Cumpleaños
                        <div className='signUpForm__multipleInput'>
                            <input className='signUpForm__input'
                                id="dob_day"
                                type="number" 
                                name="dob_day"
                                placeholder="dd"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />
                            <input className='signUpForm__input'
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="mm"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />
                            <input className='signUpForm__input'
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="aaaa"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>
                        </label> 

                        <label htmlFor="gender_identify" >Género
                        <div className='signUpForm__multipleInput'>
                            <label htmlFor="man-gender_identify" className='signUpForm__label'>Gato</label>
                            <input className='signUpForm__input'
                                id="man-gender_identify"
                                type="radio"
                                name="gender_identify"                                
                                required={true}
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender_identify" className='signUpForm__label'>Gata</label>
                            <input className='signUpForm__input'
                                id="woman-gender_identify"
                                type="radio"
                                name="gender_identify"                               
                                required={true}
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="other-gender_identify" className='signUpForm__label'>Otros</label>
                            <input className='signUpForm__input'
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

                        {/* <label htmlFor="animal" className='signUpForm__label'>
                        <div className='signUpForm__multipleInput'>
                            <input className='signUpForm__input'
                                id="animal"
                                type="radio"
                                name="animal"
                                placeholder="animal"
                                required={true}
                                value={""}
                                onChange={handleChange}
                            />
                        </div>
                        </label>  */}

                        <label htmlFor="show_me">Muéstrame
                        <div className='signUpForm__multipleInput'>
                            <label htmlFor="man-gender_interest" className='signUpForm__label'>Gato</label>
                            <input className='signUpForm__input'
                                id="man-gender_interest"
                                type="radio"
                                name="gender_interest"                                
                                required={true}
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender_interest" className='signUpForm__label'>Gata</label>
                            <input className='signUpForm__input'
                                id="woman-gender_interest"
                                type="radio"
                                name="gender_interest"                               
                                required={true}
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="everyone-gender_interest" className='signUpForm__label'>Todos</label>
                            <input className='signUpForm__input'
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

                        <label htmlFor="about">Sobre mí
                        <div className='signUpForm__multipleInput'>
                            <input className='signUpForm__input'
                                id="about"
                                type="text"
                                name="about" 
                                required={true}
                                placeholder="Me gusta la música"                   
                                value={formData.about}
                                onChange={handleChange}  
                            />
                        </div>
                        </label>

                        <label htmlFor="email">Email
                        <div className='signUpForm__multipleInput'>
                            <input className='signUpForm__input'
                                id="email"
                                type="text"
                                name="email" 
                                required={true}
                                placeholder="Email"                   
                                value={formData.email}
                                onChange={handleChange}  
                            />
                        </div>
                        </label>  

                        <label htmlFor="password">Password
                        <div className='signUpForm__multipleInput'>
                            <input className='signUpForm__input'
                                id="password"
                                type="password"
                                name="password" 
                                required={true}
                                placeholder="Password"                   
                                value={formData.password}
                                onChange={handleChange}  
                            />
                        </div>
                        </label>  

                            <input className='signUpForm__input' type="submit" value="Enviar"/>                  
                    </section>

                    <section className='signUpForm__section'>
                    <label htmlFor="url">Perfil
                    <div className='signUpForm__multipleInput'>
                            <input className='signUpForm__input'
                                id="url"
                                type="url"
                                name="url" 
                                required={true}
                                onChange={handleChange}
                            />  
                    </div>
                    </label>

                    <div className='photo-container'>
                        <img src={formData.url} alt="profile pic preview"/>

                    </div>
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
