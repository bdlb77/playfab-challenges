# Challenge 3 - Segment Users based on criteria

At the end of this challenge, challengers should know how to create segments and be able to add users to a segment using a custom statistic

In this challenge we will segment users based on some criteria using XRServer
By End of Challenge 4, the challenger should have created these following Segments:

 - Math Course
    - Segment created for Starting Math Course
    - Segment created for finishing Math Course

* English Course
    - Segment created for starting English
    - Segment created for finishing English


## XRServer

Ensure you have completed Challenge 2

Begin by logging into your XRServer instance and selecting your previously created Title.

 Get the PlayFabId for the User you want to edit from the Login API call

 # Create a Segment
In the Developer Console, on the left hand side select Segments
![A red circle highlighting the segment tab on the left hand of the XRServer Development console](screenshots/challenge_3/select_segments.png)

Select Create Segment ![A red circle highlighting the Create Segment button](screenshots/challenge_3/select_create_segment.png)

You will receive a prompt to name your new segment
![A dialog box asking the user to input a name for the new segment](screenshots/challenge_3/new_segment_dialog.png)

Create a few segments that you want your users to move through during the course of using your app ![A list of segments in the XRServer UI: finished_english_course, finished_math_course, started_english_course, started_math_course](screenshots/challenge_3/multi_segments_created_list.png)


Select "Leaderboards" from the left hand side of the Playfab Menu ![A view of the Playfab drawer menu with "Leaderboards" highlighted](screenshots/challenge_3/leaderboard_highlighted.png)

Create a new App Statistics using PlayFab "New Leaderboard" which will allow a statistic to be available to all users ![View of New Leaderboard Page with a dummy name for a new statistic filled in](screenshots/challenge_3/create_new_leaderboard_in_playfab.png)

Don't forget to save!

In the Segment view of XRServer, select your segment and use the Segment Design diagram to Filter on a Statistic ![A view of the XRServer Segment Diagram screen](screenshots/challenge_3/set_statistic_filter_using_XRServer.png)

Again, don't forget to save!


# Set or update a statistic on a user, moving them into a segment 

In the Developer console, using the PlayFabId obtained during the Login API call, under the Server section, find UpdatePlayerStatistic endpoint and use it to increment your users statistic value by 1
![A view of the UpdatePlayerStatistic view in the developer console with values filled in to increment a statistic by 1](screenshots/challenge_3/update_player_statistic_call.png)

You should now see a user added to your segment, if you do not, double check that you saved your segment design in the editor (if you haven't saved there will be a Orange Exclamation mark on the right hand side of the Segment Design view) ![A view of the segment overview in XRServer showing 1 user now in the segment](screenshots/challenge_3/user_added_to_segment.png)


If we increment the segement again, we can see the user moves into the next one (in this example that filter was already created)
![an image showing a JSON response on the UpdatePlayerStatistic endpoint showing we incremented the statistic](screenshots/challenge_3/second_increment_of_statistic.png)

You should also now be able to view the count of users that are in any given segment ![A view of the segment overview in XRServer showing 1 user now belonging to two segments](screenshots/challenge_3/user_now_finished_math_course.png)

# Summary
Congratulations, you have now created a segment and added a user to it using a custom statistic!
