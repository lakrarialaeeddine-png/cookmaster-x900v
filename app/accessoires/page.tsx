export default function AccessoiresPage() {
  const items = [
    ["/bol.webp","Bol inox 3.6L"],
    ["/lame.webp","Lame titane"],
    ["/panier.webp","Panier vapeur 2 niveaux"],
    ["/spatule.webp","Spatule silicone"],
    ["/fourchette.webp","Fouet mélange"],
    ["/livre.webp","Livre recettes digital"],
  ];

  return (
    <main style={{maxWidth:"1024px",margin:"auto",padding:"40px"}}>
      <h1>Accessoires inclus avec le X900</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"30px",
        marginTop:"30px"
      }}>
        {items.map(([src,label])=>(
          <div key={src} style={{textAlign:"center"}}>
            <img src={src} alt={label}
                 style={{borderRadius:"12px",width:"100%"}} />
            <p style={{marginTop:"8px",fontWeight:600}}>{label}</p>
          </div>
        ))}
      </div>
    </main>
  );
}