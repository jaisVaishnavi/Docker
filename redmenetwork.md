# Commands and Explanations:

Check available networks (docker network ls): This command lists all the Docker networks available on your system. It provides information such as the network ID, name, driver, and scope.

1.docker network ls
Inspect a network (docker network inspect network_id): This command allows you to inspect the details of a specific Docker network identified by its network ID. It provides detailed information about the network configuration, including subnet, gateway, connected containers, and more.

2.docker network inspect network_id
Create a new network (docker network create name --subnet 10.0.0.0/24): This command creates a new Docker network with the specified name and subnet. Replace name with the desired network name. The --subnet option specifies the subnet range that the network will use. In this example, it's set to 10.0.0.0/24.

3.docker network create name --subnet 10.0.0.0/24
Add a container to the new network (docker network connect network_name container_name): This command connects an existing Docker container to a specified network. Replace network_name with the name of the network you want to connect the container to, and container_name with the name or ID of the container you want to connect.

4.docker network connect network_name container_name
Remove a container from the default network (docker network disconnect network_name container_name): This command disconnects a container from a specified network. It removes the container from the network specified by network_name. Replace network_name with the name of the network and container_name with the name or ID of the container you want to disconnect.

5.docker network disconnect network_name container_name
These commands are useful for managing Docker networks, enabling communication between containers, and defining how containers are isolated from each other.

======================================== cmd : ALL conatiners have DNS Provider===================================================

1 check network : docker network ls 2 inspect : docker network inspect network_id 3 create Network :


# Types of Networks:
Bridge Network: The default network type used when no specific network is defined. Containers are isolated, but can communicate with each other.
Host Network: The container shares the host machine’s network stack.
None Network: The container has no network connectivity.
Custom Network: Allows for more control over how containers communicate within the Docker Compose setup.