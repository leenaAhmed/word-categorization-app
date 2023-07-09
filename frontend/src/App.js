import React from "react";

import PracticeHomeScreen from "./pages/index";
import { AppProvider } from "./core/context/AppContext";

const App = () => {
  return (
    <>
      <AppProvider>
        <PracticeHomeScreen />
      </AppProvider>
    </>
  );
};

export default App;
