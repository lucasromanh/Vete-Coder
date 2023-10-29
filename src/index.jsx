import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomeTemplateScreen } from "./screens/HomeTemplateScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomeTemplateScreen />);
