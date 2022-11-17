import { useState, useEffect } from "react";

const useCheckTabletScreen = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleWindowSizeChange = () => setWidth(window.innerWidth);
        handleWindowSizeChange();
        window.addEventListener("resize", handleWindowSizeChange);
        return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, []);

    return width <= 976;
};

export default useCheckTabletScreen;