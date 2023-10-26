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
