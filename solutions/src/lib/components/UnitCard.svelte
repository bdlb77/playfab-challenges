<script lang="ts">
  // your script goes here
  import { Card, A } from "flowbite-svelte";
  import { CheckCircle} from "svelte-heros-v2";
  export let href: string;
  export let title: string;
  export let description: string
  export let completed: boolean;
  export let unitType: string

</script>

<Card class="m-2 bg-sky">
  <div class="card-header">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <div class="check-circle">
      <CheckCircle size="30" class={completed ? "text-green-500" : "text-gray-300"} />
    </div>
  </div>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {description}
  </p>
  <A href={href} color="text-purple-500" class="font-medium hover:underline">
    Go to {unitType}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
  </A>
</Card>


<style>
  .card-header {
    position: relative;
  }
  .check-circle {
    position: absolute;
    right: -10px;
    top: 0;
  }
</style>
