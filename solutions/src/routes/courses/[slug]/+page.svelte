<script lang="ts">
  import UnitCard from "$lib/components/UnitCard.svelte";
  import UnitHeader from "$lib/components/UnitHeader.svelte";
  import { Card, Hr, A } from "flowbite-svelte";

  import type { PageData } from "./$types";
  export let data: PageData;

  $: course = data.course;
</script>

<A href="/" class="hover:underline text-purple-500 font-medium">Back to Courses</A>
{#if course}
  <UnitHeader
    unitType="Course"
    title={course.title}
    description={course.description}
    completed={course.completed}
  />
  <Hr class="my-5 mx-auto md:my-5" width="w-48" height="h-1" />
  <Card color="purple" padding="sm" size="xl" class="grid md:grid-cols-2">
    {#each course.modules as module}
      <UnitCard
        unitType="module"
        title={module.title}
        description={module.description}
        completed={module.completed}
        href="/modules/{module._id}"
      />
    {/each}
  </Card>
{:else}
  <h1>Could Not Find Course.</h1>
{/if}

<style>
  .course-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }

  .module-title {
    font-size: 1.5rem;
  }
</style>
