# mcc1134r-mod6-react-data

Create a Development API 

Check out the [Git Classroom Assignments](https://canvas.mccneb.edu/courses/16589/pages/git-classroom-assignments "Git Classroom Assignments") to get your assignment for this week. 

## **Challenge** 

Create a Development API to use in your application. 

1. Create a project named 'myblogapi' 
2. Install json-server from npm 
3. Install faker from npm 
4. Install lodash from npm 
5. Create a database named 'myblog.db' 
  1. Add 3 posts object and assign following properties 
    1. id (number) 
    2. category (text) 
    3. author (text) 
    4. avatar (url) 
    5. title (text) 
    6. subtitle (text) 
    7. body (text) 
    8. publishDate (date) 
    9. Image (url) 
    10. ImageCaption (text) 
  2. Add 3 products with the following properties 
    1. id 
    2. productName 
    3. productDescription () 
    4. price (money) 
    5. productImage 
    6. upc (alpha - 18 characters) 
    7. quantity (number) 
  3. Add 3 users with the following properties 
    1. userid, 
    2. avatar 
    3. first 
    4. last 
    5. fullName (rendered using first and last) 
    6. email 
    7. longitude 
    8. latitude 
    9. address 
    10. city 
    11. state 
    12. zipCode 
    13. posts 
    14. lastLogin 
  4. Add 3 event objects with the following properties 
    1. id, 
    2. title 
    3. subtitle, 
    4. description, 
    5. location,  (full address) 
    6. contact, 
    7. contactEmail 
    8. eventImage 
    9. eventTime 
    10. EventDuration 
6. Create a 'generator' using the faker and lodash libraries. 
  1. Use lodash to render the posts 
  2. User Faker to vary the text fields. 
  3. Use image generator for images such as [https://picsum.photos/](https://picsum.photos/) or [https://www.unsplash.com](https://www.unsplash.com/) 
    1. Create 100 posts 
    2. Create 50 products 
    3. Create 20 users 
    4. Create 30 events 
7. run json-server with the generator.js 
8. Open root localhost:3000 to show root page with all four endpoints and take a screen shot. 
9. Copy the results to myblogs-full.db 
10. Take screen shots of each object 

### To submit this assignment: 

1. Update your code via GitHub. 
2. Save your assignment underneath the 2-Assignment folder and commit your work. 
3. Take a screenshot of your result after committing your work to Github. 
4. Click Attach Files to upload your screenshot. 
5. Please also paste a link to your repository.  
6. Click Submit.