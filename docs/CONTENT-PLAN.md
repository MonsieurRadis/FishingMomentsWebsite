# Content Plan — Fishing Moments Blog

## Objectif
Générer du trafic SEO organique vers fishingmoments.eu pour rediriger les visiteurs vers l'app.
20 articles de qualité, utiles, non-clickbait, optimisés SEO.

---

## Stratégie SEO

### Principes
- **1 mot-clé principal par article** (dans le titre, l'URL, le 1er paragraphe, et au moins 2 H2)
- **Mots-clés secondaires** disséminés naturellement dans le texte
- **Meta description** de ~155 caractères max, avec le mot-clé principal
- **URL slug** courte et descriptive (ex: `/blog/best-time-to-fish-for-pike/`)
- **Maillage interne** : chaque article link vers 2-3 autres articles du blog
- **CTA vers l'app** : 1 mention naturelle dans le corps + 1 CTA en fin d'article
- **Alt text** sur toutes les images avec le mot-clé quand pertinent
- **Répondre aux "People Also Ask"** de Google pour le mot-clé ciblé

### Structure type d'un article
```
H1: Titre avec mot-clé principal (60-65 chars max pour Google)
Introduction (2-3 phrases, mot-clé dans la 1ère phrase)

H2: Section principale 1 (mot-clé secondaire)
  Paragraphes + listes à puces

H2: Section principale 2
  H3: Sous-section si nécessaire

H2: Section principale 3

H2: FAQ (2-3 questions "People Also Ask") — OPTIONNEL

CTA final vers l'app (naturel, pas forcé)
```

### Longueur cible
- **Minimum : 1000 mots** (~100 lignes)
- **Idéal : 1200-1800 mots** (~120-180 lignes)
- **Max : 2000 mots** — au-delà ça devient lourd à lire

### Ton
- Expert mais accessible
- Parler comme un pêcheur à un pêcheur
- Donner de vraies infos utiles, pas du blabla
- Pas de "In this article, we will..."
- Aller droit au but

### CTA vers l'app (template)
Ne PAS écrire "Download our app!!" comme un vendeur.
Intégrer naturellement, par exemple :
- "Tools like Fishing Moments calculate this automatically for your specific location."
- "If you want hour-by-hour forecasts for [species], check out Fishing Moments — it does the math for you."
- Fin d'article : un petit encadré "Want to put this into practice? Fishing Moments gives you..."

### Images
- Chercher des photos **libres de droits** sur Unsplash, Pexels, ou Pixabay
- Mots-clés de recherche indiqués dans chaque brief
- Format recommandé : 1200x630px (format OG/social)
- Nommer le fichier avec le mot-clé : `pike-fishing-winter.jpg`
- Stocker dans `static/images/blog/`

---

## Catégories d'articles

| Catégorie | Nb | Objectif |
|---|---|---|
| Guides espèces | 5 | Capter les recherches "how to fish for [species]" |
| Science de la pêche | 5 | Capter les recherches "barometric pressure fishing", "solunar theory", etc. |
| Saisonnier | 4 | Trafic récurrent chaque année |
| Guides pratiques | 4 | Capter les débutants, très gros volume de recherche |
| Spots & stratégie | 2 | Capter les recherches "where/how to find fish" |

---

## Liste des 20 articles

### Guides espèces
| # | Titre | Mot-clé principal | Brief |
|---|---|---|---|
| 01 | Best Times to Fish for Pike: Complete Guide | best time to fish for pike | `briefs/01-pike-best-times.txt` |
| 02 | How Weather Affects Carp Fishing | carp fishing weather | `briefs/02-carp-weather.txt` |
| 03 | Brown Trout Fishing: Water Temperature Guide | trout water temperature | `briefs/03-trout-temperature.txt` |
| 04 | Zander Fishing: Beginner's Complete Guide | zander fishing tips | `briefs/04-zander-beginners.txt` |
| 05 | Perch Fishing: Seasonal Patterns Explained | perch fishing seasons | `briefs/05-perch-seasons.txt` |

### Science de la pêche
| # | Titre | Mot-clé principal | Brief |
|---|---|---|---|
| 06 | Solunar Theory Explained: Does It Really Work? | solunar theory fishing | `briefs/06-solunar-theory.txt` |
| 07 | How Barometric Pressure Affects Fishing | barometric pressure fishing | `briefs/07-barometric-pressure.txt` |
| 08 | Best Time of Day to Go Fishing (Science-Based) | best time of day to fish | `briefs/08-best-time-of-day.txt` |
| 09 | Moon Phases and Fishing: What the Science Says | moon phases fishing | `briefs/09-moon-phases.txt` |
| 10 | How Wind Affects Fishing: Direction, Speed & Strategy | wind and fishing | `briefs/10-wind-fishing.txt` |

### Saisonnier
| # | Titre | Mot-clé principal | Brief |
|---|---|---|---|
| 11 | Spring Fishing Guide: Best Species & Times | spring fishing tips | `briefs/11-spring-fishing.txt` |
| 12 | Summer Fishing: How to Beat the Heat | summer fishing tips | `briefs/12-summer-fishing.txt` |
| 13 | Fall Fishing: Why Autumn Is the Best Season | fall fishing guide | `briefs/13-fall-fishing.txt` |
| 14 | Winter Fishing: Cold Water Strategies | winter fishing tips | `briefs/14-winter-fishing.txt` |

### Guides pratiques
| # | Titre | Mot-clé principal | Brief |
|---|---|---|---|
| 15 | Freshwater Fishing for Beginners: Complete Guide | freshwater fishing beginners | `briefs/15-freshwater-beginners.txt` |
| 16 | Catch and Release: Best Practices | catch and release fishing | `briefs/16-catch-and-release.txt` |
| 17 | Night Fishing: Tips, Safety & Best Species | night fishing tips | `briefs/17-night-fishing.txt` |
| 18 | 10 Fishing Mistakes Beginners Make | fishing mistakes beginners | `briefs/18-fishing-mistakes.txt` |

### Spots & stratégie
| # | Titre | Mot-clé principal | Brief |
|---|---|---|---|
| 19 | How to Read a Lake: Finding Fish in Still Water | how to read a lake fishing | `briefs/19-read-a-lake.txt` |
| 20 | River Fishing: How to Find the Best Spots | river fishing spots | `briefs/20-river-fishing-spots.txt` |

---

## Workflow de production

1. **Ouvrir le brief** (`briefs/XX-nom.txt`)
2. **Donner le brief à ChatGPT** avec le prompt :
   > "Write this blog article following the brief exactly. Write in English. Tone: expert but friendly, like a fisherman talking to a fisherman. No fluff, no filler. Output ONLY the article content in markdown, starting from the first H2 (the H1 title will be set in frontmatter)."
3. **Relire** l'article et ajuster si nécessaire
4. **Créer le fichier Hugo** : `content/blog/[slug]/index.md`
5. **Ajouter l'image** dans `static/images/blog/` (ou en bundle dans le dossier de l'article)
6. **Git push** — Vercel déploie automatiquement

## Frontmatter Hugo (template)
```markdown
---
title: "Le titre SEO de l'article"
date: 2026-02-XX
description: "Meta description ~155 chars avec le mot-clé principal"
tags: ["fishing", "keyword1", "keyword2"]
image: "/images/blog/image-name.jpg"
draft: false
---
```

---

## Ordre de publication recommandé

Publier en priorité les articles à **fort volume de recherche** :

1. **#08** Best Time of Day to Fish (très recherché)
2. **#15** Freshwater Fishing for Beginners (gros volume)
3. **#07** Barometric Pressure (niche mais forte intention)
4. **#06** Solunar Theory (lié directement à l'app)
5. **#01** Pike Best Times (espèce populaire)
6. **#11** Spring Fishing (saisonnier — publier au bon moment)
7. **#18** Fishing Mistakes (contenu viral/partageable)
8. Le reste dans l'ordre

Publier **2-3 articles par semaine** pour un bon rythme d'indexation.
