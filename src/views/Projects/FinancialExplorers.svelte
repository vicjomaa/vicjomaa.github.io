<script>
 import ProjectLayout  from "./ProjectLayout.svelte";
 import { onMount } from "svelte";
 import HeaderProject from "./HeaderProject.svelte";
 import SectionProjectText from "./SectionProjectText.svelte";
 import MoreProjects from "./MoreProjects.svelte";
 import ImageBox from "./ImageBox.svelte";
 import ExternalLinks from "./ExternalLinks.svelte";


 let projectComponent ;
 let dataProject;
 let prevNextProjects;
 
 let item =6;

 onMount(()=>{
	dataProject = projectComponent.getItemInfo(item);
	prevNextProjects = projectComponent.getPrevAndNext(item);
 })

</script>



<ProjectLayout  bind:this={projectComponent}>
	<!-- First section -->
	<HeaderProject dataProject={dataProject}></HeaderProject>
	<SectionProjectText
	headline="Concept">
	<p>

		This is a set of two games aimed to teach financial literacy to young student participants of the <b>3° financial educational
		congress mundo mujer</b>. The first one is a board game that simulates the experience of travelling around the country, and the second
		is digital game thar recreates the experience of investing in a virtual stock market. The games are part of a
		project to bring financial literacy and prepare new generations for the challenges of the future.

	</p>




	</SectionProjectText>
	<SectionProjectText
	headline="ReSEARCh / 
	INSPIRATION">

	<p>
	When developing an educational game, it's important to align it with the educational
	objectives to ensure that it teaches relevant skills or content. As part of the design
	decision, exploration led to an aesthetic that could <b>prioritise the blocks of information</b>
	and visual cues that could facilitate the reading of the information. This led to the
	consideration of flat design as a strategy to focus attention on the most important
	blocks of information, complemented by a pastel colour palette compatible with the
	<b>client's brand guidelines</b>. This was also used as a cue to highlight relevant components
	that maintained the flow of the interaction.
	</p>


	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image1: ''} imageID={"abstract vs experiencial"}>
			Flat characters and skewmorphic elements were used to adress make interaction touchpoints friendly and familiar to the user.
		</ImageBox>
	</div>


	<br>


	</SectionProjectText>
	<SectionProjectText
	headline="Result">

	<p>
	Given that the experience was aimed to the space of  congress, mechanics of serious games that allowed
	match blocks of information with the context were used. Such as mechanics like ike <b>drag and drop</b>, complete
	the sentence, and choose the correct answer, and <b>swiping cards</b> for taking decision. This also considered 
	the background knowledge of the participants, and the time available for the experience.
	</p>


	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image4: ''} imageID={"abstract vs experiencial"}>
			<b>Customization</b>
			Players can select a character, add their name and track their progress using the navigation map.
		</ImageBox>
	</div>
	

	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image3: ''} imageID={"abstract vs experiencial"}>
			<b>Travellers game</b>
			To balance the budget in the trip, players must to take the best decisions by picking options or grouping the best altenatives.
		</ImageBox>
	</div>

	
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image2: ''} imageID={"abstract vs experiencial"}>
			<b>Stock Market</b>
			Base on a context like the news, technical analysis of risk players could take decision by swiping their money.
		</ImageBox>
	</div>

	
	



	</SectionProjectText>

	<ExternalLinks  dataProject={dataProject}></ExternalLinks>
	<div class=" lg:h-[450px] block overflow-hidden  px-4 lg:px-10  wow fadeInUp"  data-wow-duration="2s">
		<img  class="object-cover w-full" src={dataProject != undefined ? dataProject.image5: ''} alt={dataProject != undefined ? dataProject.name : ''} />
	</div>

	<MoreProjects prevNextProjects={prevNextProjects != undefined ? prevNextProjects : ''}>
	</MoreProjects>

</ProjectLayout>
