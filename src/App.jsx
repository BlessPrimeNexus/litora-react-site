import { useEffect, useState } from 'react';

const APK_URL = 'https://github.com/';
const VERSION = '1.0.0';
const CONTACT = 'contact.nexoralabss@gmail.com';

const FEATURES = [
  { icon: '📖', title: 'Lire', text: 'Un lecteur confortable : taille, police et thème au choix, reprise automatique et lecture hors ligne.' },
  { icon: '✍️', title: 'Publier', text: 'Écrivez dans un éditeur soigné, ou importez un EPUB ou un PDF vérifié avant publication.' },
  { icon: '🔎', title: 'Découvrir', text: 'Genres, tendances, recommandations et recherche par titre, auteur ou série.' },
  { icon: '💬', title: 'Échanger', text: 'Abonnez-vous aux auteurs, commentez, réagissez et recevez les nouveautés.' },
  { icon: '📊', title: 'Suivre', text: 'Votre bibliothèque, vos collections, votre progression et vos statistiques.' },
  { icon: '🛡️', title: 'Protéger', text: 'Signalements, blocage et règles claires pour un espace sûr et respectueux des droits d’auteur.' },
];

const READER_POINTS = [
  'Thèmes papier, blanc, sépia et nuit',
  'Marque-pages et sommaire',
  'Lecture hors ligne des livres téléchargés',
  'Enregistrement du livre en EPUB sur votre téléphone',
];

const STEPS = [
  { n: '1', title: 'Écrivez', text: 'Créez votre livre, ajoutez vos chapitres, programmez leur publication.' },
  { n: '2', title: 'Publiez', text: 'Chaque chapitre apparaît dans le fil de vos abonnés et dans la découverte.' },
  { n: '3', title: 'Analysez', text: 'Lectures, progression des lecteurs et réactions dans votre tableau de bord.' },
];

const SOCIALS = [
  ['E-mail', `mailto:${CONTACT}`],
  ['WhatsApp', 'https://wa.me/243822993775'],
  ['Instagram', 'https://www.instagram.com/justmeblessingdev11'],
  ['Facebook', 'https://www.facebook.com/justmeblessingdev11'],
  ['Telegram', 'https://t.me/justmeblessingdev'],
  ['YouTube', 'https://youtube.com/@blessprime_nexora'],
];

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('litora-theme') || '');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (theme) localStorage.setItem('litora-theme', theme);
  }, [theme]);
  const toggle = () =>
    setTheme((t) => {
      const dark = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      return dark ? 'light' : 'dark';
    });
  return [theme, toggle];
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav({ onToggleTheme }) {
  return (
    <header className='nav'>
      <a className='brand' href='#top' aria-label='LITORA accueil'>
        <img src='/litora-icon.svg' alt='' width='36' height='36' />
        <span>LITORA</span>
      </a>
      <nav className='links' aria-label='Navigation principale'>
        <a href='#fonctions'>Fonctionnalités</a>
        <a href='#auteurs'>Auteurs</a>
        <a href='#telecharger'>Télécharger</a>
        <a href='#mayelia'>Mayelia</a>
      </nav>
      <div className='nav-actions'>
        <button className='icon-btn' type='button' onClick={onToggleTheme} aria-label='Changer de thème'>◐</button>
        <a className='btn btn-small' href='#telecharger'>Télécharger</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-text reveal'>
        <p className='eyebrow'>Une bibliothèque sociale</p>
        <h1>
          Lisez. Écrivez. <em>Rencontrez</em> vos lecteurs.
        </h1>
        <p className='lead'>
          LITORA réunit lecteurs et auteurs dans une même application : des histoires à lire confortablement, des livres à publier chapitre par chapitre, et une communauté qui réagit, commente et suit.
        </p>
        <div className='hero-cta'>
          <a className='btn btn-primary' href='#telecharger'>Télécharger l'application</a>
          <a className='btn btn-ghost' href='#fonctions'>Découvrir</a>
        </div>
        <p className='slogan'>READ. WRITE. CONNECT.</p>
      </div>
      <div className='hero-visual reveal' aria-hidden='true'>
        <div className='phone'>
          <div className='phone-top'>
            <span className='dot' />
            <span className='pill'>Accueil</span>
          </div>
          <div className='card-book'>
            <span className='cover cv1' />
            <div><b>Les saisons de Léa</b><small>Un roman · 3 chapitres</small></div>
          </div>
          <div className='card-book c2'>
            <span className='cover cv2' />
            <div><b>La Pierre du Vent</b><small>Fantasy · Tome 1</small></div>
          </div>
          <div className='card-book c3'>
            <span className='cover cv3' />
            <div><b>Orbite silencieuse</b><small>Science-fiction</small></div>
          </div>
          <div className='bottom-nav'>
            <i /><i /><i className='fab' /><i /><i />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id='fonctions' className='section'>
      <div className='section-head reveal'>
        <p className='eyebrow'>Fonctionnalités</p>
        <h2>Tout ce qu'il faut, rien de superflu</h2>
      </div>
      <div className='grid-3'>
        {FEATURES.map((f) => (
          <article className='feature reveal' key={f.title}>
            <span className='ico'>{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReaderSection() {
  return (
    <section className='section split'>
      <div className='reveal'>
        <p className='eyebrow'>Lecture</p>
        <h2>Une page, comme dans un vrai livre</h2>
        <p>Le texte est mis en page pour être lu : police Lora, texte justifié, lettrine au début des chapitres, et un tournage de page qui se courbe sous le doigt.</p>
        <ul className='checks'>
          {READER_POINTS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className='page-mock reveal' aria-hidden='true'>
        <span className='chap'>Chapitre 1</span>
        <h4>Le premier matin</h4>
        <p>
          <span className='drop'>L</span>e vent de la côte avait changé pendant la nuit. Léa le sentit avant même d'ouvrir la fenêtre, comme on sent une promesse.
        </p>
        <p>Elle descendit sans bruit jusqu'à la plage, où les mouettes se disputaient déjà les restes de la marée.</p>
        <p className='pg'>1</p>
      </div>
    </section>
  );
}

function Authors() {
  return (
    <section id='auteurs' className='section'>
      <div className='section-head reveal'>
        <p className='eyebrow'>Pour les auteurs</p>
        <h2>Publiez, suivez et faites grandir votre lectorat</h2>
      </div>
      <div className='grid-3'>
        {STEPS.map((s) => (
          <article className='step reveal' key={s.n}>
            <span className='num'>{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id='telecharger' className='section reveal'>
      <div className='dl-card'>
        <img src='/litora-icon.svg' alt='Icône de LITORA' width='92' height='92' />
        <div>
          <p className='eyebrow'>Télécharger</p>
          <h2>LITORA pour Android</h2>
          <p className='muted'>Version {VERSION} · Android 5.0 et plus · Gratuit</p>
          <div className='dl-actions'>
            <a className='btn btn-primary' href={APK_URL} download rel='noopener'>Télécharger l'APK</a>
            <button className='btn btn-ghost' type='button' disabled>iOS · bientôt</button>
          </div>
          <p className='fine'>Ouvrez le fichier téléchargé et autorisez l'installation depuis votre navigateur. Une mise à jour s'installe par-dessus la version précédente.</p>
        </div>
      </div>
    </section>
  );
}

function Mayelia() {
  return (
    <section id='mayelia' className='section mayelia reveal'>
      <img src='/mayelia-mark.svg' alt='Logo Mayelia' width='64' height='64' />
      <div>
        <p className='eyebrow'>Édité par</p>
        <h2>Mayelia</h2>
        <p>Une bibliothèque d'applications utiles, simples et soignées. LITORA est la première. Fondateur et développeur : Blessing Lusakumunu (BLESS | DEV 404).</p>
        <div className='socials'>
          {SOCIALS.map(([label, href]) => (
            <a key={label} href={href} target='_blank' rel='noopener'>{label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Legal() {
  return (
    <section className='section legal-block'>
      <h2>Mentions et règles</h2>
      <div className='legal-card' id='confidentialite'>
        <h3>Confidentialité</h3>
        <p>Nous collectons le minimum nécessaire : e-mail et pseudo pour le compte, contenus publiés, progression de lecture et informations techniques indispensables. Vos données sont hébergées de façon sécurisée et ne sont ni vendues ni utilisées pour de la publicité. La suppression du compte efface vos données personnelles.</p>
      </div>
      <div className='legal-card' id='regles'>
        <h3>Règles de la communauté</h3>
        <p>Pas de harcèlement, de menaces, de discours haineux, de contenus sexuels impliquant des mineurs, de désinformation délibérée, d'usurpation d'identité ni de spam. Les signalements sont examinés et peuvent entraîner le retrait d'un contenu ou la suspension d'un compte.</p>
      </div>
      <div className='legal-card' id='publication'>
        <h3>Conditions de publication</h3>
        <p>Vous ne publiez que des œuvres dont vous détenez les droits, ou pour lesquelles vous avez une autorisation. Vous gardez vos droits d'auteur. Les livres du domaine public proviennent de Project Gutenberg et d'Internet Archive. Un livre n'est téléchargeable que si vous l'autorisez.</p>
        <p className='fine'>Résumé à faire relire par un juriste avant toute diffusion large. Contact : {CONTACT}</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className='foot'>
      <div className='foot-brand'>
        <img src='/litora-icon.svg' alt='' width='28' height='28' /> LITORA · <span>READ. WRITE. CONNECT.</span>
      </div>
      <nav aria-label='Liens légaux'>
        <a href='#confidentialite'>Confidentialité</a>
        <a href='#regles'>Règles</a>
        <a href='#publication'>Publication</a>
        <a href={`mailto:${CONTACT}`}>Contact</a>
      </nav>
      <p>© 2026 Mayelia. Tous droits réservés.</p>
    </footer>
  );
}

export default function App() {
  const [, toggleTheme] = useTheme();
  useReveal();
  return (
    <>
      <div className='bg' aria-hidden='true'>
        <span className='blob b1' />
        <span className='blob b2' />
        <span className='blob b3' />
      </div>
      <Nav onToggleTheme={toggleTheme} />
      <main id='top'>
        <Hero />
        <Features />
        <ReaderSection />
        <Authors />
        <Download />
        <Mayelia />
        <Legal />
      </main>
      <Footer />
    </>
  );
}
