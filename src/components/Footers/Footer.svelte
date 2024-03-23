<script>
  import { link } from "svelte-routing";
  import {optionsSocial } from '../../assets/scripts/menuOptions.js'
  // make dynamic date to be added to footer
  let date = new Date().getFullYear();
  export let colorBack = "#ED965B";
 
</script>

<footer class="relative pt-2 pb-6">
    <div class=" text-right text-blackP mr-4 lg:mr-10 font-newsreader">
      <div class="  text-5xl lg:text-6xl h2 wow fadeInUp" data-wow-duration="2s">
            Lets<span class="italic"> &nbsp;collaborate</span> <br>
            <span class="font-bold"> together</span>
      </div>  
    </div>
    <div class= "my-10 h-5" style:background-color={colorBack} >
    </div>
    <div class=" reveal font-inter mt-20 lg:mt-0 ml-4 lg:ml-10 leading-2 tracking-normal uppercase font-regular text-left  text-xs px-2 wow fadeInUp" data-wow-duration="2s">
      <div class="h2">
      Amaze for explore the next journey &nbsp; <br>
      and continue bringing the best <br>
      <span class="font-bold"> human side of tecnology</span>.
      </div>
  </div>
    <div class=" my-10 text-right mr-4 lg:mr-10 font-inter"> 
        {#each Object.entries(optionsSocial) as [key, value] }
            <div class=" h-[30px]  ">
            <a class=" btn text-sm font-inter font-medium btn-u capitalized "
            use:link
            href={value.link}
            >{key}</a>
            </div>
        {/each}
    </div>
  
   



<div class=" font-inter absolute w-full -translate-x-2/4 -translate-y-2/4 text-xs flex justify-between  tracking-normal  font-medium  px-2 lg:px-10    left-2/4 bottom-0"> 
<div class="relative ">
    © {date} All Rights Reserved
</div>
<div class="relative">
    <p>
    Designed by 
    <a
        href="https://www.linkedin.com/in/victor-mahecha/"
        class="btn btn-u "
    >
        vicjomaa
    </a>
    </p>
</div>
</div>

</footer>
