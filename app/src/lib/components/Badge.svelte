<script lang="ts">
    import type { IBadge } from "$lib/services/playfabService";
  import { Card } from "flowbite-svelte";

  export let badge: IBadge;

  // const imageData = badge.data.find(el => ? );
</script>

<Card class="badge" padding="none">
  <div class="card-layout">
    {#if imageData}
      <img
        class="rounded-t-sm"
        <!--  ! IMPLEMENT ! -->
        src="/images/IMPLEMENT ME!"
        alt="great britain badge"
      />
      <h3>BADGE NAME HERE</h3>
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
