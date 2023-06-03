import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Row, Alert } from 'react-bootstrap';
import { AnimateZoomIn } from "../App/SlideAnimation/SlideZoomIn";
import logoOxalus from '../../assets/logo_oxalus.png';
import logoOxalusDark from '../../assets/oxalus-base-dark.png';
import Select from 'react-select';
import config from '../../config';
import { ucfirst } from "../Helper/helps";
import { toast } from 'react-toastify';

const Register = () => {
  const [listCountry, setListCountry] = React.useState(Array);
  const [error, setError] = React.useState<any>();
  const routesChanges = useNavigate();

  React.useEffect(() => {
    (async () => {
      const GetCountry = await fetch(`${config.API_URL}getcountry`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': config.API_KEY,
        }
      });
      if (GetCountry.status === 200) {
        const responses = await GetCountry.json();
        var dataOptions = new Array();
        responses?.data.forEach((values: any, key: number) => {
          dataOptions.push({
            value: values?.name,
            label: ucfirst(values?.name)
          })
        })
        setListCountry(dataOptions);
      }
    })();
  }, []);

  const HandleSubmitRegister = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event?.target);
    const bodys = Object.fromEntries(formData);

    (async () => {
      const ResgiterPost = fetch(`${config.API_URL}member/register`, {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json',
          'x-api-key': config.API_KEY,
        }),
        body: JSON.stringify(bodys),
      });

      const promiseRegister = await toast.promise(ResgiterPost, {
        pending: {
          render() { return <span>Loading...</span> },
          type: 'warning',
        }
      });
      if (promiseRegister.status === 200) {
        toast.success('Register Account Success', {
          type: 'success',
          theme: 'colored',
          autoClose: 2500,
        });
        const responseAuth = await promiseRegister.json();
        routesChanges('/auth/login');

      }
      if (promiseRegister.status >= 400) {
        toast.error('Register Account Failed', {
          type: 'error',
          theme: 'colored',
          autoClose: 2500,
        });
        const responseError = await promiseRegister.json();
        setError(responseError?.errors);
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
                <div className="card-sigin ">
                  {/* <!-- Demo content--> */}
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      <div className="d-flex mb-4">
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
                      <div className="">
                        <div className="main-Register-header">
                          <h2 className="text-dark">Get Started</h2>
                          <h6 className="font-weight-normal mb-4">
                            It's free to Register and only takes a minute.
                          </h6>
                          {
                            error &&
                            <Alert
                              className="alert alert-dismissible fade show "
                              variant='danger'>
                              {
                                Object.entries(error).map((val: any, idx) => (
                                  <li key={idx}>{ucfirst(val[0])} : {val[1]}</li>
                                ))
                              }
                            </Alert>
                          }
                          <Form onSubmit={HandleSubmitRegister}>
                            <FormGroup className="form-group">
                              <Form.Label>Firstname &amp; Lastname</Form.Label>{" "}
                              <Form.Control
                                className="form-control"
                                name="name"
                                placeholder="Enter your firstname and lastname"
                                type="text"
                              />
                            </FormGroup>
                            <FormGroup className="form-group">
                              <Form.Label>Email</Form.Label>{" "}
                              <Form.Control
                                className="form-control"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                              />
                            </FormGroup>
                            <FormGroup className="form-group">
                              <Form.Label>Password</Form.Label>{" "}
                              <Form.Control
                                className="form-control"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                              />
                            </FormGroup>
                            <FormGroup className="form-group">
                              <Form.Label>Password</Form.Label>{" "}
                              <Form.Control
                                className="form-control"
                                name="confirm_password"
                                placeholder="Enter your Confirm password"
                                type="password"
                              />
                            </FormGroup>
                            <FormGroup className="SlectBox">
                              <Form.Label>Country</Form.Label>
                              <Select options={listCountry} className="mb-3" classNamePrefix="selectform"
                                isSearchable
                                name="country"
                                placeholder="--Select Country--" />
                            </FormGroup>
                            <input type="hidden" name="referral_by" />
                            <Button
                              variant=""
                              type="submit"
                              className="btn btn-primary btn-block">
                              Create Account
                            </Button>

                            <div className="mt-4 d-flex text-center justify-content-center">
                              <Link
                                to="https://www.facebook.com/"
                                target="_blank"
                                className="btn btn-icon btn-facebook me-3"
                                type="button">
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
                          </Form>
                          <div className="main-Register-footer mt-3 text-center">
                            <p>
                              Already have an account?{" "}
                              <Link to={`/auth/login`}>Sign In</Link>
                            </p>
                          </div>
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
Register.propTypes = {};

Register.defaultProps = {};

export default Register;
