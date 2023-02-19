<script lang="ts">
  import { page } from "$app/stores";
  import BadgesList from "$lib/components/BadgesList.svelte";
  import { Avatar, Span } from "flowbite-svelte";
  import type { IBadge } from "$lib/services/playfabService";

  $: user = $page.data.user;
  $: badges = $page.data.badges as IBadge[];
</script>

<svelte:head>
  <title>User Page</title>
  <meta name="description" content="Courses App" />
</svelte:head>

<div class="layout">
  <section class="section user-info">
    <div class="backdrop bg-purple-200" />
    <div class="subsec">
      <div class="avatar-wrapper">
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=7" />
      </div>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        <Span class="text-purple-500" highlight>Playfab ID</Span>
        {user.playfabId}
      </h5>
    </div>
  </section>
  <section style="width: 100%">
    <BadgesList {badges} />
  </section>
</div>

<style>
  .section {
    width: 100%;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  .user-info {
    display: grid;

    grid-template-rows: repeat(2, 200px);
  }
  .backdrop {
    border-radius: 8px 8px 0 0;
    grid-row: span 1;
  }
  .subsec {
    padding-left: 1rem;
    grid-row: span 1;
  }

  .avatar-wrapper {
    position: relative;
    width: 90px;
    height: 90px;
    top: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #fff;
  }
</style>
