import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Body from "./components/body";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import ReviewPage from "./components/Review/ReviewPage";
import Stepper from "./components/Stepper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Body />
            <div className="flex items-center justify-center py-4 mt-40 text-5xl">
              <h1>Rooms</h1>
            </div>
            <Carousel />
            <Card />
            <ReviewPage />
          </div>
        ),
      },
      {
        path: "/book",
        element: <Stepper/>,
      },      
    ],
  },
]);

export default router;
