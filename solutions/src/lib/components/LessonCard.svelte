<script lang="ts">
  import { TimelineItem, Button } from "flowbite-svelte";

  import type { Lesson } from "$lib/api/data";
  // your script goes here
  export let title: string;
  export let description: string;
  export let completed: boolean;
</script>

<TimelineItem {title}  date={completed ? "Finished" : ""}>
  <svelte:fragment slot="icon">
    <span
      class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
    >
      <svg
        aria-hidden="true"
        class="w-3 h-3 text-blue-600 dark:text-blue-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd"
        /></svg
      >
    </span>
  </svelte:fragment>
  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
    {description}
  </p>
  <Button color="primary"
    >{completed ? "Lesson Finished" : "Complete Lesson"}<svg
      class="ml-2 w-3 h-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    ></Button
  >
</TimelineItem>


style
