// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Signup from "../sign-up-form/sign-up-form.component";



const SignIn = () => {
    // useEffect(async() => {
    //   const respone = await getRedirectResult(auth);

    //   if(respone){
    //     const userDocRef = await createUserDocumentFromAuth(respone.user);
    //   }
    // }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    
    return (
        <div>
            <h1>This is Sign In page</h1>
            <button onClick={logGoogleUser}>
                Sign With Google Pop Up
            </button>
            {/* <button onClick={signInWithGoogleredirect}>
                Sign With Google Redirect
            </button> */}
            <Signup/>
        </div>
    )
}

export default SignIn;