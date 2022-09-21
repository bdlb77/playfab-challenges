# Challenge 2 - Registering a User and Logging in

At the end of this challenge, challengers should know how to enable User Registration and Login using the API and will have implemented the User Registration and Login API using the front end app.

## XRServer

Ensure you have completed Challenge 1

Begin by logging into your XRServer instance and selecting your previously created Title.

Go to the App's `Config` page. The fourth tile listed is the `Login Methods` tile.
![A panel of avalible App Configs, with the Login Methods tile highlighted by a red circle](screenshots/challenge_2/login_methods.png)


Select "RegisterPlayFabUser" and "LoginWithPlayFab" from the list of login methods.
![The list of available Login Methods with only RequestPlayFabUser and LoginWithPlayfab selected and highlighted with a red circle](screenshots/challenge_2/selected_login_api_methods.png)


This enables the /auth/RegisterPlayFabUser and the /auth/LoginWithPlayFab APIs on your instance ![The official API documentation of XRServer's POST endpoint at /auth/RegisterPlayFabUser](screenshots/challenge_2/register_playfab_user_docs.png)
![The official API documentation of XRServer's POST endpoint at /auth/LoginWithPlayFab](screenshots/challenge_2/login_with_playfab_docs.png)

[Official Documentation](https://doc.xrserver.com/auth/#tag/Basic-Authentication/paths/~1auth~1RegisterPlayFabUser/post)


## Test the App

Test your Registration API by registering a User on /auth/RegisterPlayFabUser

Example Request Body:

```json
{
    "email" : "user.email@outlook.com",
    "password" : "REPLACE_ME",
    "username" : "user.name"
}
```

You should receive a 200 OK application/json response that looks like:
```json
{ 
    "code": 200,
    "message": "OK",
    "success": true,
    "data": {},
    "params": {}
}
```