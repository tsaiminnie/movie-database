import smallChaosWalking from '../images/chaos-walking400.png';
import mediumChaosWalking from '../images/chaos-walking800.png';
import largeChaosWalking from '../images/chaos-walking1200.png';



function ResponsiveBg() {


    return (
         <img className = 'hero-image' src={smallChaosWalking} srcSet={`${smallChaosWalking} 400w, ${mediumChaosWalking} 800w, ${largeChaosWalking} 1200w`} />
    );
}

export default ResponsiveBg;
