import React, {useEffect, useRef} from 'react';

const ToUp = ({upHandler}) => {

    const upRef = useRef()

    useEffect(() => {

        function scrollDown (){
            if (window.scrollY > window.screen.height){
                upRef.current.className = 'up'
            }else {
                upRef.current.className = 'hide'
            }
        }
        window.addEventListener('scroll', scrollDown)

        return() =>{
           return  window.removeEventListener("scroll", scrollDown)
        }
    },[])

    return (
        <div ref={upRef} className={'hide'} onClick={upHandler}>
            <p>^</p>
        </div>
    );
};

export default ToUp;