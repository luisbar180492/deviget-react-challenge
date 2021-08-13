# How to use

### Normal way

1. install nvm

    Instructions [here](https://github.com/nvm-sh/nvm#installing-and-updating)

2. clone the repo
```bash
git clone git@gitlab.com:luisbar/react-starter-kit.git
```

3. enter to the folder
```bash
cd react-starter-kit
```

4. install and choose version node required by the project
```bash
nvm install && nvm use
```

5. install dependencies
```bash
npm i
```

6. run the project
```bash
npm start
```

### Using docker

1. clone the project
```bash
git clone git@gitlab.com:luisbar/react-starter-kit.git
```

2. create the image
```bash
docker-compose build
```

3. run the container
```bash
docker-compose up -d
```
