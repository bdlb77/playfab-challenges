<script lang="ts">
  import Badge from "$lib/components/Badge.svelte";
  const badgeCount = [1, 2, 3, 4, 5, 6];

</script>



<section class="badges-section">
  {#each badgeCount as badgeNum }
    <Badge badgeNum={badgeNum} />
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
