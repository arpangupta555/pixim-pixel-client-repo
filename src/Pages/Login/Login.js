import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');

    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
            })
            .then(error => console.log(error));


    }


    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {

        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(error => console.error(error))
    }



    return (
        <div className="hero  w-full">
            <div className="hero-content ">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">




                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>

                    <p>{error}</p>

                    <p className='text-center mb-6'>New to PixelPixim  <Link className='text-orange-600 font-bold' to="/signup" > Sign-up </Link> </p>
                    <button onClick={handleGoogleSignIn} type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-black-100">Google Sign-in</button>

                </div>
            </div>
        </div>
    );
};

export default Login;