## General
It's my interview application which I was proposed to do in 8 hours.
To run application run in cmd from directory with project 'yarn i' and then 'yarn start'

 ## Brief :
There is some mock data in store(for store use Redux/MobX), no connection to BE needed. if the page is refreshed, everything is restored to it's initial state.

 ## App requirements:
The main screen will list small posts (cards). Each post should display:
  Title
  Image
  Submitting timestamp(localdate)
  Submitting username
  Likes(count)
  Likes uo/down ( like/dislike)

 ## Available user actions:

When the user opens the app, he should his username(can't be empty) and only after this he will redirect to main page(with all the posts).

The main page should have a botton to allow user to add a post. The button should navigate to a different page with a form for the user to fill in the post's data
( title, image(uploaded from PC), description). After submitting the form redirects to the main page.

User can add new comment to posts( mocks and his own) and see the numbers of comments. Clicking the button add comment will open a modal with textarea to add new comment. When the user 
clicks button 'see comments' he will be pushed to a page with list of comments.

If comments has answer user should be able to see this answers and add his own answer for current comment.
User should be able to like/unlike posts, comments and answers to the comments. This action have to trigger changes of a global score. 

## Stack: 
React.js , MobX, React semantic UI, Styled Components, React Router V6, React Hooks




