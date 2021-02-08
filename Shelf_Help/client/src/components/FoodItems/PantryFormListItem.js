/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import { Card, Button, CardTitle, CardBody, Collapse, Col } from "reactstrap";


export const PantryFormListItem = ({food}) => {
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('Closed');
    const onEntering = () => setStatus('Opening...');
    const onEntered = () => setStatus('Opened');
    const onExiting = () => setStatus('Closing...');
    const onExited = () => setStatus('Closed');
    const toggle = () => setCollapse(!collapse);


    if (food.children.length === 0)
    {
        return (
        <>
            <Col sm="4" className="mb-4">
            <Card body>
                <CardTitle tag="h5">{food.name}</CardTitle>
                <Button>Add To My Pantry </Button>
            </Card>
            </Col>


        </>
        )
    } else {
        return (
            <>
                <Col sm="4" className="mb-4">
                <Card body>
                    <CardTitle tag="h5">{food.name}</CardTitle>
                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Varieties</Button>
                    <Collapse
                        isOpen={collapse}
                        onEntering={onEntering}
                        onEntered={onEntered}
                        onExiting={onExiting}
                        onExited={onExited}
                    >
                        <Card>
                        <CardBody>
                            {food.children.map(child => {
                                return (<>
                                    <p>{child.name}{"  "} <Button color="secondary" size="sm">Add To My Pantry</Button> </p>
                                    </>
                                )
                            })}
                        </CardBody>
                        </Card>
                    </Collapse>





                </Card>
                </Col>

            </>
        )
    }
}