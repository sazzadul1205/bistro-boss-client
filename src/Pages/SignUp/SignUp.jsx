import { Link, useNavigate, } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user
                console.log(user);
                updateUser(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in database
                        const userInfo = {
                            name: data.name,
                            email: data.email,

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to database');
                                    showSuccessAlert();
                                    reset();
                                    navigate('/');
                                }
                            })
                            .catch(() => {
                                error => console.log(error);
                            })

                    })
                    .catch(() => {
                        error => console.log(error);
                    })

            })

    }

    const showSuccessAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Sign Up Successful!',
            text: 'You can now log in with your credentials.',
        });
    };


    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Sign UP</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered" />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered" />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="url"
                                    {...register("photoURL", { required: true })}
                                    placeholder="Photo URL"
                                    className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">TPhoto URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 8,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                {errors.password?.type === "required" && (
                                    <p
                                        className="text-red-600"
                                        role="alert">password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p
                                        className="text-red-600"
                                        role="alert">password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p
                                        className="text-red-600"
                                        role="alert">password must be bellow 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p
                                        className="text-red-600"
                                        role="alert">password must have at least one upper case, one lower case, special characters and a number  characters</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input
                                    className={`w-full p-3 bg-[#d1a054b3] hover:bg-[#d1a00ab3] disabled:bg-gray-500 rounded-xl`}
                                    type="submit"
                                    value='Sign UP' />
                                <h1 className='font-normal text-sm mt-2'>Don`t Have an account? <span className='text-[#FF3811]'><Link to={'/login'}>Log In</Link></span></h1>
                            </div>
                        </form>
                        <div className="mx-auto">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignUp;