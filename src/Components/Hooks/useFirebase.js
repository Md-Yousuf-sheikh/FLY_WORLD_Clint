import { useEffect, useState } from 'react';
import InitializeFirebase from '../Firebase/Firebase.Init';

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

InitializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false)


    const auth = getAuth();
    // Google sing In 
    const googleProvider = new GoogleAuthProvider();
    const GoogleSinInUser = (location, navigate) => {
        // set is loading
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // location state
                const destination = location?.state?.from || '/';
                navigate(destination);
                const user = result.user;
                //  set user
                setUser(user);
                // save user admin check
                saveUser(user.email, user.displayName, 'PUT')
                // 
                setError('')

            }).catch((error) => {
                // set Error
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    //  Register with gmail and password
    const registerWithEmail = (email, password, name, location, navigate) => {
        // set is loading
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // new user 
                const newUser = { email, displayName: name }
                // set user
                setUser(newUser)
                //  save user to the  database
                saveUser(email, name, 'POST')
                //  send name firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                })
                // location redirect 
                const destination = location?.state?.from || '/';
                navigate(destination);

            })
            .catch((error) => {
                setError(error.message)
            })
            // set is loading
            .finally(() => setIsLoading(false))
    }
    //  Login with gmail and password
    const sinUpWithEmail = (email, password, location, navigate) => {
        // set is loading 
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // location redirect 
                const destination = location?.state?.from || '/';
                navigate(destination);

                // set user 
                setUser(result.user)
                // set error
                setError('')
            })
            .catch((error) => {
                // set error
                setError(error.message)
            })
            // set is loading
            .finally(() => setIsLoading(false))

    }
    //  Log out 
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            // set error 
            setError('')
        }).catch((error) => {
            // set error
            setError(error.message)

        }).finally(() => setIsLoading(false));
    }

    // Observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // set user
                setUser(user);

            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unsubscribe;
    }, [])


    // admin check
    // Save user data
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://vast-cove-03076.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
    }
    // admin check
    useEffect(() => {
        fetch(`https://vast-cove-03076.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])

    return {
        user,
        error,
        admin,
        isLoading,
        logOut,
        GoogleSinInUser,
        sinUpWithEmail,
        registerWithEmail
    }
};

export default useFirebase;