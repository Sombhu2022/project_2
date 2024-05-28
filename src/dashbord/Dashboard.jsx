// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllShop } from '../redux/shop/shopController';
import './dashboard.scss'; // Import the CSS file
import ShopCard from './components/ShopCard';

function Dashboard() {
    const dispatch = useDispatch();
    const { shop, status } = useSelector(state => state.shop);
    const [allShop, setAllShop] = useState([]);
    const { user } = useSelector(state=> state.user)


    useEffect(() => {
        dispatch(fetchAllShop());
    }, [dispatch]);

    useEffect(() => {
        if (status.fetchShop === 'success') {
            setAllShop(shop);
        }
        
    }, [status.fetchShop, shop ]);

    if(user && user?.role !== 'admin') return <h3>Only Admin can Access Dashboard</h3>


    return (
        <div className='dashboard_container'>
            <h2>Shop Info</h2>
            <div className='shop_list'>
                {allShop && allShop.map((ele) => (
                    <ShopCard key={ele?._id} shop={ele} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
