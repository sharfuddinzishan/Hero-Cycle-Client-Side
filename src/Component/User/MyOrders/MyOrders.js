import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import SingleOrderModal from '../../Shared/SingleOrderModal/SingleOrderModal';
import UpdateOrders from '../../Shared/UpdateOrders/UpdateOrders';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [getOrderID, setOrderID] = useState('');
    const [getSingleOrderDetails, setSingleOrderDetails] = useState({});
    let [refreshed, setRefreshed] = useState(false)
    const [orders, setOrders] = useState([]);
    const [loader, setLoader] = useState(false);
    const { user } = useAuth()
    useEffect(() => {
        setLoader(true);
        let url = `http://localhost:4000/user/orders?email=${user?.email}`
        axios.get(url)
            .then(result => {
                console.log(result?.data.length)
                if (result.data.length) {
                    setOrders(result.data)
                    setLoader(false)
                }
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, [refreshed])
    return (
        <>
            <h4 className="py-2">My Orders ({user?.email})</h4>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    !loader && <>
                        {
                            orders.map(order => {
                                return <div className="col" key={order._id}>
                                    <div class="card">
                                        <MyOrder setSingleOrderDetails={setSingleOrderDetails} setOrderID={setOrderID} order={order}></MyOrder>
                                        <button
                                            type="button"
                                            id="adminCycleUpdateBtn"
                                            className="btn btn-sm btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                            onClick={() => { setOrderID(order._id); setSingleOrderDetails(order) }}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            })
                        }
                    </>
                }
            </div>
            {
                <>
                    <UpdateOrders getSingleOrderDetails={getSingleOrderDetails} setRefreshed={setRefreshed} getOrderID={getOrderID}></UpdateOrders>
                    <SingleOrderModal getSingleOrderDetails={getSingleOrderDetails} getOrderID={getOrderID}></SingleOrderModal>
                </>
            }
        </>
    );
};

export default MyOrders;