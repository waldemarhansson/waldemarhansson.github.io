import "../App.css"

const Clients = () =>{

const clients = [  "DANIEL WELLINGTON",  "SVENSKA SPEL",  "MEMIRA",  "BOOKMAN",  "KIDS BRAND STORE",  "KRY",  "SVT",  "KUNDKRAFT",  "ELLE GERMANY",  "SPRINTCROWD",  "GRÖNQVISTS",  "TELIA",  "INABO",  "YMR TRACK CLUB",  "BERLUTI",  "ELLE USA",  "GRAZIA FRENCHE",  "GRAZIA ITALY",  "ZINK MAGAZINE",  "PERFECT MAGAZINE",  "FAULT MAGAZINE",  "DEALER DE LUXE",  "REMIX MAGAZINE.",  "RALPH LAUREN ADVERTORIAL",  "DIOR HOMME ADVERTORIAL",  "MAIRE CLAIRE",  "HARPERS BAZAAR",  "PRIM MAGAZINE",  "KURV MAGAZINE",  "L'AUTRE MAGAZINE",  "TIGER MAGAZINE",  "PLAZA MAGAZINE",  "PLAZA KVINNA",  "VOLKSWAGEN",  "BOOKMAN",  "VOLVO",  "PHILIPS",  "SONY",  "TRE",  "TELIA",  "LYLE & SCOTT",  "CLARINS USA",  "SCANIA"]

const clientsPerList = Math.ceil(clients.length / 3); // Calculate number of clients per list

// Split the clients into three separate lists
const list1 = clients.slice(0, clientsPerList);
const list2 = clients.slice(clientsPerList, clientsPerList * 2);
const list3 = clients.slice(clientsPerList * 2);

// Adjust the length of the middle list to match the shortest list
const shortestLength = Math.min(list1.length, list2.length, list3.length);
list2.splice(shortestLength);
    return(


<div className="client-mother-div">
      <h4>CLIENTS</h4>
      <div className="clients-wrapper">
        <ul className="client-list1">
          {list1.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
        <ul className="client-list2">
          {list2.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
        <ul className="client-list3">
          {list3.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
      </div>
    </div>
    )
}
export default Clients;