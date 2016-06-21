# sample-docker-node-stuff

Node server example in node-server dir. You can imagine with gulp/webpack
similar strategy with mapped drives. will upload samples when I have time.
See notes inside docker-compose.yml about different watch configs depending on
docker. Try switching to `npm run-script dev-legacy` if watching doesnt work.

To run, do: `docker-compose up`

Remember, `docker-compose up` only builds on the first try. For subsequent runs
do
```
docker-compose build
docker-compose up
```

Or `docker-compose up --build`

Thats all for now :)
