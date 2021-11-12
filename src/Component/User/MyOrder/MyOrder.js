import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyOrder = (props) => {
    const getOrder = props.order || {}
    const setOrderID = props.setOrderID
    const setSingleOrderDetails = props.setSingleOrderDetails
    const [getSingleCycleInfo, setSingleCycleInfo] = useState({});
    let [loadingSingleCycle, setLoadingSingleCycle] = useState(true);

    useEffect(() => {
        setLoadingSingleCycle(true)
        axios.get(`http://localhost:4000/cycles/${getOrder.cycleID}`)
            .then(result => {
                console.log(result)
                if (result?.data?.model) {
                    setSingleCycleInfo(result.data);
                    setLoadingSingleCycle(false)
                }
            })
            .catch(() => {
                setLoadingSingleCycle(false)
            })
    }, [getOrder.cycleID])

    return (
        <>
            {
                !loadingSingleCycle && <>
                    <img src={getSingleCycleInfo?.picture} class="card-img-top img-fluid w-25 ms-auto" alt="..." />
                    <div class="card-body">
                        <button
                            type="button"
                            id="adminDetailsBtn"
                            class="btn btn-sm btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#detailsModal"
                            onClick={() => { setOrderID(getOrder._id); setSingleOrderDetails(getOrder) }}
                        >
                            {getOrder?.model}
                        </button>
                        <h5 class="card-title text-muted">{getOrder?.model}</h5>
                        <h5 class="">Price: <span className="fw-bold text-info">{getOrder?.price}</span></h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Order By: {getOrder?.orderBy}</li>
                        <li class="list-group-item">Order Status: <span className="bg-primary w-25 h-25 rounded-pill py-1 px-2 text-center text-light">{getOrder?.orderStatus}</span></li>
                    </ul>
                    <div class="card-body">
                    </div>
                </>}
        </>
    );
};

export default MyOrder;