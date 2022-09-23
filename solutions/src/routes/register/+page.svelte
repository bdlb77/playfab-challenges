<script lang="ts">

  let username: string = "";
  let email: string = "";
  let password: string = "";
  let errors: any = null;

  async function submit() {
    const response = await fetch(`auth/register`, {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body: PlayFabRes = await response.json();
    console.log({body});
    if (body.success) {
      return location.href = "/";
    } else {
      errors = body.message
    }
  }
</script>

<svelte:head>
  <title>Sign up • Conduit</title>
</svelte:head>

<div class="auth-page">
  <div class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign up</h1>
        <p class="text-xs-center">
          <a href="/login">Have an account?</a>
        </p>

        {#if errors}
          <p class="error-message">{errors}</p>
        {/if}

        <form on:submit|preventDefault={submit}>
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="text"
              required
              placeholder="Your Name"
              bind:value={username}
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="email"
              required
              placeholder="Email"
              bind:value={email}
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
          <button class="btn btn-lg btn-primary pull-xs-right"> Sign up </button>
        </form>
      </div>
    </div>
  </div>
</div>
