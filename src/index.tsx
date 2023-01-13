import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
=======
import { QueryClient, QueryClientProvider } from "react-query";
>>>>>>> parent of 7bcdc59 (recoil 추가)
import App from "./App";
import { darkTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
=======
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
>>>>>>> parent of 7bcdc59 (recoil 추가)
  </React.StrictMode>,
  document.getElementById("root")
);
