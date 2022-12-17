<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";
  export let data: PageData;
  import LessonCard from "$lib/components/LessonCard.svelte";
  import { Timeline } from "flowbite-svelte";
  import UnitHeader from "$lib/components/UnitHeader.svelte";
    import { invalidate } from "$app/navigation";

  $: module = data.module;
  $: lessons = data.lessons;

  let id: string;
  export let success = false;
  // your script goes here

  async function handleCompleteLesson() {
    const response = await fetch(`/api/lessons/completed`, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log({data})
    if (data.status == 200)
    {
      invalidate(() => true)
    }
  }
</script>

{#if module}
  <!-- content here -->
  <UnitHeader title={module.title} description={module.description} />
  <Timeline order="vertical">
    {#each lessons as lesson}
      {console.log({lesson})}
      <LessonCard {...lesson} bind:_id={id} on:submit={handleCompleteLesson} />
    {/each}
  </Timeline>
{/if}
