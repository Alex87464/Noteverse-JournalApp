import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const GamesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
