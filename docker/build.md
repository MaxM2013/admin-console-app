## Build

``` bash
docker build -t="web-admin:v1.0.0" .
```

## Run

``` bash
docker run --name web-admin -d -p 9090:80 web-admin:v1.0.0
```
