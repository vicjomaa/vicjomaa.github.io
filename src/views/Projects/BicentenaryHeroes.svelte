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
 
 let item = 5;

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
	Bicentenary Heroes is a decision-making game set in the 19th century, 
	a crucial period in Colombia's independence process. In a group or alone,
	the user plays the role of a <b>libertarian army member</b> in charge of achieving
	Colombia's elusive quest for freedom. Each mission, inspired by the real-life path
	to independence, presents players with challenging choices related to 4 themes.
	If one of these components is <b>out of balance</b>, the game will progressively lead
	the player to an uncertain end.
	</p>
	<br>
	<p>
	Along the way, the user can share experiences and bits of advice with famous
	historical characters related to the indigenous communities, pro-independence
	foreign collaborators, and Afro-communities, all of which are essential in the
	independence race.
	</p>


	</SectionProjectText>

	
	<SectionProjectText
	headline="ReSEARCh / 
	INSPIRATION">

	<p>The <b>Ministry of Education </b> and announced a call for the design of 
	educational predagogical tools to conmemorate the <b>200th anniversary of Colombia's 
	independence</b>. Critertec Educación in partnership with Microsoft Education Colombia
	proposed an interactive game tailored for be implemented in whole country.
   </p>
   <br>
   <p>
	This proposal mainly took into account the operational constraints
	in <b>remote areas</b>, such as connectivity problems, limited number of
	computers and also the obsolete state of some of them.
   </p>


	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image5: ''} imageID={"abstract vs experiencial"}>
			<p> Screenshot of the Ministry of Education's official page announcing the game in the 2019.
			</p>
		</ImageBox>
	</div>

	<br>
	<p>
	To create the narrative, a team of experts worked with designers to 
	reconstruct historical events, drawing inspiration from the game <b>'Reigns'</b>.
	In this game, decisions are made by swiping cards to the <b>left or right</b>, 
	thus changing the future of the character. In this way, a number of
	different storylines, some with good and bad outcomes for the Independence
	Movement, were developed by referencing <b>historical events and real-life characters</b>.
	</p>


	</SectionProjectText>

	<SectionProjectText
	headline="Result">
	
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image2: ''} imageID={"abstract vs experiencial"}>
			<b>(Step)</b>:
			1. The main map tracks the user's progress along with each mission is solved. Unblocking content and medals to enhance the experience. &nbsp;
			2. Dialogues with different characters help to understand the missions and keep the chronological order. &nbsp;
			
		</ImageBox>
	</div>
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image3: ''} imageID={"abstract vs experiencial"}>
			<b>(Step)</b>:
			3. A card rotates left or right to represent a decision. Negative or positive results change the value and colour of the components. &nbsp;
			4. Medals and objectives are unlocked with each mission. &nbsp;
		</ImageBox>
	</div>
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image4: ''} imageID={"abstract vs experiencial"}>
			<p> Levels require a minimum score to unlock content and the progress password.
			</p>
		</ImageBox>
	</div>


	</SectionProjectText>

	<ExternalLinks  dataProject={dataProject}></ExternalLinks>
	<div class=" lg:h-[450px] block  overflow-hidden  px-4 lg:px-10  wow fadeInUp"  data-wow-duration="2s">
		<img  class="object-cover w-full" src={dataProject != undefined ? dataProject.image6: ''} alt={dataProject != undefined ? dataProject.name : ''} />
	</div>

	<MoreProjects prevNextProjects={prevNextProjects != undefined ? prevNextProjects : ''}>
	</MoreProjects>

</ProjectLayout>
