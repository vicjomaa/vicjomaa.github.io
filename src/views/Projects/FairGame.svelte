<script>
 import ProjectLayout  from "./ProjectLayout.svelte";
 import { onMount } from "svelte";
 import HeaderProject from "./HeaderProject.svelte";
 import SectionProjectText from "./SectionProjectText.svelte";
 import MoreProjects from "./MoreProjects.svelte";
 import ImageBox from "./ImageBox.svelte"
 import ExternalLinks from "./ExternalLinks.svelte";


 let projectComponent ;
 let dataProject;
 let prevNextProjects;
 
 let item = 1;

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
	"A Fair Game" explores physical data representations by
	moving beyond visual experiences and incorporating embodied interaction to 
	enhance data insight. This project introduces a <b>narrative sensification</b> through a
	two-player horse race installation that symbolizes passport power. Participants 
	influence their horse´s movement by pulling on a rope, and the speed is determined
	by a randomly drawn high- or low-ranking passport. This dynamic creates varying levels 
	of physical effort required to win the race.

	</SectionProjectText>
	<SectionProjectText
	headline="ReSEARCh / 
	INSPIRATION">
	<p>"Passport ranking is one of several topics that perpetuate persistent narratives 
	fostering global inequality between <b>'developing'</b> and <b>'developed'</b> countries. The
	notion of certain passports <a href="https://www.henleyglobal.com/passport-index/ranking" target="_blank" > <span class="underline underline-offset-1 font-bold">
	(Henley Passport Index 2023-4)</span></a> gaining more access than
	others highlights an existing inequity that conditions people's access to education, jobs, 
	and the advantages of free mobility. Because the problem depends on individual experiences, 
	it is intricately woven with multiple actors and causes, making it a challenging 'wicked problem'
	to address and understand. </p>

	<br>

	<p>"A Fair Game" aims to explore how data interpretation through sensification can contribute 
	to a better understanding of <b>complex issues</b>, while identifying valuable elements that enhance
	the people's data experience."</p>
	</SectionProjectText>
	<SectionProjectText
	headline="PROTOTIPE
	SKETCH">
	As a metaphor for the <b>race of life</b>, the design draws inspiration from horse racing arcade games.
	The two-player modality is essential to contrast the power of the passport, reflected in the speed
	of the horse going up. To activate the horses, each track has a wheel with a pulley that triggers
	movement depending on the represented passport. Powerful passports result in faster horse movements
	compared to weaker ones.

	<div class="flex flex-col lg:flex-row items-baseline">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image5: ''}  imageID={"img6"}>
		</ImageBox>
		
	</div>
	<div class="project-ref text-xs mt-2">
		<p> Modalities explored to map passport ranking into physical effort.
		</p>
	</div>
	</SectionProjectText>
	<SectionProjectText
	headline="Result">
	<div class="flex flex-row">

	<div class="flex flex-col">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image2: ''}  imageID={"step1"}>
			<b>(Left to right)</b>:
			1. Draw a passport. &nbsp;
			2. Scan it to check-in. &nbsp;
			3. Take position on the pulley aligned to the horse rail.
		
		</ImageBox>
	
		<ImageBox imageURL={dataProject != undefined ? dataProject.image3: ''} imageID={"step2"}>
			<b>(Left to right)</b>:
			4. Pull the pulley. &nbsp;
			5. The horse moves up. &nbsp;
			6. The winner reaches the top.
		</ImageBox>

	</SectionProjectText>


	<ExternalLinks  dataProject={dataProject}></ExternalLinks>
	<div class=" project-link-img   px-4 lg:px-10  wow fadeInUp"  data-wow-duration="2s">
		<img src={dataProject != undefined ? dataProject.image4: ''} alt={dataProject != undefined ? dataProject.name : ''} />
	</div>


	<MoreProjects prevNextProjects={prevNextProjects != undefined ? prevNextProjects : ''}>
	</MoreProjects>

</ProjectLayout>
