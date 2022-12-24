FROM openjdk:11-jre-slim-buster
COPY ./target/api_gateway-0.0.1-SNAPSHOT.jar api_gateway.jar
EXPOSE 8083
ENTRYPOINT ["java", "-jar", "api_gateway.jar"]