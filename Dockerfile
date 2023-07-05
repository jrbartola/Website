# STAGE 1) Compile the React files in the build stage
FROM node:16 as build-stage

WORKDIR /app/www

COPY /app/www ./
RUN npm install
RUN npm run build


# STAGE 2) Build our Docker container using the python3.6 base image
FROM python:3.6

# Copy the app/ directory to the Docker image
ADD app/ /app
WORKDIR /app

# Copy only the bundled React files to our Golang image
COPY --from=build-stage /app/www/static/js www/static/js

# Install all python packages listed in our requirements file
RUN pip install -r python/requirements.txt

# Expose port 3000 of the container to the host (this computer)
EXPOSE 3000

## Launch the wait tool and then your application
CMD /usr/local/bin/python python/main.py
