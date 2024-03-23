<script>
  import {onMount} from "svelte";

  import gsap from 'gsap';

  function initializeCursor(cursor, buttons) {
    let tl = gsap.timeline({ paused: true });
    
    buttons.forEach((button) => {
      const onMouseEnter = () => {
        //tl.kill(); // Kill any existing animations
        gsap.to(cursor, { duration: 0.2, scale: 4, opacity: 1 });
      };


      const onMouseLeave = () => {
        //tl.kill(); // Kill any existing animations
        gsap.to(cursor, { duration: 0.2, scale: 1, opacity: 1 });
      };

      button.addEventListener("mouseenter", onMouseEnter);
      button.addEventListener("mouseleave", onMouseLeave);
    });

    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, { duration: 0.2, x: e.clientX + window.scrollX , y: e.clientY + window.scrollY });
    });
  }

  let cursor;
  
  onMount(() => {
    const buttons = document.querySelectorAll(".btn");
    initializeCursor(cursor, buttons);
  });

  export function updateCursor(){
    const buttons = document.querySelectorAll(".btn");
    initializeCursor(cursor, buttons);
    return true;

  }

 



</script>

<div class="cursor invisible lg:visible" id="cursor" bind:this={cursor}></div>
