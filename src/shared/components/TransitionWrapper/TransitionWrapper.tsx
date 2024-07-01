import { ReactElement, useEffect, useState } from "react";
import { AnimatedDiv } from "./TransitionWrapper.styles";

const TransitionWrapper: React.FC<{children: ReactElement}> = ({ children }) => {
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
        return () => setInProp(false);
    }, []);

    return <AnimatedDiv $inProp={inProp}>{children}</AnimatedDiv>;
};

export default TransitionWrapper;