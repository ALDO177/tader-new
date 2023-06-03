import React from 'react';
import { Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ServiceSignalList } from '../../../interface/ServicesInterface';
import config from '../../../../config';
import { ContextAuth } from '../../Context/App';
import { number } from 'echarts';
import { prettyDate, ucfirst } from '../../../Helper/helps';

interface ModalSignals {
    show: boolean,
    callback: Function,
    items: any,
    close: Function
}
export default function ModalSignal(props: ModalSignals) {

    const ClearDataModal = () => {
        props.callback(false);
        props.close(null);
    }
    console.log(props?.items)
    return (
        <Modal
            size='lg'
            show={props?.show as any}
            onHide={async () => ClearDataModal()}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props?.items?.pair}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='fs-6'>
                {props?.items && <ListGroup>
                    <ListGroupItem>
                        <div className="d-flex justify-content-between">
                            <span>Pair</span>
                            <span>{props?.items?.pair}</span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-flex justify-content-between">
                            <span>Result</span>
                            <span>{ucfirst(props?.items?.result)}</span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-flex justify-content-between">
                            <span className='align-self-center'>Signal</span>
                            <span>
                                {props?.items?.signals_type === 'buy' ? <>
                                    <i className="bi bi-arrow-up-circle tx-16 text-success fs-3"></i>
                                </> : <i className="bi bi-arrow-down-circle tx-16 text-danger fs-3"></i>}
                            </span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-flex justify-content-between">
                            <span className='align-self-center'>Status</span>
                            <span>
                               { ucfirst(props?.items?.status) }
                            </span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-flex justify-content-between">
                            <span className='align-self-center'>Stop Loss</span>
                            <span>
                               { ucfirst(props?.items?.stop_loss) }
                            </span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-flex justify-content-between">
                            <span className='align-self-center'>Take Profit</span>
                            <span>
                               { ucfirst(props?.items?.take_profit) }
                            </span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-flex justify-content-between">
                            <span className='align-self-center'>User Type</span>
                            <span>
                               { ucfirst(props?.items?.users_type) }
                            </span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-flex justify-content-between">
                            <span className='align-self-center'>Created At</span>
                            <span>
                               { ucfirst(prettyDate(props?.items?.created_at) as any) }
                            </span>
                        </div>
                    </ListGroupItem>
                </ListGroup>}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={async () => ClearDataModal()}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}