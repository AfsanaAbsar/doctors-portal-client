import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.config';
import useToken from '../hooks/useToken';
const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <button class="btn btn-square loading"></button>
    }
    return (
        <input type="submit" onClick={() => signInWithGoogle()} value="GOOGLE SIGN IN" class="input w-full mb-4 bg-gradient-to-r from-secondary  to-primary text-white font=bold text-lg border-none" />
    );

};

export default Social;