<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import{ ScrollTrigger} from "gsap/all";
  import Cursor from "../components/Helpers/Cursor.svelte";
  gsap.registerPlugin(ScrollTrigger);
  


  // core components
  
  import Footer from "../components/Footers/Footer.svelte";
  import { hexColor,threeCanvas } from '../assets/scripts/indexthree.js';
  import HeaderIndex from "../components/Headers/HeaderIndex.svelte";
  import ProjectItem from "../components/Helpers/ProjectItem.svelte";
  import Marquee from "../components/Helpers/Marquee.svelte";
  import {projectItems, imageItem, topicItem} from '../assets/scripts/projectItems.js'; 
  import {projectsGames } from '../assets/scripts/dataProjects';
  // @ts-ignore
  import NavbarMain from "../components/Navbars/NavbarMain.svelte";


  //



  let colorBack;
  let imageActive;
  let topicActive;



  let sizeAnimSection;
  let panelProgress;
  let panelVisible;
  let scrollState;
  let textCirc;
  

  //animations
  let repeatTimeline;

  onMount(() => {

    threeCanvas(true);

    sizeAnimSection =window.innerWidth> window.innerHeight ? -40:-32;
  
    const itemSliders = document.querySelectorAll(".project-slider-item");
    const parentItems = document.querySelectorAll(".project-parent");
    const imageWrapper = document.querySelector("#project-image-wrapper");
    const previewImg = document.querySelector(".project-image-item");
    projectItems(parentItems, imageWrapper,previewImg, itemSliders);

   
    gsap.to('.marquee-part', { xPercent: -100, repeat: -1, duration: 5, ease: "linear" }).totalProgress(0.5);
    gsap.set('.marquee-inner', { xPercent: -50 });
    
    repeatTimeline = gsap.timeline({ repeat: -1, repeatDelay: 4 });
    repeatTimeline.fromTo('#txt-atom',
      { y: 0 },
      { y: sizeAnimSection, duration: 2, delay: 4, onComplete: () => gsap.fromTo('#txt-atom', { y: sizeAnimSection }, { y: 0, duration: 2, delay: 4 }) }
    );
    

    //-----color update----//
    const addCursorEvent = (eventType) => (e) => {
      const touch = eventType === 'touchmove' ? e.touches[0] : e;
      colorBack = hexColor;
    }
    window.addEventListener('mousemove', addCursorEvent('mousemove'));
    window.addEventListener('touchmove', addCursorEvent('touchmove'));
  

 
    //-----mouse movement image Wrapper----//
    window.addEventListener('mousemove', (e) => {
      sizeAnimSection =window.innerWidth> window.innerHeight ? -40:-32;
      imageActive = imageItem;
      topicActive = topicItem;
      
      const previewRect = imageWrapper.getBoundingClientRect();
      const offsetX = previewRect.width / 2;
      const offsetY = previewRect.height * 3/ 4;
      if(imageWrapper){
        gsap.to(imageWrapper, { duration: 0.2, x: e.clientX + window.scrollX - offsetX, y: e.clientY  - offsetY });
      }      
    });

 
     
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

<Cursor/>
<div class="-z-10 w-full h-full fixed bg-whiteP top-0"></div>
<canvas class="webgl"></canvas>

<div class="z-[1] hidden lg:block" id="project-image-wrapper">
  <span class=" absolute  italic text-xs font-inter bottom-[-22px] right-0">{topicActive}</span>
  <div class=" project-image-item w-[600px] h-[400px] overflow-hidden">
    <div class=" flex flex-col"  > 
      {#each projectsGames as value }
      <div class="image-container w-[600px] h-[400px]">
        <img class=" h-[inherit] object-cover" src={value.image} alt={value.name}>
      </div>
      {/each}
    </div>
  </div>
</div>



<NavbarMain menuScrollSection={panelProgress && panelVisible ? true : false} />
<HeaderIndex />

<div class="z[-2] w-full absolute top-[40vh] h-[250vh] overflow-hidden">
  <div class="cir-blueDark blur-[10vh] absolute rounded-[50%] w-[20vh] h-[20vh] mx-auto inset-x-0 top-[65vh]" style:background-color={colorBack}></div>
  <div class="cir-blue blur-[10vh] absolute rounded-[50%] w-[60vh] h-[60vh] mx-auto inset-x-0 top-[65vh]" style:background-color={colorBack}></div>
</div>


<section class="first-project">
  <div class="w-full mt-32 mb-32 lg:mb-72  inline-block">
    <div class="h-[250px]">
      <div class="check-cont -translate-x-2/4 -translate-y-2/4 left-1/2 absolute flex justify-center items-center rounded-[50%] w-[300px] h-[300px]">
        <div class="font-newsreader text-blackP text-xl leading-6 font-normal text-center wow fadeInUp" data-wow-duration="2s">
          <p>Find here some of my <br><span class="font-bold"> featured work</span></p>
        </div>
      </div>
    </div>
    <div class="w-full mt-[200px] mx-0">
      <div class="z[-1] w-full  flex flex-col  ">
        <div class="relative wow fadeInUp   flex justify-end  pr-4 lg:pr-10 " data-wow-duration="2s">
          <div class="h2 font-inter uppercase text-blackP text-left text-2xl lg:text-4xl flex flex-col">
            Exploring intersections 
            <div class="flex flex-row justify-between">
              between &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              <div class="h-[35px] overflow-hidden text-right">
                <ul class="font-bold" id="txt-atom">
                  <li class="v-slide">Games</li>
                  <li class="v-slide">Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          <Marquee textBold={"Game"} textItalic={"Creator"}  colorBack={colorBack} />
      </div>
     
      <div class="flex flex-row  w- full relative">
        <div class="project-parent mr-auto w-full lg:w-[100%] px-2 lg:px-0">
          {#each projectsGames  as  value }
          <ProjectItem id={value.number.length === 1 ? `Item0${value.number}` : `Item${value.number}`} linkPage={value.link} imageURL={value.image} name={value.name} tool={value.tool} number={ value.number.length === 1 ? `0${value.number}` : value.number } topic={value.topic} award={value.award}/>
          {/each}
        </div>
        
      </div>
    </div>
  </div>
</section>

<!-- Third section -->
<Footer bind:colorBack/>




