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
 
 let item = 4;

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
	<b>CREATI</b> is an Android augmented reality application where videos, 
	audios, 3d models, and photos can merge into real life on amazing 
	and customizable compositions. Public school conditions like poor connectivity or
	antiquated equipment aren't an impediment to
	create with <b>CREATI</b>. 
	</p>

	</SectionProjectText>
	<SectionProjectText
	headline="ReSEARCh / 
	INSPIRATION">

	<p>
	As a part of the <b>GUARDIANES</b> project,
	this tool allows users to overcome their status of tech consumers
	and empowers them as a creator of digital content. This idea started
	in 2018 in a conversation with my developer partner Milton Mahecha.
	Our experiences teaching at schools and as developers show us how conditions
	like connectivity, antiquated equipment, or software licenses, impossibilities
	perform activities in some public schools. Keeping this in mind, we decided to
	start investing personal time on this project, and now it has become a reliable tool for the company.
	</p>
	<br>
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image2: ''} imageID={"abstract vs experiencial"}>
			Critertec Educación's experience in implementing educational immersive technologies in public schools. Photos by Critertec Educación.
		</ImageBox>
	</div>
	

	</SectionProjectText>

	<SectionProjectText
	headline="Result">

	<p>
	As part of the transmedia component of the project, multiple entry points
	into the universe were created to cater for <b>different audiences</b>. To effectively
	engage this wide range of audiences, different narratives were developed, all
	of which revolved around students becoming members of the <b>Interspatial Technological Agency (ITA)</b>.
	</p>
	<br>
	
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image2: ''} imageID={"abstract vs experiencial"}>
			<b>(Left to right)</b>:
			1. A friendly tutorial starts with a primary mission.&nbsp;
			2. The app identifies as targets a cube and a set of cards.&nbsp;
			
		</ImageBox>
	</div>
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image3: ''} imageID={"abstract vs experiencial"}>
			<b>(Left to right)</b>:
			3. Customisable rotation, scale and position of content linked to the target. &nbsp;
			4. Touch and oysticks create an interaction friendly for everyone. &nbsp;
		</ImageBox>
	</div>

	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image3: ''} imageID={"abstract vs experiencial"}>
			<b>(Left to right)</b>:
			5. Users can browse any content allocated in the device. &nbsp;
			6. 3d models, images, and videos can be linked to create amazing compositions. &nbsp;
		</ImageBox>
	</div>

	




	</SectionProjectText>

	<ExternalLinks  dataProject={dataProject}></ExternalLinks>
	<div class=" lg:h-[450px] block overflow-hidden  px-4 lg:px-10  wow fadeInUp"  data-wow-duration="2s">
		<img  class="object-cover w-full" src={dataProject != undefined ? dataProject.image4: ''} alt={dataProject != undefined ? dataProject.name : ''} />
	</div>

	<MoreProjects prevNextProjects={prevNextProjects != undefined ? prevNextProjects : ''}>
	</MoreProjects>

</ProjectLayout>
