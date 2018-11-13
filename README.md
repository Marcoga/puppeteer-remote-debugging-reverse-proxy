# Puppeteer Remote Debugging behind an NGINX reverse proxy
## Requirements
* Docker
* Docker compose

# Steps to reproduce
```
docker-compose build
docker-compose up
```

You should be able to reach the remote debugging tools at http://localhost:9222 but not at http://localhost:8080/chrome-debugger/
