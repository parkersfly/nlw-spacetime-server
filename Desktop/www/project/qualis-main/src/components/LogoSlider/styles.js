import styled from 'styled-components'

export const Container = styled.div`

/*---------------------------------------------
Slider logos
-----------------------------------------------*/

@keyframes slide {
from {
transform: translateX(0);
}
to {
transform: translateX(-100%);
}
}

.logos {
overflow: hidden;
padding: 0;
background: white;
white-space: nowrap;
position: relative;

margin: 50px 0;
}

.logos:before,
.logos:after {
position: absolute;
top: 0;
width: 250px;
height: 100%;
content: "";
z-index: 2;
}

/* .logos:before {
left: 0;
background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
right: 0;
background: linear-gradient(to right, rgba(255, 255, 255, 0), white); 
}

/
.logos:hover .logos-slide {
animation-play-state: paused;
}*/

.logos-slide {
display: inline-block;
animation: 35s slide infinite linear;
}

.logos-slide img {
height: 50px;
margin: 0 40px;
}

@media (min-width: 320px) {
    .logos {
        background: transparent;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
    }

    .logos-slide img {
        height: 100%;
    }
}
`