<script>


export let size;
export let radius;
export let font;
export let style;
export let color;
export let textA;
export let textB;
export let rot;

const VIEWBOX = 100
let inside = 0

</script>

<style>

    @keyframes rotateA {
      from {
        transform:  rotateX(60deg) rotateZ(360deg);
      }
      to {
        transform: rotateX(60deg)  rotateZ(0deg);
      }
    }

    @keyframes rotateB {
      from {
        transform:  rotateX(60deg) rotateZ(0deg);
      }
      to {
        transform: rotateX(60deg)  rotateZ(360deg);
      }
    }


  .marqueeCir svg {
  width: 60vmin;
  overflow: visible;

}
  
  #svgA{
  animation: rotateA 20s linear infinite; /* 2s duration, linear timing function, infinite loop */

}

#svgB{
  position: absolute;
  top:10vh;
  animation: rotateB 20s linear infinite; /* 2s duration, linear timing function, infinite loop */

}
</style>
<div class=" marqueeCir" >
    <svg id="svgA" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path id="circlePathA" fill="none" stroke-width="4" stroke="hsl(0 0 0 / 0.1)" d= {`
        M ${VIEWBOX * 0.5 - radius}, ${VIEWBOX * 0.5}
        a ${radius},${radius} 0 1,${inside} ${radius * 2},0
        a ${radius},${radius} 0 1,${inside} -${radius * 2},0
      `} 
         />
        
      <text id="textA" font-size={size}  class="{font} {style}" fill="{color}"  >
        <textPath  textLength={Math.floor(Math.PI * 1.8 * radius)} id="textPath" href="#circlePathA">{textA}</textPath>
      </text>

      
    </svg>

    <svg id="svgB" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path id="circlePathB" fill="none" stroke-width="4" stroke="hsl(0 0 0 / 0.1)" d= {`
        M ${VIEWBOX * 0.5 - radius}, ${VIEWBOX * 0.5}
        a ${radius},${radius} 0 1,${inside} ${radius * 2},0
        a ${radius},${radius} 0 1,${inside} -${radius * 2},0
      `} 
        
          />
      <text id="textB" font-size={size}  class="{font} {style}" fill="{color}"  >
        <textPath  id="textPath" href="#circlePathB">{textB}</textPath>
      </text>

      
    </svg>


    
 
  </div>