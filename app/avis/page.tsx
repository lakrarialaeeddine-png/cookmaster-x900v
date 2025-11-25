export default function AvisPage() {
  const avis = [
    ["⭐️⭐️⭐️⭐️⭐️","Je l’utilise 3x/semaine, incroyable","Sofia L"],
    ["⭐️⭐️⭐️⭐️⭐️","Offert à ma mère — elle cuisine tout","Thomas B"],
    ["⭐️⭐️⭐️⭐️⭐️","Thermomix trop cher — celui-ci fait tout","Ines R"],
  ];

  return (
    <main style={{maxWidth:"1024px",margin:"auto",padding:"40px"}}>
      <h1>Avis clients CookMaster X900™</h1>

      <div style={{marginTop:"25px",display:"grid",gap:"16px"}}>
        {avis.map(([stars,txt,name])=>(
          <div key={name} style={{
            background:"#fff",
            padding:"14px",
            borderRadius:"10px",
            boxShadow:"0 3px 8px rgba(0,0,0,0.1)"
          }}>
            <p>{stars}</p>
            <p>{txt}</p>
            <b style={{opacity:.6}}>{name}</b>
          </div>
        ))}
      </div>
    </main>
  );
}