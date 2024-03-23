<script>
  import { Router, Route } from "svelte-routing";
  import { onMount } from "svelte";
  import gsap from "gsap";


  // No Layout Pages
  import Index from "./views/Index.svelte";



 

  export let url = "";

  onMount(() => {

    gsap.config({ nullTargetWarn: false });
 
  })

  
</script>



<Router url="{url}" >
  <!-- no layout pages -->
  <Route path="/" component="{Index}"  />
  <Route path="/home" component="{Index}" />



</Router>
