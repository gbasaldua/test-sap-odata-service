import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { generate } from 'shortid'
import styled from 'styled-components';

const POContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
`

const POTag = styled.div`
    background-color: #bbb;
    padding: .5rem;
    text-align: center;
    border-radius: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #222;
`

const PurchaseOrders = () => {

    const [purchaseOrders, setPurchaseOrders] = useState([])

    const getPurchaseOrders = () => {
        // fetch('http://192.168.0.168:50000/sap/opu/odata/sap/YSCP_MM_PO_SRV/HeaderSet')
        //     .then(res => res.json())
        //     .then(POs => setPurchaseOrders(POs))

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic ZGV2ZWxvcGVyOmd1aWxsZXJtbw==");
        myHeaders.append("Cookie", "SAP_SESSIONID_NPL_001=5Q9kVvf_HAIav-OmAQ30Bm8p4qOQFBHrkKITJ-1_QJw%3d; sap-usercontext=sap-client=001");
        myHeaders.append("Access-Control-Allow-Origin", "*")

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://192.168.0.168:50000/sap/opu/odata/sap/YSCP_MM_PO_SRV/HeaderSet?$format=json", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    useEffect(() => {
        if (purchaseOrders.length === 0) {
            getPurchaseOrders()
        }
    }, [purchaseOrders]);

    return (
        <div>
            <h1>Purchase Orders</h1>
            {/* <POContainer>
                {
                    purchaseOrders.map(purchaseOrder => (
                        <POTag key={generate()}>
                            <StyledLink to={`/po/${purchaseOrder.PONumber}`}>
                                {purchaseOrder.PONumber}
                            </StyledLink>
                        </POTag>
                    ))
                }
            </POContainer> */}
        </div>
    )
}

export default PurchaseOrders;