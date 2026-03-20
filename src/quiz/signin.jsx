import { useState } from "react";

function SignIn({ setUser }) {
    const [name, setName] = useState("");
    const [idNumber, setIdNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (name.trim() === "" || idNumber.trim() === "") {
            alert("");
            return;
        }

       
        setUser(JSON.stringify({ name, idNumber }));
    };

    return (
        <div className="signin">
            <h1>Quiz App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter your ID number"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                />
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;