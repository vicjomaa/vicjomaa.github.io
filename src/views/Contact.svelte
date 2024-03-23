<script>
    import { link } from "svelte-routing";
    import { onMount } from "svelte";

  
    // core components
    // @ts-ignore
    import NavbarMain from "../components/Navbars/NavbarMain.svelte";
    import { hexColor,threeCanvas } from '../assets/scripts/indexthree.js';
    import {optionsSocial } from '../assets/scripts/menuOptions.js'
   

    let date = new Date().getFullYear();
    let colorBack;

  		
    onMount(() => {
      threeCanvas(false);
      const addCursorEvent = (eventType) => (e) => {
        const touch = eventType === 'touchmove' ? e.touches[0] : e;
        colorBack = hexColor;
      }

      window.addEventListener('mousemove', addCursorEvent('mousemove'));
	  window.addEventListener('touchmove', addCursorEvent('touchmove'));
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
  
  
  
  </style>
  

  <NavbarMain menuScrollSection={ false } />
  <div class=" absolute overflow-hidden bg-whiteP h-full w-full">

  </div>
  
    <canvas class="webgl"></canvas>

    <div class="absolute w-full -translate-x-2/4 -translate-y-2/4  left-2/4  top-1/2  px-2 lg:px-10  ">
            <div class=" hidden lg:block font-inter my-4 "> 
                {#each Object.entries(optionsSocial) as [key, value] }
                    <div class=" btn h-[30px]  ">
                    <a class=" text-sm font-inter font-medium btn-u capitalized "
                    use:link
                    href={value.link}
                    >{key}</a>
                    </div>
                {/each}
            </div>
            <div class=" text-right text-blackP font-newsreader">
                <div class="  text-5xl lg:text-6xl h2 wow fadeInUp" data-wow-duration="2s">
                    Lets<span class="italic"> &nbsp;collaborate</span> <br>
                    <span class="font-bold"  style:color={colorBack} > together</span>
                </div>
                 
            </div>
            <div class=" reveal font-inter mt-20 lg:mt-0 leading-2 tracking-normal uppercase font-regular text-left  text-xs px-2 wow fadeInUp" data-wow-duration="2s">
                <div class="h2">
                Amaze for explore the next journey &nbsp; <br>
                and continue bringing the best <br>
                <span class="font-bold"> human side of tecnology</span>.
                </div>
            </div>
            <div class=" block lg:hidden font-inter my-4  text-right  "> 
                {#each Object.entries(optionsSocial) as [key, value] }
                    <div class=" btn ">
                    <a class=" text-sm font-inter font-medium btn-u capitalized "
                    use:link
                    href={value.link}
                    >{key}</a>
                    </div>
                {/each}
            </div> 
        
    </div>

    <div class=" font-inter absolute w-full -translate-x-2/4 -translate-y-2/4 text-xs flex justify-between  tracking-normal  font-medium  px-2 lg:px-10    left-2/4 bottom-0"> 
        <div class="relative ">
            © {date} All Rights Reserved
        </div>
        <div class="relative">
            <p>
            Designed by 
            <a
                href="https://www.creative-tim.com?ref=ns-footer"
                class="btn btn-u "
            >
                vicjomaa
            </a>
            </p>
        </div>
    </div>

  
