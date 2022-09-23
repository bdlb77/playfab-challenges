<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { userStore } from "$lib/stores/user";
  import Header from "$lib/header/Header.svelte";

  $userStore = $page.data.user;
</script>

<Header />

<main>
  <slot />
</main>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }

</style>
