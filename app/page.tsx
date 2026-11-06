 "use client";

import { useState } from "react";
import {
  Home, Compass, Radio, ShoppingBag, MessageCircle, Bell, UserRound,
  Settings, Search, Plus, Image as ImageIcon, Video, Smile, Heart,
  MessageSquare, Share2, Bookmark, MoreHorizontal, Flame, Users,
  TrendingUp, ChevronDown, Globe2, Sparkles, Menu, X, Send
} from "lucide-react";

const posts = [
  {
    name: "Amina K.",
    handle: "@amina.creates",
    time: "Il y a 18 min",
    avatar: "A",
    color: "peach",
    verified: true,
    text: "Petit rappel : tu n'as pas besoin d'aller vite. Tu as juste besoin de continuer. ✨ Sur quoi travaillez-vous cette semaine ?",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    likes: "2,4 k",
    comments: "184",
    shares: "39",
    tag: "Créativité"
  },
  {
    name: "David M.",
    handle: "@david.moves",
    time: "Il y a 42 min",
    avatar: "D",
    color: "blue",
    verified: false,
    text: "Kinshasa, on se retrouve ce soir pour parler de création, d'idées et de projets. Le direct commence à 19h ! 🔴",
    likes: "846",
    comments: "62",
    shares: "21",
    tag: "Communauté"
  }
];

const trends = [
  { tag: "#CreateEveryday", posts: "12,8 k publications" },
  { tag: "#Kinshasa", posts: "8 420 publications" },
  { tag: "#TechForAll", posts: "5 190 publications" },
];

function Avatar({ label, color = "violet", small = false }: { label: string; color?: string; small?: boolean }) {
  return <div className={`avatar ${color} ${small ? "small" : ""}`}>{label}</div>;
}

export default function HomePage() {
  const [active, setActive] = useState("Accueil");
  const [liked, setLiked] = useState<number[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [postText, setPostText] = useState("");
  const [published, setPublished] = useState<string[]>([]);

  const navItems = [
    { label: "Accueil", icon: Home },
    { label: "Découvrir", icon: Compass },
    { label: "Lives", icon: Radio, badge: "3" },
    { label: "Boutique", icon: ShoppingBag },
    { label: "Messages", icon: MessageCircle, badge: "2" },
    { label: "Notifications", icon: Bell },
    { label: "Mon profil", icon: UserRound },
  ];

  function publish() {
    if (!postText.trim()) return;
    setPublished([postText.trim(), ...published]);
    setPostText("");
  }

  return (
    <main className="app-shell">
      <header className="mobile-header">
        <button className="icon-button" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Ouvrir le menu">
          {mobileMenu ? <X size={21} /> : <Menu size={21} />}
        </button>
        <a className="brand" href="#"><span className="brand-mark">t</span><span>TUZA<span className="brand-light"> fly</span></span></a>
        <button className="icon-button"><Bell size={20} /></button>
      </header>

      <aside className={`left-sidebar ${mobileMenu ? "open" : ""}`}>
        <a className="brand desktop-brand" href="#"><span className="brand-mark">t</span><span>TUZA<span className="brand-light"> fly</span></span></a>
        <div className="sidebar-label">MENU PRINCIPAL</div>
        <nav className="main-nav">
          {navItems.map(({ label, icon: Icon, badge }) => (
            <button key={label} onClick={() => { setActive(label); setMobileMenu(false); }} className={`nav-item ${active === label ? "active" : ""}`}>
              <Icon size={19} strokeWidth={1.9} />
              <span>{label}</span>
              {badge && <span className="nav-badge">{badge}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-divider" />
        <div className="sidebar-label">VOS ESPACES</div>
        <button className="nav-item"><Users size={19} /><span>Communautés</span></button>
        <button className="nav-item"><Bookmark size={19} /><span>Enregistrés</span></button>
        <div className="sidebar-bottom">
          <div className="language"><Globe2 size={16} /><span>Français</span><ChevronDown size={14} /></div>
          <button className="nav-item"><Settings size={19} /><span>Paramètres</span></button>
          <div className="mini-profile">
            <Avatar label="R" color="violet" small />
            <div><strong>Rinspack</strong><span>@rinspack</span></div>
            <MoreHorizontal size={18} />
          </div>
        </div>
      </aside>

      <section className="main-column">
        <div className="topbar">
          <div><p className="eyebrow">LUNDI 02 NOVEMBRE 2026</p><h1>Bonjour, Rinspack <span>✦</span></h1><p className="subheading">Voici ce qui se passe dans votre communauté.</p></div>
          <div className="top-actions">
            <label className="search-box"><Search size={17} /><input placeholder="Rechercher sur TUZA fly" /></label>
            <button className="icon-button notification-button"><Bell size={19} /><i /></button>
          </div>
        </div>

        <div className="feed-tabs"><button className="selected">Pour vous</button><button>Abonnements</button><button>Populaire</button></div>

        <section className="stories">
          <div className="section-heading"><div><h2>À découvrir</h2><p>Des personnes à suivre</p></div><button className="text-button">Tout voir <span>→</span></button></div>
          <div className="story-row">
            <div className="story-card add-story"><div className="story-ring add"><Plus size={20} /></div><strong>Votre story</strong><span>Partager un moment</span></div>
            {[
              ["M","Maya L.","peach"],["J","Jonas B.","blue"],["S","Sarah N.","green"],["K","Kevin T.","orange"]
            ].map(([letter,name,color]) => (
              <div className="story-card" key={name}><div className={`story-ring ${color}`}><Avatar label={letter} color={color} /></div><strong>{name}</strong><span>Créateur</span></div>
            ))}
          </div>
        </section>

        <section className="composer card">
          <div className="composer-top"><Avatar label="R" /><textarea value={postText} onChange={(e) => setPostText(e.target.value)} placeholder="Qu'avez-vous envie de partager aujourd'hui ?" /></div>
          <div className="composer-bottom"><div className="composer-tools"><button><ImageIcon size={18} /><span>Photo</span></button><button><Video size={18} /><span>Vidéo</span></button><button><Smile size={18} /><span>Humeur</span></button></div><button className="primary-button" onClick={publish}><Send size={15} /> Publier</button></div>
        </section>

        {published.map((text, i) => (
          <article className="post card" key={`new-${i}`}><div className="post-header"><Avatar label="R" /><div className="post-author"><strong>Rinspack <span className="verified">✓</span></strong><span>@rinspack · À l'instant</span></div><button className="more-button"><MoreHorizontal size={20} /></button></div><p className="post-text">{text}</p><div className="post-actions"><button><Heart size={18} /> J'aime</button><button><MessageSquare size={18} /> Commenter</button><button><Share2 size={18} /> Partager</button></div></article>
        ))}

        {posts.map((post, i) => (
          <article className="post card" key={post.handle}>
            <div className="post-header"><Avatar label={post.avatar} color={post.color} /><div className="post-author"><strong>{post.name} {post.verified && <span className="verified">✓</span>}</strong><span>{post.handle} · {post.time}</span></div><button className="more-button"><MoreHorizontal size={20} /></button></div>
            <p className="post-text">{post.text}</p>
            {post.image && <div className="post-image"><img src={post.image} alt="Espace de travail créatif" /></div>}
            <div className="post-meta"><span><span className="reaction-dot">♥</span> {post.likes} mentions J'aime</span><span>{post.comments} commentaires · {post.shares} partages</span></div>
            <div className="post-actions">
              <button className={liked.includes(i) ? "is-liked" : ""} onClick={() => setLiked(liked.includes(i) ? liked.filter(x => x !== i) : [...liked, i])}><Heart size={18} fill={liked.includes(i) ? "currentColor" : "none"} /> J'aime</button>
              <button><MessageSquare size={18} /> Commenter</button>
              <button><Share2 size={18} /> Partager</button>
            </div>
          </article>
        ))}
        <div className="end-feed"><Sparkles size={16} /> Vous êtes à jour ! Revenez bientôt pour découvrir de nouveaux contenus.</div>
      </section>

      <aside className="right-sidebar">
        <div className="welcome-card">
          <div className="welcome-glow" /><span className="welcome-kicker">BIENVENUE DANS</span><h2>Le monde<br />est à <em>vous.</em></h2><p>Découvrez des idées, partagez vos passions et créez des liens sans frontières.</p><button onClick={() => setActive("Découvrir")}>Explorer TUZA <span>→</span></button>
        </div>
        <section className="right-section"><div className="section-heading compact"><div><h2><TrendingUp size={17} /> Tendances</h2><p>Ce qui anime la communauté</p></div><MoreHorizontal size={19} /></div>{trends.map((t,i) => <div className="trend" key={t.tag}><span className="trend-number">0{i+1}</span><div><strong>{t.tag}</strong><span>{t.posts}</span></div><MoreHorizontal size={17} /></div>)}<button className="text-button full">Voir toutes les tendances →</button></section>
        <section className="right-section suggestions"><div className="section-heading compact"><div><h2>À suivre</h2><p>Des profils qui pourraient vous plaire</p></div></div>{[["M","Maya Laurent","@maya.l"],["J","Jonas B.","@jonasb"],["S","Sarah Nsimba","@sarah.n"]].map(([letter,name,handle],i)=><div className="suggestion" key={handle}><Avatar label={letter} color={["peach","blue","green"][i]} small /><div className="suggestion-info"><strong>{name}</strong><span>{handle}</span></div><button className={`follow-button ${following.includes(handle) ? "following" : ""}`} onClick={() => setFollowing(following.includes(handle) ? following.filter(x=>x!==handle) : [...following,handle])}>{following.includes(handle) ? "Suivi" : "Suivre"}</button></div>)}</section>
        <footer className="footer-links"><span>À propos</span><span>Confidentialité</span><span>Conditions</span><span>© 2026 TUZA fly</span></footer>
      </aside>

      <nav className="mobile-nav">
        <button className="active"><Home size={20} /><span>Accueil</span></button>
        <button><Compass size={20} /><span>Découvrir</span></button>
        <button className="mobile-create"><Plus size={22} /></button>
        <button><Radio size={20} /><span>Lives</span></button>
        <button><UserRound size={20} /><span>Profil</span></button>
      </nav>
    </main>
  );
}
