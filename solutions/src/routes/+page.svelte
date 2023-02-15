<script lang="ts">
  import UnitCard from "$lib/components/UnitCard.svelte";
  import UnitHeader from "$lib/components/UnitHeader.svelte";
  import logo from "$lib/header/svelte-logo.svg";
  import { A, Card } from "flowbite-svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: courses = data.courses;
  /*    <!-- <UnitCard
    completed={course.completed}
          href="courses/{course._id}"
          title={course.title ?? ""}
          description={course.description ?? ""}
          unitType="course"
          /> -->
          */
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
      <figure
        class="flex flex-col justify-space-between items-center p-4 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
      >
        <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
          <h1 class="p-0 font-semibold text-gray-900 dark:text-white">{course.title ?? ""}</h1>
          <p class="my-4 font-light">{course.description}</p>
        </blockquote>
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            class="bg-purple-600 text-xs font-medium text-purple-100 text-center p-0.5 leading-none rounded-full"
            style="width: 45%"
          >
            45%
          </div>
        </div>
        <figcaption class="flex justify-center items-center space-x-3">
          <div class=" font-medium dark:text-white text-left mt-4">
            <A
              href="courses/{course.id}"
              color="text-purple-500"
              class="font-medium hover:underline">Go to Course</A
            >
          </div>
        </figcaption>
      </figure>
    {/each}
  </Card>
</div>

<style>
  .course-list {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    padding: 2rem;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border: 1px solid rgb(144 97 249 / var(--tw-border-opacity));
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
