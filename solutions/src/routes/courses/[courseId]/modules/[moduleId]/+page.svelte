<script lang="ts">
  import { enhance } from "$app/forms";
  import modules from "$lib/stores/moduleStore";
  import type { PageData } from "./$types";
  export let data: PageData;
  import LessonCard from "$lib/components/LessonCard.svelte";
  import { Timeline } from "flowbite-svelte";
  import { Card, Button } from "flowbite-svelte";
    import UnitHeader from "$lib/components/UnitHeader.svelte";

  $: module = data.module!;
  $: lessons = data.filteredLessons!;

  // your script goes here
</script>

  <UnitHeader title={module.title} description={module.description} />

  <Timeline order="vertical">
    {#each lessons as lesson}
      <LessonCard {...lesson} />
    {/each}
  </Timeline>


<style>
  .module-wrapper {
    display: grid;
    justify-content: center;
    row-gap: 2rem;
  }
</style>
