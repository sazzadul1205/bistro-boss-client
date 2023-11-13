import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        singIn(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
                showSuccessLogInAlert();
                navigate(from, {replace: true})
            })


    };

    const handleValidate = (e) => {
        const userCaptchaValue = e.target.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false);
            showSuccessAlert();
        } else {
            setDisabled(true);
            showErrorAlert();
        }
    };

    const showSuccessAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Captcha Validation Successful!',
            text: 'You can proceed with the login.',
            timer: 1000,
            showConfirmButton: false,
        });
    };

    const showErrorAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Captcha Validation Failed!',
            text: 'Please try again.',
            timer: 1000,
            showConfirmButton: false,
        });
    };
    const showSuccessLogInAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Sign Up Successful!',
            text: 'You can now log in with your credentials.',
        });
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Log In</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input
                                    onBlur={handleValidate}
                                    type="text"
                                    name="captcha"
                                    placeholder="Write the text above"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    className={`w-full p-3 bg-[#d1a054b3] hover:bg-[#d1a00ab3] disabled:bg-gray-500 rounded-xl`}
                                    disabled={disabled}
                                    type="submit"
                                    value='login' />
                                <h1 className='font-normal text-sm mt-2'>Already Have an account? <span className='text-[#FF3811]'><Link to={'/signUp'}>Sign Up</Link></span></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;