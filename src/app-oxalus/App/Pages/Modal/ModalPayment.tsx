
import { Modal, Button, Form, Spinner } from "react-bootstrap"
import React from "react";
import { toast } from 'react-toastify';
import  config from '../../../../config';
import { Navigate } from "react-router-dom";
import { ContextAuth } from "../../Context/App";

export interface DataListSubscribtion{
    benefit: string,
    description_package: string,
    duration_package: string,
    id_package: string,
    price_package: string
}

async function statusPayment(id: string, tokens: string){

    const bodys = { id_ref : id };
    const fetchStatusPayment =await fetch(`${config.API_URL}subscription/statuspayment`, {
        method: 'POST',
        headers: new Headers({
            'Content-type'  : 'application/json',
            'x-api-key'     : config.API_KEY,
            'AUTHORIZATION' : 'Bearer ' + tokens,
        }),
        body: JSON.stringify(bodys),
    });
    return fetchStatusPayment;
}

export default function ModalPayment(props:
    {
        konditions: boolean,
        callbackHandle: any,
        data?: DataListSubscribtion,
    }) {
    const SubscribtionSelect = [
        {
            id: 1,
            text: 'USDT-BEP20',
            action: false,
            class: 'btn-success',
            data: {
                id_package: props?.data?.id_package,
                payment_method: 'crypto',
                currency: 'usdtbsc',
            }
        },
        {
            id: 2,
            text: 'BUSD-BEP20',
            action: true,
            class: 'btn-outline-success'
        }
    ]
    const [status, setStatusChekbox] = React.useState<{ checked?: boolean }>({ checked: false });
    const [data, setData] = React.useState<{ dataRequest: any }>();
    const [loadings, setLoadings] = React.useState<{ loading: boolean }>({ loading: true });
    const [process, setProcess] = React.useState<
        {
            loading?: boolean,
            redirect?: boolean,
            data?: any,
            status?: any,
            error?: any
        }>(
            { loading: false, redirect: false, data: {}, error: null }
        );

    const authTokens: any = React.useContext(ContextAuth) as any;
    const handleCheckboxModal = async (event: React.MouseEvent<HTMLInputElement, MouseEvent> | any) => {
        setStatusChekbox({ checked: event.target?.checked });
    }

    const handleSelectList = async (event: any, data: any) => {
        const removed = document.querySelectorAll('.icons');
        removed.forEach((element) => {
            element.classList.remove('act');
        });
        const iconsData = event.target.querySelector('.icons');
        iconsData.classList.add('act');
        setData({ dataRequest: data });
    }

    const HandleGetProses = async () => {
        setLoadings({ loading: false })
        if (data?.dataRequest === undefined) {
            toast.error('Select Your Button Click', {
                type: 'error',
                theme: 'dark',
                autoClose: 3000,
            });
            setLoadings({ loading: true })
        }
        if (data?.dataRequest?.status !== undefined) {
            toast.dismiss('current');
        }
        else {
            try {
                const PostProcessTrade = await fetch(`${config.API_URL}subscription/process`, {
                    method: 'POST',
                    headers: new Headers({
                        'content-type': 'application/json',
                        'x-api-key': config.API_KEY,
                        'AUTHORIZATION': 'Bearer ' + authTokens?.auth_info.token,
                    }),
                    body: JSON.stringify(data?.dataRequest),
                });

                if (PostProcessTrade.status === 200) {
                    const responseDataJson = await PostProcessTrade.json();
                    try {
                        const statusPaymentData = await statusPayment(responseDataJson?.data.id_ref, authTokens?.auth_info.token);
                        if (statusPaymentData.status === 200) {
                            const resposnseStatusData = await statusPaymentData.json();
                            setProcess({
                                loading: true,
                                redirect: true,
                                data: responseDataJson,
                                status: resposnseStatusData
                            })
                        }
                        if (statusPaymentData.status >= 400) {
                            console.log(await statusPaymentData.json());
                        }
                    }
                    catch (error) {
                        console.log(error)
                    }
                }
            }
            catch (error) {
                setProcess({ loading: true, redirect: false, error: error })
            }
        }
    }
    if (process.redirect) {
        return <Navigate to={'/dasboard/payment-intruction'} state={process} />
    }
    return (
        <>
            <Modal
                show={props.konditions}
                onHide={async () => props.callbackHandle(false, setData)}
                centered
                keyboard={false}>
                <Modal.Header>
                    <Modal.Title>{props?.data?.description_package}</Modal.Title>
                    <Button variant="" className="btn btn-close" onClick={async() => props.callbackHandle(false, setData)}>x</Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center gap-2">
                        {
                            SubscribtionSelect.map((values, idx) => (
                                <button
                                    onClick={async (event) => handleSelectList(event, values.data)}
                                    className={`btn ${values.class} btn-lg position-relative`}
                                    disabled={values?.action}
                                    key={idx} >
                                    { values.text }
                                    <div className="icons">
                                        <i className="bi bi-check2" style={{fontSize: '17px'}}></i>
                                    </div>
                                </button>
                            ))
                        }
                    </div>
                    <div className="mt-4">
                        <Form.Check
                            type={'checkbox'}
                            onClick={async (event) => handleCheckboxModal(event)}
                            id={`default-check`}
                            label={`I Agree Lorem ipsum dolor sit amet consectetur.`} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {
                        !loadings.loading ? (
                            <Button
                                disabled
                                onClick={async () => HandleGetProses()}
                                style={{ width: '120px' }}
                                className="float-end"
                                variant="success"
                                size="sm"> <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true" /> Loading...
                            </Button>
                        ) : (
                            <Button
                                disabled={!status.checked}
                                onClick={async () => HandleGetProses()}
                                style={{ width: '120px' }}
                                className="float-end"
                                variant="success"
                                size="sm"> Order...
                            </Button>
                        )
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}