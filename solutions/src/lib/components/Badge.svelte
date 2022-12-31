<script lang="ts">
  import { Card } from "flowbite-svelte";

  export let badgeNum: number;
</script>

<Card class="badge" padding="none">
  <div class="card-layout">
    <img
      style={badgeNum === 1 ? "opacity: 1" : "opacity: 0.2"}
      class="rounded-t-sm"
      src="/images/icons8-great-britain-96.png"
      alt="great britain badge"
    />
  </div>
</Card>

<style>
  .card-layout img {
    height: 96px;
  }

  .card-layout {
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
