import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const POCard = styled.div`
    background-color: #ddd;
    min-height: 250px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
`

const POTitle = styled.h2`
    margin: 0;
`

const BackLink = styled(Link)`
    text-decoration: none;
    background: none;
    width: 30px;
    margin-left: auto;
    margin-right: auto;
    color: royalblue;
    border-bottom: 1px solid royalblue;
`

const PurchaseOrder = ({ match }) => {

    // const [purchaseOrder, setPurchaseOrder] = useState({})

    return (
        <h1>Purchase Order Detail: {match.params.poNumber}</h1>
    )
}

export default PurchaseOrder;