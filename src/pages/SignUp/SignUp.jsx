import Nav from "../../components/Nav/Nav";
import React, { useState } from "react";
// import { useCookies } from 'react-cookie'

const Signup = () => {
  // const [cookes, setCokkie, removeCookie] = useCookies(['user'])
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_me: "",
    gender_identify: "",
    gender_interest: "",
    email: "",
    hashed_password: "",
    url: "",
    about: "",
    matches: [],
  });

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="signUp">
        <h2>CREAR CUENTA</h2>

        <form onSubmit={handleSubmit} className="signUpForm">
          <section className="signUpForm__section">
            <label htmlFor="first_name">
              Nombre
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input"
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

            <label htmlFor="dob_day">
              Cumpleaños
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input"
                  id="dob_day"
                  type="number"
                  name="dob_day"
                  placeholder="dd"
                  required={true}
                  value={formData.dob_day}
                  onChange={handleChange}
                />
                <input
                  className="signUpForm__input"
                  id="dob_month"
                  type="number"
                  name="dob_month"
                  placeholder="mm"
                  required={true}
                  value={formData.dob_month}
                  onChange={handleChange}
                />
                <input
                  className="signUpForm__input"
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

            <label htmlFor="gender_identify">
              Género
              <div className="signUpForm__multipleInput">
                <label
                  htmlFor="man-gender_identify"
                  className="signUpForm__label"
                >
                  Gato
                </label>
                <input
                  className="signUpForm__input"
                  id="man-gender_identify"
                  type="radio"
                  name="gender_identify"
                  required={true}
                  value="man"
                  onChange={handleChange}
                  checked={formData.gender_identify === "man"}
                />
                <label
                  htmlFor="woman-gender_identify"
                  className="signUpForm__label"
                >
                  Gata
                </label>
                <input
                  className="signUpForm__input"
                  id="woman-gender_identify"
                  type="radio"
                  name="gender_identify"
                  required={true}
                  value="woman"
                  onChange={handleChange}
                  checked={formData.gender_identify === "woman"}
                />
                <label
                  htmlFor="other-gender_identify"
                  className="signUpForm__label"
                >
                  Otros
                </label>
                <input
                  className="signUpForm__input"
                  id="more-gender_identify"
                  type="radio"
                  name="gender_identify"
                  required={true}
                  value="more"
                  onChange={handleChange}
                  checked={formData.gender_identify === "other"}
                />
              </div>
            </label>

            <label htmlFor="show_me">
              Muéstrame
              <div className="signUpForm__multipleInput">
                <label
                  htmlFor="man-gender_interest"
                  className="signUpForm__label"
                >
                  Gato
                </label>
                <input
                  className="signUpForm__input"
                  id="man-gender_interest"
                  type="radio"
                  name="gender_interest"
                  required={true}
                  value="man"
                  onChange={handleChange}
                  checked={formData.gender_interest === "man"}
                />
                <label
                  htmlFor="woman-gender_interest"
                  className="signUpForm__label"
                >
                  Gata
                </label>
                <input
                  className="signUpForm__input"
                  id="woman-gender_interest"
                  type="radio"
                  name="gender_interest"
                  required={true}
                  value="woman"
                  onChange={handleChange}
                  checked={formData.gender_interest === "woman"}
                />
                <label
                  htmlFor="everyone-gender_interest"
                  className="signUpForm__label"
                >
                  Todos
                </label>
                <input
                  className="signUpForm__input"
                  id="everyone-gender_interest"
                  type="radio"
                  name="gender_interest"
                  required={true}
                  value="everyone"
                  onChange={handleChange}
                  checked={formData.gender_interest === "everyone"}
                />
              </div>
            </label>

            <label htmlFor="about">
              Sobre mí
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input"
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

            <label htmlFor="email">
              Email
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input"
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

            <label htmlFor="password">
              Password
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input"
                  id="password"
                  type="password"
                  name="password"
                  required={true}
                  placeholder="Password"
                  value={formData.hashed_password}
                  onChange={handleChange}
                />
              </div>
            </label>

            <input className="signUpForm__input" type="submit" value="Enviar" />
          </section>

          <section className="signUpForm__section">
            <label htmlFor="url">
              Perfil
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input--profile"
                  id="url"
                  type="url"
                  name="url"
                  required={true}
                  onChange={handleChange}
                />
              </div>
            </label>

            <div className="signUpForm__photo-container">
              <img
                src={formData.url}
                alt="profile pic preview"
                className="signUpForm__photo-container"
              />
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Signup;
