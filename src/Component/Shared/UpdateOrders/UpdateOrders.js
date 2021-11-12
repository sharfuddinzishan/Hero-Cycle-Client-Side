import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UpdateOrders = (props) => {
    const { getOrderID, setRefreshed, getSingleOrderDetails } = props
    let [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [getSingleOrderInfo, setSingleOrderInfo] = useState({})

    useEffect(() => {
        setLoading(true)
        setSingleOrderInfo({ ...getSingleOrderDetails })
        setLoading(false)
    }, [])

    const token = localStorage.getItem('tokenID')
    let headers = {
        "authorization": 'Bearer ' + token
    };

    const handleInput = e => {
        const copyOrder = { ...getSingleOrderInfo };
        copyOrder[e.target.name] = e.target.value;
        setSingleOrderInfo(copyOrder);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false)
        setRefreshed(false)
        setError(false)
        setLoading(true)
        axios.put('https://hero-cycle.herokuapp.com/order', getSingleOrderInfo)
            .then(result => {
                console.log(result)
                if (!result.data.modifiedCount) { setError(true) }
                else {
                    setSuccess(true)
                    setLoading(false)
                    setRefreshed(true)
                }
            })
            .catch(() => setError(true))
    };
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-xl modal-fullscreen-sm-down modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"> {getSingleOrderDetails?.model}</h5>
                            <button onClick={() => { setError(false); setSuccess(false) }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                success && <div className="alert alert-sm alert-success alert-dismissible fade show" role="alert">
                                    <strong>Updated!</strong> Order.
                                    <button type="button" onClick={() => setSuccess(false)} className="btn-close"
                                        data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            }
                            {
                                error && <div className="alert alert-sm alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Failed!</strong> To Update Order For Unauthorized or Order Status is Complete.
                                    <button type="button" onClick={() => setError(false)} className="btn-close" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                                </div>
                            }
                            {
                                getSingleOrderDetails?.orderStatus === 'confirm' && <div className="alert alert-sm alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Foebidden!</strong> Update Not Possible As Order Already Confirmed. Mail us.
                                    <button type="button" onClick={() => setError(false)} className="btn-close" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                                </div>
                            }
                            {
                                !loading && < form id="updateCycleForm" onSubmit={handleSubmit} autoComplete="off">
                                    <div className="d-flex gap-3 flex-column flex-sm-row">
                                        <div className="mb-0 mb-md-1">
                                            <label htmlFor="orderStatus" className="form-label fs-6 fw-bold">Status</label>
                                            <select
                                                id="orderStatus"
                                                className="form-select form-select-sm"
                                                name="orderStatus"
                                                onChange={handleInput}
                                                defaultValue={getSingleOrderDetails.orderStatus}
                                            >
                                                <option value="cancel">Cancel</option>
                                                <option value="pending">Pending</option>
                                                <option value="confirm">Confirm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="shippingAddress" className="form-label fw-bold">Shipping Address</label>
                                        <textarea
                                            className="form-control"
                                            id="shippingAddress"
                                            name="shippingAddress"
                                            rows="2"
                                            placeholder="Provide Shipping Address"
                                            required
                                            onBlur={handleInput}
                                            defaultValue={getSingleOrderDetails.shippingAddress}
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="orderNotes" className="form-label fw-bold">Order Notes (Optional)</label>
                                        <textarea
                                            className="form-control"
                                            id="orderNotes"
                                            name="orderNotes"
                                            rows="2"
                                            placeholder="Provide Short Summary"
                                            required
                                            onBlur={handleInput}
                                            defaultValue={getSingleOrderDetails.orderNotes}
                                        />
                                    </div>
                                    {
                                        getSingleOrderDetails.orderStatus !== 'confirm' && <button className="d-block ms-auto btn btn-primary fw-bold">Update Order</button>
                                    }
                                </form>
                            }
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => { setError(false); setSuccess(false) }} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateOrders;