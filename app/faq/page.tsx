"use client";

export default function FAQPage(){
  const data = [
    ["Paiement à la livraison ?","Oui — Belgique uniquement."],
    ["Garantie ?","2 ans — remplacement complet."],
    ["Livraison ?","3 à 5 jours ouvrables"],
    ["Retours ?","30 jours — remboursement 100%"],
  ];

  return(
    <main style={{maxWidth:"1024px",margin:"auto",padding:"40px"}}>
      <h1>FAQ – CookMaster X900™</h1>

      {data.map(([q,a])=>(
        <details key={q} style={{marginTop:"14px",padding:"10px 0"}}>
          <summary style={{fontWeight:600,cursor:"pointer"}}>{q}</summary>
          <p style={{marginTop:"6px"}}>{a}</p>
        </details>
      ))}
    </main>
  );
}