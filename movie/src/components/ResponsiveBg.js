import smallChaosWalking from '../images/chaos-walking400.png';
import mediumChaosWalking from '../images/chaos-walking800.png';
import largeChaosWalking from '../images/chaos-walking1200.png';
import xlargeChaosWalking from '../images/chaos-walking1920.png';

function ResponsiveBg() {


    return (
         <img className = 'hero-image' alt='Chaos Walking Movie' src={smallChaosWalking} srcSet={`${smallChaosWalking} 400w, ${mediumChaosWalking} 800w, ${largeChaosWalking} 1200w, ${xlargeChaosWalking} 1920w`} />
    );
}

export default ResponsiveBg;
