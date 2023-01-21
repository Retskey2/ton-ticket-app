import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

const useSizeScreenBlocks = () =>{
    const { width } = useWindowSize();
    const [adaptiveSize, setAdaptiveSize] = useState(0);
    
    useEffect(() => {
        if (width <= 280) setAdaptiveSize(220);
        if (width > 281 && width <= 320) setAdaptiveSize(240);
        if (width > 321 && width < 420) setAdaptiveSize(300);
        if (width >= 420 && width < 720) setAdaptiveSize(400);
        if (width >= 720) setAdaptiveSize(500);
      }, [width]);
    

    return {adaptiveSize, currentWidth: width};
}

export default useSizeScreenBlocks;