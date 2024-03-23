<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import{ ScrollTrigger} from "gsap/all";
  gsap.registerPlugin(ScrollTrigger);
  


  // core components
  


  //



  onMount(() => {

   
     
  })

  

</script>

<style>
  .webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  overflow-x: hidden;
  z-index: 0;
}


.cir-blueDark {
    -webkit-animation:spinO 10s linear infinite;
    -moz-animation:spinO 10s linear infinite;
    animation:spinO 10s linear infinite;
}

.cir-blue {
    -webkit-animation:spinR 8s linear infinite;
    -moz-animation:spinR 8s linear infinite;
    animation:spinR 8s linear infinite;
}


@keyframes spinO { 
  0% {
    transform:  rotate(0deg) skew(0deg, 0deg);
  }
  50% {
    transform:  rotate(180deg) skew(20deg, 0deg); 
  }
  0% {
    transform:  rotate(360deg) skew(0deg, 0deg);
  }
}

@keyframes spinB { 
  0% {
    transform:  rotate(0deg) skew(10deg, 0deg);
  }
  50% {
    transform:  rotate(180deg) skew(0deg, 10deg); 
  }
  0% {
    transform:  rotate(360deg) skew(10deg, 0deg);
  }
}

.check-cont{
  background: rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(5px); 
  -webkit-backdrop-filter: blur(5px);
}

#project-image-wrapper {
  position: fixed;
  pointer-events: none;
  opacity: 0;
  transform-origin: center;
  
}
.project-image-item {
  pointer-events: none;
  
}




#panels #panels-container {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding: 0;
  overflow: hidden;
  
}
#panels #panels-container .panel {
  position: relative;
  min-width: 100vw;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #333;
  text-align: left;
  
}

</style>







