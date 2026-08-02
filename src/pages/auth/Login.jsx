import { useState } from "react";
import { loginUser } from "../../services/authService";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await loginUser({
                email,
                password
            });

            console.log(response);

            localStorage.setItem(
                "token",
                response.token
            );

            alert("Login successful");

        } catch (error) {

            console.log(error);

            alert("Login failed");

        }
    };

    return (

        <div>

            <h1>
                TalentForge Login
            </h1>


            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>
                        setEmail(e.target.value)
                    }
                />


                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>
                        setPassword(e.target.value)
                    }
                />


                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    );
}