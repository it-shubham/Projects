import React from 'react'

function Header() {
  return (
    <>
        <div className="container-fluid bg-primary px-5 d-none d-lg-block">
            <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                    <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                    href=""
                >
                    <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a
                    className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                    href=""
                >
                    <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a
                    className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                    href=""
                >
                    <i className="fab fa-instagram fw-normal" />
                </a>
                <a
                    className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                    href=""
                >
                    <i className="fab fa-youtube fw-normal" />
                </a>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div
                className="d-inline-flex align-items-center"
                style={{ height: 45 }}
                >
                <a href="#">
                    <small className="me-3 text-light">
                    <i className="fa fa-user me-2" />
                    Register
                    </small>
                </a>
                <a href="#">
                    <small className="me-3 text-light">
                    <i className="fa fa-sign-in-alt me-2" />
                    Login
                    </small>
                </a>
                <div className="dropdown">
                    <a
                    href="#"
                    className="dropdown-toggle text-light"
                    data-bs-toggle="dropdown"
                    >
                    <small>
                        <i className="fa fa-home me-2" /> My Dashboard
                    </small>
                    </a>
                    <div className="dropdown-menu rounded">
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-user-alt me-2" /> My Profile
                    </a>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-comment-alt me-2" /> Inbox
                    </a>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-bell me-2" /> Notifications
                    </a>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-cog me-2" /> Account Settings
                    </a>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-power-off me-2" /> Log Out
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Topbar End */}
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0">
                <h1 className="m-0">
                <i className="fa fa-map-marker-alt me-3" />
                Travela
                </h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">
                    Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                    About
                </a>
                <a href="services.html" className="nav-item nav-link">
                    Services
                </a>
                <a href="packages.html" className="nav-item nav-link">
                    Packages
                </a>
                <a href="blog.html" className="nav-item nav-link">
                    Blog
                </a>
                <div className="nav-item dropdown">
                    <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    >
                    Pages
                    </a>
                    <div className="dropdown-menu m-0">
                    <a href="destination.html" className="dropdown-item">
                        Destination
                    </a>
                    <a href="tour.html" className="dropdown-item">
                        Explore Tour
                    </a>
                    <a href="booking.html" className="dropdown-item">
                        Travel Booking
                    </a>
                    <a href="gallery.html" className="dropdown-item">
                        Our Gallery
                    </a>
                    <a href="guides.html" className="dropdown-item">
                        Travel Guides
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                        Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                        404 Page
                    </a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                    Contact
                </a>
                </div>
                <a href="" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">
                Book Now
                </a>
            </div>
            </nav>
        </div>


    </>
  )
}

export default Header