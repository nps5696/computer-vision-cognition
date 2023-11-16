# Status Report for the Week of 11/06/23

## Team Report

 - Previous week progress
   - Machine Learning Model Developed
   - Trained model deployed and fed with camera frames
   - Model hyperparameter tuning started

 - Progress and Issues
   - Backend and Frontend functionality tested and verified as working as expected 
   - Added functionality for trained model face detection events submission to backend service
   - Adam optimizer issue fixed
   - Model retrained with much better accuracy 
  

 - Plans and Goals
   - Dokerize each component(FE, BE, ML-BE) into images
   - Configure GitHub Actions to build and upload images to DockerHub
   - Prepare deployment How-To, verify the procedure, deploy images(try utilizing GitHub Actions) to AWS EC2, test functionality


## Contributions of Individual Members

 - **Martins Fernanda Gregorini**

   - Progress and Issues
     - got more information on how the front end ideally should look like with what the back end is going
     - figured out other tools to use to expand the bones of the front enddata
   - Plans and Goals
     - finish off the front end with the help of the back end
     -bug fix any issues of exportation that we're having with react app
       
 - **Nicanor Sanderson**

   - Progress and Issues
     - Added latest event, left, right arrows buttons for event detail traversal on front-end
     - Docker images for front-end and flask api updated
   - Plans and Goals
     - Issue with event images being too large, must set standard image dimensions
 
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
