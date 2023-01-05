import { useState, useEffect } from "react";

function Regester() {

    const initialValues = { username: "", email: "", password: "" }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErros, setFormErros] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        setFormErros(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErros);
        if (Object.keys(formErros).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErros]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "User name is needed!"
        }
        if (!values.email) {
            errors.email = "email is needed!"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "password is needed!"
        }
        return errors;
    };
    return (

        <form onSubmit={handleSumbit}>
            <h1>Login form </h1>
            <div className="ui divider"></div>
            <div className="ui form">
                <div className="field">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </div>
                <p> {formErros.username}</p>
                <div className="field">
                    <label>Email </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>
                <p> {formErros.email}</p>
                <div className="field">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </div>
                <p> {formErros.password}</p>
                <button className="fluid ui button blue">Sumbit</button>
            </div>
        </form>
    );
}

export default Regester;