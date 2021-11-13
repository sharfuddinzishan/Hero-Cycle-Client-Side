import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllOrder = (props) => {
    const getOrder = props.order || {}
    const setOrderID = props.setOrderID
    const setSingleOrderDetails = props.setSingleOrderDetails
    const [getSingleCycleInfo, setSingleCycleInfo] = useState({});
    let [loadingSingleCycle, setLoadingSingleCycle] = useState(true);

    useEffect(() => {
        setLoadingSingleCycle(true)
        axios.get(`https://hero-cycle.herokuapp.com/cycles/${getOrder.cycleID}`)
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
                    <td>
                        <button
                            type="button"
                            id="adminOrderDetailsBtn"
                            class="btn btn-sm btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#detailsModal"
                            onClick={() => { setOrderID(getOrder._id); setSingleOrderDetails(getOrder) }}
                        >
                            {getOrder?.model}
                        </button>
                    </td>
                    <td>{getOrder.price}</td>
                    <td>{getOrder.email}</td>
                    <td>{getOrder.orderBy}</td>
                    <td>{getOrder.orderStatus}</td>
                </>}
        </>
    );
};

export default AllOrder;