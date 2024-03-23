<script>
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";
  import gsap from 'gsap';


  onMount(() => {
    let th = gsap.timeline();
    th.from(
    ".reveal div",
    1.8,
    {
      y: 200,
      ease: "power4.out",
      stagger: {
        amount: 0.8,
      },
    },
  );
  });
export function animateIndex(){
 
}
</script>

<style>
  .reveal {
    position: relative;
    overflow: hidden;
  }
  
  .reveal div {
    line-height: -1.2em;
  }

 

</style>  

<section class="w-full h-[100vh] flex flex-col  mt-[5em]">
  <div class="  text-blackP font-newsreader relative -translate-x-2/4 -translate-y-2/4 text-4xl lg:text-6xl  font-normal  left-2/4 lg:left-[60%]  top-[40%] w-full" >
    <div class="relative">
      <div class="reveal h-4xl lg:h-6xl text-center lg:text-left">
        <div class="h1">
          Hi I’m <span class="italic">Victor M.</span>
        </div>
      </div>
      <div class="reveal h-4xl lg:h-6xl text-center  lg:text-left">
        <div class="h2">
          <span class="font-bold hidden lg:block">  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;creative 
            <br>   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; technologist </span>
          <span class="font-bold block lg:hidden">creative 
            <br> technologist </span>
        </div>
      </div>
    </div>
    <div class="relative mt-20">
      <div class=" reveal font-inter  leading-2 tracking-normal uppercase font-regular text-center lg:text-left  text-xs  ">
          <div class="h2">
            Welcome to my journey of  enhancing &nbsp; <br>
            immersive media and daily experiences  <br>
            <span class="font-bold">  with the language of games </span>.
          </div>
      </div>
    </div>
  </div>
  <div class=" font-inter absolute w-full -translate-x-2/4 -translate-y-2/4 text-xs hidden lg:flex justify-between leading-2 tracking-normal uppercase font-medium  k px-2 lg:px-10 text-left left-2/4 bottom-0"> 
    
    <div class="relative flex -top-3" >
      <p>Scroll down <br />
        together</p>
      <div id="arrow-index" class="arrow-index fill-[#150c0f] stroke-[#150c0f]">
        <svg viewBox="0 0 24 24">
          <line class="st1" x1="12" y1="2" x2="12" y2="22.5" />
          <line class="st1" x1="12.1" y1="22.4" x2="22.9" y2="11.6" />
          <line class="st1" x1="11.9" y1="22.4" x2="1.1" y2="11.6" />
        </svg>
      </div>
    </div>
    <div class="relative flex text-right">
      <p>
        From &#x1F1E8;&#x1F1F4; Living in &#x1F1E9;&#x1F1EA; 
      </p>
    </div>
  </div>
</section>
