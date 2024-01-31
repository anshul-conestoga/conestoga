<h1>A - 3</h1>
<h2>Part 1 - Navigate between pages and use a cookie</h2>

In this assignment, you’ll develop an application that allows you to log in, save the user data in a cookie, navigate to a new page, and log out.

The interface looks like this initially:

<img width="360" alt="Screenshot 2024-01-31 at 2 42 00 PM" src="https://github.com/anshul-conestoga/conestoga/assets/158225294/0a2d10d5-79a9-43e0-85f2-ba410910ef95">

And the interface looks like this after you’ve logged in:

<img width="403" alt="Screenshot 2024-01-31 at 2 42 36 PM" src="https://github.com/anshul-conestoga/conestoga/assets/158225294/8495f7ae-ff7f-44aa-9a7a-dbc40c84f425">

<h2>NOTE: When you run this application from the file system, it doesn’t work in the Chrome browser, but it should work in the Firefox browser or use VS Code Live Server extension.</h2>


1 - Open the starter application(zipped) attached to this Assignment folder: 
   If you download the code from course shell
     - Open the starter application(zipped) attached to this Assignment folder:
     - Then, run the application to see the user interface shown above.
     
2 - Review the code in the login.js file. Note that it contains starts for four functions: getCookieByName(), setCookie(), deleteCookie(), and goToPage(). The getCookieByName() function returns an empty string, while the others contain no code.

3 - Review the index.html file and notice that its embedded JavaScript code uses the functions in the login.js file.

4 - Review the login.html file and notice that its embedded JavaScript code uses the functions in the login.js file.

5 - In the login.js file, update each of the functions so they perform the tasks described by their names. Use the examples in figures 14-5 through 14-7 as a guide for the first three, and figure 14-1 for the last one.

6 - In index.html, change the text in the <small> tag to your name and student number.

7 - Run the application, enter a user name, and click Log In. When the login.html page displays, press F12 to open the developer tools and display the Storage panel (in FireFox) to view the cookies for this application. This should show the cookie for this application.

<h2>Part 2 - Navigate between pages and use session storage</h2>

In this assignment, you’ll enhance the Account Profile application to save its data in session storage, navigate to a new page, and allow you to navigate back
 to the original page. When you click on the Save button, a new page gets the data from session storage and displays it like this:
 
 <img width="478" alt="Screenshot 2024-01-31 at 2 52 43 PM" src="https://github.com/anshul-conestoga/conestoga/assets/158225294/554e4150-a350-42ad-ac72-ae4fcff5dcb6">

1 - Open the starter application(zipped) attached to this Assignment folder if you download the code from course shell
 - Evaluations\Assignments\Assignment 3\Part2-profile.zip

2 - In the save_profile.js file, find the code in the handler for the click event of the Save button that validates the user entries. Then, find the if statement that checks the value of the isValid variable.

3 - Add code to the if statement that saves the values in the email, phone, zip, and dob constants to session storage. Then, add code that uses the location object to navigate to the profile.html file.

4 - Review the code in the display_profile.js file. Note that it contains the jQuery ready event handler and a handler for the click event of the Back button.

5 - In the ready event handler, add code that retrieves the profile information from session storage and displays it in the span elements whose id attributes are “email”, “phone”, “zip”, and “dob”. Use the jQuery text() method of the span elements to do this.

6 - In the handler for the click event of the Back button, add code that uses the history object to go back to the previous page.

7 - In index.html, change the text in the <small> tag to your name and student number.

8 - Run the application, enter valid data, and click Save. After you review the data that’s displayed on the profile.html page, press F12 to open the developer tools and display the Application panel to view the data in session storage for this application.

9 - Click on the Back button, make a change, and click Save. Then, display the Application panel of the developer tools again to see how the data in session storage has changed.

