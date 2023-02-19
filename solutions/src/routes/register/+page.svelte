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

      const response = await fetch(`auth/register`, {
        method: "POST",
        body: JSON.stringify({ username, password, email }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const body: PlayFabRes = await response.json();
      console.log({ body });
      if (body.success) {
        return (location.href = "/");
      } else {
        console.log(body.message);
        errors = body.message;
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

        <fieldset class="form-group">
          <Label for="username" class="mb-2">Username</Label>
          <Input type="text" id="username" placeholder="Username" required bind:value={username} />
        </fieldset>
        <fieldset class="form-group">
          <Label for="email" class="mb-2">Email</Label>
          <Input type="email" id="email" placeholder="Email" required bind:value={email} />
        </fieldset>

        <fieldset class="form-group">
          <Label for="Password" class="mb-2">Password</Label>
          <Input
            type="password"
            id="Password"
            placeholder="Password"
            required={true}
            bind:value={password}
          />
        </fieldset>
        <fieldset class="form-group">
          <Label for="confirm_password" class="mb-2">Confirm Password</Label>
          <Input
            type="password"
            id="confirm_password"
            placeholder="Password"
            required
            bind:value={confirmPassword}
          />
        </fieldset>

        <Button type="submit" color="primary">Sign Up</Button>
      </div>
    </form>
    <p class="text-xs-center">
      <a href="/login">Have an account?</a>
    </p>
  </div>
</div>
