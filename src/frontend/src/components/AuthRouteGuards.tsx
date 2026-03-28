import React from 'react';
import { Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const AuthLoading: React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

export const RootRedirect: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <AuthLoading />;
  }

  return <Navigate to={isAuthenticated ? '/upload' : '/login'} replace />;
};

interface LoginOrRegisterGateProps {
  page: React.ReactNode;
}

export const LoginOrRegisterGate: React.FC<LoginOrRegisterGateProps> = ({ page }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <AuthLoading />;
  }

  return isAuthenticated ? <Navigate to="/upload" replace /> : <>{page}</>;
};
