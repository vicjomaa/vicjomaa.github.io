<script>
    export let dataProject;
</script>

<section class=" header-section w-full flex flex-col  mt-[10em] px-4 lg:px-10 ">
    <div class="flex flex-col my-5  wow fadeInUp"  data-wow-duration="2s">
        <div class="flex flex-row ">
            <div class="  project-number mb-2  font-inter font-semibold px-2 text-xs lg:text-s  mt-auto "   >
                <p>{dataProject != undefined 
                ?  dataProject.number.length === 1 ? `0${dataProject.number}` : dataProject.number
                 :''}</p>
            </div>
            <div class="flex project-l flex-[4] mt-auto">
                <div class=" project-name  text-3xl lg:text-5xl font-newsreader  mt-6 lg:my-0"   >
                    <h2>{dataProject != undefined ? dataProject.name : ''}</h2>
                </div>
            </div>
            <span class=" font-regular mb-2  font-inter text-xs mt-auto text-right  ">{dataProject != undefined ? dataProject.topic: ''}</span>
        </div>
        <hr class="mt-3 mb-10  text-[var(--color-grayP)]">
        <div class=" project-link-img block  h-[500px] lg:h-[900px] overflow-hidden ">
            <img  class=" object-cover h-full w-full" src={dataProject != undefined ? dataProject.image: ''} alt={dataProject != undefined ? dataProject.name : ''} />
        </div>

        <div class="flex flex-row  my-10">
            <div class=" flex w-full flex-col  mb-auto">
                <div class=" flex flex-col  text-left  font-mulish font-regular mt-auto text-xs my-5 "  >
                    <h3>Resources</h3>
                    <p><span class=" font-inter font-bold text-xs ">{dataProject != undefined ? dataProject.tool:''}</p>
                </div>
                <div class=" flex flex-col  text-left  font-mulish font-regular mt-auto text-xs my-5"  >
                    <h3>Mentions</h3>
                    <p><span class=" font-inter font-bold text-s  ">{dataProject != undefined ? dataProject.award:''}</span></p>
                </div>
            </div>

            <div class=" flex w-full flex-col  mb-auto">
                <div class=" flex flex-col  text-left  font-mulish font-regular mt-auto text-xs my-5"  >
                    <h3>Role</h3>
                    <p><span class=" font-inter font-bold text-s ">{dataProject != undefined ? dataProject.role:''}</p>
                </div>
                <div class=" flex flex-col  text-left  font-mulish font-regular mt-auto text-xs my-5"  >
                    <h3>Credits</h3>
                    <p><span class=" font-inter font-bold text-s  ">{dataProject != undefined ? dataProject.credits:''}</span></p>
                </div>
            </div>
        </div>
    </div>
  </section>
