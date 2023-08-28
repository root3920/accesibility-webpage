import { useState } from "react";

export const useResize = () => {
    const [windowWidth, setWindowWidth] = useState();

    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return windowWidth;
}
