# Challenge 5 - Putting it all Together

Throughout the previous challenges, we have learned the ability to set up an XRServer,
User Registration and Login, User Segments, and award items (E.g., badges) to
Users who have entered into a User Segment.

In this challenge, we will ask you to repeat any necessary steps from above in
the scenario that we've had a new Course be added to our education curriculum.

The following sections will walk you through the steps necessary to integrate
 our new Course with a badge to be awarded to users who complete it.

## 1. New Course - Geography

We have created a new course, Geography, and the first thing we will need to do
is seed the data into our application

Currently, this will reset our data on all our courses, but  our badges will remain.

To seed Geography course run

```bash
npm run seed-geography-course
```

Start the Server

```bash
npm run dev
```

Now if you head to the courses index page, you should see our Geography
 course among the other courses.

```bash
http://localhost:5173/
```

## 2. Implement Reward for Completing the Geography Course

Now, a new Geography course has been added, but we aren't able to reward our users
yet with a badge for completing the course. The next task will be to wire up all
the necessary pieces on XRServer PlayFab to reward this badge.

As a hint to the tasks you'll need to complete to complete the badge rewarding
scenario:

- Creation of the necessary statistics for the Geography course. (`geography_course`
 and `finished_geography_course`)
- Check creation of the segments related to to each of the statistics created in
the task above
- Create a new badge item. You can use this [Geography Badge Image](../solutions/static//images/geography_course.jpg)
  > Credit for image https://unsplash.com/photos/SCEywLgwj2E?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
- Modify your Segments to reward the badge when finishing the Geography course
in the editor section.

All of these tasks should be similar to what you have accomplished in Challenges
1 through 4. Please refer to those for extra assistance.

You know you have completed the task when you are able to finish a Geography Course, and are awarded the Geography Badge that you can view in the Profile Page, next to the Math and English badges.
## Summary

Congratulations! You've succesfully completed the foundation to understanding how to integrate PlayFab and XRServer into your web app.

Now, you hopefully will be able to take this knowledge and set up an appropriate XRServer and Playfab backend that others will be able to use as a way to interact with different User Segments.

PlayFab and XRServer can be extended to other applications outside of the gaming industry, and hopefully this tutorial gave you insight on how you can use these platforms to enable gamification for non-gaming focused initiatives.

Also, if set up in an intuitive way, XRServer can be a platform for your non-developer colleagues (such as marketing / advertising teams) as a way that they can drive engagement and interaction initiatives and campaigns.
