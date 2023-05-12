const Clients = () =>{

const clients = [  "DANIEL WELLINGTON",  "SVENSKA SPEL",  "MEMIRA",  "BOOKMAN",  "KIDS BRAND STORE",  "KRY",  "SVT",  "KUNDKRAFT",  "ELLE GERMANY",  "SPRINTCROWD",  "GRÖNQVISTS",  "TELIA",  "INABO",  "YMR TRACK CLUB",  "BERLUTI",  "ELLE USA",  "GRAZIA FRENCHE",  "GRAZIA ITALY",  "ZINK MAGAZINE",  "PERFECT MAGAZINE",  "FAULT MAGAZINE",  "DEALER DE LUXE",  "REMIX MAGAZINE INT.",  "RALPH LAUREN ADVERTORIAL",  "DIOR HOMME ADVERTORIAL",  "MAIRE CLAIRE",  "HARPERS BAZAAR",  "PRIM MAGAZINE",  "KURV MAGAZINE",  "L'AUTRE MAGAZINE",  "TIGER MAGAZINE",  "PLAZA MAGAZINE",  "PLAZA KVINNA",  "VOLKSWAGEN",  "BOOKMAN",  "VOLVO",  "PHILIPS",  "SONY",  "TRE",  "TELIA",  "LYLE & SCOTT",  "CLARINS USA",  "SCANIA"]



    return(



<div className="client-mother-div">
<h3>CLIENTS</h3>
<div className="clients-wrapper">
    

{clients && clients.map((client, index) => {
        return <li key={index}>{client}</li>;
      })}

</div>
</div>
    )
}
export default Clients;