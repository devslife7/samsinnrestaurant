## Plan to design the restaurant website

# Things to consider
- It is inside the Quantico military base
- Generous portions
- **50% bar, 50% restaurant** — equal identity, not a restaurant that happens to have a bar
- The atmosphere of a hole in the wall / non-chain restaurant

---

# Website Design Plan — Sam's Inn Bar Restaurant

## 1. Brand Identity & Visual Direction

**Core feeling:** Gritty, authentic, proud military heritage — not polished corporate, not dark sports-bar generic. Think worn-wood bar, patches on the wall, cold beer, big plates.

**Identity split:** The site must give equal visual weight to the bar and the restaurant. The bar is not a footnote — it is half of what this place is. Navigation, hero, and sections should reflect both sides clearly.

**Color Palette:**

Two primary brand colors with a clean, easy-to-read white navbar.

| Role | Hex | Usage |
|---|---|---|
| **Brand Red** | `#C81F30` | Primary accent, buttons, badges, prices, CTAs |
| **Brand Green** | `#2DA46E` | Secondary accent, highlights, success states |
| **Navbar** | `#FFFFFF` | White navbar — clean, easy to read |
| **Navbar Text** | `#1A1A1A` | Dark text on white navbar for maximum legibility |
| **Background Dark** | `#111111` | Page dark bg |
| **Surface Dark** | `#1E1E1E` | Card backgrounds, dark sections |
| **Off-White** | `#F5F5F5` | Text on dark bg |

- Texture: Use the existing stone wall image (`random-rubble-stone-wall.png`) as a section background

**Typography:**
- Headlines: Keep `Oswald` (already installed) — all-caps, bold, commanding
- Body: `Inter` (already installed) — clean and readable
- Consider adding a distressed / stencil style font for section labels

**Mascot:** The bulldog logo (`bulldog-logo.png`) is central — it should appear prominently in the hero and as a recurring identity element, not just in the navbar/footer.

---

## 2. Content Strategy (from existing data)

Use `restaurant.json` and `menu.json` as the single source of truth. Remove all hardcoded data from components.

**Key content to highlight:**
- "Honoring the USMC since 1974 — Semper Fi" → lead tagline, not a subtitle
- Address: 223 Potomac Ave, Quantico, VA 22134 (fix footer — currently wrong)
- Hours: Mon–Fri 10AM–9PM / Sat 11AM–8PM / Sun 8AM–8PM
- Features: Online Ordering, Catering (on & off-post), Karaoke
- Bar as a main attraction — needs its own visual callout

---

## 3. Page Structure

### 3.1 Navbar (refactor existing `Navbar.tsx`)
- **Logo:** Bulldog centered or left-aligned
- **Links (from `restaurant.json`):** Home · Menu · Our Place · Contact
- Fix current wrong links (currently: "About Us", "Locations" — not in data)
- **CTA button:** "ORDER ONLINE" (red, keep this from current design)
- Sticky, minimal, semi-transparent on scroll

### 3.2 Hero Section (refactor existing `Hero.tsx`)
- **Headline:** "Honoring the USMC Since 1974" (lead with heritage, not just flavor)
- **Sub-headline:** "Bold Flavors. Uncompromising Quality. Semper Fi."
- **Background:** Full-bleed stone wall texture + dark overlay, not plain black
- **Bulldog mascot:** Large, prominent — placed to the right or as a watermark
- **CTAs (two buttons):**
  - Primary: "SEE THE MENU" → scrolls to menu section
  - Secondary: "ORDER ONLINE" → links to ordering
- **Tagline strip below hero:** "Check out our homemade lunch specials" with a subtle animated underline

### 3.3 Feature Strip (refactor existing `Feature.tsx`)
- Rename: "Why Sam's Inn?" or a bold headline like "MORE THAN A MEAL"
- 3-column icon cards (from `restaurant.json features` array):
  - Online Ordering — QR code icon
  - Catering Available — for on & off-post groups/parties
  - Karaoke — reserve for your private event
- Add a 4th card: **The Bar** — "Cold drinks, warm company. On-base since '74."
- Background: Stone wall texture with dark overlay and red accent border on cards

### 3.4 Bar Section (equal weight to restaurant — NEW)
- Not a "spotlight" — a full peer section to the menu/restaurant content
- Consider a two-panel hero approach at the top: **"EAT"** left / **"DRINK"** right (or integrated in the main hero)
- Bold headline: "THE BAR" — cold drinks, cold beer, karaoke, on-base social hub since '74
- Short copy: lean into the bar culture, regulars, after-hours base life
- Feature: karaoke reservation CTA
- Placeholder for bar photo (to be added later)
- The navbar could include a "Bar" link or the hero could have two CTAs: "SEE THE MENU" and "THE BAR"

### 3.5 Menu Section (refactor existing menu grid in `page.tsx`)
- Tabbed layout: **Breakfast** · **Today's Recommendations** · **All Day Special**
- Each tab renders `MenuCard` components dynamically from `menu.json`
- `MenuCard` redesign:
  - Show badge ("New Menu Arrival") prominently
  - Show availability note in small italic text
  - Price in accent red
  - Image placeholder using stone/dark background until real photos added
- "View Full Menu" CTA button at bottom

### 3.6 About / Our Place Section (NEW)
- Maps to "Our Place" nav link (replace current missing About Us)
- Copy: Est. 1974, Quantico base, hole-in-the-wall soul, big portions, regulars like family
- Two-column: text left, bulldog logo or image placeholder right
- Quote: *"Honoring the USMC since 1974 — Semper Fi"*

### 3.7 Hours & Location Section (NEW)
- Use hours array from `restaurant.json`
- Rendered as a clean table or card
- Address: 223 Potomac Ave, Quantico, VA 22134
- Embedded Google Maps placeholder (add iframe when ready)
- Note: "Located inside Quantico Marine Corps Base"

### 3.8 Footer (refactor existing `Footer.tsx`)
- Fix address (currently wrong: "123 Winner Dr, Conneos, VA 36405")
- Correct to: 223 Potomac Ave, Quantico, VA 22134
- Fix website URL if needed
- Columns: Quick Links · Hours · Contact & Social
- Remove YouTube icon (not in `restaurant.json` social data — only Facebook & Instagram)
- Add "Semper Fi" sign-off line

---

## 4. Technical Improvements

### Data Integration
- All components should read from `data/restaurant.json` and `data/menu.json`
- Create a typed interface file: `lib/types.ts` (MenuItem, Feature, Hours, etc.)
- Use `import restaurantData from '@/data/restaurant.json'`

### Component Changes
| Component | Action |
|---|---|
| `Navbar.tsx` | Fix nav links to match `restaurant.json navigation` array |
| `Hero.tsx` | New layout, stone wall bg, bulldog prominence, two CTAs |
| `Feature.tsx` | 4-card grid, read from data, add Bar card |
| `MenuCard.tsx` | Add badge support, show availability, use data |
| `Footer.tsx` | Fix address, fix social icons, add hours |
| `page.tsx` | Add tabbed menu, bar section, about section, hours section |

### New Components to Create
- `MenuTabs.tsx` — tabbed navigation for menu categories
- `HoursTable.tsx` — renders hours from `restaurant.json`
- `BarSpotlight.tsx` — dedicated bar/atmosphere section
- `AboutSection.tsx` — "Our Place" content block

### Image Strategy
- Stone wall (`random-rubble-stone-wall.png`) → hero & feature section backgrounds
- Bulldog (`bulldog-logo.png`) → hero, about section, footer
- All food/bar photo slots → use styled dark placeholder cards until real photos provided
- Consider adding a `/public/images/` subfolder for future photos

---

## 5. Responsive Design
- Mobile-first approach (Tailwind already set up)
- Navbar: hamburger menu already implemented — keep and refine
- Menu tabs: collapse to dropdown on mobile
- Hero: stack text and image vertically on small screens
- Feature cards: 1-col mobile → 2-col tablet → 4-col desktop

---

## 6. Out of Scope (for now)
- Real online ordering integration (placeholder CTA only)
- CMS / admin panel
- Actual food photography
- Google Maps embed (needs API key)
- Karaoke booking form (mention contact info only)
