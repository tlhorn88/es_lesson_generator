import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [email,  setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Handle successful/unsuccessful signup 
        } catch (error) {
            console.error("Error signing up: ", error);
        }
    };
    
return (
    <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleSignUp}>Sign Up</button>
    </div>
    );
    };

export default SignUp;