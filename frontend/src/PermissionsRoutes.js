import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PermissionRoutes = ({ permission }) => {
  const permissions = sessionStorage.getItem('permissions') || '';
  const permissionsArray = permissions.split(',');

  return (
    permissionsArray.includes(permission) ? <Outlet /> : <Navigate to='/not-found' />
  )
}

export default PermissionRoutes;
