import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <>
            <div className="container-fluid m-0 p-0">
                <div className="col-4 col-md-3 bg-dark" style={{ height: '100vh' }}>
                    <ul className="list-unstyled">
                        <li className="bg-info mb-1">
                            <NavLink className="nav-link text-light"
                                to="/admin/add/bycycle"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#636"
                                }}>
                                Add Bicycle
                            </NavLink>
                        </li>
                        <li className="bg-info mb-1">
                            <NavLink className="nav-link text-light"
                                to="/admin/show/bicycles"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#636"
                                }}>
                                All Bicycles
                            </NavLink>
                        </li>
                        <li className="bg-info mb-1">
                            <NavLink className="nav-link text-light"
                                to="/admin/show/orders"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#636"
                                }}>
                                All Orders
                            </NavLink>
                        </li>
                        <span className="w-100 d-block border border-2 border-top" ></span>
                        <li className="bg-info mb-1">
                            <NavLink className="nav-link text-light"
                                to="/user/show/orders"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#636"
                                }}>
                                My Orders
                            </NavLink>
                        </li>
                        <li className="bg-info mb-1">
                            <NavLink className="nav-link text-light"
                                to="/user/add/reviews"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#636"
                                }}>
                                Add Reviews
                            </NavLink>
                        </li>
                        <li className="bg-info mb-1">
                            <NavLink className="nav-link text-light"
                                to="/user/show/reviews"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#636"
                                }}>
                                All Reviews
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-8 col-md-9">

                </div>

            </div>
        </>
    );
};

export default Dashboard;