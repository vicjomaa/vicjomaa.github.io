<script>
  import { onMount } from "svelte";
  import { parsedObjectStore } from "./storeData.js";

  /* variables for collecting variable to manipulate */

  onMount(async () => {});


</script>

<div class="divider label-text text-s">How to use it</div>

<div class="menu-section relative">
  <div class="menu-section-bg"></div>
  <div class="flex lg:flex-row flex-col p-2">
    <div class="label font-bold">
      <span class="label-text">1. Create a variable </span>
    </div>
    <div class=" w-full">
      <div id="example-code" class="code-section bg-black">
       
        <pre data-prefix="3" class="whitespace-pre-wrap break-words"><code
            >// Create a variable to collect data from channel 0 </code></pre>
        <pre
          data-prefix="4"
          class="whitespace-pre-wrap break-words text-lime-500"><code
            >var edges = new sCC(0)</code
          ></pre>
  
      </div>
    </div>
  
    <div class="label font-bold">
      <span class="label-text">2. Use the variable </span>
    </div>
    <div class=" w-full">
      <div id="example-code" class="code-section bg-black">
        <!--
              await loadScript("https://localhost:5173/docs/addIframe.js")
              await loadScript("https://vicjomaa.github.io/addIframe.js")
              var edges = new sCC(0)
              var rep = new sCC(1)
              shape(() => edges.val()).repeat(() => rep.val(), 3.0, 0.0, 0.0).out()
            -->
        <pre data-prefix="3" class="whitespace-pre-wrap break-words"><code
            >// Use the value from the sensor for channel 0 </code></pre>
    
        <pre
          data-prefix="7"
          class="whitespace-pre-wrap break-words text-lime-500"><code
            >() => edges.val()</code
          ></pre>
      </div>
    </div>
  </div>
  <div class="flex lg:flex-row flex-col p-2">
    <div class="label font-bold">
      <span class="label-text">Helper functions</span>
    </div>
    <div class=" w-full">
      <div id="example-code" class="code-section bg-black">
        <pre data-prefix="1" class="whitespace-pre-wrap break-words"><code
            >// For map the channel value instead of .val() use .map(min,max) </code></pre>
        <pre
          data-prefix="2"
          class="whitespace-pre-wrap break-words text-lime-500"><code>() => edges.map(outMin, outMax) </code></pre>
      </div>
    </div>
  </div>
</div>
