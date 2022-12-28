<script lang="ts">
  import { Heading, P, Span } from "flowbite-svelte";

  export let title: string;
  export let description: string;
  export let completed: boolean;
  export let unitType: string;
</script>

<section class="heading-section">
  <Heading tag="h1" class="my-5">{title}
  {#if unitType}
    <Span class="text-indigo-500" highlight>{unitType}</Span>
  {/if}
</Heading>
  {#if description}
    <P class="mb-2 text-md tracking-tight text-gray-900 dark:text-white">{description}</P>
  {/if}
  {completed ? "Finished this Section" : ""}
</section>

<style>
  .heading-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vh;
    background: var(--primary);
    margin: 2rem auto;
  }
</style>
