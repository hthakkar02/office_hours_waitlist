# Spring Backend



## Getting started

To run this backend, you need to run the OfficeHoursQueueApplication.java. Also, until the docker container is set up for the SQL database you will need to run a local database to store API POST calls. I did this by downloading XAMPP. Once downloaded, head over to manager-osx (I'm on MAC so may be different for Windows) and go to "Manage Servers" and click on "Start All". I've had trouble lately getting the MySQL Database to start and to solve this issue I go into the terminal and run "sudo killall mysqld". It will ask for you system's password, but after that if you try to run the MySQL Database in Manager-osx it should work now. Once the servers are all running, go to the "Welcome" tab in manager-osx and click on "Go to Application". This will open your browser and you can go to the "phpMyAdmin" tab. Here, once you start running your Spring backend, the database and corresponding tables will populate. You now have a working database on your machine!


## Description
Backend to that handles calls to and from the frontend to the database, including API calls and instantiating the database tables


