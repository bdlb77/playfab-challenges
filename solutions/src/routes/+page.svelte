<script lang="ts">
  import UnitCard from "$lib/components/UnitCard.svelte";
  import UnitHeader from "$lib/components/UnitHeader.svelte";
  import logo from "$lib/header/svelte-logo.svg";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: courses = data.courses;
</script>

<svelte:head>
  <title>Courses</title>
  <meta name="description" content="Courses App" />
</svelte:head>

<div class="courses">
  <UnitHeader title="My Courses" description="" />

  <div class="course-list">
      {#each courses as course}
        <UnitCard
          href="courses/{course._id}"
          title={course.title ?? ""}
          description={course.description ?? ""}
          unitType="course"
        />
      {/each}
  </div>
</div>

<style>
  .course-list {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    padding: 2rem;
  }
  .course {
    border-radius: 2rem;
    width: 260px;
    height: 240px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: 5fr 1fr;
  }
  .course h3,
  p {
    margin: 1rem;
  }
  .img-container {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
