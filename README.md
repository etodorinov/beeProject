# beeProject

The goal of the application is to create a database of hives with the corresponding notes for each hive. MongoDB is used as database to store the information.

Home page - 
A citate in connection with bees is displayed.

All hives page - 
All created hives are displayed, sorted by owner. If no hives are available an appropriate message is displayed.
Every visitor may see all created hives and all notes for each of the hives. Only a registered user may create hives or manipulate (edit and delete) it. Notes for a hive may also be created only by registered user.

Register page - 
One may register by providing username, email and password. The username and password should be at least four (4) characters long and the email should be a valid email of type abv@abv.bg
Successfully registered user will be redirected to the Home page.

Login page - 
Every registered user may login with the email used to register and the correct password. If incorrect email or password is provided the user is forwarded to 404 page.
Successfully logged in user will be redirected to the Home page.

Logout page - 
Every logged in user may log out at any time.
Successfully logged out user will be redirected to the Home page.

Create hive page - 
Every registered user may create hive. The number of hives is not limited.
In order to create hive the user should provide information about hive's name/number, location, short description and the period of time the hive has been owned. The time the hive is owned is chosen from a drop down list with values for one year, two years or more than two years. The name/number may be a string, number or combination of both. The location should be string and must be at least three (3) characters long. The description should be string and must be at least twelve (12) characters long.
After a successful creation of hive the user is forwarded to All hives page.

Details page - 
Every user may visit the Details page.
For not registered user or not logged in user only the button View notes is available. By clicking on it one is forwarded to View notes page. 
For registered user who is not the owner of the hive only the button View notes is available. By clicking on it the user is forwarded to View notes page.
For registered user who owns the hive the buttons View notes, Add notes, Edit and Delete are available. By clicking View notes button the user is forwarded to View notes page. By clicking Add notes button the user is forwarded to Add notes page. By clicking Edit button the user is forwarded to Edit page. By clicking Delete button the user is forwarded to Delete page.

View notes page - 
Every visitor of the site, no matter if registered or not registered, may view the notes for each of the hives. On this page all notes for the corresponding hive are displayed. If no notes are available an appropriate message is displayed.
One may return back to the Details page by pressing the number/name of the hive at the top of the page.

Add notes page - 
On this page the owner of the hive may add note for it. In order to add note the user must provide a valid date and text for the note not shorter than twelve (12) characters. After a successful creation of the note the user is forwarded to the Details page.
If the user decides not to create note one may return back to the Details page by pressing the number/name of the hive at the top of the page.

Edit note page - On this page the owner of the hive may edit any of the notes attached to it. If the user do not provide valid date or the notes' text is shorter than twelve (12) characters the Edit button becomes inactive until the proper information is provided. After a successfull edit the user is forwarded to View notes page.

Delete note page - On this page, after a confirmation, the owner of the hive may delete any of the notes attached to it. After a successfull delete the user is forwarded to View notes page.

Edit page - 
On this page the owner of the hive may change the information about the hive. The current information about the hive is preloaded and owner may change any of it.
The name/number may be a string, number or combination of both. The location should be string and must be at least three (3) characters long. The description should be string and must be at least twelve (12) characters long. The time the hive is owned is chosen from a drop down list with values for one year, two years or more than two years.
After a successful edit the owner is redirected to the Details page.

Delete page - 
The owner of the hive may delete it after confirmation.
If a hive is deleted all the notes for it are also deleted.
After a successful delete operation the owner is forwarded to the All hives page.

Search page - 
Any visitor or registered user may search for hives based on the hive’s location. If any result is available a list with the result is rendered. If no result is available an appropriate message is displayed.
As the location should be at least three (3) characters long the search button is active only if three (3) characters are written in the input field. While the search button is not active it is colored in red and text “Search not active” is displayed. Once it is activated it becomes transparent and the text “Search active” is displayed.

404 page - 
The page is displayed if any problem occurs during the use of the application. From it the user may go back to home page and try again.
