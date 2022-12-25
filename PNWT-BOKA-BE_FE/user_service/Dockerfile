FROM maven:3.6.3-jdk-11 AS MAVEN_BUILD
COPY ./ ./
RUN mvn clean package -Dmaven.test.skip=true

FROM openjdk:11
COPY --from=MAVEN_BUILD target/user_service-0.0.1-SNAPSHOT.jar user_service.jar
EXPOSE 8091
ENTRYPOINT ["java", "-jar", "backend.jar"]