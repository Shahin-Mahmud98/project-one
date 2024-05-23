/* eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../components/LoadingSpinner';

const PrivateRoute = ({children}) => {
   const {user,loading} = useAuth();

//    location control /protect

    const location = useLocation();


    // for loading page
    if (loading) {
        return <LoadingSpinner/>
    }

   if (user) {
    return children;
   }



//    for navigate

//    (alias) function Navigate({ to, replace, state, relative, }: NavigateProps): null
// import Navigate
// Changes the current location.

// Note: This API is mostly useful in React.Component subclasses that are not able to use hooks.
//  In functional components, we recommend you use the useNavigate hook instead.

   return <Navigate to={"/login"} state={{from:location}} replace/>
}


export default PrivateRoute;