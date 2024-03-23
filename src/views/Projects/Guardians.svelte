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
 
 let item = 3;

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
	Created by Critertec Educación, it is a <b>transmedia STEAM</b> educational
	project for children and teenagers between <b>6 and 14 years old</b>, educators
	and families. Based on a science fiction narrative based on real scientific
	facts, it invites the audience to explore the mysteries of the universe and
	create digital content to confront an interstellar threat posed by a group of
	villains called Archibios. These villains are the cause of irrational behaviour
	in society and a <b>threat to the world</b> we live in.
	</p>

	</SectionProjectText>
	<SectionProjectText
	headline="ReSEARCh / 
	INSPIRATION">

	<p>
	Guardianes is the culmination of more than two years of intensive research and design, driven by the company's 
	pedagogical model, <b>Conscious Experiential Education®</b>. This innovative project 
	uses emerging technologies such as augmented reality and virtual reality, 
	alongside methodologies such as gamification and design thinking, to create 
	immersive learning experiences for children and young people.
	</p>
	<br>
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image2: ''} imageID={"abstract vs experiencial"}>
			Critertec Educación's experience in implementing educational immersive technologies in public schools. Photos by Critertec Educación.
		</ImageBox>
	</div>
	<br>
	<br>
	<p>
	This project addresses common problems observed in classrooms, such as an 
	<b>anthropocentric worldview</b> among students that leads to detachment from their
	environment and passive engagement in their communities. By promoting a <b>conscious
	exploration</b> and understanding of the world through different disciplines and 
	technological tools, Guardianes aims to empower participants to become proactive 
	stewards of their surroundings, equipped with the skills needed for the 21st century".
	</p>
	<br>
	For more details please visit this <a href="https://www.critertec.com/guardianes-una-experiencia-transmedia/" target="_blank" >
	<span class="underline underline-offset-1 font-bold"> article </span>written by Nelson López and Nataly Opazo.

	<div class="flex">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image6: ''} imageID={"abstract vs experiencial"}>
			<p> Public segmentation by ages and narrative interests. Photos by Critertec Educación
			</p>
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
	<p>
	As members of the organisation who want to save the universe, 
	each group had to use <b>augmented reality</b> to decipher a series of alien
	devices <b>(a maze of cards and a dice)</b> that contained a plan to conquer
	the universe. As the experience progresses, the students face several
	major challenges that include creating digital content, scientific experiments 
	and campaigns to make people <b> more aware</b> of their impact on the planet.
	</p>
	
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image1: ''} imageID={"abstract vs experiencial"}>
			<p> Entry portal to the narrative universe, enabling access to content,
				resource downloads, and mission completion utilizing digital tools.
			</p>
		</ImageBox>
	</div>
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image4: ''} imageID={"abstract vs experiencial"}>
			<b>(Left to right)</b>:
			1. AR app that invites exploration of the world's ecosystem inside the cube. &nbsp;
			2. VR app for the exploration of the solar system. &nbsp;
			
		</ImageBox>
	</div>
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image5: ''} imageID={"abstract vs experiencial"}>
			<b>(Left to right)</b>:
			3. AR app that recovers the history science in the humanity. &nbsp;
			4. AR for exploring galaxies and large celestial bodies. &nbsp;
		</ImageBox>
	</div>

	




	</SectionProjectText>

	<ExternalLinks  dataProject={dataProject}></ExternalLinks>
	<div class=" lg:h-[450px] block overflow-hidden  px-4 lg:px-10  wow fadeInUp"  data-wow-duration="2s">
		<img  class="object-cover w-full" src={dataProject != undefined ? dataProject.image3: ''} alt={dataProject != undefined ? dataProject.name : ''} />
	</div>

	<MoreProjects prevNextProjects={prevNextProjects != undefined ? prevNextProjects : ''}>
	</MoreProjects>

</ProjectLayout>
