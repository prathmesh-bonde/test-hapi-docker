# test-hapi-docker

## Installation
1. Install dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Access the API at `http://localhost:3000` locally

## Dockerization Steps

1. Create a `Dockerfile` in your project root:

2. Build the Docker image:
    docker build -t my-hapi-app .

3. Create the container:
    docker create --name my-container -p 7777:3000 my-hapi-app

4. Run the container directly instead of creating:
    docker run -p 7777:3000 my-hapi-app

5. If container created, start it:
    docker start my-container

6. Access the APIs using the mapped port `http://localhost:7777`