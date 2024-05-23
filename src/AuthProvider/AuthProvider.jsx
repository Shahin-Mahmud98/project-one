import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    // for current user state
    const [user,setUser] = useState(null);

    // for loading page added method 
    const [loading,setLoading] = useState();

    // google login
    const googleProvider = new GoogleAuthProvider();


    // for register email password method
    const createUser = (email,password)=>{
        // for loading page
        setLoading(true)
        // for loading page
        return createUserWithEmailAndPassword(auth,email,password)
    }


    // for Normal SignIn 
    const signIn = (email,password)=>{
        // for loading page
        setLoading(true);
        // for loading page
        return signInWithEmailAndPassword(auth,email,password);
    }


    // for logout or signOut 

    const logout =()=>{
        return signOut(auth);
    };

    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider);
    };
       
     // google login end 

    // for current user show used useEffect

    useEffect(()=>{
        // eslint-disable-next-line no-unused-vars
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if (currentUser) {
                setUser(currentUser);
                // for loading page
                setLoading(false)
                console.log(currentUser)
            }else{
                setLoading(false);
            }
        });
        return () =>{
            return unsubscribe();
        }
    },[])


    // for current user show used useEffect end

    // Google Login

    const authInfo = {user,googleLogin,createUser,signIn,logout,loading};

   return
    // eslint-disable-next-line no-unreachable
    (
    <AuthContext.Provider 
    value ={authInfo}>{children}
    </AuthContext.Provider>
   );

};

export default AuthProvider;