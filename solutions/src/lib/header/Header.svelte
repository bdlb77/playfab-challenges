<script lang="ts">
  import { page } from "$app/stores";
  import { userStore } from "$lib/stores/user";
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
  import { AcademicCap } from "svelte-heros-v2";


  async function handleLogout(event: Event) {
    event.preventDefault();
    const res = await fetch(`/auth/logout`, { method: "POST" });
    if (res.ok) {
      $userStore = null;
      window.location.replace("/");
    }
  }
</script>

<Navbar let:hidden let:toggle rounded color="purple">
  <NavBrand href="/">
    <AcademicCap class="mr-3 h-6 sm:h-9" alt="EduMate Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">EduMate</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    {#if $page.data.user}
      <NavLi href="/" active={$page.url.pathname === "/"}>Courses</NavLi>
      <NavLi href="#" on:click={handleLogout}>Logout</NavLi>
    {:else}
      <NavLi href="/login">Login</NavLi>
    {/if}
  </NavUl>
</Navbar>
