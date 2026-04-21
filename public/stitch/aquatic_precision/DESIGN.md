# Design System Strategy: Architectural Integrity & The Editorial Horizon

## 1. Overview & Creative North Star
This design system is built upon the **"Architectural Horizon"**—a Creative North Star that balances the structural permanence of property management with the fluid, transparent nature of high-end hospitality. 

To move beyond the generic "template" look common in the industry, this system rejects rigid grids in favor of **Intentional Asymmetry**. We create a signature aesthetic by utilizing expansive white space, overlapping editorial elements, and a high-contrast typographic scale. The goal is to make the user feel they are not just looking at a list of properties, but browsing a curated portfolio of investments. Every layout should feel like a page from a premium architectural digest: deliberate, airy, and authoritative.

---

## 2. Colors & Tonal Depth
The palette transitions from deep, oceanic foundations to ethereal, glass-like accents. We avoid flat "corporate blue" in favor of a sophisticated teal and slate spectrum.

### The Color Logic
- **Primary Authority:** Use `primary` (#006b5f) for high-impact brand moments. Use `primary_container` (#14b8a6) to draw the eye to active interactive states.
- **The "No-Line" Rule:** Explicitly prohibit the use of 1px solid borders to define sections. Boundaries must be defined through background color shifts. For example, a `surface_container_low` section should sit against a `surface` background to create a "block" of content without a structural "line."
- **Surface Hierarchy & Nesting:** Treat the UI as physical layers of fine paper. 
    - Base Layer: `surface` (#faf8ff)
    - Sub-Section Layer: `surface_container_low` (#f2f3ff)
    - Interactive Cards: `surface_container_lowest` (#ffffff)
- **The "Glass & Gradient" Rule:** To achieve a premium feel, floating elements (like navigation bars or hovering action cards) should utilize Glassmorphism. Use semi-transparent variants of `surface_container_lowest` with a `backdrop-blur` of 12px–20px.
- **Signature Textures:** Apply subtle linear gradients (e.g., `primary` to `primary_container` at a 135-degree angle) for primary CTAs. This adds a "soul" to the UI that flat colors cannot replicate.

---

## 3. Typography
The typography is a dialogue between the geometric precision of **Manrope** and the functional clarity of **Inter**.

- **Display & Headlines (Manrope):** These are your "Architectural" elements. Use `display-lg` (3.5rem) for hero statements. The tracking should be slightly tight (-0.02em) to create a sense of professional density.
- **Body & Labels (Inter):** These are your "Information" elements. Inter provides maximum readability at small scales.
- **Editorial Hierarchy:** Use extreme scale differences. Pair a `display-md` headline with a `label-md` uppercase sub-header to create an editorial "high-fashion" contrast. This hierarchy signals to the user that the content is curated and trustworthy.

---

## 4. Elevation & Depth
In this system, depth is a result of light and shadow, not lines and boxes.

- **The Layering Principle:** Stacking surface tiers is the primary method of organization. Place a `surface_container_highest` (#dce1fb) element inside a `surface_container_low` (#f2f3ff) to create natural visual focus.
- **Ambient Shadows:** Shadows must mimic natural light. Use large blur values (20px+) with low-opacity (4%-8%) tints using the `on_surface` (#151b2d) color. Never use pure black shadows; they feel "digital" and cheap.
- **The "Ghost Border" Fallback:** If a container requires definition for accessibility, use the "Ghost Border"—the `outline_variant` (#bbcac6) at 15% opacity. It should be felt, not seen.
- **Fluid Motion:** When elements lift on hover, use a `surface_container_lowest` (#ffffff) fill with a subtle "Glass" shine to suggest the material is premium and reactive.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`). Border-radius: `md` (0.375rem). Use `on_primary` (#ffffff) for text.
- **Secondary:** Surface-colored with a "Ghost Border." No heavy fill.
- **Tertiary:** Text-only with a `primary` underlines that expand on hover.

### Cards & Lists
- **The Divider Ban:** Strictly forbid 1px dividers between list items or card sections. Use vertical whitespace (from the spacing scale) or a subtle shift from `surface_container_low` to `surface_container_lowest` to separate content blocks.
- **Interactive Cards:** Must use the `xl` (0.75rem) roundedness scale to feel approachable yet modern.

### Input Fields
- **Styling:** Forgo the traditional four-sided border. Use a `surface_container_highest` fill with a bottom-weighted `primary` accent on focus. This creates a more "bespoke form" feel.
- **Helper Text:** Always use `label-sm` in `on_surface_variant` (#3c4947) to keep the UI clean.

### Selection Controls (Chips, Checkboxes, Radios)
- **Chips:** Use `secondary_container` with `on_secondary_container` for a muted, professional filter look.
- **Checkboxes:** When active, use `primary`. When inactive, use a `surface_dim` fill to "recede" into the background.

### Context-Specific Component: "The Property Portfolio Card"
A custom component that uses a large-scale image with an overlapping `surface_container_lowest` content block. The text block should be offset (asymmetric) to break the grid, creating a high-end editorial feel.

---

## 6. Do's and Don'ts

### Do:
- **Do** embrace "Negative Space." If a layout feels crowded, increase the padding to the next tier in the scale.
- **Do** use `primary_fixed_dim` (#4fdbc8) for subtle highlights in data visualization.
- **Do** align text-heavy sections to a generous left margin to create an editorial column feel.

### Don't:
- **Don't** use 100% black (#000000) for text; use `on_surface` (#151b2d) to maintain tonal harmony.
- **Don't** use "Drop Shadows" on buttons. Use tonal shifts or "Glass" effects instead.
- **Don't** use sharp 0px corners. Even the smallest radius (`sm` 0.125rem) softens the UI and makes it feel more "designed" and less "default."
- **Don't** use centered text for body copy. Keep it flush-left to maintain the architectural "edge" of the layout.