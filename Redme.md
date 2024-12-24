# Docker Image 
1) Image:
Build the image: docker build -t imageName . (path of Docker File)
2) Container:
Run the container: docker run -d -p portFromOutside:portToContainer --name containerName imageNameBasedOnWhichContainerIsCreated

# Docker Cammand
1) Check images:
docker image ls or docker images
Remove image: docker image rm imageID or docker rmi IMAGE_ID_OR_NAME
2) Check running & Remove containers:
docker ps
Stop and delete running container: docker rm containerName -f or docker rm CONTAINER_ID_OR_NAME
Check all containers (including stopped ones): docker ps -a
Remove all stopped containers at once: docker container prune
Remove container and its volume: docker rm containerName -fv
Remove All :
 docker rm $(docker ps -a -q)
List containers
 docker ps -a --format "{{.ID}}\t{{.CreatedAt}}\t{{.Names}}"
3) Docker bash shell run command:
Run bash shell in container: docker exec -it containerName bash
4) Check logs for crash:
View container logs: docker logs containerName -f
5) Add environment variables:
Run container with environment variables: docker run -v %cd%:/app:ro -v /app/node_modules --env PORT=8080 -p 4000:8080 -d --name api-g-1 api-gateway-1
Load environment variables from .env file: --env-file ./.env
6) Check environment variables using bash:
Print environment variables: printenv
7) Remove anonymous volume:
Remove volume: docker volume volumeId
Remove all unused volumes: docker volume prune


# Docker volumes

Docker Volume : used while running container
1] Bind mount:
used to sync local folder changes with docker image so no need to build image
every time when code is changed
Syntax:
  -v pathOfFolerInLocal:pathOfFolderInContainer  
  ex:- Windows : -v %cd%:/app (if powershell: -v ${pwd}:/app) 
     - Linux/Mac : -v $(pwd):/app
Error :Ex. if you delete node_modules folder from local it will be deleted from container as well so be carefull why because of bind mount
Solution : create anonymous mount i.e. another Volume for node_modules folder of /app directory
cmd: -v %cd%:/app -v /app/node_modules
bind mount + anonymous mount
Problem : Bind mount makes connection between docker conatiner and local folder so if any things changed or any file deleted/updated from docker container it will change in local folder as well and it is vice versa.....
Solution : make bind mound read only cmd: -v %cd%:/app:accessLevel 
---Ex read only: -v %cd%:/app:ro 

2] Anynamous Volume
when create with every time we run conatiner it Always creates new volume so it will be waste of storage ex in above case for node_modules folder
docker volume volumeId
but if along with conatiner volume for database like mysql is created them it is not good to delete it
VIMP : in cmd " -v " is used to delete { Anynamous volumes + named volume }
( Never use -v if want to persist data using named volume for other conatiners)
Solution to remove unused anonymous volume: 
  1)run conatiner and  2) use cmd : docker prune
3] Named Volume:

to persist data means folder in conatiner?Image as well as in Host will save data so when conatiner is down or Image is removed data will be persised in host machine (see example for mongo in compose file)
can be used in multiple services

