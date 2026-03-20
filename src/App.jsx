import React, { useState, useEffect } from "react";
import './App.css';
import QuizApp from './quiz/quizApp';
import SignIn from './quiz/signin';

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user);
    }
  }, [user]);

  return (
    <div className="app">
      {user ? (
        <QuizApp user={user} setUser={setUser} />
      ) : (
        <SignIn setUser={setUser} />
      )}
    </div>
  );
}

export default App;