
import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import logoDark from '../../../assets/oxalus-base-dark.png';
import logoLight from '../../../assets/logo_oxalus.png';
import favDark from '../../../assets/img/brand/favicon.png';
import favLight from '../../../assets/img/brand/favicon-white.png';
import { toast } from "react-toastify";

const SidebarOxalus = () => {

    const routeChanges = useNavigate();
    const [logout, setLogout] = React.useState(false);

    function Onhover() {
        if (document.querySelector(".app")) {
            if (document.querySelector(".app")?.classList.contains("sidenav-toggled"))
                document.querySelector(".app")?.classList.add("sidenav-toggled-open");
        }
    }
    function Outhover() {
        if (document.querySelector(".app")) {
            document.querySelector(".app")?.classList.remove("sidenav-toggled-open");
        }
    }

    const LogoutUser = () => {
        toast.warning('Process Logout...', {
            theme: 'colored',
            autoClose: 2000,
        });

        setTimeout(() => {
            window.localStorage.removeItem('login-web');
            setLogout(true);
        }, 2000)
    }

    if (logout) return <Navigate to={'/auth/login'} />

    return (
        <>
            <div className="sticky">
                <aside
                    className="app-sidebar "
                    onMouseOver={() => Onhover()}
                    onMouseOut={() => Outhover()}>
                    <Scrollbars
                        className="hor-scroll"
                        style={{ position: "absolute" }}>
                        <div className="main-sidebar-header active">
                            <NavLink className="header-logo active" to={`/dasboard`}>
                                <img
                                    src={logoDark}
                                    className="main-logo  desktop-logo"
                                    alt="logo"
                                />
                                <img
                                    src={logoLight}
                                    className="main-logo  desktop-dark"
                                    alt="logo"
                                />
                                <img
                                    src={favDark}
                                    className="main-logo  mobile-logo"
                                    alt="logo"
                                />
                                <img
                                    src={favLight}
                                    className="main-logo  mobile-dark"
                                    alt="logo"
                                />
                            </NavLink>
                        </div>
                        <div className="main-sidemenu">
                            <div className="slide-left disabled" id="slide-left">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#7b8191"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24">
                                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                                </svg>
                            </div>
                            <ul className="side-menu">
                                <React.Fragment>
                                    <li className="side-item side-item-category">Submission</li>
                                    <li className="slide is-expanded pb-4">
                                        <NavLink to={'/dasboard'} className={'side-menu__item'}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="side-menu__icon"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24">
                                                <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
                                            </svg>
                                            <span className="side-menu__label">
                                                Dasboard
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="slide is-expanded pb-4">
                                        <NavLink to={'/dasboard/subscription'} className={'side-menu__item active'}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="side-menu__icon"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24">
                                                <path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z" />
                                            </svg>
                                            <span className="side-menu__label">
                                                Subscribtion
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="slide is-expanded pb-4">
                                        <NavLink to={'/dasboard/setting'} className={'side-menu__item active'}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="side-menu__icon"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24">
                                                <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
                                            </svg>
                                            <span className="side-menu__label">
                                                Setting
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="slide is-expanded pb-4">
                                        <NavLink to={'#'} type="button" onClick={LogoutUser} className={'side-menu__item active'}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="side-menu__icon"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24">
                                                <path d="M12 22c4.879 0 9-4.121 9-9s-4.121-9-9-9-9 4.121-9 9 4.121 9 9 9zm0-16c3.794 0 7 3.206 7 7s-3.206 7-7 7-7-3.206-7-7 3.206-7 7-7zm5.284-2.293 1.412-1.416 3.01 3-1.413 1.417zM5.282 2.294 6.7 3.706l-2.99 3-1.417-1.413z" />
                                                <path d="M11 9h2v5h-2zm0 6h2v2h-2z" />
                                            </svg>
                                            <span className="side-menu__label">
                                                Logout
                                            </span>
                                        </NavLink>
                                    </li>
                                </React.Fragment>
                            </ul>
                            <div className="slide-right" id="slide-right">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#7b8191"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24">
                                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                                </svg>
                            </div>
                        </div>
                    </Scrollbars>
                </aside>
            </div>
        </>
    );
}

SidebarOxalus.propTypes = {};
SidebarOxalus.defaultProps = {};
export default SidebarOxalus;




