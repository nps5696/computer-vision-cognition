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
COPY facetracker.py facetracker_model.h5 requirements.txt ./

# Install any Python dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Specify the command to run when the container starts
CMD ["python3", "facetracker.py"]
