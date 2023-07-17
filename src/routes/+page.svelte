<script lang="ts">
	import moonDark from '../assets/MoonPy.png';
	import moonLight from '../assets/MoonPyLight.png';
	import ProjectCard from '../lib/ProjectCard.svelte';
	import me from '../assets/Jesualdo.png';
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	export let data;

	storeHighlightJs.set(hljs);
	const toggleMode: Writable<string> = localStorageStore('toggleMode', 'dark');
	function skill(s: string) {
		return `\n        '${s}'`;
	}

	const coreSkills = `
		const traits = 'Highly motivated and innovated!'
let coreSkills = {
	Frontend: [
		'html',
		'css',
		'tailwind',
		'svelte'
	],
	Backend: [
		'js',
		'typescript',
		'SQL',
		'node.js',
		'sveltekit',
		'Vercel',
		'Sendgrid'
		],
	Design: [
		'Figma',
		'Affinity'
	],
	Supporting_Software: [
		'Zendesk Certified'
	]
	}`;
</script>

<div class="flex flex-col justify-center w-full">
	<div class="ml-auto mr-auto flex justify-center flex-col">
		<main class="flex max-w-[1500px] lg:w-full ml-auto mr-auto max-2xl:overflow-hidden">
			<div
				class="mt-auto mb-auto lg:w-1/2 w-full mr-auto ml-auto lg:mr-0 lg:ml-0 max-lg:justify-center max-2xl:max-w-[700px] h-full pl-14 max-lg:pr-14 flex"
			>
				<div class="mt-auto mb-auto max-lg:flex max-lg:justify-center max-lg:flex-col">
					<div class="h-3/6 flex flex-col justify-center max-lg:ml-auto max-lg:mr-auto">
						<h1 class=" text-5xl font-bold max-lg:text-center">Jesualdo Plazola-Corona</h1>
						<p class="text-2xl max-lg:text-center">Full Stack developer</p>
						<div
							class=" w-28 h-28 rounded-full overflow-hidden mt-2 pt-2 variant-ringed-primary max-lg:ml-auto max-lg:mr-auto"
						>
							<img src={me} alt="myself" class="w-auto h-auto" />
						</div>
					</div>
					<div class="mt-10 flex justify-center lg:justify-start">
						<CodeBlock language="js" lineNumbers code={coreSkills} />
					</div>
				</div>
			</div>
			<div class="max-lg:hidden ml-auto max-2xl:-mr-36 mr-auto pt-48">
				<img src={$toggleMode === 'dark' ? moonDark : moonLight} alt="moon" class="scale-150" />
			</div>
		</main>
		<div class="flex flex-col mt-10 pb-24 ml-auto mr-auto">
			<h1 class="h1 ml-auto mr-auto">
				<span
					class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
					>Projects</span
				>
			</h1>
			{#each data.projects as proj}
				<ProjectCard
					side={proj.side}
					name={proj.name}
					site={proj.site}
					picture={proj.picture}
					description={proj.description}
					code={proj.code}
				/>
			{/each}
		</div>
	</div>
</div>
