import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../Social';
import auth from '../../firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useToken from '../../hooks/useToken';
const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit = (data) => {

        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    }




    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if (loading) {
        return <button class="btn btn-square loading"></button>
    }

    let signInError;
    if (error) {
        signInError = <p>{error?.message}</p>
    }
    return (

        <div className='flex  justify-center'>
            <div class="flex flex-col w-1/3 border-opacity-50 py-5">
                <div class="grid">

                    <h2 className='text-center text-secondary font-bold text-3xl pb-10 pt-10'>Please Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <input {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: "Email Address is required"
                                }
                            },
                            {
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Provide a valid email"
                                }
                            })} type="email" name='email' placeholder="Your Email" class="input input-bordered w-full mb-4" />
                        {errors.email?.type === 'required' && <p className='text-red-400 pb-2'>{errors.email.message}</p>}
                        {errors.email?.type === 'pattern' && <p className='text-red-400  pb-2'>{errors.email.message}</p>}


                        <input {...register("password",
                            {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }
                            },
                            {
                                minLength: {
                                    value: 6,
                                    message: "Password should be six characters long"
                                }
                            })} type="password" name='password' placeholder="Your Password" class="input input-bordered w-full mb-4" />
                        {errors.password?.type === 'required' && <p className='text-red-400  pb-2'>{errors.password.message}</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-400 pb-2'>{errors.password.message}</p>}

                        {signInError}
                        <input type="submit" value="LOG IN" class="input w-full mb-4 bg-gradient-to-r from-secondary  to-primary text-white font=bold text-lg border-none" />

                    </form>
                </div>
                <div class="divider">OR</div>
                <div class="grid  ">
                    <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default LogIn;