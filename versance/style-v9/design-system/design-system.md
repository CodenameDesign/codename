# Versance Coworker — style v9: context

Context: black and white with orange, mono labels, dark / light. Based on the Sanity references (three images).

**Files in this folder**

- `tokens.css` — the design variables this style uses (colour, type, radius, spacing, elevation, motion).
- `components.css` — the base component rules, driven by the tokens.
- `specimen.html` / `specimen.png` / `specimen-dark.png` — the style rendered from its real components.
- `../screens/screens.css` — this style's overrides on top of the tokens and components; `../screens/*.html` and `png/` / `png-dark/` are the 19 screens.

**Lineage:** v6's sharp structure, re-coloured from the Sanity references, with a dark / light toggle.

## 1. Identity

- **Look:** stark black and white with one vivid orange `#FF4A00`; sharp corners and no shadows; dense halftone dots on the page behind the panel; corner crop marks around the panel; dotted rules between list rows and above the footer; hairline `#D9D9D4` (light) / `#2C2C2C` (dark) card borders and solid black / white rules on key controls.
- **Type:** Inter for text (headings regular weight, tight tracking, "Hi," 40px) and **IBM Plex Mono** for labels: the orange header bar (company name), EDIT, `[ NEW CHAT ]`, bracketed tags, chips (uppercase), placeholder, dates, link text, risk badges, help sub-heads.
- **Orange header bar** (like "CURRENT CONTEXT: LEARN, DOCS"): company name in mono on orange with a black `EDIT` tag.
- **Controls:** primary button orange with black text (inverts to ink on hover); send is a round ink button (white arrow), orange on hover; toggle is a square switch (orange when on); active tab is inverted (ink on paper); help panel is a black screen with orange mono sub-heads.
- **Highlights:** quoted phrases use a yellow `#FFD84A` marker; risk badges: High = orange, Medium = yellow, both with black text and a black border.
- **Dark / light toggle:** square sun / moon button in the panel (above the user avatar). Sets `data-theme="dark"` on `<html>`, is remembered in `localStorage` (so it carries between pages), and can be forced with `?theme=dark`. Exports: `screens/png/` (light) and `screens/png-dark/` (dark).
  - Dark values: page `#0A0A0A`, panel `#101010`, cards `#161616`, fills `#1E1E1E`, ink `#F4F4F1`, muted `#A3A39E`; orange unchanged; send turns light.

## 2. Colour tokens

Values are what the screens render with (`tokens.css`). Dark-theme values are shown where they differ.

**Accent and status colours**

| Token | Light | Dark |
|---|---|---|
| `--accent` | `#FF4A00` | — |
| `--accent-grad` | `linear-gradient(180deg, #3C3B37 0%, #23221F 100%)` | — |
| `--accent-grad-diag` | `linear-gradient(145deg, #4A4944 0%, #23221F 100%)` | — |
| `--accent-hover` | `#E04200` | — |
| `--accent-on` | `#111111` | — |
| `--accent-pressed` | `#C93508` | — |
| `--accent-tint-15` | `#FFE1D1` | — |
| `--accent-tint-25` | `#FFC9AD` | — |
| `--accent-tint-8` | `#FFF1E8` | — |
| `--accent-wash` | `linear-gradient(180deg, #F6F6F3 0%, #EFEFEB 100%)` | — |
| `--amber-grad` | `linear-gradient(135deg, #F8CF68 0%, #E2A52B 100%)` | — |
| `--amber-ink` | `#0A1922` | — |
| `--amber-tint` | `#F4E4B8` | — |
| `--coral-grad` | `linear-gradient(135deg, #FF8294 0%, #F0445E 100%)` | — |
| `--green-grad` | `linear-gradient(180deg, #3A9187 0%, #2D6B6A 100%)` | — |
| `--green-tint` | `#CFE0DE` | — |
| `--mark` | `#FFF04D` | — |
| `--mk` | `#FFD84A` | — |
| `--orange` | `#FF4A00` | — |
| `--orange-tint` | `#FFE4D8` | `#3A1A0E` |
| `--risk-high` | `#DC2927` | — |
| `--risk-medium` | `#F59D0A` | — |
| `--risk-on` | `#FFFFFF` | — |
| `--soft-wash` | `linear-gradient(180deg, #F6F6F3 0%, #EFEFEB 100%)` | — |
| `--tag-filing` | `#324EFE` | — |
| `--tag-news` | `#E2B43D` | — |
| `--tag-transcript` | `#FF5D73` | — |
| `--tag-web` | `#1FB5A8` | — |
| `--teal-grad` | `linear-gradient(145deg, #EAF3F2, #D3E5E2)` | — |
| `--teal-ink` | `#0E8F84` | — |
| `--teal-tint` | `#E4EFEE` | — |
| `--violet-grad` | `linear-gradient(135deg,#ECE4FF,#DACCFF)` | — |
| `--violet-ink` | `#6D3FD6` | — |
| `--violet-tint` | `#EFE9FF` | — |
| `--exception-dark` | `#0A1922` | — |

**Surfaces and lines**

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FFFFFF` | `#0A0A0A` |
| `--card` | `#FFFFFF` | `#161616` |
| `--dotline` | `#8E8E89` | `#4C4C48` |
| `--dots` | `#C4C4BE` | `#2E2E2E` |
| `--fill` | `#F2F2EF` | `#1E1E1E` |
| `--hover` | `#F1EFE9` | — |
| `--inv-bg` | `#0B0B0B` | `#F4F4F1` |
| `--inv-ink` | `#FFFFFF` | `#0A0A0A` |
| `--line` | `#D9D9D4` | `#2C2C2C` |
| `--line-soft` | `#E4E1DA` | — |
| `--pane` | `#F6F4EF` | — |
| `--panel` | `#FFFFFF` | `#101010` |
| `--strong` | `#0B0B0B` | `#F4F4F1` |

**Text colours**

| Token | Light | Dark |
|---|---|---|
| `--faint` | `#8E8E89` | `#75756F` |
| `--ink` | `#0B0B0B` | `#F4F4F1` |
| `--muted` | `#5C5C58` | `#A3A39E` |
| `--text-info` | `#0B0B0B` | — |
| `--text-selected` | `#0B0B0B` | — |

## 3. Type

Families: **IBM Plex Mono**, **Inter**. Sizes below are the rendered values on the 19 screens.

| Role | Family | Size | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Display ("Hi,") | Inter | 40px | 400 | -1.6px | — |
| Lead | Inter | 18px | 400 | -0.18px | — |
| Pane title | Inter | 18px | 400 | -0.36px | — |
| Report title | Inter | 26px | 400 | -0.78px | — |
| Finding title | Inter | 14px | 600 | — | — |
| Body | Inter | 14px | 400 | — | — |
| Header bar | IBM Plex Mono | 12px | 500 | 0.24px | uppercase |
| Section label | IBM Plex Mono | 11px | 400 | 0.66px | uppercase |
| Meta / dates | IBM Plex Mono | 12px | 400 | — | — |
| Chip | IBM Plex Mono | 12px | 400 | 0.24px | uppercase |
| Tab | Inter | 14px | 400 | — | — |
| Button | Inter | 14px | 400 | — | — |
| Link | IBM Plex Mono | 12.5px | 400 | — | — |
| Tag | IBM Plex Mono | 11px | 400 | 0.44px | uppercase |
| Risk badge | IBM Plex Mono | 11px | 700 | 0.55px | uppercase |

## 4. Shape, depth and glass

| Component | Radius | Border | Shadow | Backdrop blur |
|---|---|---|---|---|
| Panel | 0px | 1px | none | — |
| Chat card | 0px | 1px | none | — |
| Composer | 0px | 1px | none | — |
| Cards | 0px | 1px | none | — |
| Intro tile | 0px | 1px | none | — |
| Header bar | 0px | 1px | none | — |
| Buttons | 0px | 1px | none | — |
| Chips | 0px | 1px | none | — |
| Text fields | 0px | 1px | none | — |
| Toggle | 0px | 1px | none | — |
| Rail tiles | 0px | 1px | none | — |
| Send button | 50% | 0px none | none | — |
| Tags | 0px | 1px | none | — |

## 5. Layout

- **Panel:** docked to the right of the browser window, full window height inside a 16px margin; **440px** wide on the compact (Coworker home) screens and **799px** on the expanded screens (chat column + tool pane).
- **Icon rail (right edge):** eight items, top to bottom: **Home**, Research context (with count badge), My filings, CAD library, US library, Compliance, Output Centre, History. Icon-only tiles. The gap between the content and the rail is 22.5px.
- **Composer:** text field on top, a tools row (`+`, `@`, `/`) below with the round send button at the right; Web Search and Export Conversation in a row below.
- **Chat column tabs:** `Coworker` (alone, or beside `Filings` / `Compliance Review`) with a `new chat` / `new report` tag at the right.
- **Header:** company bar at the top of the chat column (name + `edit`, or a search field with `EXIT` while switching); the collapse button sits top-right of the panel.
- **Footer of the tool pane:** "Open Versance.ai" with the logo tile; the user avatar and the dark / light button sit at the bottom-right of the panel.

## 6. Behaviour rules (all 19 screens)

- **Home:** the Home button is the first rail item, above Research context, and is highlighted on the four Coworker home screens (101a–101b). There is no forward-arrow button.
- **Help `?`:** shown on a pane title except while that pane's own help card is open (201b, 501aa, 601a, 701a).
- **Right-pane header spacing:** title → first block 16px; title → italic sub-line 4px and sub-line → first block 16px; title → back link 8px and back link → first block 16px.
- **Close ×:** a dismiss × on intro tiles, help cards and the help panel; a remove × on source cards and the reviewed-source chip.
- **Links:** every text link is underlined, 14px; the back links (Switch companies, Exit document) are underlined too; `Clear all` / `Clear` are the quiet grey link.
- **Message box:** a real text input. The send button is disabled until there is text; Enter or the button sends and clears the field; whitespace alone does not enable it.
- **Focus:** buttons and other clickable controls take `2px solid #FF4A00` with a 2px offset and keep their own radius; text fields show no ring, only their 1px border changes colour; the composer container adds nothing.
- **Motion:** hover and press transitions only; nothing animates on page load.
- **Navigation in the HTML pages:** the "All screens" list (top-left) and, in every style except v1, the `‹ n ›` style switcher (bottom-left). Both are neutral, identical in every style and hidden in the PNG exports.
- **Dark / light:** the sun / moon button above the avatar sets `data-theme` on `<html>`, is remembered in `localStorage` and can be forced with `?theme=dark`.

## 7. Screens

| State | Screen | Contents |
|---|---|---|
| 101a | Coworker home (compact) | Welcome tile, three prompt chips, composer. |
| 101ab | Company switcher | Recent companies dropdown. |
| 101ac | Company switcher, searching | "Aar" typed; recent + all companies; `EXIT`. |
| 101b | How the Versance Coworker works | Four-step help panel. |
| 102a | Research context | Two toggles, Add a URL / Upload a Document, three source cards. |
| 102aa | Research context, Add a URL | Paste-a-link field with `ADD`; Cancel. |
| 102s | Research context, empty | "No documents added yet." empty state. |
| 201a | Primary Company Filings | Search + filter, filing list. |
| 201b | Primary Company Filings, help | Help card open (no `?`). |
| 401aa | Search Canadian Filings | Find a Company, A–Z, company list. |
| 401ab | Search <Company> Filings | Switch-companies link, filing list with hover action. |
| 411a | Filing viewer | Exit document, Add Document to Context, page preview, prompt chips. |
| 501aa | Compliance review, start | Welcome tile, two action buttons, how-it-works card. |
| 501ab | Compliance review, options | Reviewed source, Country / Regulation / Document Type, Run Report. |
| 501bb | Compliance report | Re-Run Report, Report Generated card, High / Medium findings. |
| 601a | Output Centre, empty | Info card, empty state. |
| 601b | Output Centre | Search + filter, seven report rows with tags. |
| 701a | Conversation History, empty | Info card, "You haven't had any conversations yet." |
| 701b | Conversation History | Search conversations, chat open on the left. |

Exports are 3260 × 1920 PNGs (`../screens/png/`, and `../screens/png-dark/` for dark); the red annotation labels and leader lines in the reference PNGs were specs and never appear in the screens.

## 8. Content notes

- Company names in the mock data (Integra Resources, Australis Capital, Equinox Gold, South Railroad, Company A–C, Aardvark …) are placeholders; the switcher uses "Company Two" (the reference PNG had a typo).
- The 501ab reference annotation "new copy once you've selected a" is cut off in the PNG; only the visible copy is used.
- The empty History screen reads "You haven't had any conversations yet."
- No success state and no low-risk badge are defined: no reference shows one.
