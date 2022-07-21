import React from 'react'

const Header = () => {
    return (
        <>
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src="assets/logo.png" alt="" />
                    </a>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

                        <li><a href="#" class="nav-link px-2 link-dark mx-4">Men</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark mx-4 ">Women</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark mx-4 ">Kids</a></li>

                    </ul>

                    <div class="col-md-3 text-end">
                        <div className="col">
                            <i class="bi bi-search mx-3"></i>
                            <i class="bi bi-cart3 mx-3"></i>
                            <i class="bi bi-person mx-3"></i>

                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}

export default Header