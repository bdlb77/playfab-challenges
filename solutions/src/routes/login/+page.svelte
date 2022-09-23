<script lang="ts">
  import { page } from '$app/stores';
  import { goto, invalidate } from '$app/navigation';
  import { getContext } from "svelte";

  const user = getContext("user");
  let username: string = "";
  let password: string = "";
  let errors: any = null;

  async function submit(event: SubmitEvent) {
    const response = await fetch(`auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // TODO handle network errors

    const body: PlayFabRes = await response.json();
    if (body.success) {
      return location.href = "/";
    } else {
      errors = body.message;
    }
  }
</script>

<svelte:head>
  <title>Sign in • Conduit</title>
</svelte:head>

<div class="auth-page">
  <div class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign In</h1>
        <p class="text-xs-center">
          <a href="/register">Need an account?</a>
        </p>

        {#if errors}
          <p class="error-message">{errors}</p>
        {/if}

        <form on:submit|preventDefault={submit}>
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="username"
              required
              placeholder="Username"
              bind:value={username}
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="password"
              required
              placeholder="Password"
              bind:value={password}
            />
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right" type="submit"> Sign in </button>
        </form>
      </div>
    </div>
  </div>
</div>
