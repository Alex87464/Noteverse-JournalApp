import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const StockApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
