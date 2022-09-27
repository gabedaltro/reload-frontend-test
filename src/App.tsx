import React, { useEffect, useState } from "react";
import GlobalStyle from "styles/Global";
import Header from "components/header/Header";
import { useWindowSize } from "hooks/windowSize";
import ThemeProvider from "providers/theme/theme";
import { AppContextValue, AppProvider } from "providers/app";
import { useCartReducer } from "store/modules/cart/reducer";

const App: React.FC = ({ children }) => {
  const windowSize = useWindowSize();
  const [cart, dispatch] = useCartReducer();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const appContextValue: AppContextValue = {
    windowHeight: windowSize.height,
    windowWidth: windowSize.width,
    isMobile: windowSize.isMobile,
    loading,
    cart,
    dispatch,
  };

  return (
    <AppProvider value={appContextValue}>
      <ThemeProvider>
        <GlobalStyle />
        <Header>{children}</Header>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
