import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>

        {/* ===== HEADER ===== */}
        <header className="header">
          <div className="header-left">
            <Link href="/" className="logo">
              CookShop Belgium™
            </Link>
          </div>

          <nav className="nav">
            <Link href="/#sections">Caractéristiques</Link>
            <Link href="/#accessoires">Accessoires</Link>
            <Link href="/avis">Avis clients</Link>
            <Link href="/faq">FAQ</Link>
           <a
  href="https://suivez-vos-colis.com/en-ligne/?id=z1l7c6o4b0g4x2f1x1q5&u=Sm9uYXM%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  Commander maintenant →
</a>
          </nav>

          <div className="lang">
            <Link href="/?lang=fr">🇫🇷 FR</Link>
            <Link href="/?lang=de">🇩🇪 DE</Link>
          </div>
        </header>

        {/* ===== PAGE ===== */}
        <main>
          {children}
        </main>

        {/* ===== STICKY CTA MOBILE ===== */}
        <a
  href="https://suivez-vos-colis.com/en-ligne/?id=z117c604bd8g4x2f1x1q58u=5m9u20w%3D"
  className="btn-sticky"
>
  Commander maintenant — 99€
</a>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="footer-grid">
            <div>
              <p>©2025 CookShop Belgium™ — Tous droits réservés.</p>
              <p>Paiement à la livraison — Garantie 12 mois — Support Belgique</p>
            </div>

            <div className="footer-pay">
              <img src="/visa.png" alt="Visa" />
              <img src="/mastercard.png" alt="Mastercard" />
              <img src="/amex.png" alt="American Express" />
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}