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
 
 let item = 7;

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
		<b>NOD</b> is an acronym for Neural Optimal Decisor, a subcomponent 
		of a big artificial supreme entity in charge of monitoring
		and analyzing massive amounts of data from people who agreed 
		to delegate personal life to this ubiquitous organism.
	</p>

	<br>

	<p>
		This <b>Artificial Intelligence</b> takes advantage of every device 
		connected to the vast network, and it obtains real-time biometric
		and social information from users. People do not need to handle 
		<b>struggle situations</b> because data collected by each NOD will be a 
		valuable asset to optimize human decisions by them. NODs will enhance people’s 
		lives supported by reliable information and <b>probabilistic evidence.</b>
	</p>


	</SectionProjectText>
	<SectionProjectText
	headline="ReSEARCh / 
	INSPIRATION">

	<p>
		Inspired by the pandemic and the pervasive influence of our modern digital
		devices, which collect <b>vast amounts of data shaping</b> our decision-making processes 
		often imperceptibly, the game revolves around a series of questions. It prompts
		players to consider the <b>spectrum of choices available</b> to them, pondering whether 
		algorithms define our identity and whether we are mere extensions of a digital 
		monoculture. 
	</p>
	<br>
	<p>
		Ultimately, it raises the existential question of whether we really are
		in control of our lives, or whether they are <b>secretly or voluntary</b> guided by
		influence of data presented to us in seemingly innocuous and casual ways.
	</p>



	</SectionProjectText>
	<SectionProjectText
	headline="Result">

	
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image5: ''} imageID={"abstract vs experiencial"}>
			<b>(Step)</b>:
			1.The game begins in an infinite space, characterised mainly by George and his gadgets.
		</ImageBox>
	</div>

	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image1: ''} imageID={"abstract vs experiencial"}>
			<b>(Step)</b>:
			2.When a device is selected a menu with the apps and their status is displayed.
		</ImageBox>
	</div>

	<div class="flex flex-col lg:flex-row">
			<ImageBox imageURL={dataProject != undefined ? dataProject.image3: ''} imageID={"abstract vs experiencial"}>
			</ImageBox>
			<ImageBox imageURL={dataProject != undefined ? dataProject.image6: ''} imageID={"abstract vs experiencial"}>
			</ImageBox>
	</div>
	<div class="project-ref text-xs mt-2">
		<b>(Step)</b>:
		3. Sports, dating, chatting, the whole universe of applications and their data are at the player's fingertips.
		
	</div>


	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image1: ''} imageID={"abstract vs experiencial"}>
			<b>(Step)</b>:
			2.When a device is selected a menu with the apps and their status is displayed.
		</ImageBox>
	</div>


	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image4: ''} imageID={"abstract vs experiencial"}>
			<p>The player must choose an action for George that will improve his wellbeing based on the data and insights.</p>
		</ImageBox>
	</div>
	
	



	</SectionProjectText>

	<ExternalLinks  dataProject={dataProject}></ExternalLinks>
	<div class=" lg:h-[450px]  overflow-hidden  px-4 lg:px-10  wow fadeInUp"  data-wow-duration="2s">
		<video class="w-full block  overflow-hidden  py-2 wow fadeInUp" data-wow-duration="2s" loop autoplay muted>
			<source src={dataProject != undefined ? dataProject.video1: ''} type="video/mp4">
		</video>
	</div>

	<MoreProjects prevNextProjects={prevNextProjects != undefined ? prevNextProjects : ''}>
	</MoreProjects>

</ProjectLayout>
