Projekat je realizovan na predmetu Praktikum - Napredne Web Tehnologije Elektrotehničkog fakulteta u Unverziteta Sarajevu, Master studij, 1. godina.

Članovi tima (***BOKA***) koji su učestvovali u realizaciji ovog projekta su:

1. Nasiha Imamovic (***nimamovic3@etf.unsa.ba***)
2. Neira Novalic (***nnovalic1@etf.unsa.ba***)
3. Mirnesa Salihovic (***msalihovic3@etf.unsa.ba***)
4. Lejla Pirija (***lpirija1@etf.unsa.ba***)

## Opis projekta

BOKA je aplikacija za rezervaciju mjesta/stola za event u ugostiteljskim objektima. Sastoji se od dvije vrste korisnika: gosta i zaposlenika ugostiteljskog objekta. 

Gost, nakon registracije na aplikaciju, ima mogucnost pregleda svih evenata, kao i ugostiteljskih objekata i ima priliku da rezervise mjesto u lokalu. Gost takodjer moze imati pregled u popunjenim mjestima za event, a dobit ce i notifikaciju o stanju svoje rezervacije. Također, gostu ce biti omogućeno ocjenjivanje usluge lokala.

Zaposlenici ugostiteljskog objekta su duzni unijeti infomracije o stolovima i broju stolica za te stolove, da bi kasnije mogli objaviti event a da bi gosti mogli rezervisati svoje mjesto. Ugostiteljski objekat ce imati mogucnost prihvatanja i odbijanja rezervacije uz obrazloženje, a prilikom svake gostove rezervacije, dobice notifikaciju o tome. 

## Pokretanje pomoću Dockera

Nakon što se clone-a repozitorij, potrebno je buildati sve projekte. To se može uraditi sa naredbom kroz konzolu (nalazite se u repozitoriju sa svim projektima):

```bash
./mvnw package -Dmaven.test.skip=true
```
pod uslovom da Vam je defaultna verzija Jave na računaru minimalno 11. 

U slučaju da neki build ne prođe, potrebno je ručno buildati projekat koji je pao, ili pokušati sa

```bash
mvn clean
mvn compile
mvn install
```
Nakon uspješnog buildanja, svaki projekat bi trebalo da sadrži target folder sa .jar fileom tog projekta.

Da bi smo izbuildali image za frontend potrebno je u direktoriju web-app pokrenuti sljedecu komandu:

```bash
docker build -f Dockerfile -t boka/frontend .
```

Za dalje pokretanje potrebno je imati Docker instaliran na računaru, te opet kroz konzolu (nalazite se u repozitoriju sa svim projektima i docker-compose.yml fileom) pokrenuti **jednu od** sljedeće 2 naredbe:

```bash
docker-compose up -d
docker-compose up
```
Nakon što se uspješno kreiraju svi containeri potrebno je sačekati da se svi servisi pokrenu, te da se pokrene frontend container, i nakon toga se može pristupiti stranici pomoću: 

[http://localhost:3000](http://localhost:3000)

## Tehnologije

Unutar projekta, urađena je kompletna web-aplikacija. Sastoji se od 4 mikroservisa: User, Restaurant, Resevation i Notification. Mikroservisi su programirani koristeći Javu i postgesdb za bazu. Frontend aplikacija je React.js aplikacija.


