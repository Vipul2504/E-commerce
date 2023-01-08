import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async() => {
        const response = await signInWithGooglePopUp();
        console.log(response)
    }
    return (
        <div>
            <h1>This is Sign In page</h1>
            <button onClick={logGoogleUser}>
                Sign With Google Pop Up
            </button>
        </div>
    )
}

export default SignIn;