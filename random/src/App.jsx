import "./App.css";
import Navigation from "./Templates/Navigation/Navigation";
import ProductHomePage from "./Templates/ProductHomePage/ProductHomePage";
import Slider from "./Templates/Slider/Slider";

import "./assets/fonts/Lato/Lato-Black.ttf";
import "./assets/fonts/Lato/Lato-BlackItalic.ttf";
import "./assets/fonts/Lato/Lato-Bold.ttf";
import "./assets/fonts/Lato/Lato-BoldItalic.ttf";
import "./assets/fonts/Lato/Lato-Italic.ttf";
import "./assets/fonts/Lato/Lato-Light.ttf";
import "./assets/fonts/Lato/Lato-LightItalic.ttf";
import "./assets/fonts/Lato/Lato-Regular.ttf";
import "./assets/fonts/Lato/Lato-Thin.ttf";
import "./assets/fonts/Lato/Lato-ThinItalic.ttf";
import "./assets/fonts/Montserrat/Montserrat-Black.ttf";
import "./assets/fonts/Montserrat/Montserrat-BlackItalic.ttf";
import "./assets/fonts/Montserrat/Montserrat-Bold.ttf";
import "./assets/fonts/Montserrat/Montserrat-BoldItalic.ttf";
import "./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf";
import "./assets/fonts/Montserrat/Montserrat-ExtraLight.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <>
      {/* <Navigation />
      <Slider />
      <ProductHomePage /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
