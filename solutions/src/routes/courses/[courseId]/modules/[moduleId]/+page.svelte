<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";
  export let data: PageData;
  import LessonCard from "$lib/components/LessonCard.svelte";
  import { Timeline } from "flowbite-svelte";
  import UnitHeader from "$lib/components/UnitHeader.svelte";
  import type { ILesson } from "$lib/types";

  $: module = data.module;
  $: lessons = data.lessons;

  // export let success = false;
  // your script goes here

  async function handleCompleteLesson(event: CustomEvent<{_id: string}>) {
    const { _id } = event.detail;

    const response = await fetch(`/api/lessons/completed`, {
      method: "POST",
      body: JSON.stringify({ id: _id }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const { lesson: updatedLesson, module: updatedModule } = await response.json();

    // take out previous lesson instance and update with new data.
    const oldLessonIndex = lessons.findIndex((lesson) => lesson._id === updatedLesson._id);
    lessons[oldLessonIndex] = updatedLesson;

    // if updated Module is returned then we update our module.
    if (updatedModule) module = updatedModule;
  }
</script>

{#if module}
  <!-- content here -->
  <UnitHeader title={module.title} description={module.description} />
  <h1>FINISHED: { module.completed}</h1>
  <Timeline order="vertical">
    {#each lessons as lesson}
      <LessonCard
        title={lesson.title}
        description={lesson.description}
        completed={lesson.completed}
        _id={lesson._id}
        on:submit={handleCompleteLesson}
      />
    {/each}
  </Timeline>
{/if}
