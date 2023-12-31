import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import image from '../../assets/others/authentication.gif'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Resister = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate()

    const { register, handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
             createUser(data.email, data.password)
        .then(result => {
            updateUserProfile(data?.name, data?.photoURL)
            .then(() => {
                console.log('user profile updated')
                // create user entry in the database 
                const userInfo = {
                    name:data?.name,
                    email:data?.email
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        console.log('user added database ---->',res.data);
                        toast.success("Resister Successfully...!") 
                    }
                })
            })
            .catch(err => console.log(err))
           if(result.user){
          toast.success("Resister Successfully...!")
          return navigate('/')
           }
        })
        .then(error => {
            console.error(error);
        })
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | resister</title>
            </Helmet>
            <h2 className="text-3xl my-20 font-bold text-center">Resister Now.... <span className="text-green-700">!</span></h2>
            <div className="hero">
                <div className="hero-content flex flex-col lg:flex-row-reverse gap-10">
             
                    <div className="flex-1">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 flex-1 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })}
                                    name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", { required: true })}
                                    name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: true, minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                    })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "minLength" && <span className="text-red-600">password length must be 6 characters or longer</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">password must have one uppercase one lowercase one number and one special character</span>}
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">password is required</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })}placeholder="Your Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-500">photoURL is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-success text-[18px] capitalize " type="submit" value="Reister" />
                            </div>
                            <p>Have an Account  <Link to='/login' className="text-blue-500 underline">Please Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resister;