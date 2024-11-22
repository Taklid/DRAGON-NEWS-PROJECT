import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
        // name: 'taklid',
        // email: 'taklid@gmail.com';
        const createNewUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
        };

        const logOut = () => {
            setLoading(true)
            return signOut(auth)
        };
        const loginUser = (email, password) => {
            setLoading(true)
           
            return signInWithEmailAndPassword(auth, email, password)
           
        };
        const userProfile = (updatedData) => {
            return updateProfile(auth.currentUser, updatedData)

        }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        loginUser,
        loading,
        userProfile
    }

    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;