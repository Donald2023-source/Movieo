import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Explore from "../Pages/Explore";
import DetailPage from "../Pages/DetailPage";
import SearchPage from "../Pages/SearchPage";
 
const router = createBrowserRouter([
    {
        path: "/",
        element : <App/>,
        children : [
            {
                path:  "",
                element: <Home/>
            }, 
            {
                path: ":explore",
                element: <Explore/>
            },
            {
                path: ":explore/:id",
                element: <DetailPage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            }
        ]
    }
]);
export default router