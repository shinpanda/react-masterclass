import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const queryClient = new QueryClient();

const rootDom = document.getElementById("root");
if (!rootDom) throw new Error("root가 없습니다.");
const root = ReactDOM.createRoot(rootDom);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
