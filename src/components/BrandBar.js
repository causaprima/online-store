import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    const select = (brand) => {
        if (device.selectedBrand.id !== brand.id) {
            device.setSelectedBrand(brand)
        }
        else {
            device.setSelectedBrand({})
        }
    }

    return (
        <Row>
            {device.brands.map(brand =>
                <Col md='auto'>
                    <Card
                        key={brand.id}
                        className="p-2"
                        onClick={() => select(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        style={{marginBottom: 3, cursor: "pointer"}}
                    >
                        {brand.name}
                    </Card>
                </Col>
            )}
        </Row>
    );
});

export default BrandBar;