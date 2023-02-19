<script lang="ts">
  import { Input, Label, Helper, Button } from "flowbite-svelte";

  let errors: any = null;
  let username: string = "";
  let password: string = "";
  async function submit(event: SubmitEvent) {
    try {

    } catch(err: any) {
      errors = err.message;
    }

  }
</script>

<svelte:head>
  <title>Sign in • EduMate</title>
</svelte:head>

<div class="auth-page">
  <div class="container mx-auto w-1/2">
    <h1 class="text-xs-center">Sign In</h1>

    <form on:submit|preventDefault={submit} class="mx-auto mt-4">
      <div class="grid gap-12 mb-6 md:grid-cols-1">
        {#if errors}
          <Helper class="mt-2" color="red">{errors}</Helper>
        {/if}
      <h1>IMPLEMENT ME</h1>
      <Button type="submit" color="primary">Sign Up</Button>

    <p class="text-xs-center">
      <a href="/register">Need an account?</a>
    </p>
  </div>
</div>
