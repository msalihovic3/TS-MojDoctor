FROM openjdk:11-jre-slim-buster
RUN apt-get update && apt-get install -y \
curl
COPY ./target/user_service-0.0.1-SNAPSHOT.jar user_service.jar
EXPOSE 8091
ENTRYPOINT ["java", "-jar", "user_service.jar"]