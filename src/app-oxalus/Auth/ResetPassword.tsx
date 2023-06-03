import { Button, Col, Form, FormGroup, Row , Alert} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AnimateZoomIn } from "../App/SlideAnimation/SlideZoomIn";
import logoOxalus from '../../assets/logo_oxalus.png';
import logoOxalusDark from '../../assets/oxalus-base-dark.png';
import config from '../../config';
import { toast } from 'react-toastify';
import React from 'react';

const ResetPassword = () => {

  const routeChanges = useNavigate();
  const [error, setError] = React.useState<any>();

  const HandleSubmitResetPassword = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bodys = Object.fromEntries(formData.entries());
    (async () => {
      const ResetPassword = fetch(`${config.API_URL}member/resetpassword`, {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json',
          'x-api-key': config.API_KEY,
        }),
        body: JSON.stringify(bodys),
      });

      const promiseResetPassword = await toast.promise(ResetPassword, {
        pending: {
          render() { return <span>Loading...</span> },
          type: 'warning',
        }
      });
      if (promiseResetPassword.status === 200) {
        toast.success('Reset Password Success...', {
          type: 'success',
          theme: 'colored',
          autoClose: 2500,
        });
        routeChanges('/auth/login');
      }
      
      if (promiseResetPassword.status >= 400) {
        toast.error('Reset Password Failed...', {
          type: 'error',
          theme: 'colored',
          autoClose: 2500,
        });
        const responseError = await promiseResetPassword.json();
        setError(responseError);
      }
    })();
  }

  return (
    <AnimateZoomIn>
      <div className="page">
        <div
          className="page-single">
          <div className="container">
            <Row>
              <Col
                xl={5}
                lg={6}
                md={8}
                sm={8}
                xs={10}
                className="card-sigin-main py-4 justify-content-center mx-auto">
                <div className="card-sigin">
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      <div className="d-flex mb-3">
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/dashboard-1`}>
                          <span className='dark-layout'>
                            <img
                              src={logoOxalusDark}
                              className="sign-favicon ht-40"
                              alt="logo"
                            />
                          </span>
                          <span className='light-layout'>
                            <img
                              src={logoOxalus}
                              className="sign-favicon ht-40"
                              alt="logo"
                            />
                          </span>
                        </Link>
                      </div>
                      <div className="  mb-1">
                        <div className="main-signin-header">
                          <div className="">
                            <h2>Welcome back!</h2>
                            <h4 className="text-start">Reset Your Password</h4>
                            {
                              error && 
                              <Alert
                                className="alert alert-dismissible fade show"
                                variant='danger'>
                                <span>{error?.message}</span>
                              </Alert>
                            }
                            <Form onSubmit={HandleSubmitResetPassword}>
                              <FormGroup className="text-start form-group">
                                <Form.Label>Code Verication</Form.Label>
                                <Form.Control
                                  className="form-control"
                                  name="code"
                                  placeholder="Code Verify..."
                                  type="text"
                                />
                              </FormGroup>
                              <FormGroup className="text-start form-group">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                  className="form-control"
                                  name="password"
                                  placeholder="Enter your new password"
                                  type="password"
                                />
                              </FormGroup>
                              <FormGroup className="text-start form-group">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                  className="form-control"
                                  name="confirm_password"
                                  placeholder="Enter your confirm password"
                                  type="password"
                                />
                              </FormGroup>
                              <Button type="submit" className="btn ripple btn-primary btn-block">
                                Reset Password
                              </Button>
                            </Form>
                            <div className="mt-2 d-flex text-center justify-content-center">
                              <Link
                                to="https://www.facebook.com/"
                                target="_blank"
                                className="btn btn-icon btn-facebook me-3"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  {" "}
                                  <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                </span>
                              </Link>
                              <Link
                                to="https://www.twitter.com/"
                                target="_blank"
                                className="btn btn-icon me-3"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  {" "}
                                  <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                </span>
                              </Link>
                              <Link
                                to="https://www.linkedin.com/"
                                target="_blank"
                                className="btn btn-icon me-3"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  {" "}
                                  <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                </span>
                              </Link>
                              <Link
                                to="https://www.instagram.com/"
                                target="_blank"
                                className="btn  btn-icon me-3"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  {" "}
                                  <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="main-signup-footer mg-t-20 text-center">
                          <p>
                            Already have an account?{" "}
                            <Link to={`/auth/login`}>Sign In</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </AnimateZoomIn>
  );
}

ResetPassword.propTypes = {};

ResetPassword.defaultProps = {};

export default ResetPassword;
