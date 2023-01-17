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

Start the Server

```bash
npm run dev
```

Open up [`Postman`](https://www.postman.com/), and make a request to the
following URL:

```
GET http://localhost:5173/seed_geography_course
```

You should see the response back which should be the  `Geography` data pulled from the recently populated database.

<!-- ! TODO -->
```json
SAMPLE REQUEST HERE
```
<!-- ! -->

Now if you head back to the courses index page, you should see our Geography
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
<!-- TODO: add badge image-->
- Create a new badge item. You can use this [Geography Badge Image]()
- Modify your Segments to reward the badge when finishing the Geography course
in the editor section.

All of these tasks should be similar to what you have accomplished in Challenges
1 through 4. Please refer to those for extra assistance.
