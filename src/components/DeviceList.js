import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";
import {Row} from "react-bootstrap";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.devices.map(oneDevice =>
                <DeviceItem key={device.id} device={oneDevice} brands={device.brands}/>
            )}
        </Row>
    );
});

export default DeviceList;