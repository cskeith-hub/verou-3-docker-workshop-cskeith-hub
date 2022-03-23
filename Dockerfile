FROM mattrayner/lamp:latest

# install dependencies
# RUN npm Instal -> if use a package manager like a library

#create a folder to contain the files
    #RUN mkdir /app

# create image of whole folder in the app folder
COPY . /app

# make workdirectory for app folder
WORKDIR /app

# setting up the connection with docker by running the above script
CMD ["/run.sh"]

# now use terminal commands in terminal:
    # docker build -t + image name

# run build

# docker run -t --app image name 