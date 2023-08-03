import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.tsx";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
