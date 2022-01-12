import React from 'react';
import AdminAnalytics from '../AdminAnalytics/AdminAnalytics';
import Featuredinfo from '../Featuredinfo/Featuredinfo';

const AdminDashboard = () => {
    return (
        <div>
            <Featuredinfo/>
            <AdminAnalytics/>
        </div>
    );
};

export default AdminDashboard;