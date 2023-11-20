import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-2xl">
                <span>Hi, Wellcome</span>
            </h2>
            {
                user?.displayName ? user?.displayName : 'Back'
            }
        </div>
    );
};

export default UserHome;