const pptxgen = require("pptxgenjs");

let pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";
pptx.author = "Mostafa El Hanafi";
pptx.company = "Elite Fitness";

// Slide 1: Title
let slide1 = pptx.addSlide();
slide1.background = { color: "0B0C10" };
slide1.addText("SOUTENANCE DE PROJET DE FIN D'ÉTUDES", { x: 1, y: 1.5, w: 8, fontSize: 32, color: "FF2A5F", bold: true, align: "center" });
slide1.addText("Plateforme de Gestion pour Elite Fitness", { x: 1, y: 2.5, w: 8, fontSize: 24, color: "FFFFFF", align: "center" });
slide1.addText("Réalisé par : MOSTAFA EL HANAFI", { x: 1, y: 4, w: 8, fontSize: 18, color: "CCCCCC", align: "center" });
slide1.addText("Encadré par : M. Azhani Salah", { x: 1, y: 4.5, w: 8, fontSize: 18, color: "CCCCCC", align: "center" });

// Slide 2: Contexte
let slide2 = pptx.addSlide();
slide2.background = { color: "F5F5F5" };
slide2.addText("1. Contexte & Problématique", { x: 0.5, y: 0.5, w: 9, fontSize: 28, color: "005F9E", bold: true, border: [0, 0, {pt: 2, color: "FF2A5F"}, 0] });
slide2.addText([
    { text: "Les méthodes traditionnelles", options: { bold: true, breakLine: true } },
    { text: "• Gestion papier lourde et fastidieuse\n• Risque de perte de données\n", options: { breakLine: true } },
    { text: "L'expérience client", options: { bold: true, breakLine: true } },
    { text: "• Impossibilité de s'inscrire à distance\n• Interfaces web existantes souvent obsolètes\n", options: { breakLine: true } },
    { text: "Le suivi pour l'administration", options: { bold: true, breakLine: true } },
    { text: "• Manque de visibilité analytique sur les revenus générés" }
], { x: 0.5, y: 1.5, w: 9, fontSize: 20, color: "333333", bullet: false });

// Slide 3: Solution
let slide3 = pptx.addSlide();
slide3.background = { color: "FFFFFF" };
slide3.addText("2. La Solution Proposée", { x: 0.5, y: 0.5, w: 9, fontSize: 28, color: "005F9E", bold: true, border: [0, 0, {pt: 2, color: "FF2A5F"}, 0] });
slide3.addText([
    { text: "Une application Web complète (Full-Stack)", options: { bold: true, breakLine: true } },
    { text: "• Conception Mobile-First : Adaptée aux smartphones.\n", options: { breakLine: true } },
    { text: "Portail Client (Vitrine)", options: { bold: true, breakLine: true } },
    { text: "• Découverte des entraîneurs et des offres.\n• Tunnel d'abonnement en ligne et sécurisé.\n", options: { breakLine: true } },
    { text: "Espace Administrateur (Dashboard)", options: { bold: true, breakLine: true } },
    { text: "• Tableau de bord avec suivi en temps réel.\n• Graphiques interactifs et gestion des abonnés." }
], { x: 0.5, y: 1.5, w: 9, fontSize: 20, color: "333333" });

// Slide 4: Technologies
let slide4 = pptx.addSlide();
slide4.background = { color: "F5F5F5" };
slide4.addText("3. Technologies Utilisées", { x: 0.5, y: 0.5, w: 9, fontSize: 28, color: "005F9E", bold: true, border: [0, 0, {pt: 2, color: "FF2A5F"}, 0] });
slide4.addText([
    { text: "Front-End", options: { bold: true, breakLine: true, color: "FF2A5F" } },
    { text: "• React & Next.js (Server-Side Rendering)\n• CSS Modules (Glassmorphism design)\n", options: { breakLine: true } },
    { text: "Back-End & Base de données", options: { bold: true, breakLine: true, color: "FF2A5F" } },
    { text: "• Next.js API Routes (Architecture Serverless)\n• Supabase (PostgreSQL)\n", options: { breakLine: true } },
    { text: "Hébergement", options: { bold: true, breakLine: true, color: "FF2A5F" } },
    { text: "• Déploiement CI/CD avec Vercel" }
], { x: 0.5, y: 1.5, w: 9, fontSize: 20, color: "333333" });

// Slide 5: Realisation
let slide5 = pptx.addSlide();
slide5.background = { color: "FFFFFF" };
slide5.addText("4. Aperçu de la Réalisation", { x: 0.5, y: 0.5, w: 9, fontSize: 28, color: "005F9E", bold: true, border: [0, 0, {pt: 2, color: "FF2A5F"}, 0] });
slide5.addText("À ce stade de la présentation, vous pouvez ouvrir l'application ou montrer vos captures d'écran des interfaces :", { x: 0.5, y: 1.5, w: 9, fontSize: 18, color: "666666", italic: true });
slide5.addText([
    { text: "1. La page d'accueil immersive avec effet Glassmorphism.\n\n", options: { breakLine: true } },
    { text: "2. Les forfaits et la modale de paiement.\n\n", options: { breakLine: true } },
    { text: "3. L'espace de connexion sécurisé.\n\n", options: { breakLine: true } },
    { text: "4. Le tableau de bord administrateur (Revenus, Abonnés)." }
], { x: 0.5, y: 2.2, w: 9, fontSize: 22, color: "333333", bold: true });

// Slide 6: Conclusion
let slide6 = pptx.addSlide();
slide6.background = { color: "0B0C10" };
slide6.addText("CONCLUSION & PERSPECTIVES", { x: 1, y: 1.5, w: 8, fontSize: 28, color: "FF2A5F", bold: true, align: "center" });
slide6.addText([
    { text: "Bilan :", options: { bold: true, color: "FFFFFF" } },
    { text: " Application 100% fonctionnelle, rapide et sécurisée.\n\n", options: { color: "CCCCCC" } },
    { text: "Perspectives :", options: { bold: true, color: "FFFFFF" } },
    { text: " Espace profil client, passerelle de paiement réelle (Stripe), Application Mobile Native." , options: { color: "CCCCCC" } }
], { x: 1, y: 2.5, w: 8, fontSize: 20, align: "center" });
slide6.addText("MERCI POUR VOTRE ATTENTION", { x: 1, y: 4.5, w: 8, fontSize: 24, color: "005F9E", bold: true, align: "center" });

pptx.writeFile({ fileName: "C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\ea858442-d980-4a94-a79a-a3bc2e880f5d\\presentation_soutenance.pptx" }).then(() => {
    console.log("PPTX created!");
});
