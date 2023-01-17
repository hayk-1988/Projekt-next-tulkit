import {useEffect, useState} from "react";


const UseWindowSize = () => {
    const getWindowSize = () => ({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [windowSize, setWindowSize] = useState(getWindowSize)

    useEffect(() => {
        const handle = () => setWindowSize(getWindowSize)

        window.addEventListener('resize', handle)

        return () => removeEventListener("resize", handle)

    }, [])


    return windowSize
};

export default UseWindowSize;