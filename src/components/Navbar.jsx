
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  // useAuth for register
  const [logOut,user] = useAuth();


  // handle logout button
  const handleLogout = async() =>{
    await logOut();
  }

    return (
        <div>
            <div className="navbar bg-base-100 p-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" fill="none" viewBox="0 0 24 24"
         stroke="currentColor">
            <path strokeLinecap="round" 
         strokeLinejoin="round" 
         strokeWidth="2" 
         d="M4 6h16M4 12h8m-8 6h16" />
         </svg>
      </div>
      <ul tabIndex={0} 
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <Link to={'/'}>Home</Link>
            </li>
        <li>
          
          <ul className="p-2">
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
          </ul>
        </li>
        <li><Link to={'/login'}>Login</Link></li>
        <button
            onClick={handleLogout}
            className="btn bg-red-500 text-white hidden lg:block"
          >
            Logout
          </button>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Zmmet</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to={'/'}>Home</Link>
        </li>
      
     
        <li><Link to={'/about'}>About</Link></li>
          
          {/* <ul className="p-2"> */}
           
           

        {!user && (
          <>
          <li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/register'}>Register</Link></li>
          </>
        )}
        {!user && (
        <li><Link to={'/dashboard'}>Dashboard</Link></li>

        )}
           </ul> 

          
           
            {/* Logout But Start */}
           <button
                  onClick={handleLogout}
                  className="btn bg-red-500 text-white"
                >
                  Logout
                </button>

           
           {/* Logiut But Start */}
          {/* </ul> */}
        
      
      {/* <li><a>Career </a></li> */}
    
  </div>
  <div className="navbar-end">
    <a className="btn mx-5">LogOut</a>
    <div className="avatar">
  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="images/3187.jpg" />
  </div>
</div>
  </div>
</div>

        </div>
    );
};

export default Navbar;