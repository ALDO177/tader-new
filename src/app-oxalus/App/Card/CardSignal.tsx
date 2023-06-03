
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import { ServiceSignalList } from '../../interface/ServicesInterface';
import { prettyDate, ucfirst } from '../../Helper/helps';

const CardSignal = (props: { signal: ServiceSignalList }) => {

    const TypeStatus = (props: { type: string | undefined }) => {
        switch (props.type) {
            case 'expired':
                return <span className ='text-danger'>{ucfirst(props?.type)}</span>
            case 'pending':
                return <span className ='text-warning'>{ucfirst(props?.type)}</span>
            case 'active':
                return <span className ='text-success'>{ucfirst(props?.type)}</span>
            default:
                return <span className =''>{ucfirst(props?.type as any)}</span>
        }
    }
    return (
        <React.Fragment>
            <Col xl={3} lg={12} md={12} xs={12}>
                <Card className="sales-card shadow-lg">
                    <Row>
                        <div className="col-8">
                            <div className="ps-4 pt-4 pe-3 pb-4">
                                <div className="">
                                    <h6 className="mb-2 tx-12"><TypeStatus type={props?.signal.status} /></h6>
                                </div>
                                <div className="pb-0 mt-0">
                                    <div className="d-flex">
                                        <h4 className="tx-22 font-weight-semibold mb-2">
                                            {props.signal?.pair}
                                        </h4>
                                    </div>
                                    <p className="mb-0 tx-12  text-muted">
                                        <span className='pe-2'>Create At</span>
                                        <span className="text-warning font-weight-semibold">
                                            { prettyDate(props?.signal?.created_at as any) }
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                                {props?.signal.signal_type === 'buy' ? <>
                                    <i className="bi bi-arrow-up-circle tx-16 text-success"></i>
                                </> : <i className="bi bi-arrow-down-circle tx-16 text-danger"></i>}
                            </div>
                        </div>
                    </Row>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export { CardSignal };