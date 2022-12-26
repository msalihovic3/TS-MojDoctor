Projekat je realizovan na predmetu Tehnologije sigurnosti Elektrotehničkog fakulteta u Unverziteta Sarajevu, Master studij, 1. godina.

Članovi tima (***MojDoktor***) koji su učestvovali u realizaciji ovog projekta su:

1. Adna Fejzic Kovac
2. Mirnesa Salihovic
3. Lejla Pirija 

## Opis projekta

MojDoktor web aplikacija služi za komunikaciju između pacijenta i doktora. Osnovna uloga aplikacije je da omogući pacijentima izbor i kontaktiranje doktora specijaliste iz željene oblasti zbog konsultacija i/ili zakazivanja pregleda. Aplikacija je namijenjena svim doktorima koji su zaposleni u određenoj zdravstvenoj ustanovi i žele biti na raspolaganju pacijentima putem online web platforme. Doktori imaju pristup arhivi medicinskih zapisa i zahtjeva pacijenata, a koji su upućeni njima, te mogućnost unosa i ažuriranja istih.. 

https://docs.google.com/document/d/1bS9PBUjshQ-DlZBHfd6ppPHO9lHWeIzdy9qxvG2Qdts/edit?usp=share_link

## Pokretanje pomoću Dockera

Nakon što se clone-a repozitorij, potrebno je buildati docker image za sve projekte. To se može uraditi sa naredbom kroz konzolu (nalazite se u repozitoriju sa svim projektima):

pod uslovom da Vam je defaultna verzija Jave na računaru minimalno 11. 


```bash
web-app

docker build -t web-app .

baza 

docker run --name basic-postgres --rm -e POSTGRES_USER=debug -e POSTGRES_PASSWORD=debug -e PGDATA=/var/lib/postgresql/data/pgdata -v /tmp:/var/lib/postgresql/data -p 5432:5432 -it postgres:14.1-alpine

user_service

docker build -t user_server .

```

Za dalje pokretanje potrebno je imati Docker instaliran na računaru, te opet kroz konzolu (nalazite se u repozitoriju sa svim projektima i docker-compose.yml fileom) pokrenuti **jednu od** sljedeće 2 naredbe:

```bash
docker-compose up --build
```
Nakon što se uspješno kreiraju svi containeri potrebno je sačekati da se svi servisi pokrenu, te da se pokrene frontend container, i nakon toga se može pristupiti stranici pomoću: 

[http://localhost:3000](http://localhost:3000)

## Tehnologije

Unutar projekta, urađena je kompletna web-aplikacija. Sastoji se od 4 mikroservisa: User. Mikroservisi su programirani koristeći Javu i postgesdb za bazu. Frontend aplikacija je React.js aplikacija.

