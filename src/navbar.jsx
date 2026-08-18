function NavBar() {
    return (
        <nav className="navbar bg-black p-3  pe-5 fixed-top " data-bs-theme="dark">
            <div className="container-fluid">
                <div>
                    <span className="navbar-brand mb-0 h1 text-white logo">SH</span>
                </div>
                <div className="d-flex gap-4 align-items-baseline">
                    <a href="#about" className="nav-link text-body-secondary fw-bold">ABOUT</a>
                    <a href="#projects" className="nav-link text-body-secondary fw-bold">PROJECTS</a>
                    <a href="#contact" className="nav-link text-body-secondary fw-bold">CONTACT</a>
                    <button className="bg-warning btn text-black">HIRE ME</button>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;