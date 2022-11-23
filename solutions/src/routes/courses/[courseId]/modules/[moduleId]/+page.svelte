<script lang="ts">
  import { enhance } from "$app/forms";
  import modules from "$lib/stores/moduleStore";
  import type { PageData } from "./$types";
  export let data: PageData;
  import LessonCard from "$lib/components/LessonCard.svelte";
  import { Timeline } from "flowbite-svelte";
  import UnitHeader from "$lib/components/UnitHeader.svelte";

  $: module = data.module!;
  $: lessons = data.filteredLessons!;
  let id: number;
  // your script goes here

  async function handleCompleteLesson() {
    const response = await fetch(`/lessons/completed`, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log({response});
  }
</script>

{#if module}
  <!-- content here -->
  <UnitHeader title={module.title} description={module.description} />

  <Timeline order="vertical">
    {#each lessons as lesson}
      <LessonCard {...lesson} bind:id on:submit={handleCompleteLesson} />
    {/each}
  </Timeline>
{/if}
