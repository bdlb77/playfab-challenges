<script lang="ts">
    import CourseCard from "$lib/components/CourseCard.svelte";
  import UnitCard from "$lib/components/UnitCard.svelte";
  import UnitHeader from "$lib/components/UnitHeader.svelte";
  import logo from "$lib/header/svelte-logo.svg";
  import { A, Card } from "flowbite-svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: courses = data.courses;
</script>

<svelte:head>
  <title>Courses</title>
  <meta name="description" content="Courses App" />
</svelte:head>

<div class="courses">

  <UnitHeader unitType="" title="My Courses" description="" completed={false} />

  <Card
    color="primary"
    size="xl"
    class="course-list bg-purple-200 border-purple-500 grid md:grid-cols-2"
  >
    {#each courses as course}
      <CourseCard {course}/>
    {/each}
  </Card>
</div>
