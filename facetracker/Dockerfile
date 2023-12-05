FROM ubuntu:22.04
#FROM continuumio/anaconda
FROM jjanzic/docker-python3-opencv 

# set creds to rtsp stream 
ENV RTSP_USERNAME=RTSP_USER_NAME
ENV RTSP_PASSWORD=RTSP_PASSWORD
ENV RTSP_SERVER_ADDRESS=RTSP_IP
#ENV DISPLAY=:99

# Update the package list and install essential packages
#RUN apt-get update && \
#    apt-get install -y \
#    python3 \
#    python3-pip \
#    xauth \
#    xorg \
#    libgl1-mesa-glx \
#    libglib2.0-0 \  
#    && rm -rf /var/lib/apt/lists/*

#RUN conda install opencv

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install any Python dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy your application code into the container
COPY facetracker.py facetracker_model.h5 .

# Specify the command to run when the container starts
CMD ["python", "facetracker.py"]
#CMD ["Xvfb", ":99", "-screen", "0", "1024x768x16"]
