import { Outlet, Navigate } from 'react-router-dom';

const AdminRoutes = () => {
    const isAdmin = sessionStorage.getItem('currentUserRole') === 'admin' || 'employer'
    return (
        isAdmin ? <Outlet/> : <Navigate to='not-found'/>
    )
};

export default AdminRoutes;
