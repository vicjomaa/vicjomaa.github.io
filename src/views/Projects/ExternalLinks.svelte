<script>
    export let dataProject;
</script>

<section class=" w-full text-right mt-[10em] px-4 lg:px-10 ">
    <div class=" flex flex-col   text-1xl mt-auto  my-5"  >
        <h3>Explore more about the project</h3>
        <div class="flex relative  justify-end">
            <a href="{dataProject != undefined ? dataProject.resourcesURL:''} " target="_blank"><span class="btn  btn-u cursor-pointer font-inter  font-bold text-1xl lg:text-2xl  ">{dataProject != undefined ? dataProject.resources:''}</span></a>
            <div class="arrow-index fill-[#150c0f] rotate-[-90deg]  translate-y-2  lg:translate-y-3 stroke-[#150c0f] ">
                <svg   id="arrow-project" viewBox="0 0 24 24" width="12" height="12">
                <line class="st1" x1="12" y1="2" x2="12" y2="22.5" />
                <line class="st1" x1="12.1" y1="22.4" x2="22.9" y2="11.6" />
                <line class="st1" x1="11.9" y1="22.4" x2="1.1" y2="11.6" />
                </svg>
            </div>
        </div>
    </div>
  </section>
