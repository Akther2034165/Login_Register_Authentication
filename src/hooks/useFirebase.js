import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //sign in with email and pass
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const createUser = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Pass must contain two uppercase");
      return;
    }
    handleUser(email, password);
  };

  const processLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        setError("Invalid User,Register First");
      });
  };
  //handle reset password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };
  //creating new user
  const handleUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        varifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //send email varification when register a user
  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result.user);
    });
  };

  //login user as using google
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //login user as using github
  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      console.log(result.user);
      setUser(result.user);
    });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser("");
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    error,
    email,
    username,
    password,
    processLogin,
    handleEmailChange,
    handleNameChange,
    handlePasswordChange,
    handleResetPassword,
    createUser,
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
  };
};
export default useFirebase;
