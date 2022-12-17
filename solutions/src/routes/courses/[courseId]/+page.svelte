<script lang="ts">
  import UnitCard from "$lib/components/UnitCard.svelte";
  import UnitHeader from "$lib/components/UnitHeader.svelte";
  import { Card } from "flowbite-svelte";

  import type { PageData } from "./$types";
  export let data: PageData;

  $: course = data.course;
</script>

{#if course}
  <UnitHeader title={course.title} description={course.description} />
  <div class="course-container">
    {#each course.modules as module (module.id)}
      <UnitCard
        unitType="module"
        title={module.title}
        description={module.description}
        href="/courses/{course.id}/modules/{module.id}"
      />
    {/each}
  </div>
{:else}
  <h1>Could Not Find Course.</h1>
{/if}

<style>
  .course-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }
</style>
