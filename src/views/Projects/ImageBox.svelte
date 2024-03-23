<script>
    export let imageURL;
    let description;
    export let imageID;
</script>


<style>

</style>


<div class="flex flex-col pt-10 project-img" id={imageID}>
    <img  src={imageURL} alt={description} />
    <div class="project-ref text-xs mt-2">
        <p bind:this={description} >
            <slot/>
        <p>
    </div>
</div>