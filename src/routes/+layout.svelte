<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { LightSwitch, localStorageStore } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	drawerStore.close();

	const toggleMode: Writable<string> = localStorageStore('toggleMode', 'dark');
</script>

<!-- <body class="max-w-[1920px] ml-auto mr-auto"> -->
<!-- This is the pop up that shows the phone number and email when the menu button on the top right is clicked -->
<Drawer position="right" duration={300} padding=" pl-60">
	<ul class=" list-none pl-2 flex flex-col justify-center">
		<li class=" font-bold underline text-center mt-2 mb-10">Contact Information:</li>

		<li class=" ml-auto mr-auto mb-10">
			<strong>Email:</strong> j.pcorona@gmail.com
		</li>
		<li class=" ml-auto mr-auto mb-10">
			<strong>Phone:</strong> (702) 290-0514
		</li>
	</ul>
</Drawer>
<nav class="ml-4 mr-4 mb-10">
	<!-- We are using grid for mobile devices and flex for anyting over 1024px in width (lg applies flex for anyting over 1024px) -->
	<ul class="grid grid-flow-col grid-cols-12 lg:flex lg:justify-between h-10 mt-2">
		<!-- We are using the rocket from google icons that is imported on the main app.html page -->
		<li class="h-full w-10 scale-125 -rotate-45">
			<span class="material-symbols-outlined"> rocket </span>
		</li>

		<!-- This is the light switch from skelton ui that allows us to shift between light and dark mode (default: dark) -->
		<li class="border place-self-center">
			<LightSwitch
				on:click={() => ($toggleMode === 'dark' ? ($toggleMode = 'light') : ($toggleMode = 'dark'))}
			/>
		</li>

		<!-- Email address and phone number will only show up when the width is larger thatn 1023px -->
		<li class=" max-lg:hidden ml-auto mr-10 mt-auto mb-auto">
			<strong>Email:</strong> j.pcorona@gmail.com
		</li>
		<li class=" max-lg:hidden mt-auto mb-auto">
			<strong>Phone:</strong> (702) 290-0514
		</li>

		<!-- Button will only show when width is lower than 1024px and when clicked, it will show the email and phone number for mobile users -->
		<li
			class="lg:hidden active:scale-95 hover:cursor-pointer col-start-12 col-end-13 place-self-end"
		>
			<button on:click={() => drawerStore.open()} class="material-symbols-outlined"> menu </button>
		</li>
	</ul>
</nav>
<slot />

<!-- </body> -->
