<script lang="ts">
  import Badge from "$lib/components/Badge.svelte";
  import type { IBadge } from "$lib/services/playfabService";

  export let badges: IBadge[];
</script>

<section class="badges-section">
  {#each badges as badge, id}
    <Badge {badge} />
  {/each}
</section>

<style>
  .badges-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
</style>
