/*! For license information please see main.js.LICENSE.txt */
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),BU=nz(pU||(pU=JU`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),XU=nz(mU||(mU=JU`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),vU=(0,q.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),HU=(0,q.ZP)((function(M){const{className:D,classes:j,pulsate:T=!1,rippleX:z,rippleY:I,rippleSize:g,in:u,onExited:e,timeout:E}=M,[y,c]=N.useState(!1),U=(0,B.Z)(D,j.ripple,j.rippleVisible,T&&j.ripplePulsate),t={width:g,height:g,top:-g/2+I,left:-g/2+z},x=(0,B.Z)(j.child,y&&j.childLeaving,T&&j.childPulsate);return u||y||c(!0),N.useEffect((()=>{if(!u&&null!=e){const M=setTimeout(e,E);return()=>{clearTimeout(M)}}}),[e,u,E]),(0,eM.jsx)("span",{className:U,style:t,children:(0,eM.jsx)("span",{className:x})})}),{name:"MuiTouchRipple",slot:"Ripple"})(bU||(bU=JU`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
//# sourceMappingURL=main.js.map