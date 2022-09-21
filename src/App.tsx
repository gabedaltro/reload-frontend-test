import React from "react";
import GlobalStyle from "styles/Global";
import Header from "components/header/Header";
import { useWindowSize } from "hooks/windowSize";
import ThemeProvider from "providers/theme/theme";
import { AppContextValue, AppProvider } from "providers/app";

const App: React.FC = ({ children }) => {
  const windowSize = useWindowSize();

  const appContextValue: AppContextValue = {
    windowHeight: windowSize.height,
    windowWidth: windowSize.width,
    isMobile: windowSize.isMobile,
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
