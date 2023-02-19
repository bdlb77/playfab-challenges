<script lang="ts">
  import { Input, Label, Helper, Button } from "flowbite-svelte";

  let username: string = "";
  let password: string = "";
  let confirmPassword: string = "";
  let errors: any = null;

  async function submit(event: SubmitEvent) {
    try {

      if (confirmPassword !== password) {
        throw new Error("Passwords do not match.");
      }
      const response = await fetch(`auth/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      // TODO handle network errors

      const body: PlayFabRes = await response.json();
      if (body.success) {
        return (location.href = "/");
      } else {
        errors = body.message;
      }
    } catch(err: any) {
      errors.push(err.message);
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

        <fieldset class="form-group">
          <Label for="username" class="mb-2" required=true>Username</Label>
          <Input type="text" id="username" placeholder="Username" required bind:value={username} />
        </fieldset>
        <fieldset class="form-group">
          <Label for="password" class="mb-2">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            required
            bind:value={password}
          />
        </fieldset>
        <Button type="submit" color="primary">Submit</Button>
      </div>
      </form>
    <p class="text-xs-center">
      <a href="/register">Need an account?</a>
    </p>
  </div>
</div>
