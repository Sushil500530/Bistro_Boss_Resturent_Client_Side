import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const AdminHome = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h2><span>Hi, Wellcome</span></h2>
            {
                user?.displayName ? user?.displayName : 'Back'
            }
        </div>
    );
};

export default AdminHome;