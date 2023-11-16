import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc"
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    const userInfo = {
                        email: res.user?.email,
                        name: res.user?.displayName
                    }
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            console.log(res.data);
                            toast.success("login successfully!")
                        })
                        .catch(err => console.error(err))

                }
                return navigate(location?.state ? location.state : "/")
            })
            .catch(error => console.error(error))
    }
    return (
        <div onClick={handleGoogleSignIn} className="w-3/5 mx-auto pb-12">
            <div className="divider text-2xl">Or</div>
            <div className="space-y-3 mt-6">
                <h1 className="flex items-center justify-center py-2 border rounded-full text-4xl gap-5 hover:bg-[#F2F3F3] cursor-pointer transition hover:text-blue-600"><FcGoogle></FcGoogle> <span className="text-xl font-bold">Sign in Google</span></h1>
            </div>
        </div>
    );
};

export default SocialLogin;