<script lang="ts">
  import type { Course, Module } from "$lib/db/types";
  import { A } from "flowbite-svelte";

  export let course: any;

  let completionLength = course.modules.filter((mod: Module) => mod.completed).length;
  let completionPercent = Math.floor((completionLength / course.modules.length) * 100);
</script>

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
      style="width: {completionPercent}%"
    >
      {completionPercent}%
    </div>
  </div>
  <figcaption class="flex justify-center items-center space-x-3">
    <div class=" font-medium dark:text-white text-left mt-4">
      <A href="courses/{course.id}" color="text-purple-500" class="font-medium hover:underline"
        >Go to Course</A
      >
    </div>
  </figcaption>
</figure>
