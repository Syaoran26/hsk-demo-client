import { AuthContext } from '@/contexts/auth-context';
import { use } from 'react';

const useAuth = () => {
  const context = use(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export default useAuth;
