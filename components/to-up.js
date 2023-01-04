import React, {useEffect, useRef} from 'react';

const ToUp = ({upHandler}) => {

    const upRef = useRef()

    useEffect(() => {
        let a = upRef.current?.offsetHeight
        console.log(upRef.current?.offsetHeight)

        function scrollDown (){
            if (window.scrollY > window.screen.height){
                console.log(upRef.current.className = 'up')
            }else {
                console.log(upRef.current.className = 'hide')
            }
        }
        window.addEventListener('scroll', scrollDown)

        return() =>{
           return  window.removeEventListener("scroll", scrollDown)
        }
    },[])

    return (
        <div ref={upRef} className={'hide'} onClick={upHandler}>
            <p onClick={(e) => {
                console.log(e)
            }}>^</p>
        </div>
    );
};

export default ToUp;