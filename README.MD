Project contains:

- React Web app
- Express App
- Nodejs Worker
- Redis App
- Postgres App
- Nginx

Start with
`docker-compose -f docker-compose-dev.yml up --build` or `docker-compose -f docker-compose-dev.yml up` in development mode.

It will start app in localhost:5030

##Production Deployement

- circleci
- AWS ELastic Beanstalk
- AWS RDS
- AWS ElastiCache

It is done in feature branch : https://github.com/kraaarpit/multi-docker/tree/docker-elastic-beanstalk

This branch will also make use of kubernetes for same project
