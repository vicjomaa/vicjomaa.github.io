<script>
    export let headline;
    let textContent;
</script>

<style>


	.headline-project{
		flex: 2;
		position: flex;


	}

	.text-project{
		flex:4;
		position: flex;
	
	
	}

  
</style>

<section class=" flex flex-col px-4 lg:px-10 lg:mx-[5%] ">
    <div class="flex flex-col lg:flex-row my-10 text-inter wow fadeInUp"  data-wow-duration="1s">
        <div class="headline-project uppercase font-bold mb-5 text-xs">
            <h3>{headline}</h3>
        </div>
        <div class ="text-project text-s font-regular">
            <p bind:this={textContent} >
                <slot/>
            <p>
        </div>

    </div>
</section>