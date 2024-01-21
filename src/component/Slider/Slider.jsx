import './Slider.css'

var storeMargin = 0;

const sliderStyle = () => {

    const element = document.getElementById("boxes");

    if(storeMargin !== -475){
        storeMargin -= 95;
        element.classList.add("box-style");
        element.style.marginLeft = `${storeMargin}vw`;
    } else {
        storeMargin = 0;
        element.classList.remove("box-style");
        element.style.marginLeft = `${storeMargin}vw`;
    }

    const sliderCir = document.querySelectorAll(".sliderCircle p");

    sliderCir.forEach((pElement) => {
        pElement.classList.remove("sliderCircle-style");
    })

    switch(storeMargin){
        case 0:
            sliderCir[0].classList.add("sliderCircle-style");
            break;
        case -95:
            sliderCir[1].classList.add("sliderCircle-style");
            break;
        case -190:
            sliderCir[2].classList.add("sliderCircle-style");
            break;
        case -285:
            sliderCir[3].classList.add("sliderCircle-style");
            break;
        case -380:
            sliderCir[4].classList.add("sliderCircle-style");
            break;
        case -475:
            sliderCir[0].classList.add("sliderCircle-style");
            break;
        default:
    }
}

setInterval(sliderStyle,3000);



function Slider({sliderImg}) {
  return (
    <div className='Slider'>
        <div className="box" id='boxes'>
            {
                sliderImg.map((image) => (
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                ))
            }
        </div>
        <div className="sliderCircle">
            <p className='sliderCircle-style'></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
  )
}

export default Slider;