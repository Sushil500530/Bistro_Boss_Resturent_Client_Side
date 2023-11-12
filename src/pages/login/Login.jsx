import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
const captchaRef = useRef(null);
const [disable,setDisable] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6)
    },[])
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    const handleValidateCaptch = () => {
        const captchaValue = captchaRef.current.value;
        if(validateCaptcha(captchaValue)){
             setDisable(false)
        }
        else{
            setDisable(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" 
                           name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                            name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                             <LoadCanvasTemplate />
                            </label>
                            <input type="text"
                            name="captcha" ref={captchaRef} placeholder="Type the Captch above" className="input input-bordered" required />
                        <button onClick={handleValidateCaptch} className='btn btn-outline btn-xs mt-3'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                           <input disabled={disable} className="btn btn-success text-[18px] capitalize " type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;