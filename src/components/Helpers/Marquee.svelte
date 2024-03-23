<script>
    
    export let  textBold;
    export let textItalic;
    export let colorBack;
    let iterations = Array.from({ length: 15 }, (_, index) => index + 1);

    
</script>


<div class= "relative overflow-hidden my-0 marquee  my-[2em] " style:background-color={colorBack}>
    <div class="marquee-inner  text-blackP   uppercase  font-inter  text-xs font-regular  tracking-[0.2em] flex w-fit flex-[auto] flex-row">
        {#each iterations as iteration (iteration)}
            <div class="marquee-part flex items-center font-semibold  shrink-0 px-10 py-0">
                {textBold}&nbsp;&nbsp;<span class=" font-newsreader  font-medium italic"> {textItalic}</span>
            </div>
        {/each}  
    </div>
</div> 



