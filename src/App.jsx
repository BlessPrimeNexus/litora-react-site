import { useEffect, useState } from 'react';

// Pour que le bouton marche sans toucher au code : dans GitHub > Releases, publiez une release
// et ajoutez-y l'APK sous le nom « litora.apk ». Ce lien pointe toujours vers la dernière version.
const APK_URL = 'https://github.com/BlessPrimeNexus/litora-react-site/releases/latest/download/litora.apk';
const CONTACT = 'contact.nexoralabss@gmail.com';

const LINKS = [
  ['Contact', `mailto:${CONTACT}`],
  ['WhatsApp', 'https://wa.me/243822993775'],
  ['Instagram', 'https://www.instagram.com/justmeblessingdev11'],
  ['Facebook', 'https://www.facebook.com/justmeblessingdev11'],
  ['Telegram', 'https://t.me/justmeblessingdev'],
  ['YouTube', 'https://youtube.com/@blessprime_nexora'],
];

const FEATURES = [
  { icon: 'book', title: 'Lire', text: 'Comme dans un vrai livre, même hors ligne.' },
  { icon: 'pen', title: 'Écrire', text: 'Publiez vos histoires, chapitre par chapitre.' },
  { icon: 'users', title: 'Partager', text: 'Suivez vos auteurs, commentez, réagissez.' },
];

const PATHS = {
  book: <><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" /><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" /></>,
  pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>,
  home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></>,
  compass: <><circle cx="12" cy="12" r="10" /><path d="M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z" /></>,
  library: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
  user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  bell: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M7 10l5 5 5-5" /><path d="M12 15V3" /></>,
};

function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

function useRoute() {
  const read = () => (window.location.hash === '#/legal' ? 'legal' : 'home');
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => {
      setRoute(read());
      if (window.location.hash === '#/legal' || window.location.hash === '#/' || window.location.hash === '') window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#/" aria-label="LITORA">
        <img src="/litora-icon.png" alt="" width="34" height="34" />
        <span>LITORA</span>
      </a>
      <a className="btn btn-amber btn-sm" href={APK_URL}>Télécharger</a>
    </header>
  );
}

function Cover({ className, lines }) {
  return (
    <span className={`cover ${className}`}>
      {lines.map((l) => (
        <b key={l}>{l}</b>
      ))}
    </span>
  );
}

function Phone() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="screen">
        <div className="s-top">
          <div className="s-hello">
            <span className="s-avatar" />
            <div>
              <small>Bonjour</small>
              <strong>Que lisez-vous ?</strong>
            </div>
          </div>
          <span className="s-bell"><Icon name="bell" size={16} /></span>
        </div>

        <div className="s-feature">
          <div>
            <span className="s-pill">À LA UNE</span>
            <strong>Les saisons de Léa</strong>
            <small>Un été au bord de la mer</small>
          </div>
          <Cover className="c1" lines={['Les saisons', 'de Léa']} />
        </div>

        <p className="s-label">NOUVEAUTÉS</p>
        <div className="s-row">
          <div><Cover className="c2" lines={['La Pierre', 'du Vent']} /><small>La Pierre du Vent</small></div>
          <div><Cover className="c3" lines={['Orbite', 'silencieuse']} /><small>Orbite silencieuse</small></div>
          <div><Cover className="c4" lines={['La maison', 'au bord', 'du lac']} /><small>La maison au lac</small></div>
        </div>

        <div className="s-nav">
          <span className="on"><Icon name="home" size={19} /></span>
          <span><Icon name="compass" size={19} /></span>
          <span className="fab"><Icon name="pen" size={20} /></span>
          <span><Icon name="library" size={19} /></span>
          <span><Icon name="user" size={19} /></span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="tag">READ. WRITE. CONNECT.</p>
          <h1>
            Lisez. Écrivez. <em>Partagez.</em>
          </h1>
          <p className="lead">La bibliothèque sociale, dans votre poche.</p>
          <div className="cta">
            <a className="btn btn-amber" href={APK_URL}>
              <Icon name="download" size={20} /> Télécharger pour Android
            </a>
            <p className="note">Gratuit · Android 5.0 et plus</p>
          </div>
        </div>
        <div className="hero-visual">
          <Phone />
        </div>
      </section>

      <section className="features" aria-label="Ce que vous pouvez faire">
        {FEATURES.map((f) => (
          <article className="feature" key={f.title}>
            <span className="ico"><Icon name={f.icon} size={24} /></span>
            <div>
              <h2>{f.title}</h2>
              <p>{f.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="telecharger" className="band">
        <img src="/litora-icon.png" alt="Icône de LITORA" width="76" height="76" />
        <div className="band-text">
          <h2>Prêt à lire ?</h2>
          <p>Téléchargez LITORA, c'est gratuit.</p>
        </div>
        <a className="btn btn-amber" href={APK_URL}>
          <Icon name="download" size={20} /> Télécharger
        </a>
      </section>
    </main>
  );
}

function Legal() {
  return (
    <main className="legal">
      <a className="back" href="#/">← Retour</a>
      <h1>Confidentialité et règles</h1>
      <article className="card">
        <h2>Vos données</h2>
        <ul>
          <li>Seulement votre e-mail et votre pseudo pour créer le compte.</li>
          <li>Jamais vendues, aucune publicité.</li>
          <li>Supprimer votre compte efface vos données.</li>
        </ul>
      </article>
      <article className="card">
        <h2>La communauté</h2>
        <ul>
          <li>Respect avant tout : ni harcèlement, ni menaces, ni haine.</li>
          <li>Tout contenu peut être signalé et examiné.</li>
        </ul>
      </article>
      <article className="card">
        <h2>Publication</h2>
        <ul>
          <li>Publiez vos œuvres, ou celles que vous avez le droit de publier.</li>
          <li>Vous gardez tous vos droits d'auteur.</li>
          <li>Un livre n'est téléchargeable que si son auteur l'autorise.</li>
        </ul>
      </article>
      <p className="legal-contact">Une question ? <a href={`mailto:${CONTACT}`}>{CONTACT}</a></p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot-brand">
        <img src="/mayelia-logo.png" alt="" width="34" height="34" />
        <span>Une application <b>Mayelia</b></span>
      </div>
      <nav className="foot-links" aria-label="Liens">
        {LINKS.map(([label, href]) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener">{label}</a>
        ))}
        <a href="#/legal">Confidentialité</a>
      </nav>
      <p className="copy">© 2026 Mayelia</p>
    </footer>
  );
}

export default function App() {
  const route = useRoute();
  return (
    <div className="page">
      <Nav />
      {route === 'legal' ? <Legal /> : <Home />}
      <Footer />
    </div>
  );
}
