<script>


  export let headline;
  export let place;
  export let date;
  let description;


</script>

<style>
 

</style>


<div class="item-about my-4 font-mulish">
  <div class="text-xs font-bold ">
        <p>{headline}</p>
  </div>
  <div class="text-xs ">
      <p>{place}</p>
  </div>
  <div class="text-xs italic font-light" >
    <main bind:this={description} >
      <slot/>
    </main>
  </div>
  <div class="text-xs font-inter " >
      <p>{date}</p>
  </div>

</div>
