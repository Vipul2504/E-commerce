import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const DefaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const Signup = () => {

    const [formField, setFormField] = useState(DefaultFormFields);
    const {displayName, email, password, confirmPassword} = formField;

    const handleChange = (event) => {
        const [name, value] = event.target;

    setFormField({...formField, [name]: value})
    }
    const handleSubmit =async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password do not match");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName})

        } catch (error) {
            if(error.code === 'auth/email-already-in-use')
            console.log('user creation encoutered an error', error);
            
        }

    }
  return (
        <div>
            <h1>Sign up with your Email and Password</h1>

            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required name="displayName" onChange={handleChange} value={displayName}/>

                <label>Email</label>
                <input type="email" name="email" required onChange={handleChange} value={email}/>

                <label>Password</label>
                <input type="password" required name="password" onChange={handleChange} value={password}/>

                <label>Confirm Password</label>
                <input type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
                <button type="submit">SignUp</button>
            </form>
        </div>
    )
}

export default Signup