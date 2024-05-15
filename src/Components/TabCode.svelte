<script>
  import { onMount } from 'svelte';
  import { parsedObjectStore } from './storeData.js';
  
 

  /* variables for collecting variable to manipulate */

  onMount(async () => {
    
  });


  function copyAllCode() {
    const codeElements = document.querySelectorAll('#example-code pre code');
    let copiedCode = '';

    codeElements.forEach((codeElement, index) => {
      const codeText = codeElement.textContent.trim();
      copiedCode += `// ${codeText}\n`;
    });

    navigator.clipboard.writeText(copiedCode).then(() => {
      alert('Code copied to clipboard!');
    }).catch((error) => {
      console.error('Failed to copy code: ', error);
    });
  }


</script>


<div class="divider label-text text-s">How to use it</div>

<div class="menu-section relative ">
  <div class="menu-section-bg"></div>
  <div class="flex  lg:flex-row flex-col   p-2">
      <div class="label font-bold">
            <span class="label-text">Example code</span>
        </div>
        <div class=" w-full ">
          <div class="code-head flex text-xs  justify-between  items-center p-3 bg-gray-800">
            <span>Javascript</span>
          <div class="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>
            <!--<button class="btn btn-xs btn-ghost" on:click={copyAllCode}>Copy Code</button>-->
          </div>
          
          </div>
          <div id="example-code" class="code-section bg-black">
            <pre data-prefix="1" class="whitespace-pre-wrap break-words "><code>// Add the extension on top</code></pre> 
            <pre data-prefix="2" class="whitespace-pre-wrap break-words text-lime-500"><code>await loadScript("https://vicjomaa.github.io/addIframe.js")</code></pre>
            <pre data-prefix="4" class="whitespace-pre-wrap break-words"><code>// Add a variable</code></pre> 
            <pre data-prefix="5" class="whitespace-pre-wrap break-words"><code>// Map analog pin 0, with values ranging from 1 to 8</code></pre> 
            <pre data-prefix="6" class="whitespace-pre-wrap break-words text-lime-500"><code>var edges = new sCC(0, 1, 8)</code></pre> 
            <pre data-prefix="7" class="whitespace-pre-wrap break-words"><code>// Update edges in real time, by using the () => </code></pre> 
            <pre data-prefix="8" class="whitespace-pre-wrap break-words text-lime-500"><code>shape(() => edges).repeat(3.0, 3.0, 0.0, 0.0).out()</code></pre>
        </div>
         
        </div>
  </div>
</div>
  

   

