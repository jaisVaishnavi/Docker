# Docker compose 
Docker Compose is a tool that allows you to define and manage multi-container Docker applications.

1. Commands Overview
Here are some basic and essential Docker Compose commands you should be familiar with:

Starting a service: docker-compose up
Running in detached mode: docker-compose up -d
Stopping services: docker-compose down
Viewing logs: docker-compose logs
Building or rebuilding images: docker-compose build
Scaling services: docker-compose up --scale service_name=3
Viewing the status of services: docker-compose ps


# structure of docker compose file

version: '3.8'  # Version of the Compose file format

services:  # Define the containers/services
  service_name:  # Name of the service
    image: image_name:tag  # Docker image to use for the service
    build:  # Use this if you want to build the image from a Dockerfile
      context: ./path_to_dockerfile  # Path to the directory containing the Dockerfile
      dockerfile: Dockerfile  # Dockerfile name (optional if named 'Dockerfile')
    ports:  # Port mapping for the container
      - "host_port:container_port"
    volumes:  # Mount volumes for persistent data storage
      - ./host_directory:/container_directory  # Host directory to container directory
    environment:  # Define environment variables
      VAR_NAME: value
    depends_on:  # Define dependencies between services
      - another_service

volumes:  # Define named volumes for data persistence
  volume_name: {}

networks:  # Define custom networks for communication b
