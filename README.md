# CLI-application

List contact: https://ibb.co/PC23Try
Get contact by id: https://ibb.co/QkWNZpR
Add contact: https://ibb.co/sJ0qyHZ
Remove contact: https://ibb.co/fvp48Kb

Pasul 1
Inițializează proiectul folosind comanda npm init.
Creează fișierul index.js la rădăcina proiectului.
Adaugă pachetul nodemon ca o dependenţă de dezvoltare (devDependencies).
În fișierul package.json adaugă scripturi pentru a porni index.js.
Scriptul start, pornește index.js folosind node.
Scriptul start:dev, pornește index.js folosind nodemon.
Pasul 2
Creează folderul db la rădăcina proiectului.

Pentru a stoca contactele, descarcă și folosește fișierul contacts.json plasându-l în folderul db.

La rădăcina proiectului, creează fișierul contacts.js.

Importă modulele fs și path pentru a lucra cu sistemul de fișiere.
Declară variabila contactsPath și atribuie-i ca valoare calea către fișierul contacts.json. Pentru a construi această cale, utilizează metodele furnizate de modulul path.
Adaugă funcții pentru a lucra cu colecția de contacte. În funcții, folosește modulul fs și metodele readFile() și writeFile().
Exportă funcțiile create folosind module.exports.
contacts.js

Pasul 3
Importă modulul contacts.js în fișierul index.js și testează funcțiile pentru lucrul cu contactele.

Pasul 4
În fișierul index.js se importă pachetul yargs pentru a parsa argumentele liniei de comandă. Folosește funcția invokeAction(), care primește tipul acțiunii și argumentele necesare. Funcția apelează metoda necesară din fișierul contacts.js și îi transmite argumentele necesare.

Pasul 5
Rulează comenzile în terminal și fă o captură de ecran separată pentru fiecare rezultat al comenzilor:

# Obținerea și afișarea întregii liste de contacte sub formă de tabel (console.table)

node index.js --action list

# Obținerea unui contact după id

node index.js --action get --id 5

# Adăugarea unui contact

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Ștergerea unui contact

node index.js --action remove --id=3
Pasul 6 - Predarea temei
Capturile de ecran pot fi încărcate în orice serviciu gratuit de stocare a imaginilor în cloud (Exemplu: monosnap, imgbb.com) și link-urile corespunzătoare vor fi adăugate în fișierul README.md. Creează acest fișier la rădăcina proiectului.

Criterii de acceptare a temei
Este creat un repository cu tema — CLI application.
Codul corespunde cerințelor tehnice.
La execuția codului nu apar erori neprelucrate.
Numele variabilelor, proprietăților și metodelor încep cu o literă mică și sunt scrise cu CamelCase. Sunt folosite substantive în limba engleză.
Numele unei funcții sau metode conține un verb.
În cod nu există secțiuni comentate.
Proiectul funcționează corect în versiunea actuală LTS Node.
