import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const StockApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
