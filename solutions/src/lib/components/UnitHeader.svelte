<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<section class="heading-section">
  <h1 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{title}</h1>
  {#if description}
    <p class="mb-2 text-md tracking-tight text-gray-900 dark:text-white">{description}</p>
  {/if}
</section>

<style>
  .heading-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vh;
    background: var(--primary);
    margin: 2rem auto;
  }
</style>
