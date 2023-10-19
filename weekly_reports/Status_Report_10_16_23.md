# Status Report for the Week of 10/16/23

## Team Report

 - Previous week progress
   - Few backend endpoints were developed for data submission (from MLed detectors)
   - Dataset was fully prepared and loaded to the ML notebook
   - CNN - convolutional neural network development started - tensorflow with keras libs are being used

 - Progress and Issues
   - Dataset augmentation performed
   - Pycharm configured with pytest and pylint
   - Dataset transformation steps were added to ML notebook
   - Dataset label coordinates were normalized to allow relative coordinates with label mapping
   - 

 - Plans and Goals
   - Continue workin on layers development for CNN (input, convolutional, activation, ReLU)
   - Run ML (stretch goal)
   - Develop endpoint for FE data retreival calls to BE 
   - Fix linter wornings
   - Write some unit tests (midterm goal)
   - Team sync up


## Contrubitions of Individual Members

 - **Martins Fernanda Gregorini**

   - Progress and Issues
     - Basics functionality developent for the front end portion of the project
   - Plans and Goals
     - Build frontend prototype
       
 - **Nicanor Sanderson**

   - Progress and Issues
     - Developed functionality to transfer face scan event, time of event, and event image to flask app via json payload
     - Flask app moves an event image to physical storage 
   - Plans and Goals
     - Will work on containerizing code with Docker
     - Integrate app with ML file
     - Develop connectivity components from Flask to front-end
     
 - **Richard Paul McDowell**

   - Progress and Issues
     - Tried to get access to the resource that Nate provided, but couldn't get into it
     - Tried to get some pictures taken for the training, but got an error
   - Plans and Goals
     - Ask Nate what I did wrong with getting into the resource provided
     - Get into the resource and start using it and getting practice with it
     - Talk about the error that I got when I tried to get the traning pictures
      

 - **Nikolay Sizov**

   - Progress and Issues
     - Augmentation of the dataset has been performed
     - Number of samples in training/test/evaluation set increased from hundreds to thousands for better accuracy
     - Continue with CNN machine learning development 
   - Plans and Goals
     - Finish loading updated augmented dataset into ML training model
