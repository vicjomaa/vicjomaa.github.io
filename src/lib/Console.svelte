<script>
  import { onMount } from 'svelte';
  import TabConnection from '../Components/TabConnection.svelte';
  import TabPlayground from '../Components/TabPlayground.svelte';
  import TabCode from '../Components/TabCode.svelte';
 

  // List of tab items with labels, values and assigned components
  export let items = [
    { label: "Code",
    value: 1,
    component: TabCode,
    d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
        { label: "Connect",
    value: 2,
    component: TabConnection,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    { label: "Play",
    value: 3,
    component: TabPlayground,
    d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    
  ];

 
    export let activeTabValue = 1;

    const handleClick = tabValue => () => (activeTabValue = tabValue);


  onMount(async () => {

    const notSupported = document.getElementById('notSupported');
    notSupported.classList.toggle('hidden', 'serial' in navigator);
    
  });

</script>

  <div class="menu-section relative ">
    <div class="menu-section-bg"></div>
    <div class="menu-header text-lg"> HYDRA OSC</div>
    <div role="tablist" class="tabs tabs-boxed p-0 ">
      {#each items as item}
        <a  on:click={handleClick(item.value)} role="tab" class="tab text-center  !rounded-none {activeTabValue === item.value ? 'tab-active' : ''}">
          <!--<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.d} /></svg>-->
          <span >{item.label}</span> 
        </a>
      {/each}
    </div>
  </div>


  {#each items as item}
  <div class="box" style="{activeTabValue === item.value ? '' : 'display: none;'}">
      <svelte:component this={item.component}/>
    </div>
  {/each}

  


