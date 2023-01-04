import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <div className="logo">
                <span className="logo">trivago</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar
