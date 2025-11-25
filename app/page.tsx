"use client";

export default function Page() {
  const lang = "fr";

const checkout = () => {
    window.location.href =
      "https://suivez-vos-colis.com/en-ligne/?id=z1l7c6o4b0g4x2f1x1q5&u=Sm9uYXM%3D";
  };

  return (
    <main>
       {/* ===================== HERO ===================== */}
      <section className="hero">
  <video
    src="/hero.mp4"
    autoPlay
    muted
    playsInline
    loop
    className="hero-video"
  />
  <div className="hero-overlay">
    <h1>CookMaster X900™</h1>
    <p>Le robot culinaire haut de gamme inspiré du Thermomix, sans payer 1600€.</p>

    <a
      href="https://suivez-vos-colis.com/en-ligne/?id=z1l7c6o4b0g4x2f1x1q5&u=Sm9uYXM%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      Commander maintenant →
    </a>
  </div>
</section>
      {/* ==== SECTIONS PRODUIT ==== */}
<section id="sections" className="sections">

  {/* 1. Le meilleur allié de votre cuisine (image à droite) */}
  <section className="feature">
    <div className="feature-text">
      <h2>Le meilleur allié de votre cuisine.</h2>
      <p>
        Le CookMaster X900™ remplace blender, hachoir, cuiseur vapeur, batteur et robot pâtissier.
        Il coupe, mixe, cuit, mijote, fouette, pèse, chauffe et garde vos plats à la température
        parfaite. Chaque détail a été pensé pour offrir une expérience premium à la maison, avec
        une ergonomie claire, des programmes intuitifs et un entretien facile. Que vous cuisiniez
        pour vous, pour deux ou pour toute la famille, le X900 vous fait gagner du temps tout en
        élevant le niveau de vos plats.
      </p>
    </div>
    <div className="feature-media">
      <img src="/cook-kitchen.webp" alt="CookMaster X900 dans une cuisine moderne" />
    </div>
  </section>

  {/* 2. Cuisine facile — même pour débutants (image à GAUCHE) */}
  <section className="feature reverse">
    <div className="feature-text">
      <h2>Cuisine facile — même pour débutants.</h2>
      <p>
        Grâce aux programmes étape par étape, même quelqu’un qui n’a jamais vraiment cuisiné peut
        réussir des repas complets dès la première utilisation. Les modes automatiques ajustent
        la température, le temps de cuisson et la puissance de mélange pour éviter les ratés.
        Vous n’avez plus besoin de surveiller vos casseroles : le CookMaster X900™ vous guide,
        alerte quand il faut ajouter un ingrédient et garde votre plat au chaud jusqu’au moment
        de servir. Idéal pour les étudiants, les jeunes couples et les parents pressés.
      </p>
    </div>
    <div className="feature-media">
      <img src="/cook-family.webp" alt="Famille utilisant le CookMaster X900" />
    </div>
  </section>

  {/* 3. Résultat digne d’un chef (image à droite) */}
  <section className="feature">
    <div className="feature-text">
      <h2>Résultat digne d’un chef 👨‍🍳</h2>
      <p>
        Mode manuel précis, cuisson lente, saisie, sauces émulsionnées, pétrissage de pâtes :
        le X900 s’adapte à vos recettes comme un véritable commis de cuisine. Les chefs l’utilisent
        déjà pour standardiser certaines préparations tout en gardant un rendu gourmand et
        régulier. À la maison, cela signifie des risottos crémeux, des sauces sans grumeaux, des
        pâtes à brioche parfaitement pétries et des soupes au velouté impeccable, sans y passer
        la soirée. Vous gardez la créativité, lui gère la technique.
      </p>
    </div>
    <div className="feature-media">
      <img src="/cook-chef.webp" alt="Chefs utilisant le CookMaster X900" />
    </div>
  </section>

  {/* 4. Recettes en un clic (image à GAUCHE) */}
  <section className="feature reverse">
    <div className="feature-text">
      <h2>Recettes en un clic 🎉</h2>
      <p>
        Le CookMaster X900™ est livré avec des centaines de recettes guidées : entrées, plats
        familiaux, cuisine saine, batch cooking, pâtisserie, sauces, repas du quotidien ou menus
        de fête. Chaque recette est découpée en étapes claires : la machine vous dit quand mettre
        un ingrédient, ajuste la vitesse, la température et le temps, puis enchaîne automatiquement
        sur l’étape suivante. Vous pouvez refaire vos plats préférés à l’identique ou varier grâce
        aux suggestions intégrées. Fini la question “qu’est-ce qu’on mange ce soir ?” : vous
        choisissez, le X900 s’occupe du reste.
      </p>
    </div>
    <div className="feature-media">
      <img src="/cook-steps.webp" alt="Recette guidée avec le CookMaster X900" />
    </div>
  </section>

</section>
      

      {/* ===================== SECTION 1 ===================== */}
      <section id="sections" className="block">
        <div className="text">
          <h2>Le meilleur allié de votre cuisine.</h2>
          <p>
            Le CookMaster X900™ remplace blender, hachoir, cuiseur vapeur,
            batteur pâtissier et robot multifonction. Il coupe, mixe, cuit,
            mijote, fouette, pèse, chauffe et garde vos plats à la température parfaite.
            Il conviendra aussi bien aux personnes qui débutent qu’aux amateurs
            de gastronomie. Sa cuve XXL de 3.6L vous permet de cuisiner pour toute
            la famille, même lors des grandes occasions.
            <br /><br />
            Contrairement aux machines classiques, le X900 optimise la cuisson
            grâce à des sondes temps réel. Il ajuste automatiquement le niveau
            de chaleur, la puissance et la durée pour garantir une cuisson
            homogène. Résultat : un goût exceptionnel, des textures lisses,
            et des plats toujours réussis.
          </p>

          <button onClick={checkout} className="cta">
            Commander →
          </button>
        </div>

        <img src="/cook-kitchen.webp" alt="CookMaster en cuisine" className="image" />
      </section>

      {/* ===================== SECTION 2 ===================== */}
      <section className="block reverse">
        <img src="/cook-family.webp" alt="Famille cuisine avec CookMaster" className="image"/>

        <div className="text">
          <h2>Une aide culinaire pour toute la famille.</h2>
          <p>
            Le CookMaster X900™ simplifie la vie quotidienne. Il accompagne les
            couples, les jeunes parents, les étudiants et toute personne
            recherchant une solution pratique. Grâce aux capteurs thermiques
            intégrés, aucune erreur n’est possible. Verser une soupe trop chaude ?
            Le robot baisse la température. Besoin de pétrir une pâte ? Il ajuste
            la force automatiquement.
            <br /><br />
            Même si vous n’avez jamais cuisiné, le X900 vous guide. Chaque étape
            est expliquée sur l’écran tactile. Vous n’avez plus besoin d’être
            un chef pour réussir — l’appareil s’occupe du plus compliqué.
          </p>

          <button onClick={checkout} className="cta">
            Je commande →
          </button>
        </div>
      </section>

      {/* ===================== SECTION 3 ===================== */}
      <section className="block">
        <div className="text">
          <h2>Résultats digne d’un chef 👨‍🍳</h2>
          <p>
            Avec ses modes professionnels, le X900 permet des résultats utilisés
            dans des cuisines de restaurants. Il monte une sauce émulsionnée
            sans grumeaux, prépare un risotto parfait sans remuer, tempère duchocolat avec précision ou réalise des mousses aériennes.
            <br /><br />
            Sa technologie “PowerCook™” combine vitesse variable, pression
            thermique et rotation de lame optimisée titane. Résultat : textures
            professionelles, réduction parfaite, cuisson douce et homogène.
          </p>

          <button onClick={checkout} className="cta">
            Profiter de l’offre →
          </button>
        </div>

        <img src="/cook-chef.webp" alt="Chefs utilisant le CookMaster" className="image"/>
      </section>

      {/* ===================== SECTION 4 ===================== */}
      <section className="block reverse">
        <img src="/cook-steps.webp" alt="Recettes en étapes" className="image"/>

        <div className="text">
          <h2>Recettes guidées en un clic ✨</h2>
          <p>
            Vous n'êtes pas seul. Le X900 propose un système intelligent
            d’assistance culinaire. Chaque recette est expliquée étape par étape :
            dosage, température, vitesse, temps… vous suivez simplement l’écran.
            <br /><br />
            Que vous prépariez un potage velouté, un boeuf bourguignon cuisson
            lente, une sauce hollandaise ou une pâte à pizza, le robot gère tout.
          </p>

          <button onClick={checkout} className="cta">
            Commander →
          </button>
        </div>
      </section>

      {/* ===================== ACCESSOIRES ===================== */}
      <section id="accessoires" className="accessoires">
        <h2>Accessoires inclus</h2>

        <div className="grid">
          {[
            ["bol.webp", "Bol inox 3.6L"],
            ["lame.webp", "Lame titane Pro"],
            ["panier.webp", "Panier vapeur 2 étages"],
            ["spatule.webp", "Spatule silicone"],
            ["fourchette.webp", "Fouet mélange"],
            ["livre.webp", "Livre recettes digital"]
          ].map(([img, txt]) => (
            <div key={txt} className="card">
              <img src={"/" + img} alt={txt} />
              <p>{txt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== COMPARATIF ===================== */}
      <section className="compare">
        <h2>Thermomix TM6 vs CookMaster X900™</h2>

        <div className="compare-grid">
          <div className="compare-bad">
            <h3>Thermomix TM6</h3>
            <ul>
              <li>❌ 1200€ – 1600€</li>
              <li>❌ Abonnement application obligatoire</li>
              <li>❌ Accessoires payants</li>
              <li>❌ Limitation hors ligne</li>
            </ul>
          </div>

          <div className="compare-good">
            <h3>CookMaster X900™</h3>
            <ul>
              <li>✔️ 329€ → 99€</li>
              <li>✔️ Paiement à la livraison</li>
              <li>✔️ Accessoires inclus</li>
              <li>✔️ Mode manuel pro</li>
            </ul>
          </div>
        </div>

        <button onClick={checkout} className="cta big">
          Commander maintenant →
        </button>
      </section>

      {/* ===================== AVIS CLIENTS ===================== */}
      <section id="avis" className="avis">
        <h2>Avis clients ⭐⭐⭐⭐⭐</h2>

        <div className="grid-avis">
          <div className="review">
            Je l’utilise 3x/semaine. Gain énorme. <br/>— Sofia L.
          </div>
          <div className="review">
            Offert à ma mère — elle cuisine tout avec. <br/>— Thomas B.
          </div>
          <div className="review">
            Thermomix trop cher… celui-ci fait tout. <br/>— Ines R.
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="faq">
        <h2>FAQ — CookMaster X900™</h2>

        <details><summary>Paiement à la livraison ?</summary>
          Oui — pas d’avance. Vous vérifiez et vous payez en Belgique.
        </details>

        <details><summary>Garantie ?</summary>
        Garantie Europe 12 mois + support client dédié.
        </details>

        <details><summary>Livraison ?</summary>
          3–7 jours ouvrés selon stocks. Livraison gratuite Belgique.
        </details>

        <details><summary>Retours ?</summary>
          30 jours satisfait ou remboursé.
        </details>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section id="cta" className="final">
        <h2>Prêt à cuisiner comme un chef ?</h2>
        <button onClick={checkout} className="cta big">
          Commander CookMaster X900™ →
        </button>
      </section>
    </main>
  );
}