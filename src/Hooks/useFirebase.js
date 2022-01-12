import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

initializeAuthentication()
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const google = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setError("");
        const destination = location.state?.from || "/";
        history.replace(destination);
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // email and password authentication
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        // set name to the firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //   observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  // admin....verify
  useEffect(() => {
    if (user.email) {
      setIsLoading(true);
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user.email]);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // signInWithEmailAndPassword
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const destination = location.state?.from || "/dashboard";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // save user 73----1
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // ----------------------------------------------------
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState({})
//   const [admin,setAdmin] = useState(false)
//   const auth = getAuth();
//   const googleProvider = new GoogleAuthProvider();
//   const registerUser = (email, password, name, history) => {
//     setIsLoading(true);
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const newUser = { email, displayName: name };
//         // save user to database
//         saveUser(email, name, 'POST');
//         // send name to firebase after creation
//         updateProfile(auth.currentUser, {
//           displayName: name
//         }).then(() => {
//         }).catch((error) => {
//         });
//         setUser(newUser);
//         history.push('/');
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       })
//       .finally(() => setIsLoading(false));
//   }

//   const loginUser = (email, password, location, history) => {
//     setIsLoading(true);
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const destination = location.state?.from || '/';
//         history.push(destination);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       })
//       .finally(() => setIsLoading(false));

//   }
// // Google Sign in
// const signInWithGoogle = (location,history) => {
//   setIsLoading(true);
//   signInWithPopup(auth, googleProvider)
//   .then((result) => {
//     const user = result.user;
//     saveUser(user.email,user.displayName,'PUT')
//     const destination = location.state?.from || '/';
//         history.push(destination);
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   })
//   .finally(() => setIsLoading(false));
// }

//   // observe user state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser({})
//       }
//       setIsLoading(false);
//     });
//     return () => unsubscribe;
//   }, [])

// useEffect(()=>{
//   fetch(`https://shielded-caverns-45156.herokuapp.com/users/${user.email}`)
//   .then(res=>res.json())
//   .then(data=>setAdmin(data.admin))
// },[user.email])

//   const logOut = () => {
//     setIsLoading(true);
//     const auth = getAuth();
//     signOut(auth).then(() => {
//       // Sign-out successful.
//     }).catch((error) => {
//       // An error happened.
//     })
//       .finally(() => setIsLoading(false));

//   }
//   // save user
//   const saveUser = (email, displayName,method) => {
//     const user = { email, displayName };
//     fetch('https://shielded-caverns-45156.herokuapp.com/users',{
//       method: method,
//       headers:{
//         'content-type':'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//   }

  return {
    google,
    user,
    registerUser,
    logout,
    loginUser,
    isLoading,
    error,
    admin,
    setIsLoading,
  }
}
export default useFirebase;