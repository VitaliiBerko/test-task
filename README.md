# test-task

Bundler - Vite

Web application - User cards

Web application - User cards
Preparation

    Clone the repository with the command git clone https://github.com/dimadimaya/tweets-cards2.0
    Make sure you have the LTS version of Node.js installed on your computer. Download and install her if necessary.
    Set the basic dependencies of the project as a command npm install.
    To start, execute the command npm start.
    Go to the address in the browser http://localhost:3000/tweets-cards2.0

To create the front-end part of the Web application, the following were used:

    Vite
    Redux Toolkit
    Redux Persist
    Axios
    React loader spinner
    React router dom
    React select

To create the back-end part of the Web application, the following were used:

    Mockapi

MockAPI
The main functionality of the application:

    The '/tweets' page displays user cards with the number of tweets and the number of followers. When you click on the Follow button, the text changes to Following. Also the color of the button changes. And yours is added to the number of followers (i.e. +1).
    When the page is updated, the final result of the user's actions is recorded. That is, if you click on the button and refresh the page, the button remains the same in the Following state with the corresponding color, and the follower count is NOT decreases to the initial value.
    When you click the button again, its text and color change to the original state The number of followers also changes. It decreases by 1.
    Routing is implemented in the application:

    '/' – Home page.
    '/tweets’ - page displaying tweets. The tweets page has a Back button that takes you to the main page. If the user logged in for non-existent route, he gets to a page with an error and a button to return to the main (home) page.

    User filtering is implemented in the application. This is a Dropdown with 3 options: show all, follow, followings show all - show all tweets. follow - show tweets with follow status. followings - show tweets with following status

About
dimadimaya.github.io/tweets-cards2.0/
Resources
Readme
Stars
0 stars
Watchers
2 watching
Forks
0 forks
Report repository
Releases
No releases published
Packages
No packages published
Environments 1

    github-pages Active

Languages

JavaScript 52.0%
CSS 25.0%

    HTML 23.0% 

Footer
© 2023 GitHub, Inc.
Footer navigation

    Terms
    Privacy
    Security
    Status
    Docs
    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

