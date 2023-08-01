import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const ClothesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
