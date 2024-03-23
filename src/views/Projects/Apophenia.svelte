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
 
 let item =8;

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
		<b>VR</b> representation of the Colombian conflict that
		invites users to reflect on the bias existing in city
		dwellers' mindset and media responsibility
		influencing them.
	</p>




	</SectionProjectText>
	<SectionProjectText
	headline="ReSEARCh / 
	INSPIRATION">

	<p>
	Apophenia is inspired by the disconnection between the reality of urban centers
	and rural areas in Colombia. <b>Traditional media</b> play an essential role in perpetuating
	prejudices and perspectives influenced by political interests, sidelining the voices
	of those who experience the <b>harsh realities</b> of the Colombian conflict on a daily basis. 
	</p>

	<br>
	<p>
	To harness the potential of virtual reality to re-create spaces with images and sound,
	an immersive experience was designed to immerse users in the perspectives of those often overlooked. 

	</p>
	

	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image6: ''} imageID={"abstract vs experiencial"}>
			Sound cartography proposed to enhance immersion by appealing to the sounds that inhabit the space
		</ImageBox>
	</div>



	</SectionProjectText>
	<SectionProjectText
	headline="Result">

	<p>
	Apophenia transport the viewer
	to any place in the Colombian countryside where, in the midst of apparent tranquillity,
	a short sequence of ambiguous actions can be observed, leaving it to the viewer's interpretation.
	The viewer is immersed in a rural environment, composed of silhouettes and planes inspired by dioramas,
	and a typical rural soundscape. As they navigate through the space, options appear that they must choose
	to describe what is happening, ultimately forming a narrative of events. This tension between reality and
	biased interpretation become the axis on which this experience proposes to reflect.
	</p>
	

	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image2: ''} imageID={"abstract vs experiencial"}>
			<b>VR view</b>
			Scenario of rural area composed by silhouettes. Grey colours give more neutrality and ambiguity to the scene.
		</ImageBox>
	</div>

	

	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image4: ''} imageID={"abstract vs experiencial"}>
		<b>Normal View</b>
		Every 1 minute, a series of words is displayed. The user has to choose the one that best describes the scenario.
		</ImageBox>
	</div>
	

	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image7: ''} imageID={"abstract vs experiencial"}>
		<b>VR view</b>
		At the end, a headline composed of 5 selected words will reflect the user's preconception about the reality of the scenario.
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
