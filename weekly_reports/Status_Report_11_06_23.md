# Status Report for the Week of 11/06/23

## Team Report

 - Previous week progress
   - Machine Learning Model Developed
   - Trained model deployed and fed with camera frames
   - Model hyperparameter tuning started

 - Progress and Issues
   - Added functionality for trained model face detection events submission to backend service
   - Adam optimizer issue fixed
   - Model retrained with much better accuracy 
  

 - Plans and Goals
   - Dokerize each components(FE, BE, ML-BE) into images
   - Configure GitHub Actions to build and upload images to DockerHub
   - Prepare deployment How-To, verify the procedure, deploy images(try utilizing GitHub Actions) to AWS EC2, test functionality


## Contributions of Individual Members

 - **Martins Fernanda Gregorini**

   - Progress and Issues
     -Got the bones of the frontend website up on react and ready to add in other features like camera, log for date and time, etc.
     -Had issues having react work on vscode on pc since went from using my laptop to my pc
   - Plans and Goals
     - Add onto the front end whether it be pages to click onto FAQ and credits page on website or camera/log on the website
       
 - **Nicanor Sanderson**

   - Progress and Issues
     - Flask api is now functional with front-end and able to upload event data
   - Plans and Goals
     - Will develop 3 button layout for front-end, a latest event button and left/right arrows to traverse previous events
     - Must update docker requirements due to added dependencies
     - Must integrate local api with repo version
     
 - **Richard Paul McDowell**

   - Progress and Issues
     - Downloaded the necessary applications for the front end to run
     - With the front end work in front of me started to play around and come up with ways to progress the webpage
   - Plans and Goals
     - Push changes to the webpage
     - Add a basic UI for now

      

 - **Nikolay Sizov**

   - Progress and Issues
     - Adam optimizer fixed for the machine learning model, regression accuracy inceased (error rate ~9 to ~0.3)
     - Functionaluty developed for ML model - frame scanning application communication with backend service
     - Face tracking app testing with backend app together, able to detect, submit and retrieve events 
   - Plans and Goals
     - Dockerize applications, make dockerfiles, push to dockerhub image registry from GitHub Actions
     - Package model into docker image 
