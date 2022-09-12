# Movie Hub

This is a full-stack project consisting of the React front-end part and a sinatra ActiveRecord backend with an API written in Ruby. Seed data is generated with Faker gems.

This project is part of the requirements to complete phase 3 of the moringa-flatiron shool curriculum (Ruby programming language)

## backend github link: https://github.com/mbolonzi-design/movie-backend

## Author
This Project was developed by **Mbolonzi Peter**.

## Project Description
Movie Hub is your one site stop for all kinds of movies, you can easily add, delete and update reviews on the movies of your choice.


## Project Setup Instructions.
In order to set up this project locally on your machine, 
clone the repository in the folder of your choice locally.

After cloning, first change(cd) the directory to the front end folder and run a quick **npm install** on the command line. This will install all the necessary node modules required for the react front-end.
Once the installation is complete, you can run **npm start** to go live and view the react project on your web- browser

With this 2 tasks complete, change directory to the backend folder and run a quick **bundle install** which will also install the necessary required gems for the backend application.
After bundle install, you will need 2 more comands to set up your server and get it live.

First, you have to run **bundle exec rake db:migrate** which will create your database and set up all your tables in the local environment. You can also run **bundle exec rake db:seed** to populate your tables with some starter data, though this is not entirely neccessary. 

Last but not least, run **bundle exec rake server** to get your server running and host your database locally. After starting the server, you will however need to refresh your react frontend application in the browser, so that a connection can be established. 

You can now view all your interns, edit their details, add new interns and even delete them. Aditionally, you can also view the company's details according to departments or supervisors.

## Copyright & License Information
This is an Open Source Project with an MIT license. For more Information on the license terms and condition, see the attached [LICENSE](./LICENSE)