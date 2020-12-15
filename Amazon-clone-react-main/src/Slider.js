import React,{useState} from 'react';
import './Slider.scss';
import ImgComp from './ImgComp';
import i1 from './pics/1.jpg';
import i2 from './pics/2.jpg';
import i3 from './pics/3.jpg';
import i4 from './pics/4.jpg';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

function Slider() {
    //Let's create an array for component to show inside the Slider
    let sliderArr = [<ImgComp src={i1}/>,<ImgComp src={i2}/>,<ImgComp src={i3}/>,<ImgComp src={i4}/>];
    const [x,setX]= useState(0);
    const goleft = () => {
        x === 0 ? setX(-100*(sliderArr.length-1)):setX(x+100);
    };
    const goright = () => {
        x === -100*(sliderArr.length-1) ?setX(0):setX(x-100);
    };

    return (
        <div className='slider'>
            {
                sliderArr.map((item,index )=>{
                    return(
                        <div key ={index} className='slide' style={{transform: `translateX(${x}%)`}}>
                            {item}

                        </div>
                    );

                })
            }
            
            <button id ="goleft" onClick={goleft}><i><KeyboardArrowLeftIcon/></i></button>
            <button id ="goright" onClick={goright}><i><KeyboardArrowRightIcon/></i></button>


        </div>
            
    )
}

export default Slider;
