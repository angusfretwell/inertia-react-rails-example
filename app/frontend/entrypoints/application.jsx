import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { createRoot } from "react-dom/client";
import axios from "axios";

const pages = import.meta.glob("../pages/**/*.jsx");

document.addEventListener("DOMContentLoaded", () => {
  InertiaProgress.init();

  const csrfToken = document.querySelector("meta[name=csrf-token]").content;
  axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

  createInertiaApp({
    resolve: (name) => pages[`../pages/${name}.jsx`](),
    setup({ el, App, props }) {
      const root = createRoot(el);
      root.render(<App {...props} />);
    },
  });
});
