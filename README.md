Docker image for application https://hub.docker.com/repository/docker/darbuki/dar-vcita

Hello and welcome to dar-vcita project
The project is seperated into several directories:
web-app - the application it self with its dockerimage
helm - the helm chart for the application


in order to deploy the helm chart : 
you must have nginx ingress installed on your cluster,
install inside the dar-vcita-helm directory 
helm install dar-vcita dar-vcita


