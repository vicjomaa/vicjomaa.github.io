<script>
    import { link } from "svelte-routing";
    export let prevNextProjects;
</script>

<style>

 /* underline for text buttons */
 .project-slider-name{
    position: relative;
 }
 .project-slider-name::after{
    position: absolute;
    content: "";
    display: block;
    top: 100%;
    left: 0;
    transform: translate(0, -50%);
    width: 0%;
    height: 1px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: var(--color-blackP);
  }

  .more-projects:hover .project-slider-name::after {
    width: 100%;
  }
  

</style>


<section class=" flex flex-col my-32 lg:my-56 px-4 lg:px-10 wow fadeInUp"  data-wow-duration="2s">
    <div class="flex flex-row ">
        <div class="flex project-l flex-[4] mt-auto">
            <div class=" project-name  text-4xl font-newsreader   mt-6 lg:my-0 !leading-5"   >
                <h2>More projects</h2>
            </div>
        </div>
    </div>
    <hr class="mt-5 mb-10 text-[var(--color-grayP)]">

    <div class=" flex  flex-col lg:flex-row ">
        {#each prevNextProjects as value, index }
            <div  class="text-blackP project-slider-more py-10 lg:py-10 inline-block {index==0 ? 'lg:pr-10':'lg:pl-10'} ">
                <a  class=" btn more-projects" use:link href={value.link} aria-label=" project {value.name}">
                    <div class="flex flex-col " >       
                            <div class="  max-h-[350px]  overflow-hidden ">
                            <img class="object-cover w-full h-full" src={value.image} alt="" />
                            </div>
                            <div class="flex project-slider-l justify-between  flex-row mt-4">
                                <div class="flex flex-row ">
                                    <div class="  font-inter font-semibold pr-2 text-s   mt-0 "  >
                                        <p>{ value.number.length === 1 ? `0${value.number}` : value.number }</p>
                                    </div>
                                    <div class=" project-slider-name  text-3xl  font-newsreader   lg:my-0  "   >
                                        <h2>{value.name}</h2>
                                    </div>
                                </div>
                                <div class=" flex text-right ">
                                    <div class="arrow">
                                    <p>&#8599;</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </a>
            </div>
        {/each}

    </div>
    
</section>