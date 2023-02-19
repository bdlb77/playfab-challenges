<script lang="ts">
  import { Button, Helper, Input, Label } from "flowbite-svelte";
  let username: string = "";
  let email: string = "";
  let password: string = "";
  let confirmPassword: string = "";
  let errors: any = null;

  async function submit() {
    try {
      if (confirmPassword !== password) {
        throw Error("Passwords do not match.");
      }

    } catch (err: any) {
      console.log({err})
      errors = err;
    }
  }
</script>

<svelte:head>
  <title>Sign up • EduMate</title>
</svelte:head>

<div class="auth-page">
  <div class="container mx-auto w-1/2">
    <h1 class="text-xs-center">Sign up</h1>

    <form on:submit|preventDefault={submit}>
      <div class="grid gap-12 mb-6 md:grid-cols-1">
        {#if errors}
          <Helper class="mt-2" color="red">{errors}</Helper>
        {/if}

        <h1>IMPLEMENT ME!</h1>
        <Button type="submit" color="primary">Sign Up</Button>
      </div>
    </form>
    <p class="text-xs-center">
      <a href="/login">Have an account?</a>
    </p>
  </div>
</div>
