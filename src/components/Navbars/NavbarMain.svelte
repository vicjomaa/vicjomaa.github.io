<script>
  import { onMount } from 'svelte';
  import { link } from "svelte-routing";
  import gsap from 'gsap';
  import './navbar.css';
  import {optionsMenu } from '../../assets/scripts/menuOptions.js'
  import {projectsGames} from '../../assets/scripts/dataProjects';

  let tl;
  let path;
  let menu;
  let menuFoot;
  let boxAnimation;
  let isMenuRevealed = false;
  export let menuScrollSection = false;

  onMount(() => {

    tl = gsap.timeline({ paused: true });
    initializeLogo();
    initializeMenuAnimation( tl,menu, menuFoot);
    revealMenuItems(tl, path, menu, menuFoot);

    });


  


    

       
    window.addEventListener('resize', () => {
        // Update sizes
        if(window.innerWidth > 900 && isMenuRevealed){      
          revealMenu();
        }
      
    })


    function revealMenu() {
      isMenuRevealed = !isMenuRevealed;
      document.body.style.overflowY =  isMenuRevealed ? "hidden" : "visible";
      tl.reversed(!tl.reversed());
    }


  
    function initializeLogo(){
      gsap.set(".box", {
        x: (i) => i * 14
    });

    boxAnimation = gsap.to(".box", {
      duration: 6,
      ease: "none",
      x: "+=42",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 42) //force x value to be between 0 and 39 using modulus
      },
      repeat: -1,
      paused: true // Animation starts in a paused state
    });
    }

    export function startBoxAnimation() {
    // Start the animation
      boxAnimation.play();
    }

    export function stopBoxAnimation() {
    // Stop the animation
      boxAnimation.seek(2);
      boxAnimation.pause();
    }

    function initializeMenuAnimation( tl, path, menu, menuFoot) {
  
      tl.set(menu, { visibility: "hidden" });
      tl.set(menuFoot, { visibility: "hidden", opacity: 0  });
      tl.set( ".menu-item ", {  opacity: 0 });
      document.body.style.overflowY =  "visible";
  
    
    }

    function revealMenuItems(tl, path, menu, menuFoot) {
      // Your revealMenuItems function logic here

      const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
      const power4 = "power4.inOut";

      tl.to(path, 0.1, { attr: { d: start },  }, "<").to(
        path,
        0.1,
        { attr: { d: end }, ease: power4 },
        "-=0.1"
      );

      tl.to(menu, 0.1, { opacity: 1,  visibility: "visible" });

      tl.to(menuFoot, 0.1, { opacity: 1 , visibility: "visible" });

      tl.to(".menu-item ",0.5,{ opacity:1,ease: "power2.out"},"-=0.1").reverse();
    }

</script>

<div class=" top-0 fixed  w-full h-[64px] z-2 {menuScrollSection?  'bg-transparent': 'bg-whiteP '}" ></div>

<nav
  class=" {menuScrollSection?  isMenuRevealed ? ' text-blackP  ' : 'text-whiteP ':  'text-blackP'}   top-0 fixed z-50 w-full  py-3  "
>
  <div
    class="container px-4 lg:px-10 mx-auto flex items-center justify-between max-w-none "
  >
    <div
      class=" btn relative flex "
    >
      <a
      use:link
      class=" text-sm font-inter font-medium leading-relaxed flex mr-4 py-2 whitespace-nowrap lowercase"
      href="/"
      on:mouseenter={startBoxAnimation} on:mouseleave={stopBoxAnimation}>

    <div class="wrapper-logo mr-3 ">
      <div class="boxes {menuScrollSection? isMenuRevealed ? ' blackPath': 'whitePath':' blackPath'}">
        <div class="box w-5 absolute">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 29" >
            <path d="M23.5614 14.992C23.5656 15.0206 23.5688 15.0481 23.573 15.0767H24C23.9725 14.8753 23.945 14.6728 23.9176 14.4725C22.8554 6.70628 21.938 0 19.7999 0C18.3889 0 17.5096 2.92223 16.7698 7.14103C16.4062 8.99894 16.0786 11.1848 15.7974 13.6371C15.7594 13.9134 15.7213 14.1918 15.6833 14.4714C15.6547 14.6816 15.6252 14.8929 15.5966 15.1043C15.0291 17.2549 13.6329 18.776 11.9979 18.776C10.3079 18.776 8.87264 17.1493 8.3442 14.883C8.32517 14.7454 8.30615 14.6079 8.28818 14.4714C8.24379 14.1467 8.1994 13.8242 8.15607 13.5039C7.8855 11.1683 7.57372 9.07708 7.22706 7.28412C6.483 2.98827 5.60049 0 4.17263 0C2.03558 0 1.1182 6.70628 0.0570724 14.4714C0.0380483 14.6101 0.0190241 14.7498 0 14.8885H0.428043C0.831777 12.3262 2.36322 10.4199 4.19271 10.4199C5.86894 10.4199 7.29576 12.0202 7.83372 14.259C7.8464 14.3492 7.85802 14.4384 7.87071 14.5286C7.93518 15.0008 7.99965 15.4697 8.06306 15.933C8.33363 18.2279 8.64435 20.2806 8.9889 22.0406C9.72239 26.1614 10.5964 29 11.9863 29C13.2366 29 14.0694 26.7051 14.7574 23.2458C15.2563 21.0038 15.6949 18.1707 16.0521 14.8907C16.0691 14.7697 16.0849 14.6486 16.1018 14.5275C16.1156 14.4296 16.1282 14.3316 16.142 14.2325C16.6842 12.007 18.1057 10.4177 19.7766 10.4177C21.6315 10.4177 23.1798 12.3757 23.5582 14.9898H23.5614V14.992Z" fill="black"/>
          </svg>
        </div>
        <div class="box w-5 absolute">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 29">
            <path d="M23.5614 14.992C23.5656 15.0206 23.5688 15.0481 23.573 15.0767H24C23.9725 14.8753 23.945 14.6728 23.9176 14.4725C22.8554 6.70628 21.938 0 19.7999 0C18.3889 0 17.5096 2.92223 16.7698 7.14103C16.4062 8.99894 16.0786 11.1848 15.7974 13.6371C15.7594 13.9134 15.7213 14.1918 15.6833 14.4714C15.6547 14.6816 15.6252 14.8929 15.5966 15.1043C15.0291 17.2549 13.6329 18.776 11.9979 18.776C10.3079 18.776 8.87264 17.1493 8.3442 14.883C8.32517 14.7454 8.30615 14.6079 8.28818 14.4714C8.24379 14.1467 8.1994 13.8242 8.15607 13.5039C7.8855 11.1683 7.57372 9.07708 7.22706 7.28412C6.483 2.98827 5.60049 0 4.17263 0C2.03558 0 1.1182 6.70628 0.0570724 14.4714C0.0380483 14.6101 0.0190241 14.7498 0 14.8885H0.428043C0.831777 12.3262 2.36322 10.4199 4.19271 10.4199C5.86894 10.4199 7.29576 12.0202 7.83372 14.259C7.8464 14.3492 7.85802 14.4384 7.87071 14.5286C7.93518 15.0008 7.99965 15.4697 8.06306 15.933C8.33363 18.2279 8.64435 20.2806 8.9889 22.0406C9.72239 26.1614 10.5964 29 11.9863 29C13.2366 29 14.0694 26.7051 14.7574 23.2458C15.2563 21.0038 15.6949 18.1707 16.0521 14.8907C16.0691 14.7697 16.0849 14.6486 16.1018 14.5275C16.1156 14.4296 16.1282 14.3316 16.142 14.2325C16.6842 12.007 18.1057 10.4177 19.7766 10.4177C21.6315 10.4177 23.1798 12.3757 23.5582 14.9898H23.5614V14.992Z" fill="black"/>
          </svg>
        </div>
        <div class="box w-5 absolute">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 29" >
            <path d="M23.5614 14.992C23.5656 15.0206 23.5688 15.0481 23.573 15.0767H24C23.9725 14.8753 23.945 14.6728 23.9176 14.4725C22.8554 6.70628 21.938 0 19.7999 0C18.3889 0 17.5096 2.92223 16.7698 7.14103C16.4062 8.99894 16.0786 11.1848 15.7974 13.6371C15.7594 13.9134 15.7213 14.1918 15.6833 14.4714C15.6547 14.6816 15.6252 14.8929 15.5966 15.1043C15.0291 17.2549 13.6329 18.776 11.9979 18.776C10.3079 18.776 8.87264 17.1493 8.3442 14.883C8.32517 14.7454 8.30615 14.6079 8.28818 14.4714C8.24379 14.1467 8.1994 13.8242 8.15607 13.5039C7.8855 11.1683 7.57372 9.07708 7.22706 7.28412C6.483 2.98827 5.60049 0 4.17263 0C2.03558 0 1.1182 6.70628 0.0570724 14.4714C0.0380483 14.6101 0.0190241 14.7498 0 14.8885H0.428043C0.831777 12.3262 2.36322 10.4199 4.19271 10.4199C5.86894 10.4199 7.29576 12.0202 7.83372 14.259C7.8464 14.3492 7.85802 14.4384 7.87071 14.5286C7.93518 15.0008 7.99965 15.4697 8.06306 15.933C8.33363 18.2279 8.64435 20.2806 8.9889 22.0406C9.72239 26.1614 10.5964 29 11.9863 29C13.2366 29 14.0694 26.7051 14.7574 23.2458C15.2563 21.0038 15.6949 18.1707 16.0521 14.8907C16.0691 14.7697 16.0849 14.6486 16.1018 14.5275C16.1156 14.4296 16.1282 14.3316 16.142 14.2325C16.6842 12.007 18.1057 10.4177 19.7766 10.4177C21.6315 10.4177 23.1798 12.3757 23.5582 14.9898H23.5614V14.992Z" fill="black"/>
          </svg>
        </div>
      </div>
    </div> 
    vicjomaa
    <div class="circle absolute circle bg-orangeP right-0 top-1 font-medium italic font-newsreader text-xs">
      <span class="text-blackP">G</span>
    </div>
    </a>
  </div>

    <!--menu lg-->
   
        {#each Object.entries(optionsMenu) as [key, value] }
          <div class=" btn  hidden lg:block">
            <a
              use:link
              href={value.link}
              class=" btn-u  text-sm font-inter font-medium inline-block ml-10   whitespace-nowrap capitalized "
            >
              {key}
          </a>
        </div>
        {/each}

    
          <div class=" btn block lg:hidden" >
            <a
              use:link
              on:click="{revealMenu}"
              class="  btn-u text-sm font-inter font-medium  inline-block ml-10   whitespace-nowrap capitalized "
            >
            {isMenuRevealed ? 'Close':'Menu'}
          </a>
   
  </div>
 
</nav>
  <!-- svg overlay -->
  <div class="menu-mobile overlay pointer-events-none gradientPath  block lg:hidden">
    <svg viewBox="0 0 350 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="11.26%" style="stop-color:#ffffff2e" />
          <stop offset="35.44%" style="stop-color:#ffffff2e" />
          <stop offset="61.07%" style="stop-color:#ffffff2e" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
      <path filter="url(#blur)"  bind:this={path} d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
    </svg>
  </div>

  <!-- menu items -->
  <div class="  menu !z-[3] text-blackP hidden" bind:this={menu}>
    
    <div class="primary-menu w-full bottom-[56px]  fixed overflow-y-auto">
      <div class="menu-container flex py-10 px-10 ">

        
        <div class="font-inter font-medium  uppercase  text-xs my-4"><h2>Game Design</h2></div>
        <div class="wrapper text-bold   font-medium flex font-newsreader text-2xl mx-3 ">
            {#each projectsGames as value }
            <div class=" flex flex-row btn menu-item mb-[10px] pb-[10px]">
              <span class="   font-inter font-semibold  text-xs mx-3  !leading-[1.5rem] "   >
                <p>{ value.number.length === 1 ? `0${value.number}` : value.number }</p></span>
              <a class=" btn-u "
              use:link
              on:click="{revealMenu}"
              href={value.link}
              > 
              {value.name}</a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>


  <!-- footer menu mobile-->
  <div class="  menu-foot text-blackP bottom-0 fixed z-3 w-full flex flex-wrap items-center justify-between px-2 py-4 block lg:hidden" bind:this={menuFoot}>
    <div class=" container px-4  mx-auto flex flex-wrap ">
      <div class="mx-auto">
        {#each Object.entries(optionsMenu) as [key, value] }
          <a
            use:link
            href={value.link}
            class=" btn text-sm font-inter font-medium capitalized btn-u mr-10 ml-10"
          >
            {key}
        </a>
      {/each}
      </div>
    </div>
  </div>
