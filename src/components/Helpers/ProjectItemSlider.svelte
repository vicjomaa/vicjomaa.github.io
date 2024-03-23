<script>
  import { link } from "svelte-routing";

  export let linkPage;
  export let imageURL;
  export let name;
  export let number;
  export let tool;
  export let topic;
  export let award;

</script>

<style>

   /* underline for text buttons */
 .project-slider-name {
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
    background-color: var(--color-whiteP);
  }

  .project-slider-item > a:hover .project-slider-name::after {
    width: 100%;
  }
 
</style>

<div  class="text-whiteP project-slider-item  inline-block w-[116vw] p-[20vw] lg:w-[50vw] lg:p-[10vw] ">
  <a  class="btn" use:link href={linkPage} aria-label=" project {name}">
       <div class="flex flex-col" >
          <div class ="flex flex-row ">
            <div class="  project-slider-number  font-inter font-semibold px-2 text-s   mt-0 "   >
              <p>{number}</p>
            </div>
            <div class=" flex flex-col ">
              <div class=" project-slider-link-img block">
                <img src={imageURL} alt="" />
              </div>
              <div class="flex project-slider-l justify-between flex-row mt-4">
                <div class=" project-slider-name  text-3xl lg:text-3xl font-newsreader   mt-6 lg:my-0  "   >
                  <h2>{name}</h2>
                </div>
                <div class=" flex text-right ">
                  <div class="arrow">
                    <p>&#8599;</p>
                  </div>
                </div>
              </div>
              <div class=" flex flex-col project-slider-tool  text-right font-mulish font-semibold my-4 text-xs "  >
                <p>{tool}</p>
                <span class="  project-slider-topic font-light font-inter my-1  uppercase">{topic}</span>
              </div>
              
            </div>
          </div>
        </div>
    </a>
  </div>