import { StrictMode } from "react";
import { createRoot } from  "react-dom";

import App from "./views/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);