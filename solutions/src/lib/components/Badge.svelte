<script lang="ts">
    import type { IBadge } from "$lib/services/playfabService";
  import { Card } from "flowbite-svelte";

  export let badge: IBadge;

  const imageData = badge.data.find(el => el.dataKey === "image" );
</script>

<Card class="badge" padding="none">
  <div class="card-layout">
    {#if imageData}
      <img
        class="rounded-t-sm"
        src="/images/{imageData.dataVal}"
        alt="great britain badge"
      />
      <h3>{badge.playfab.DisplayName}</h3>
    {:else}
      <h3>Unable to Show Badge</h3>
    {/if}

    </div>

</Card>

<style>
  .card-layout img {
    height: 96px;
  }
  h3 {
    margin: 1rem;
  }

  .card-layout {
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
