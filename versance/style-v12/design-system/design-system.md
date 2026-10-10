# Versance Coworker — style v12: cash

Cash: electric green, chunky radii, glass, dark / light. Based on the Cash App references (eight images) plus a mining photo for the page background.

**Files in this folder**

- `tokens.css` — the design variables this style uses (colour, type, radius, spacing, elevation, motion).
- `components.css` — the base component rules, driven by the tokens.
- `specimen.html` / `specimen.png` / `specimen-dark.png` — the style rendered from its real components.
- `../screens/screens.css` — this style's overrides on top of the tokens and components; `../screens/*.html` and `png/` / `png-dark/` are the 19 screens.

**Lineage:** v9's structure (dark / light toggle), re-skinned from the Cash App references with glass and chunky radii.

## 1. Identity

- **Palette:** electric green **`#00E510`** on pure black and white; pale sky-blue gradient with a green glow behind the panel in light mode (gives the glass something to blur), pure black with a green glow in dark mode. highlighter `#E4F55B`; risk badges are soft pills (red / yellow tints).
- **Chunky radii:** panel 40px, chat card and composer 30px, cards 26px, fields / toggle rows / selects / buttons / chips / tabs fully round (999px), rail tiles 15px squircles, icon tiles 16px.
- **Glass:** frosted `backdrop-filter` (blur 8–30px, saturate) on the panel, the rail tiles, round header buttons, the segmented tab track, Web Search Off and the **toggles**: a translucent grey track with a white knob; when ON the track tints green and the knob turns electric green with a glow, like the lock slider. The reference's glass slider is the model.
- **Header:** electric-green pill (like the "Sign up now" card) with black text and a black `edit` pill. Primary buttons green with black text; active tab and Web Search On are black pills (white in dark mode); send is a round green button.
- **Type:** Inter, bold and very tight: "Hi," 54px at -0.055em, report title 32px, pane titles 20px bold; mono labels from v9 are now plain sentence-case Inter.
- **Help panel:** black screen with green sub-heads (like "Distribute paycheck"); intro tiles are soft grey fills.
- **Toggle (theme):** sun / moon glass button above the avatar, remembered between pages, `?theme=dark` to force. Exports: `screens/png/` (light), `screens/png-dark/` (dark).

The page the extension sits on is now a mining photo (`screens/assets/mining.jpg`, referenced relatively from `screens.css`, so it travels with the folder). Light mode: the photo with a 10% dark tint, the glass panel raised to 70% white for legibility; dark mode: the same photo under a 58% black overlay. The frosted glass (panel, rail, tabs, toggles) blurs the photo. Both `png/` and `png-dark/` exports were re-rendered with it.

## 2. Colour tokens

Values are what the screens render with (`tokens.css`). Dark-theme values are shown where they differ.

**Accent and status colours**

| Token | Light | Dark |
|---|---|---|
| `--accent` | `#00E510` | — |
| `--accent-grad` | `linear-gradient(180deg, #3C3B37 0%, #23221F 100%)` | — |
| `--accent-grad-diag` | `linear-gradient(145deg, #4A4944 0%, #23221F 100%)` | — |
| `--accent-hover` | `#00CA0E` | — |
| `--accent-on` | `#111111` | — |
| `--accent-pressed` | `#00AE0C` | — |
| `--accent-tint-15` | `#D9FBDB` | — |
| `--accent-tint-25` | `#BFF8C3` | — |
| `--accent-tint-8` | `#EBFDEC` | — |
| `--accent-wash` | `linear-gradient(180deg, #F6F6F3 0%, #EFEFEB 100%)` | — |
| `--amber-grad` | `linear-gradient(135deg, #F8CF68 0%, #E2A52B 100%)` | — |
| `--amber-ink` | `#0A1922` | — |
| `--amber-tint` | `#F4E4B8` | — |
| `--coral-grad` | `linear-gradient(135deg, #FF8294 0%, #F0445E 100%)` | — |
| `--glass` | `rgba(110,122,150,.28)` | `rgba(255,255,255,.12)` |
| `--glass-line` | `rgba(255,255,255,.55)` | `rgba(255,255,255,.18)` |
| `--green-grad` | `linear-gradient(180deg, #3A9187 0%, #2D6B6A 100%)` | — |
| `--green-tint` | `#CFE0DE` | — |
| `--mark` | `#FFF04D` | — |
| `--mk` | `#E4F55B` | — |
| `--orange` | `#00E510` | — |
| `--orange-tint` | `#D9FBD6` | `#123D12` |
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
| `--bg` | `#D2E0FA` | `#000000` |
| `--card` | `rgba(255,255,255,.88)` | `rgba(38,38,38,.92)` |
| `--dotline` | `rgba(0,0,0,.12)` | `rgba(255,255,255,.16)` |
| `--dots` | `transparent` | `#2E2E2E` |
| `--fill` | `#F1F1F1` | `#262626` |
| `--hover` | `#F1EFE9` | — |
| `--inv-bg` | `#000000` | `#FFFFFF` |
| `--inv-ink` | `#FFFFFF` | `#000000` |
| `--line` | `rgba(0,0,0,.08)` | `rgba(255,255,255,.10)` |
| `--line-soft` | `#E4E1DA` | — |
| `--pane` | `#F6F4EF` | — |
| `--panel` | `rgba(255,255,255,.70)` | `rgba(20,20,20,.72)` |
| `--strong` | `#000000` | `#FFFFFF` |

**Text colours**

| Token | Light | Dark |
|---|---|---|
| `--faint` | `#94979F` | `#787B83` |
| `--ink` | `#000000` | `#FFFFFF` |
| `--muted` | `#5E6168` | `#A9ACB3` |
| `--text-info` | `#0B0B0B` | — |
| `--text-selected` | `#0B0B0B` | — |

## 3. Type

Families: **Inter**. Sizes below are the rendered values on the 19 screens.

| Role | Family | Size | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Display ("Hi,") | Inter | 54px | 700 | -2.97px | — |
| Lead | Inter | 20px | 600 | -0.6px | — |
| Pane title | Inter | 20px | 700 | -0.9px | — |
| Report title | Inter | 32px | 700 | -1.6px | — |
| Finding title | Inter | 14px | 600 | -0.28px | — |
| Body | Inter | 14px | 400 | — | — |
| Header bar | Inter | 14px | 600 | -0.14px | — |
| Section label | Inter | 14px | 500 | — | — |
| Meta / dates | Inter | 13px | 400 | — | — |
| Chip | Inter | 14px | 400 | — | — |
| Tab | Inter | 14px | 400 | — | — |
| Button | Inter | 14px | 600 | — | — |
| Link | Inter | 14px | 500 | — | — |
| Tag | Inter | 12px | 400 | — | — |
| Risk badge | Inter | 12px | 600 | — | — |

## 4. Shape, depth and glass

| Component | Radius | Border | Shadow | Backdrop blur |
|---|---|---|---|---|
| Panel | 40px | 1px | yes | blur(30px) saturate(1.7) |
| Chat card | 30px | 0px none | yes | — |
| Composer | 30px | 0px none | yes | — |
| Cards | 26px | 0px none | yes | — |
| Intro tile | 30px | 0px none | none | — |
| Header bar | 999px | 0px none | yes | — |
| Buttons | 999px | 0px none | none | — |
| Chips | 999px | 0px none | yes | — |
| Text fields | 999px | 2px | none | — |
| Toggle | 999px | 1px | yes | blur(8px) |
| Rail tiles | 15px | 1px | none | blur(10px) |
| Send button | 50% | 0px none | none | — |
| Tags | 999px | 0px none | none | — |

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
- **Focus:** buttons and other clickable controls take `2px solid #00E510` with a 2px offset and keep their own radius; text fields show no ring, only their 1px border changes colour; the composer container adds nothing.
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
