<script lang="ts">
	export let name: string;
	export let site: string;
	export let picture: any;
	export let description: string;
	export let code: string[];
	export let side: 'Left' | 'Right'; //Determines if the text will be on the left side of the image or the right side.
</script>

<div
	class="rounded-md w-5/6 max-w-[1800px] text-center p-4 flex flex-col justify-between ml-auto mr-auto mt-10 variant-glass-secondary"
>
	<!-- This is the title and the link box icon at the top of the card -->
	<div class="flex justify-between">
		<div />
		<h3 class="font-bold text-center text-xl">{name}</h3>
		<div>
			<a href={site} target="_blank" class=" hover:cursor-pointer"
				><span class="material-symbols-outlined"> open_in_new </span></a
			>
		</div>
	</div>

	<!-- This is the card that will show up for mobile users -->
	<div class="lg:hidden mt-4">
		<!-- Image of the project -->
		<div class="w-full flex justify-center">
			<div class="w-5/6">
				<a href={site} target="_blank" class="hover:cursor-pointer">
					<img src={picture} alt="altText" class="border-2 rounded-lg" />
				</a>
			</div>
		</div>

		<!-- Description text for the project -->
		<div class="pl-2 pr-2 mt-4">
			<p class="text-center">
				<strong>Description:</strong>{description}
			</p>
			<!-- List of stack used for this project -->
			<div class="mt-5 font-bold flex flex-wrap justify-center">
				{#each code as x, i}
					<div>&nbsp;{x}&nbsp;</div>
					{#if i !== code.length - 1}
						<div>|</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<!-- Here are the cards that will show up on the website or anything over 1023px -->
	<div class="flex mt-4 mb-4 max-lg:hidden">
		<!-- When the card is passed in, it must be set with the option of left or right. The code below styles the cards appropriately depending on which side the description will be assigned to. -->
		{#if side === 'Left'}
			<!-- Description text for the project -->
			<div class="w-3/5 mt-auto mb-auto">
				<p class="text-start">
					<strong class="text-start font-bold">Description:</strong>
					{description}
				</p>
				<!-- List of stack used for this project -->
				<div class="mt-5 text-start font-bold flex justify-start">
					{#each code as x, i}
						<div>&nbsp;{x}&nbsp;</div>
						{#if i !== code.length - 1}
							<div>|</div>
						{/if}
					{/each}
				</div>
			</div>
			<!-- Image of the project -->
			<div class="w-2/5 flex justify-center mt-auto mb-auto">
				<div class="w-5/6">
					<a href={site} target="_blank" class="hover:cursor-pointer">
						<img src={picture} alt="altText" class="border-2 rounded-lg" />
					</a>
				</div>
			</div>
		{:else if side === 'Right'}
			<!-- Image of the project -->
			<div class="w-2/5 flex justify-center mt-auto mb-auto">
				<div class="w-5/6">
					<a href={site} target="_blank" class="hover:cursor-pointer">
						<img src={picture} alt="altText" class="border-2 rounded-lg" />
					</a>
				</div>
			</div>
			<!-- Description text for the project -->
			<div class="w-3/5 mt-auto mb-auto">
				<p class="text-start">
					<strong class="text-start font-bold">Description:</strong>
					{description}
				</p>
				<!-- List of stack used for this project -->
				<div class="mt-5 text-start font-bold flex justify-end">
					{#each code as x, i}
						<div>&nbsp;{x}&nbsp;</div>
						{#if i !== code.length - 1}
							<div>|</div>
						{/if}
					{/each}
				</div>
			</div>
		{:else}
			<!-- This will show if the project did not select a side -->
			<div class="text-center m-auto text-red-900 font-bold text-3xl">NO SIDE SELECTED</div>
		{/if}
	</div>
</div>
