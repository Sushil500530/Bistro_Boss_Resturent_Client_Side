import { useContext, useEffect, useState } from 'react';
import image from '../../assets/others/authentication.gif'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


const Login = () => {
    const [disable, setDisable] = useState(true)
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
            if(result.user){
                Swal.fire({
                    title: "User Resister Successfully!",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
            }
            return navigate("/")
            })
            .then((error) => {
               toast.error(`${error.message}`)
            })
    }

    const handleValidateCaptch = (e) => {
        const captchaValue = e.target.value;
        if (validateCaptcha(captchaValue)) {
           return setDisable(false)
        }
        else {
           return setDisable(true)
        }
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | login</title>
            </Helmet>
            <h2 className="text-3xl my-20 font-bold text-center">Resister Now.... <span className="text-green-700">!</span></h2>
            <div className="hero">
                <div className="hero-content flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 flex-1 shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="w-full card-body">
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
                                <input onBlur={handleValidateCaptch} type="text"
                                    name="captcha" placeholder="Type the Captch above" className="input input-bordered" required />
                                <button  className='btn btn-outline btn-xs mt-3'>Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-success text-[18px] capitalize " type="submit" value="Login" />
                            </div>
                            <p>haven not yet an Account please <Link to="/resister" className='text-blue-500 underline'>Resister Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;