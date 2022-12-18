import React, {useState} from 'react';


const Acardion = () => {
    const [state, setState] = useState([ '', '', '', '', ''])


    function openCloseHandler(e) {

        console.log(e.target.id)
        const id = +e.target.id
        console.log(state)
        if (state[id] === 'open'){
            return setState([ '', '', '', '', ''])
        }
        let arr = []
        for (let i = 1; i < 6; i++) {
            if (i !== id){
                arr[i] = ''
            }else {
                arr[i] = 'open'
            }
        }
        setState([...arr])
        // console.log(e.target.lastElementChild.classList.toggle(`${state[id]}`))
        console.log('ste')
    }

    return (
        <div>
            <div className="manu">
                <div className="manu__header">

                    <div className="close">
                        x
                    </div>
                </div>
                <div className="manu__search-bar">
                    <input type="search" placeholder="Search for items..."/>
                </div>

                <div className="manu-accordion">

                    <div className="manu__item ">
                        <div  id='1' onClick={openCloseHandler} className={'manu__item-btn'}>Home</div>
                        <div className={`tab-content ${state[1]}`}>
                            <ul>
                                <li>1 esi arajinnaa</li>
                                <li>2 es meky erkrordy</li>
                                <li>3</li>
                                <li>4</li>
                                <li>1 esi arajinnaa</li>
                                <li>2 es meky erkrordy</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </div>
                    </div>

                    <div onClick={openCloseHandler} id='2' className="manu__item">
                        <div id='2' onClick={openCloseHandler} className={'manu__item-btn'}>Shop</div>
                        <div className={`tab-content ${state[2]}`}>
                            <ul>
                                <li>1 esi arajinnaa</li>
                                <li>2 es meky erkrordy</li>
                                <li>3</li>
                                <li>4</li>
                                <li>1 esi arajinnaa</li>
                                <li>2 es meky erkrordy</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </div>
                    </div>

                    <div onClick={openCloseHandler} id='3' className="manu__item">
                        <div id='3' onClick={openCloseHandler} className={'manu__item-btn'}>Miban</div>
                        <div className={`tab-content ${state[3]}`}>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </div>
                    </div>

                    <div onClick={openCloseHandler} id='4' className="manu__item">
                        <div id='4' onClick={openCloseHandler} className={'manu__item-btn'}>Mega Menu</div>
                        <div className={`tab-content ${state[4]}`}>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </div>
                    </div>

                    <div onClick={openCloseHandler} id='5' className="manu__item">
                        <div id='5' onClick={openCloseHandler} className={'manu__item-btn'}>Blog</div>
                        <div className={`tab-content ${state[5]}`}>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="manu__info-wrap">
                    <p>Our location</p>
                    <p>Log in/Sign up</p>
                    <p>(+01) - 2345 - 6789</p>
                </div>
            </div>
        </div>
    );
};

export default Acardion;


