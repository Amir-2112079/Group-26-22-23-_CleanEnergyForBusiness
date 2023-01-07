import '../CSSContents/signup,login.css'
import { useState, useEffect } from "react";
function Login() {
    const initialValues = { username: "", password: "" }
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
        if (!values.username) {
            errors.username = "User name is needed!"
        }
        if (!values.password) {
            errors.password = "password is needed!"
        }
        return errors;
    };

    return (
        <div className="login">
            <form onSubmit={handleSumbit}>
                <h1>Login </h1>
                <div className="uiform">
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
        </div>
    );
}

export default Login;