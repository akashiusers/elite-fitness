const pptxgen = require("pptxgenjs");

let pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";
pptx.author = "Mostafa El Hanafi";
pptx.company = "Elite Fitness";

// Colors
const BG_COLOR = "111116";
const CARD_BG = "1F1F2A";
const ACCENT_RED = "FF2A5F";
const ACCENT_CYAN = "00D2FF";
const TEXT_WHITE = "FFFFFF";
const TEXT_GRAY = "A0A0B0";

// Standard Slide Options
const masterName = "MODERN_MASTER";
pptx.defineSlideMaster({
  title: masterName,
  background: { color: BG_COLOR },
  objects: [
    { rect: { x: 0, y: 0, w: "100%", h: 0.1, fill: { color: ACCENT_CYAN } } }, // Top thin border
    { rect: { x: -1, y: 4, w: 2, h: 4, fill: { color: ACCENT_RED }, rotate: 45 } }, // Decor element
  ]
});

// Helper for Slide Titles
const addModernTitle = (slide, text) => {
  slide.addText(text, { x: 0.5, y: 0.5, w: 9, fontSize: 32, color: TEXT_WHITE, bold: true });
  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.1, w: 1.5, h: 0.05, fill: { color: ACCENT_RED } });
};

// Slide 1: Title
let slide1 = pptx.addSlide();
slide1.background = { color: "0A0A10" };
slide1.addShape(pptx.ShapeType.ellipse, { x: -2, y: -2, w: 6, h: 6, fill: { color: ACCENT_CYAN }, transparency: 80 });
slide1.addShape(pptx.ShapeType.ellipse, { x: 7, y: 3, w: 5, h: 5, fill: { color: ACCENT_RED }, transparency: 80 });

slide1.addText("SOUTENANCE", { x: 1, y: 1.5, w: 8, fontSize: 24, color: ACCENT_CYAN, bold: true, align: "center", letterSpacing: 5 });
slide1.addText("PROJET DE FIN D'ÉTUDES", { x: 1, y: 2.2, w: 8, fontSize: 44, color: TEXT_WHITE, bold: true, align: "center" });
slide1.addShape(pptx.ShapeType.rect, { x: 3.5, y: 3.1, w: 3, h: 0.05, fill: { color: ACCENT_RED } });
slide1.addText("Plateforme Élite Fitness", { x: 1, y: 3.5, w: 8, fontSize: 22, color: TEXT_GRAY, align: "center", italic: true });

slide1.addShape(pptx.ShapeType.roundRect, { x: 1, y: 4.5, w: 4, h: 0.8, fill: { color: CARD_BG }, align: "center", shadow: { type: "outer", color: "000000", blur: 5 }});
slide1.addText("Réalisé par : \nMOSTAFA EL HANAFI", { x: 1, y: 4.65, w: 4, fontSize: 14, color: TEXT_WHITE, align: "center" });

slide1.addShape(pptx.ShapeType.roundRect, { x: 5.3, y: 4.5, w: 4, h: 0.8, fill: { color: CARD_BG }, align: "center", shadow: { type: "outer", color: "000000", blur: 5 }});
slide1.addText("Encadré par : \nM. Azhani Salah", { x: 5.3, y: 4.65, w: 4, fontSize: 14, color: TEXT_WHITE, align: "center" });

// Slide 2: Contexte
let slide2 = pptx.addSlide({ masterName });
addModernTitle(slide2, "1. Contexte & Problématique");

let shadowOpts = { type: "outer", color: "000000", opacity: 0.6, blur: 5, offset: 3 };

slide2.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 1.8, w: 4.2, h: 2, fill: { color: CARD_BG }, shadow: shadowOpts });
slide2.addText("Méthodes Traditionnelles", { x: 0.8, y: 2.0, w: 3.8, fontSize: 18, color: ACCENT_CYAN, bold: true });
slide2.addText("• Gestion papier lourde et fastidieuse\n• Perte de temps à l'accueil\n• Risque de perte de données", { x: 0.8, y: 2.5, w: 3.8, fontSize: 14, color: TEXT_GRAY });

slide2.addShape(pptx.ShapeType.roundRect, { x: 5.3, y: 1.8, w: 4.2, h: 2, fill: { color: CARD_BG }, shadow: shadowOpts });
slide2.addText("Expérience Client", { x: 5.6, y: 2.0, w: 3.8, fontSize: 18, color: ACCENT_CYAN, bold: true });
slide2.addText("• Impossibilité de s'inscrire à distance\n• Interfaces web existantes obsolètes\n• Parcours d'achat non fluide", { x: 5.6, y: 2.5, w: 3.8, fontSize: 14, color: TEXT_GRAY });

slide2.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 4.2, w: 9, h: 1, fill: { color: CARD_BG }, shadow: shadowOpts });
slide2.addText("Le Besoin Administratif", { x: 0.8, y: 4.3, w: 3, fontSize: 18, color: ACCENT_RED, bold: true });
slide2.addText("Manque critique de visibilité analytique sur les revenus générés et l'évolution des abonnements en temps réel.", { x: 3.5, y: 4.3, w: 5.8, fontSize: 14, color: TEXT_WHITE });


// Slide 3: Solution
let slide3 = pptx.addSlide({ masterName });
addModernTitle(slide3, "2. La Solution Proposée");

slide3.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 1.5, w: 9, h: 1.5, fill: { color: CARD_BG }, shadow: shadowOpts });
slide3.addText("🚀 Application Web Full-Stack", { x: 0.8, y: 1.7, w: 8.4, fontSize: 20, color: ACCENT_CYAN, bold: true });
slide3.addText("Conception Mobile-First avec un design haut de gamme (Glassmorphism), adaptée à tous les écrans.", { x: 0.8, y: 2.2, w: 8.4, fontSize: 16, color: TEXT_GRAY });

slide3.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 3.2, w: 4.2, h: 2, fill: { color: CARD_BG }, shadow: shadowOpts });
slide3.addText("Portail Client", { x: 0.8, y: 3.4, w: 3.8, fontSize: 18, color: TEXT_WHITE, bold: true });
slide3.addText("• Découverte des offres\n• Tunnel de conversion optimisé\n• Formulaire de paiement interactif", { x: 0.8, y: 4.0, w: 3.8, fontSize: 14, color: TEXT_GRAY });

slide3.addShape(pptx.ShapeType.roundRect, { x: 5.3, y: 3.2, w: 4.2, h: 2, fill: { color: CARD_BG }, shadow: shadowOpts });
slide3.addText("Espace Administrateur", { x: 5.6, y: 3.4, w: 3.8, fontSize: 18, color: TEXT_WHITE, bold: true });
slide3.addText("• Authentification sécurisée\n• Suivi des KPIs en temps réel\n• Graphiques de revenus interactifs", { x: 5.6, y: 4.0, w: 3.8, fontSize: 14, color: TEXT_GRAY });

// Slide 4: Technologies
let slide4 = pptx.addSlide({ masterName });
addModernTitle(slide4, "3. Technologies Utilisées");

const addTechIconBox = (slide, _x, _y, _title, _desc, _color) => {
  slide.addShape(pptx.ShapeType.roundRect, { x: _x, y: _y, w: 2.8, h: 2.5, fill: { color: CARD_BG }, shadow: shadowOpts });
  slide.addShape(pptx.ShapeType.rect, { x: _x, y: _y, w: 2.8, h: 0.1, fill: { color: _color } });
  slide.addText(_title, { x: _x + 0.1, y: _y + 0.3, w: 2.6, fontSize: 18, color: _color, bold: true, align: "center" });
  slide.addText(_desc, { x: _x + 0.2, y: _y + 1, w: 2.4, fontSize: 14, color: TEXT_GRAY, align: "center" });
};

addTechIconBox(slide4, 0.5, 2, "FRONT-END", "Next.js (App Router)\nReact 18\nCSS Modules\nRecharts", ACCENT_CYAN);
addTechIconBox(slide4, 3.6, 2, "BACK-END & BDD", "Next.js API Routes\n(Serverless)\n\nSupabase\n(PostgreSQL)", ACCENT_RED);
addTechIconBox(slide4, 6.7, 2, "DÉPLOIEMENT", "GitHub (Version control)\n\nVercel (CI/CD\nHébergement Cloud)", "F39C12");

// Slide 5: Realisation
let slide5 = pptx.addSlide({ masterName });
addModernTitle(slide5, "4. Aperçu de la Réalisation");

slide5.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 1.5, w: 9, h: 3.5, fill: { color: "111116" }, shadow: shadowOpts, line: { color: ACCENT_CYAN, width: 2 } });
slide5.addText("PLACEHOLDER POUR DÉMONSTRATION", { x: 0.5, y: 2.5, w: 9, fontSize: 24, color: ACCENT_CYAN, bold: true, align: "center" });
slide5.addText("Lors de la soutenance, ajoutez vos captures d'écran ici :\n\n• La page d'accueil (Hero)\n• La modale de paiement\n• Le Dashboard Administrateur avec les graphiques", { x: 0.5, y: 3.5, w: 9, fontSize: 16, color: TEXT_GRAY, align: "center" });

// Slide 6: Conclusion
let slide6 = pptx.addSlide({ masterName });
slide6.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: "100%", h: "100%", fill: { color: "0A0A10" } });
slide6.addShape(pptx.ShapeType.ellipse, { x: 4, y: 1, w: 8, h: 8, fill: { color: ACCENT_RED }, transparency: 85 });

slide6.addText("CONCLUSION & PERSPECTIVES", { x: 1, y: 1.5, w: 8, fontSize: 32, color: TEXT_WHITE, bold: true, align: "center", letterSpacing: 2 });
slide6.addShape(pptx.ShapeType.rect, { x: 4, y: 2.2, w: 2, h: 0.05, fill: { color: ACCENT_CYAN } });

slide6.addText("✓ Plateforme performante et déployée en production.\n✓ Objectifs de digitalisation et design premium atteints.", { x: 1, y: 2.8, w: 8, fontSize: 18, color: ACCENT_CYAN, align: "center" });

slide6.addShape(pptx.ShapeType.roundRect, { x: 2.5, y: 3.8, w: 5, h: 1.2, fill: { color: CARD_BG }, shadow: shadowOpts, line: { color: ACCENT_RED, width: 1 } });
slide6.addText("Perspectives Futures :", { x: 2.5, y: 4.0, w: 5, fontSize: 16, color: ACCENT_RED, bold: true, align: "center" });
slide6.addText("Passerelle de paiement réelle (Stripe)\nApplication Mobile Companion", { x: 2.5, y: 4.5, w: 5, fontSize: 14, color: TEXT_WHITE, align: "center" });

pptx.writeFile({ fileName: "C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\ea858442-d980-4a94-a79a-a3bc2e880f5d\\presentation_soutenance_moderne.pptx" }).then(() => {
    console.log("Modern PPTX created!");
});
