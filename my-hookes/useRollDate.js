import {useEffect} from "react";
import useWindowSize from "./useWindowSize";

const UseRollDate = (callback) => {

    const scrollDate = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0,
        difference: 0,
        acceleration: 0,
        velocity: 0,
        skew: 0
    }
    const {height} = useWindowSize()

    const scroll = () => {
        scrollDate.current = window.scrollY
        scrollDate.previous += (scrollDate.current - scrollDate.previous) * scrollDate.ease
        scrollDate.rounded = Math.round(scrollDate.previous * 100) / 100
        scrollDate.difference = scrollDate.current - scrollDate.previous
        scrollDate.acceleration = scrollDate.difference / height
        scrollDate.velocity += scrollDate.acceleration
        scrollDate.skew = scrollDate.velocity * 7.5

        callback(scrollDate)
    }

    useEffect(() => {
        requestAnimationFrame(() => scroll())
    }, [])
};

export default UseRollDate;