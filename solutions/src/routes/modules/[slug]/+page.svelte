<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";
  export let data: PageData;
  import LessonCard from "$lib/components/LessonCard.svelte";
  import { A, Hr, Timeline } from "flowbite-svelte";
  import UnitHeader from "$lib/components/UnitHeader.svelte";

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
  <A href="/courses/{module.course}" class="hover:underline text-purple-500 font-medium">Back to Course</A>
  <UnitHeader unitType="Module" title={module.title} description={module.description} completed={module.completed} />
  <Hr class="my-5 mx-auto md:my-5" width="w-48" height="h-1"/>
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
