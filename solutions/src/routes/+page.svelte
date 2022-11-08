
<script lang="ts">
  import logo from "$lib/header/svelte-logo.svg";

  import type { PageData } from "./$types";
  export let data: PageData;
  $: courses = data.courses;
  // your script goes here
</script>
<svelte:head>
  <title>Courses</title>
  <meta name="description" content="Courses App">
</svelte:head>



<div class="courses">
  <h1>My Courses</h1>
  <div class="course-list">
    {#each courses as course}
      <a href="/courses/{course.title}" class="course">
        <div class="img-container">
          <img src={logo} alt="SvelteKit" />
        </div>
        <div class="details">
          <h3>{course.title}</h3>
          <p>{course.courseDate}</p>
        </div>
      </a>
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
    box-shadow:  1px 1px 6px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: 5fr 1fr;
  }
  .course h3, p {
    margin: 1rem;
  }
  .img-container {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
