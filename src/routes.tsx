import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/therandombot-web",
        element: (
            <App />
        ),
    }
]);

export default router;