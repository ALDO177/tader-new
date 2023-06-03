
import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthMode from '../Mode/AuthMode';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import FooterOxalus from '../App/Pages/FooterOxalus';

const Authentication = () => {
    const tokens = window.localStorage.getItem('login-web');

    if (tokens !== null) {
        return <Navigate to={'/dasboard'} />
    }
    return (
        <React.Fragment>
            <Container>
                <AuthMode />
            </Container>
            <Outlet />
           {/* <FooterOxalus/> */}
        </React.Fragment>

    )
}

export default Authentication;