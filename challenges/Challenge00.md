# Challenge 0 - Overview

This series of challenges is meant to walk you through the steps needed to
set up XRServer and PlayFab, as well as guide you on how to integrate these
platforms into the sample web app built in Svelte.

The main goal of these challenges are to demonstrate how we can leverage XRServer
and PlayFab as a platform to enable us to run LiveOps campaigns to drive further
User engagement with our applications.

## Scenario

The scenario of this Challenge series is that we have an existing Education
platform that allows our students to complete their lessons online. Currently
they are able to succesfully complete `lessons`, which will in turn finish out
a module. Once all `modules` are completed, then they have finished the `course`
(such as Math).

What we would like to walk through is how can we further give the students something
to strive for, perhaps awarding of badges to those who have completed the course?

As you progress through the challenges, we guide you through ways of how to make
this possible and how we can go about integrating XRServer and PlayFab into the
education platform. This work would typically need to be done by the developer.

However, the beauty is, once we have linked up a few key integrations wtih PlayFab,
a developer would be able to hand it off to a Marketing team to begin running
LiveOps campaigns, by determining what criteria they want to award badges for based
on the User's accomplishments in our platform.

## Data Schema

Here is an example of the Data Schema:

![Data Schema](screenshots/schema_example.png)


## Getting Started

Now, the first step will be is to follow the `Developing` section
of the [`README.md`](../README.md)

Once you've verified that you can run the application and use `Supabase`,
proceed to [`Challenge01`](Challenge01.md).


As a note, some of the pages may not function as expected. For example, you will not be able to navigate to `Login` or `Register` given that a Sample user is hardcoded in the `hooks.server.ts` file, and this should be fixed by you when the challenge for integrating wtih PlayFab authentication is attempted.
