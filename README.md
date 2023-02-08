# ProiectReact
Aplicatia web "Serventi" are rolul de a oferi clientilor unui restaurant italienesc o interfata web prin care sa poata comanda mancare, iar restaurantul poate vedea usor comenzile utilizatorilor acestea fiind stocate in baza de date. Proiectul a fost realizat in Typescript, cu front-end in React si back-end in Firebase.
Cerintele proiectului si cum au fost rezolvate:

- Sa aiba mai multe rute: 
Aplicatie contine 6 rute publice: 
"/" – Pagina principala a site-ului care contine descrierea restaurantului, 
"/pizza" – Pagina de unde clientii pot comanda pizza,
"/paste – Pagina de unde clientii pot comanda paste,
"/bauturi" - Pagina de unde clientii pot comanda bauturi,
"/shoppingcart" - Pagina de unde se trimite comanda(care poate fi accesata prin icon-ul cu cosul de cumparaturi),
"/contact" – Pagina de contact care afiseaza programul si harta unde se gaseste restaurantul.

- Sa se foloseasca componente reutilizabile:
ProductDisplay – Este folosita in paginile de "/pizza","/paste si "/bauturi" pentru a arata datele despre produse care sunt trimise ca prop

Sa se comunice intre componente:
Componentele comunica intre ele, de exemplu in pagina Pizza componentele ProductDisplay.tsx, Pizza.tsx si interfata IPizza.tsx sunt folosite concomitent pentru a reusi afisarea produselor. De asemenea, paginile "/shoppingcart" si "/profile" primesc ca prop datele despre produsele din cos, respectiv datele despre user.

- Rute publice si private :
Rutele publice: "/" ,"/pizza" ,"/paste ,"/bauturi" ,"/shoppingcart","/contact"
Rutele private: 
"/profile"- in care un utilizator poate sa vada date despre el
"/login" – de unde un utilizator se poate inregistra,loga sau poate reseta parola.
 Aceste pagini nu apar concomitent in NavBar.  
Cat timp utilizator nu este logat apare pagina de "/login".
Daca un utilizator este logat apare pagina de "/profile".

-Sa fie cel putin o pagina cu un form ( login/register) :
Pagina "/login" contine un formular pentru inregistrare,logare si resetare parola.

-Firebase sau orice alt mediu de backend :
Am folosit Firebase in care am creat colectii pentru clienti,comenzi si pentru produse:pizza,paste si bauturi. Legatura bazei de date este facuta in dbconnection.

-Folosierea unui state manager:
Pentru state manager am folosit Redux. Acesta verifica state-ul aplicatiei prin reducers, observand daca un utilizator da click pe butoane(de adaugare produs in cos, incrementare numar produse in cos, decrementare numar produse in cos, golire cos, etc.) pentru a putea modifica informatia afisata pe ecran.

Aplicatia este inspirata dupa Trattoria Monza.
