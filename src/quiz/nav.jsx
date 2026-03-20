function Navbar({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="navbar">
      <h2>Welcome {user}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;