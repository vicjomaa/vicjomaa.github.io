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
 
 let item = 2;

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
	An immersive experience to introduce the principles of <b>quantum mechanics</b> to <b>non-academic audiences</b>, inspired by Lewis Carroll's Alice in Wonderland and Robert Gilmore's Alice in Quantumland.


	</SectionProjectText>
	<SectionProjectText
	headline="ReSEARCh / 
	INSPIRATION">

	

	<p>Inspire by my previous work at  <a href="https://goa.uniandes.edu.co/index.php/es/" target="_blank" > <span class="underline underline-offset-1 font-bold">Optical Research
    Group of Los Andes (GOA) </span></a> . I planned new forms of connecting the academic community
	and the general public with taboo topics such as quantum mechanics. Users with and without notions of physics were interviewed, each one with a particular set of
	questions. The first group of three physicistsevaluated the most suitable media for divulgation
	and the second group of three non-scientific given valuable feed about their previous experiences
	approaching physics topics. </p>

	<br>
	<p>These insights collect in this experience were crossed
	by state of the art collection on public awareness of
	sciences, narratives about divulgation, an art
	experience inspired by science.</p>
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image6: ''} imageID={"abstract vs experiencial"}>
			<p> Image that represent the language of abstraction vs experiments perform by <b>GOA</b>
			</p>
		</ImageBox>
	</div>

	</SectionProjectText>
	<SectionProjectText
	headline="PROTOTIPE
	SKETCH">
	<p>The installation uses a projection as a <b> portal</b> that
	connects the everyday and quantum worlds. This
	audiovisual content is controlled by a book divided
	into four pages, whose texts describe a series of
	instructions written as rimes to follow a white rabbit.</p>

	<br>

	<p>The journey following a white rabbit takes as a
	reference to the book Alice in Quantum Land,
	written by the physicist Robert Gilmore. This book
	adapted Lewis Carroll's story, in a world where
	Alicia lives a series of adventures ruled by the laws of
	quantum mechanics.</p>





	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image7: ''} imageID={"Setup"}>
			<b>1:</b> A Kinects renders the player into the portal and track their positions &nbsp;
			<b>2:</b> A book with hallsensors control the navigation through 4 different levels &nbsp;
			<b>3:</b> The screen simulates a portal that disrupts reality &nbsp;
			<b>4:</b> The quantum rabbit properties depens on the page opened, as well as the visuals in the space &nbsp;

		</ImageBox>		
	</div>

	</SectionProjectText>
	<SectionProjectText
	headline="Result">
	<div class="flex  flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image: ''}  imageID={"step1"}></ImageBox>
	    <ImageBox imageURL={dataProject != undefined ? dataProject.image4: ''}  imageID={"step2"}></ImageBox>
	</div>
	<div class="project-ref text-xs mt-2">
		<b>(Steps)</b>
			1. The closed book represents the intro. &nbsp;
			2. The second page shows a granulate forest representing
			a quantified world. &nbsp;
	</div> 

	<div class="flex  flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image1: ''}  imageID={"step4"}></ImageBox>
	    <ImageBox imageURL={dataProject != undefined ? dataProject.image3: ''}  imageID={"step5"}></ImageBox>
	</div>
	<div class="project-ref text-xs mt-2">
		<b>(Steps)</b>
			3. The player tries to catch the rabbit on the third page,
			but it disappears by the uncertainty principle. &nbsp;
			4. The fourth page duplicates the player under the
			wave-particle principle. But, again, it is impossible to
			catch the rabbit. &nbsp;
	</div> 

	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image5: ''} imageID={"last step"}>
			<b>(Steps)</b>
			 If the player reaches the end, they can
				catch the rabbit because all are in the
				classic world.
			
		</ImageBox>
	</div>




	</SectionProjectText>
	<ExternalLinks  dataProject={dataProject}></ExternalLinks>
	<div class=" lg:h-[450px] block  overflow-hidden  px-4 lg:px-10  wow fadeInUp"  data-wow-duration="2s">
		<img  class="object-cover w-full" src={dataProject != undefined ? dataProject.image2: ''} alt={dataProject != undefined ? dataProject.name : ''} />
	</div>

	<MoreProjects prevNextProjects={prevNextProjects != undefined ? prevNextProjects : ''}>
	</MoreProjects>

</ProjectLayout>
