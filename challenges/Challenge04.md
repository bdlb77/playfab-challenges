# Challenge 4 - Awarding Badges

It the previous challenges, we set up the ability to track which students take which of our courses. We've now been asked to implement Gamification to drive user engagement and retention in our app. One way to do this is to reward them with badges! (Here is a study on the [Effectiveness of Gamification](https://www.edapp.com/blog/is-gamification-effective)).

This challenge will implement course completion badges in our education app. At the end of this challenge, challengers should know how to do the following:

1. Create Items in XRServer
2. Add Rules to award Items
3. Display a User's Items in a web app

The [Step 2: Set Up Your Project](https://www.xrserver.com/demo) video covers some of the topics in this challenge and may be useful to you.

## Create Badges

In XRServer, `Items` should be one of the default pages available in the left side menu. If it's not, go to `Config` -> the `App Config` seciton -> the `Menu Layout` Tile.  Here you can edit everything visible in your App's Menu.  You can even rename `Items` to something more appropriate to your business terminology.

Before we can add new Items, we need to define Item classes.  Go to `Config` -> the `Class Definitions` section -> the `Item Class` tile.  Define an Item Class for Badges. Add at least one `Custom Property` to reference an image for your Badges.

In `Items` add new Badge Items. Add at least one Badge for each Course that can be completed.

> Bonus:
>
> 1. What other acheivements would you like to make Badges for?
> 2. What other Custom Properties would be useful on your Badge Class?
> 3. What other entities in the Web App could we store as Items in XRServer?

## Create Rules

We want to automatically award Badges to Users when they have completed a Course (which means they have entered one of the course completed segments that were added in Challenge 3).

For each segment that should award a badge, open the Segment editor and scroll down to the `Segment Design` section. On the `Segment` box, there should be a `OnEnteredSegment` action.  Explore the actions availble and add an action that will grant users the appropriate Badge on entering the segment.

Now that your Rules are implemented, verify that moving a User into a Segment automatically adds the appropriate Badge to their Inventory.

## Display Badges

In Challenge 3 you implemented adding users to segments when completeting courses in the web app. Now, we also want to display the badges awarded when completeing courses.

Explore the API endpoints available in the XRServer Developer Console. Which endpoints can you use to retreive the Badges awarded to your User? Test them in the Developer Console until you know how to retrieve all the information you need.

> NOTE: when displaying a badge, you must make sure `Release State` is set to `Released` for your badge to be awarded to
> the user.
>
> In the `/users/[id]/` folder, you will need to ensure that the inventory is correctly being fetched in the `+page.server.ts` to pull the inventory from a User. Feel free to reference the commented out code.
>
> Also, in the svelte pages for frontend, you will need to figure out
> how to display the badges correctly via the hints of code that are left.

In the web app, add the following functionatlity:

1. Display the awarded badge upon finishing a course
2. Display all previously awarded badges on the User's Profile page.
3. Include the Name and Icon anytime a badge is displayed

> Hint: When displaying images, make sure CORS is configured properly.

## Summary

Your App now drives user engagement with Gamification by implementing acheivement badges and leveraging XRServer's Items, Segments, and Rules.

[Continue to `Chalenge 05`](./Challenge05.md)

## Resources

- [English Badge Image Location](../app/static/images/english_course.png)

- [Math Badge Image Location](../app/static/images/math_course.png)

- [PlayFab Developer Portal](https://developer.playfab.com/en-us/my-games)

- `XRServer Developer Portal` -  <https://xxx.playfab.tv/editor/> (Need to replace xxx with own domain)

- `XRServer Developer API Console` <https://xxx.playfab.tv/editor/console/Auth> (Need to replace xxx with own domain)

- [SvelteKit Sample Code](https://svelte.dev/repl/ca967b45a5aa47b2bb2f9118eb79eefe?version=3.50.1)
