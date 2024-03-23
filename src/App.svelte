<script>
  import { Router, Route } from "svelte-routing";
  import { onMount } from "svelte";
  import gsap from "gsap";


  // No Layout Pages
  import Index from "./views/Index.svelte";
  import About from "./views/About.svelte";
  import Contact from "./views/Contact.svelte";
  import FairGame from "./views/Projects/FairGame.svelte";
  import TheWayOfTheRabbit from "./views/Projects/TheWayOfTheRabbit.svelte";
  import Guardians from "./views/Projects/Guardians.svelte";
  import Creati from "./views/Projects/Creati.svelte";
  import BicentenaryHeroes from "./views/Projects/BicentenaryHeroes.svelte";
  import Nod from "./views/Projects/Nod.svelte";
  import Apophenia  from "./views/Projects/Apophenia.svelte";
  import FinancialExplorers from "./views/Projects/FinancialExplorers.svelte";


 

  export let url = "";

  onMount(() => {
    new WOW().init();
    gsap.config({ nullTargetWarn: false });
 
  })

  
</script>



<Router url="{url}" >
  <!-- no layout pages -->
  <Route path="/" component="{Index}"  />
  <Route path="/home" component="{Index}" />
  <Route path="/contact" component="{Contact}" />
  <Route path="/about" component="{About}" />
  


  <!-- pages with layout -->
  <Route path="/fair-game" component="{FairGame}" />
  <Route path="/the-way-of-the-rabbit" component="{TheWayOfTheRabbit}" />
  <Route path="/guardians-innitiative" component="{Guardians}" />
  <Route path="/bicentenary-heroes" component="{BicentenaryHeroes}" />
  <Route path="/nod" component="{Nod}" />
  <Route path="/creati" component="{Creati}" />
  <Route path="/apophenia" component="{Apophenia}" />
  <Route path="/financial-explorers" component="{FinancialExplorers}"/>
  
 



</Router>
