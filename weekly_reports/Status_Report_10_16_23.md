# Status Report for the Week of 10/16/23

## Team Report

 - Previous week progress
   - A few backend endpoints were developed for data submission (from MLed detectors)
   - Dataset was fully prepared and loaded into the ML notebook
   - CNN - convolutional neural network development started - tensorflow with keras libs are being used

 - Progress and Issues
   - Dataset augmentation performed
   - Pycharm configured with pytest and pylint
   - Dataset transformation steps were added to ML notebook
   - Dataset label coordinates were normalized to allow relative coordinates with label mapping
  

 - Plans and Goals
   - Continue working on layers development for CNN (input, convolutional, activation, ReLU)
   - Run ML (stretch goal)
   - Develop endpoint for FE data retrieval calls to BE 
   - Fix linter warnings
   - Write some unit tests (midterm goal)
   - Team sync-up


## Contributions of Individual Members

 - **Martins Fernanda Gregorini**

   - Progress and Issues
     - Researched how to combine the backend more with the front end and how it would look with the goal of this project plan
     - Added onto the basic look of the website
   - Plans and Goals
     - Have the website close or ready to upload to GitHub to get feedback for further improvement
     - Figure out how to add the more specific functionalities that our project needs for the website
       
 - **Nicanor Sanderson**

  - Progress and Issues
     - Developed front-end endpoint for flask api
     - Reading Docker documentation
   - Plans and Goals
     - Will work on containerizing code with Docker
     - Continuing to integrate app with ML file
     - Will begin working on API testing with Postman
     
 - **Richard Paul McDowell**

   - Progress and Issues
     - Began to fix the error with the image trainer on Windows
     - Kept trying to get into the database that Nate gave me access to
   - Plans and Goals
     - Finish the changes to the code to make the image trainer compatible
     - Get into the resource and start using it and getting practice with it

      

 - **Nikolay Sizov**

   - Progress and Issues
     - Augmentation of the dataset has been performed
     - The number of samples in training/test/evaluation set increased from hundreds to thousands for better accuracy
     - Continue with CNN machine learning development 
   - Plans and Goals
     - Finish loading the updated augmented dataset into ML training model
