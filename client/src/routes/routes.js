import {
  createBrowserRouter
} from "react-router-dom";

import Home from "../pages/Home";
import NoMatch from "../layouts/NoMatch";
import Grid from "../layouts/Grid";

import { PATHS } from "./paths";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Grid />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATHS.Details,
        children: [
          {
            path: ":name",
            async lazy() {
              let Details = await import("../pages/Details");
              return { Component: Details.default };
            },
          }
        ]
      },
      {
        path: PATHS.AboutUs,
        async lazy() {
          let AboutUs = await import("../pages/AboutUs");
          return { Component: AboutUs.default };
        }
      },
      {
        path: PATHS.PlantingCalendar,
        async lazy() {
          let PlantingCalendar = await import("../pages/PlantingCalendar");
          return { Component: PlantingCalendar.default };
        },
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

export default routes;

