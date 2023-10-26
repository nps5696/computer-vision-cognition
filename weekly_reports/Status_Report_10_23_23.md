# Status Report for the Week of 10/16/23

## Team Report

 - Previous week progress
   - Dataset augmentation performed
   - Pycharm configured with pytest and pylint
   - Dataset transformation steps were added to ML notebook
   - Dataset label coordinates were normalized to allow relative coordinates with label mapping

 - Progress and Issues
   - ML CNN layers are writen
   - ML and hyperparameters config in development
   - Some python linter errors fixed
  

 - Plans and Goals
   - Continue working on layers development for CNN (input, convolutional, activation, ReLU)
   - Run ML (stretch goal)
   - Develop endpoint for FE data retrieval calls to BE 
   - Continue fixing linter errors
   - Write some unit tests (midterm goal)
   - Team sync-up


## Contributions of Individual Members

 - **Martins Fernanda Gregorini**

   - Progress and Issues
     - Went a different route and researched templates to work from with react framework
   - Plans and Goals
     - Pick a framework to work on the website from and have it uploaded to github
     - Ask professor some details about specific github templates and what some tags mean
     - Ask professor what type of template look I should go for to rework
       
 - **Nicanor Sanderson**

    - Progress and Issues
     - Api has been containerized
     - Working with Postman for api testing
   - Plans and Goals
     - Learning about CNN process for integration with API
     - Will take webcam images to be added to dataset
     
 - **Richard Paul McDowell**

   - Progress and Issues
     - Tried to change how I run the programs on my Windows computer
     - Didn't have much time to do work this week due to personal conflicts
   - Plans and Goals
     - Assist Nikolay and/or Fernanda with their code where they need it
     - Work on continuing learning how to use the resource Nate provided

      

 - **Nikolay Sizov**

   - Progress and Issues
     - Machine Learning model is in development, basic layers were added, work is being centered around hyperparameters tuning
     - Refactoring is planned to separate part of the code which is not involved in actual machine learning model and on unit test addition
   - Plans and Goals
     - Add unit tests
     - Figure out best hyperparamenters setup
     - Possibly save tensors as files to avoid building them from images each time, this will speed up  development and remove requirement to run previous notebook steps
