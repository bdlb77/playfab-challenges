<script lang="ts">
  import { Card, Button, Rating, Badge } from "flowbite-svelte";
  const badgeCount = [1, 2, 3, 4, 5, 6];

</script>



<section class="badges-section">
  {#each badgeCount as badgeNum }
    <Card class="badge" padding="none">
      {#if badgeNum === 1}
      <div class="card-layout">
        <img style="opacity: 1" height=96 width=96 class="rounded-t-sm" src="/images/icons8-great-britain-96.png" alt="great britain badge" />
      </div>
      {:else}
      <div class="card-layout">
        <img height=96 width=96 class="rounded-t-sm" src="/images/icons8-great-britain-96.png" alt="great britain badge" />
      </div>
      {/if}
    </Card>
  {/each}
</section>


<style>
  .badges-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  .card-layout img {
    opacity: 0.2;
  }
</style>
