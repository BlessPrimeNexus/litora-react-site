import { useEffect, useState } from 'react';

// Pour que le bouton marche sans toucher au code : dans GitHub > Releases, publiez une release
// et ajoutez-y l'APK sous le nom « litora.apk ». Ce lien pointe toujours vers la dernière version.
const APK_URL = 'https://github.com/BlessPrimeNexus/litora-react-site/releases/latest/download/litora.apk';
const CONTACT = 'contact.nexoralabss@gmail.com';

const WHY = [
  { icon: 'book', title: 'Lire comme dans un vrai livre', text: 'Mise en page soignée, tournage de page, et lecture hors ligne quand le réseau manque.' },
  { icon: 'pen', title: 'Publier sans passer par un éditeur', text: 'Écrivez chapitre par chapitre. Vous gardez vos droits, et vos lecteurs vous suivent directement.' },
  { icon: 'users', title: 'Une vraie communauté', text: 'Suivez vos auteurs préférés, commentez, réagissez, et ne manquez aucune nouveauté.' },
  { icon: 'shield', title: 'Gratuite, sans publicité', text: 'Aucune pub, pas de revente de vos données. Vous lisez, point.' },
];

const FOR_READERS = [
  'Une bibliothèque qui se tient à jour toute seule',
  'Une progression sauvegardée sur tous vos appareils',
  'Des livres à télécharger et à lire partout',
];

const FOR_AUTHORS = [
  'Vos chapitres publiés en quelques secondes',
  'Un tableau de bord avec lectures et réactions',
  'Une audience qui revient pour la suite',
];

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
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
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

      <WhyLitora />
      <Captures />
      <Creator />

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

function WhyLitora() {
  return (
    <section className="why" aria-label="Pourquoi LITORA">
      <p className="kicker">POURQUOI LITORA</p>
      <h2 className="why-title">Une seule application pour lire, écrire et rencontrer.</h2>
      <div className="why-grid">
        {WHY.map((w) => (
          <article className="why-card" key={w.title}>
            <span className="why-ico"><Icon name={w.icon} size={24} /></span>
            <h3>{w.title}</h3>
            <p>{w.text}</p>
          </article>
        ))}
      </div>
      <div className="audiences">
        <div className="aud">
          <h3>Pour les lecteurs</h3>
          <ul>{FOR_READERS.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div className="aud">
          <h3>Pour les auteurs</h3>
          <ul>{FOR_AUTHORS.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function MockHome() {
  const genres = ['Romance', 'Horreur', 'Aventure', 'Histoire'];
  const books = [['La Pierre', 'du Vent', 'c2'], ['Orbite', 'silencieuse', 'c3'], ['La maison', 'au bord du lac', 'c4']];
  return (
    <div className="mock mock-home">
      <div className="m-hero">
        <div className="m-top">
          <span className="m-avatar" />
          <div className="m-hello"><small>Bonjour</small><strong>Blessing</strong></div>
          <span className="m-bell" />
        </div>
        <div className="m-search"><span className="m-search-ic" />Rechercher un livre…<span className="m-tune" /></div>
      </div>
      <div className="m-genres">{genres.map((g) => <span key={g}>{g}</span>)}</div>
      <div className="m-feature">
        <span className="m-pill">À LA UNE</span>
        <div className="m-feature-row">
          <div><strong>Les saisons de Léa</strong><small>Un été au bord de la mer</small></div>
          <span className="m-cover c1" />
        </div>
      </div>
      <div className="m-stats"><span><b>3</b>lus</span><span><b>12</b>en cours</span><span><b>1</b>publiés</span></div>
      <p className="m-label">CONTINUER LA LECTURE</p>
      <div className="m-continue"><span className="m-cover c2 sm" /><div><strong>La Pierre du Vent</strong><small>Chapitre 4 · 64 %</small><div className="m-bar"><span className="m-bar-fill" style={{ width: '64%' }} /></div></div></div>
      <p className="m-label">NOUVEAUTÉS</p>
      <div className="m-row">{books.map(([a, b, c]) => <div key={a}><span className={`m-cover ${c}`}><b>{a}</b><b>{b}</b></span></div>)}</div>
      <div className="m-nav"><span className="on" /><span /><span className="fab" /><span /><span /></div>
    </div>
  );
}

function MockReader() {
  return (
    <div className="mock mock-reader">
      <div className="m-rtop"><span>Le premier matin</span><span>Chapitre 1</span></div>
      <h4>Le premier matin</h4>
      <p><span className="m-drop">L</span>e vent de la côte avait changé pendant la nuit. Léa le sentit avant même d'ouvrir la fenêtre, comme on sent une promesse.</p>
      <p>Elle descendit sans bruit jusqu'à la plage, où les mouettes se disputaient déjà les restes de la marée.</p>
      <p className="m-pg">1</p>
      <div className="m-rbar"><span /></div>
    </div>
  );
}

function MockLibrary() {
  return (
    <div className="mock mock-lib">
      <h4>Ma bibliothèque</h4>
      <div className="m-tabs"><span className="on">Lecture</span><span>Téléchargés</span><span>Collections</span></div>
      <div className="m-book"><span className="m-cover c2 sm" /><div><strong>La Pierre du Vent</strong><small>Fantasy · 64 %</small><div className="m-bar"><span className="m-bar-fill" style={{width:'64%'}} /></div></div></div>
      <div className="m-book"><span className="m-cover c3 sm" /><div><strong>Orbite silencieuse</strong><small>Hors ligne · 2,1 MB</small><div className="m-bar"><span className="m-bar-fill" style={{width:'22%'}} /></div></div></div>
      <div className="m-book"><span className="m-cover c4 sm" /><div><strong>Le carnet de Mama Esther</strong><small>Terminé</small><div className="m-bar"><span className="m-bar-fill" style={{width:'100%'}} /></div></div></div>
    </div>
  );
}

function MockPublish() {
  return (
    <div className="mock mock-pub">
      <h4>Nouveau chapitre</h4>
      <div className="m-field">Titre : Le retour</div>
      <div className="m-editor">Le vent a tourné ce matin. Léa a retrouvé la lettre, pliée dans le carnet…</div>
      <div className="m-row-btns"><span>Enregistrer</span><span className="primary">Publier</span></div>
      <p className="m-tip">Publication programmée : demain, 8 h</p>
    </div>
  );
}

function Captures() {
  const shots = [
    { kind: 'real', src: '/captures/profil.jpg', alt: 'Page de profil LITORA', caption: 'Votre profil : bio, abonnés, livres.' },
  ];
  return (
    <section className="captures" aria-label="Aperçu de l'application">
      <p className="kicker">L'APPLICATION</p>
      <h2 className="captures-title">Voici ce que vous verrez.</h2>
      <div className="shots">
        {shots.map((sh, i) => (
          <figure className="shot" key={i}>
            <div className="shot-frame">
              {sh.kind === 'real' ? (
                <img src={sh.src} alt={sh.alt} width="540" height="1200" loading="lazy" />
              ) : (
                <div className="shot-screen">{sh.node}</div>
              )}
            </div>
            <figcaption>{sh.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Creator() {
  return (
    <section className="creator" aria-label="Mayelia">
      <img src="/mayelia-logo.png" alt="Logo Mayelia" width="64" height="64" />
      <div>
        <p className="kicker">UNE APPLICATION MAYELIA</p>
        <h2>Mayelia construit des outils utiles, simples et soignés.</h2>
        <p className="creator-by">
          LITORA est créée par <strong>Blessing Lusakumunu</strong>, développeur et fondateur de Mayelia
          (<em>BLESS | DEV 404</em>).
        </p>
        <a className="creator-link" href="#/legal">Mentions et règles</a>
      </div>
    </section>
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
