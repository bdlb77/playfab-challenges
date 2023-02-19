# Challenge 3 - Segment Users based on criteria

At the end of this challenge, challengers should know how to create segments and be able to add users to a segment using a custom statistic.

For this challenge, we will be creating the following Segments in XRServer:

- Math Course
  - Segment created for Starting Math Course
  - Segment created for finishing Math Course
- English Course
  - Segment created for starting English
  - Segment created for finishing English

Users should be able to start and finish courses in the Web App. Segements and Statistics in XRServer will be the backaned to track their progress through their courses.

## Player ID

Ensure you have completed Challenge 2 so that you have an existing User to work with.

Begin by logging into your XRServer instance and selecting your previously created App. Get the `PlayFabId` for the User you want to edit from the Login API call. Alternatively, you can also use the `PlayerId` from the Users page in XRServer

## Create a Segment

In XRServer, `Segments` should be one of the default pages available in the left side menu.

![A red circle highlighting the segment tab on the left hand of the XRServer Development console](screenshots/challenge_3/select_segments.png)

If `Segments` is not visible, go to `Config` -> the `App Config` seciton -> the `Menu Layout` Tile. Here you can edit everything visible in your App's Menu. You can even rename `Segments` to something more appropriate to your business terminology.

On the `Segments` page, select `Create Segment`.

![A red circle highlighting the Create Segment button](screenshots/challenge_3/select_create_segment.png)

You will receive a prompt to name your new segment.

![A dialog box asking the user to input a name for the new segment](screenshots/challenge_3/new_segment_dialog.png)

Create a few segments that you want your users to move through during the course of using your app.

![A list of segments in the XRServer UI: finished_english_course, finished_math_course, started_english_course, started_math_course](screenshots/challenge_3/multi_segments_created_list.png)

## Create a Statistic

In the `Developer Console` -> `Server` section use the SetPlayerStatisticDefinition API endpoint to create a new statistic. Creating a statistic is a great way to track user progress using "points" and will automatically generate a Leaderboard for each statistic you create. The Leaderboard will allow your statistic to be tracked against multiple users.

In the `Segment` view of XRServer, select your segment and use the `Segment Design Diagram` to create a `Filter` on a `Statistic`. Here is a filter for the `finished_math_course` segment:

![A view of the XRServer Segment Design Diagram screen, there are three boxes from left to right, connected by arrows flowing to the right of the screen: Segment, Filter Group, Statistic.  Filter Group is set to AND, Statistic is set to: math_course_progress >= 1](screenshots/challenge_3/set_statistic_filter_using_XRServer.png)

This diagram does not autosave, so don't forget to save! If you haven't saved there will be a orange exclamation mark on the right hand side of the Segment Design view.

## Update the Statistic

In the `Developer Console` -> `Server` section find the UpdatePlayerStatistic endpoint. Using the `PlayFabId` obtained during the Login API call, increment your user's statistic value by 1.

![A view of the UpdatePlayerStatistic view in the Developer Console with values filled in to increment a statistic by 1.  Headers are generated automatically.  PlayFabId is set to the ID retreived earlier, the statistic name is set to english_course_progress, the Value is set to 1](screenshots/challenge_3/update_player_statistic_call.png)

Below is an UpdatePlayerStatistic example response.  Note the statistic value has been incremented by 1 (see the original value is shown in the `params` section).

```json
{
    "code": 200,
    "message": "OK",
    "success": true,
    "data": {
        "StatisticName": "math_course_progress",
        "Value": 2,
    },
    "params": {
        "PlayFabId": "9ACED761F8CE6146",
        "StatisticName" : "math_course_progress",
        "Value" : 1
    }
}
```

You should now see a user added to your segment.

![A view of the segment overview in XRServer showing 1 user now in the segment](screenshots/challenge_3/user_added_to_segment.png)

You should also now be able to view the count of users that are in any given segment.

![A view of the segment overview in XRServer showing 1 user now belonging to two segments](screenshots/challenge_3/user_now_finished_math_course.png)

Try adding more filters so that if the statistic is incremented again, the user will be moved out of you first segment and into another one.

## Web App

At this point you should have the following `Segments` created in XRServer:

- Math Course
  - Segment created for Starting Math Course
  - Segment created for finishing Math Course
- English Course
  - Segment created for starting English
  - Segment created for finishing English

You should also have created `Statistics` in XRServer and used them in your `Segments` to determine when a user should be added or removed from a segment.

You also know which API endpoints to use to update a User's statistics. Exlpore the `Developer Console` to discover other API endpoints that will be useful for displaying this information on the front end.

Now, add the following functionatlity to your web app:

1. Allow a User to add themselves to a course
2. Allow a User to finish a course
3. Display the User's status for each course (for example; not started, started, or finished)

To Point 3, use the [`Profile Page`](../app/src/routes/users/[id]/+page.svelte) to display any data you are able to pull out from PlayFab.

> Note: You can verify if a User has entered a segment in PlayFab (not XRServer) by viewing a Segment's


## Summary

Congratulations, your users can now start and finish courses using segments and statistics!
