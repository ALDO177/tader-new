import React from 'react';
import { CardSignal } from '../../Card/CardSignal';
import { Row, Col } from 'react-bootstrap';
import config from '../../../../config';
import { ContextAuth } from '../../Context/App';
import { ServiceSignalList } from '../../../interface/ServicesInterface';
import { SkeltonLoadingCard } from '../../Skelton/SkeltonLoadingCard';

const SignalToday = () => {

    const authContext = React.useContext(ContextAuth) as any;
    const [loadSkelton, setLoadSkelton] = React.useState(false);
    const [listSignal, setListSignal]   = React.useState<ServiceSignalList[]>();

    React.useEffect(() =>{
        setTimeout(async () => {
            const getSignal = await fetch(`${config.API_URL}signal/gettoday`, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'x-api-key'    :  config.API_KEY,
                    'AUTHORIZATION': 'Bearer ' + authContext?.auth_info.token
                }
            });
            if (getSignal.status === 200) {
                const responseSignal = await getSignal.json();
                setLoadSkelton(true);
                setListSignal(responseSignal?.data);
            }
        }, 2000)
    }, []);

    return (
        <React.Fragment>
            <div className='mt-3'>
                {!loadSkelton && <SkeltonLoadingCard count={4}/>}
                {(listSignal?.length as any < 1) && <SkeltonLoadingCard count={4}/>}
             </div>
            <Row className='mt-3'>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <Row className="row-cols-xxl-3">
                        {
                            listSignal?.map((values, number) => (
                                <CardSignal signal={values} key={number} />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export { SignalToday }