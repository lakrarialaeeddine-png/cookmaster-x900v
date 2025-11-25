"use client";

export default function ProductPage() {
  return (
    <main style={{maxWidth:"1024px",margin:"auto",padding:"40px"}}>
      <h1>CookMaster X900™ — Robot culinaire premium</h1>

      <p style={{marginTop:"18px", lineHeight:"1.7"}}>
        Le CookMaster X900™ est conçu en Belgique pour simplifier la cuisine au
        quotidien. Il remplace un blender, un robot pâtissier, un cuiseur vapeur
        et un hachoir grâce à son moteur puissant, sa lame titane multi-fonction,
        ses options de cuisson lente et ses programmes intelligents. Sa cuve inox
        haute résistance 3.6L permet de cuisiner pour 1 à 6 personnes sans effort.
        Le X900 est pensé pour les familles, les sportifs, les étudiants et toutes
        les personnes qui veulent cuisiner de manière saine, simple et rapide —
        sans passer des heures derrière les fourneaux.
      </p>

      <img src="/cook-kitchen.webp" alt="CookMaster X900 cuisine"
           style={{marginTop:"28px",borderRadius:"14px",width:"100%"}}/>

      <h2 style={{marginTop:"40px"}}>🧠 Programmes intelligents</h2>
      <p style={{lineHeight:"1.7"}}>
        Préparation automatique des soupes, sauces, pâtes, viandes mijotées,
        desserts, smoothies et 45 autres recettes. Les résultats sont constants,
        même pour les débutants.
      </p>

      <h2 style={{marginTop:"40px"}}>⚙️ Mode manuel — chef</h2>
      <p style={{lineHeight:"1.7"}}>
        Réglage de la vitesse, de la température et du temps.  
        Parfait pour les cuisiniers exigeants.
      </p>
    </main>
  );
}