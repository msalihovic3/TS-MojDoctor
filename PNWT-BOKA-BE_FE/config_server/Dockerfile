FROM openjdk:11-jre-slim-buster
RUN apt-get update && apt-get install -y \
curl
COPY ./target/config_server-0.0.1-SNAPSHOT.jar config_server.jar
EXPOSE 8888
ENTRYPOINT ["java", "-jar", "config_server.jar"]