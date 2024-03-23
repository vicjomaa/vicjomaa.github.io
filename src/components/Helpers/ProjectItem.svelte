<script>
  import { link } from "svelte-routing";

  export let linkPage;
  export let imageURL;
  export let name;
  export let number;
  export let tool;
  export let topic;
  export let award;
  export let id;

</script>

<style>
 
.project-link {
  width: 100%;
  display: flex;
  justify-content: space-between;
}


.project-item{
  border-bottom:  solid 1px;
  border-color:  rgba(0, 0, 0, 0.2) ;

}


.project-link .project-link-img {
  margin-right: 1em;
  width: 100%;
  height: 200px;
  overflow: hidden;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}



.project-link .project-link-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}



.project-link-bg{
    width: 100%;
    height: 0%;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    position: absolute;
    bottom:0;
    left: 0%;
    right: 0%;
    background: rgba(241, 237, 232, 0.2);
    backdrop-filter: blur(2px); 
    -webkit-backdrop-filter: blur(2px);
}


  
  .project-item:hover .project-name ::after {
    width: 0%;
  }



</style>

<div  class="text-blackP project-item relative" id="{id}">
  <a  use:link href={linkPage} aria-label=" project {name}">   
        <div class="  lg:h-[110px] project-link btn  px-2 lg:px-10   wow fadeInUp  py-4 "  data-wow-duration="2s">
        <div class="flex flex-col lg:flex-row w-full" >
          <span class=" hidden project-topic font-regular italic  font-inter text-xs my-1 text-right lg:hidden ">{topic}</span>
          <div class ="flex flex-row w-full">
            <div class="  project-number  font-inter font-semibold px-2 text-s lg:text-xs  mt-0 lg:mt-auto "   >
              <p>{number}</p>
            </div>
            <div class=" flex w-full flex-col lg:flex-row ">
              <div class=" project-link-img block lg:hidden">
                <img src={imageURL} alt="" />
              </div>
              <div class="flex project-l flex-[4] mt-auto">
                <div class=" project-name  text-3xl lg:text-3xl font-newsreader   mt-6 lg:my-0 lg:!leading-5 "   >
                  <h2>{name}</h2>
                </div>
              </div>
              <div class=" flex flex-col project-tool flex-[2]  text-left lg:text-right font-mulish font-semibold mt-auto text-xs "  >
                <p>{tool}</p>
                <span class="  project-topic font-light font-inter   uppercase">{award}</span>
              </div>
              <div class=" flex-[0.2] text-right project-dir ">
                <div class="arrow">
                  <p>&#8599;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" z-[-1] project-link-bg pointer-events-none bg-whiteP">
      </div>
    </a>
  </div>
