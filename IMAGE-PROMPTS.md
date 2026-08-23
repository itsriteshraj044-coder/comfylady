# Comfylady — AI Image Generation Prompts

Every image on the site is a placeholder until the file below exists in
`public/images/`. Missing files render an on-brand blush placeholder card (see
`src/components/SmartImage.tsx`), so layout and animation stay accurate while
art direction is in progress.

These prompts are also held in `src/content/content.ts` under `imagePrompts`, so
they travel with the code.

## How to use

1. Paste a prompt into Midjourney, Flux, Ideogram or ChatGPT image generation.
2. Generate at the stated aspect ratio (Midjourney: append `--ar 4:5 --style raw`;
   for photographic realism add `--v 7`).
3. Export as JPEG, ~2400px on the long edge, quality 80.
4. Save into `public/images/` using the exact **File** name — nothing else needs changing.

## Consistency rules

Keep these constant across every generation so the set reads as one campaign:

- **Palette** — soft rose pink, blush, warm nude, off-white, deep charcoal accents
- **Light** — soft, diffused, directional; never hard flash or clinical fluorescents
- **Finish** — matte editorial grade, subtle film grain, natural skin texture
- **Never include** — text, logos, packaging, branding, watermarks, clinical/medical staging

---

## 1. Hero Banner

**File:** `hero-comfylady.jpg` · **Aspect:** 4:5 portrait (also export 16:9 for wide screens) · **Used on:** Home hero

> Editorial fashion-wellness photograph of a confident South Asian woman in her late twenties, seated in soft diffused morning light beside a linen-draped window, wearing an unbranded ivory ribbed cotton set, relaxed natural posture with one hand resting on her knee, serene and self-assured expression looking slightly away from camera. Palette of soft rose pink, blush, warm nude and off-white with deep charcoal accents. Shot on medium format, 80mm lens, f/2.8, shallow depth of field, creamy bokeh, gentle skin tones, subtle film grain, matte finish, generous negative space on the left third for typography. Luxury beauty campaign aesthetic, calm and dignified, no text, no logos, no product packaging visible, no plastic sheen.

---

## 1b. Hero Capsule (inline in the headline)

**File:** `hero-capsule.jpg` · **Aspect:** 2:1 wide — crops into a pill, so keep the subject dead centre · **Used on:** Home hero, inline inside the headline

> Wide crop luxury still life for a rounded capsule crop: softly folded blush-pink linen filling the frame with a single unbranded white sanitary pad laid horizontally across the centre, one dried rose petal resting beside it. Warm directional morning light raking from the left, long soft shadows, shallow depth of field falling off at both edges, palette of soft rose pink, blush and warm nude. Composition centred and horizontally balanced so it reads well cropped into a long pill shape, nothing important near the left or right edge. Shot on 85mm at f/2.8, tactile fabric detail, matte editorial finish, premium feminine wellness aesthetic, no text, no logos, no packaging.

This one is cropped to a long rounded capsule at every size, so **anything near the
left or right edge will be cut off** — keep the subject centred.

---

## 2. Brand Story — Primary

**File:** `brand-story-primary.jpg` · **Aspect:** 3:4 portrait · **Used on:** Home brand introduction

> Premium still-life product photograph of three unbranded white sanitary pads with a soft cottony surface, arranged as an overlapping fan on crumpled blush-pink linen, one folded to reveal a delicate quilted top sheet texture. A single dried rose stem and a smooth warm nude ceramic dish sit nearby. Soft directional window light from the upper left with long gentle shadows, warm neutral background, minimal styling, tactile fabric detail, shot on 100mm macro at f/4, high dynamic range, matte editorial finish. Luxury skincare campaign styling, discreet and elegant, no branding, no text, no clinical or medical feel.

---

## 3. Brand Story — Texture Inset

**File:** `brand-story-secondary.jpg` · **Aspect:** 1:1 square · **Used on:** Home brand introduction inset

> Extreme macro photograph of a soft white non-woven cottony textile surface with a fine embossed quilted pattern, a single droplet of clear water resting on the fibres and catching the light. Very shallow depth of field, soft rose-tinted rim light, warm white background falling into gentle gradient, delicate fibre detail, abstract and tactile. Shot on 100mm macro at f/5.6, luxury skincare texture photography, no text, no branding, no plastic reflections.

---

## 4. Product — Straight Regular · Non-Woven

**File:** `product-straight-regular-nonwoven.jpg` · **Aspect:** 4:5 portrait

> Minimal luxury product photograph of a single unbranded white sanitary pad with a soft cottony non-woven top sheet and folded wings, centred on a smooth blush-pink paper backdrop with a subtle curved sweep. Soft even studio lighting with one gentle shadow to the lower right, warm nude accent props kept out of frame, clean geometry, generous negative space. Shot on 85mm at f/8, crisp texture detail, matte editorial retouch, high-end beauty catalogue aesthetic, no text, no logos, no packaging.

---

## 5. Product — Straight Regular · Drynet

**File:** `product-straight-regular-drynet.jpg` · **Aspect:** 4:5 portrait

> Minimal luxury product photograph of a single unbranded white sanitary pad with a finely perforated dry-net top sheet, shown at a slight three-quarter angle on a soft warm nude paper backdrop, with a scattering of tiny clear water beads on the surface catching cool highlights. Soft studio lighting, gentle single shadow, clean composition with negative space at the top. Shot on 85mm at f/8, macro-sharp perforation detail, matte editorial retouch, premium beauty catalogue aesthetic, no text, no logos, no packaging.

---

## 6. Product — Straight XL · Non-Woven

**File:** `product-straight-xl-nonwoven.jpg` · **Aspect:** 4:5 portrait

> Minimal luxury product photograph of a single elongated unbranded white sanitary pad with a soft cottony non-woven surface, laid diagonally across a soft rose-pink paper backdrop to emphasise its extended length, wings open and flat. Soft even studio lighting, one delicate shadow, quiet composition with wide margins. Shot on 85mm at f/8, fine fabric texture, matte editorial retouch, high-end beauty catalogue aesthetic, no text, no logos, no packaging.

---

## 7. Product — Straight XL · Drynet

**File:** `product-straight-xl-drynet.jpg` · **Aspect:** 4:5 portrait

> Minimal luxury product photograph of a single elongated unbranded white sanitary pad with a perforated dry-net surface, standing gently curved on a soft blush backdrop so its length and flexibility read clearly, a faint cool highlight tracing the perforations. Soft studio lighting with a soft gradient background, one subtle shadow. Shot on 85mm at f/8, crisp surface detail, matte editorial retouch, premium beauty catalogue aesthetic, no text, no logos, no packaging.

---

## 8. Product — Ultra Thin XL

**File:** `product-ultra-thin-xl.jpg` · **Aspect:** 4:5 portrait

> Minimal luxury product photograph of a single unbranded ultra-thin white sanitary pad photographed close to edge-on so its remarkably slim profile is the subject, resting on a smooth warm nude surface with a soft reflective sheen. Low raking studio light to sculpt the thin silhouette, soft off-white gradient background, elegant negative space above. Shot on 100mm at f/8, precise edge detail, matte editorial retouch, premium minimalist product photography, no text, no logos, no packaging.

---

## 9. Product — Ultra Thin XXL

**File:** `product-ultra-thin-xxl.jpg` · **Aspect:** 4:5 portrait

> Minimal luxury product photograph of a single extra-long unbranded ultra-thin white sanitary pad laid on soft crumpled ivory bed linen in warm low evening light, conveying overnight rest and calm. Soft shadows, muted rose and nude palette, tranquil bedroom mood without any visible room detail, shallow depth of field at the far end. Shot on 85mm at f/4, tactile linen texture, matte editorial retouch, luxury lifestyle product photography, no text, no logos, no packaging.

---

## 10. Women Lifestyle

**File:** `why-lifestyle.jpg` · **Aspect:** 16:9 landscape · **Used on:** Why Comfylady lifestyle band

> Editorial lifestyle photograph of a woman in her early thirties walking through a bright minimal city space in soft late-afternoon light, wearing an unbranded blush linen blazer and cream trousers, mid-stride with a relaxed confident expression and hair moving naturally. Warm nude and soft white architecture behind her, generous negative space to the right. Shot on 50mm at f/2, natural motion, gentle film grain, muted rose-toned colour grade, matte finish. Premium wellness brand campaign aesthetic, candid and dignified, no text, no logos, no product visible.

---

## 11. Wellness Scene

**File:** `why-hero.jpg` · **Aspect:** 3:2 landscape · **Used on:** Why Comfylady hero

> Serene wellness scene photograph: a calm sunlit corner with sheer linen curtains diffusing morning light, a rattan chair with a folded blush throw, a ceramic vase holding soft dried pampas, and a glass of water on a pale oak side table. Warm nude, soft white and gentle rose palette, dust motes visible in the light shaft, deeply calm and unhurried atmosphere. Shot on 35mm at f/2.8, natural light only, subtle film grain, matte editorial grade. Luxury wellness brand photography, no people, no text, no branding.

---

## 12. Quality Manufacturing

**File:** `quality-manufacturing.jpg` · **Aspect:** 3:2 landscape · **Used on:** Home quality section & Quality page

> Clean, bright manufacturing photograph of a modern hygienic feminine-care production facility: white and stainless steel converting machinery in soft focus, a continuous web of pristine white non-woven material moving through rollers in sharp focus in the foreground, a technician in a spotless white coat, hair covering and gloves observing from the mid-ground. Soft even industrial daylight, calm and premium rather than clinical, muted warm-neutral grade with a faint rose cast. Shot on 35mm at f/4, immaculate surfaces, editorial corporate photography, no text, no visible brand marks, no clutter.

---

## 13. Quality Hero

**File:** `quality-hero.jpg` · **Aspect:** 16:9 landscape · **Used on:** Quality page hero

> Wide architectural photograph of an immaculate white production hall for hygiene products, long clean lines of machinery receding into soft depth, polished floor catching diffused daylight from high clerestory windows, a single technician in white protective wear as a small human accent for scale. Restrained warm-neutral palette with soft rose highlights, generous empty space in the upper third for typography. Shot on 24mm at f/5.6, symmetrical composition, calm and precise, matte editorial grade, no text, no logos, no signage.

---

## 14. Sustainability

**File:** `quality-sustainability.jpg` · **Aspect:** 4:3 landscape · **Used on:** Quality page sustainability section

> Soft natural still life expressing responsible materials: neatly stacked layers of undyed white non-woven fabric and unbleached kraft board on a pale oak surface, a sprig of fresh green eucalyptus resting across them, soft morning light from a side window casting long delicate shadows. Warm neutral palette with a single restrained note of green, tactile textures, quiet and considered mood. Shot on 50mm at f/4, matte editorial finish, sustainable brand photography, no text, no branding, no recycling symbols.

---

## 15. About Hero

**File:** `about-hero.jpg` · **Aspect:** 16:9 landscape · **Used on:** About page hero

> Minimal editorial banner photograph: a softly lit plaster wall in warm off-white with a gentle rose gradient falling across it, a slim pale oak console below holding a single ceramic vessel and one dried rose stem, long soft shadows from a low side light. Extremely restrained composition with vast negative space in the centre and right for typography. Shot on 35mm at f/5.6, calm and elevated, subtle grain, matte editorial grade. Luxury brand banner photography, no people, no text, no branding.

---

## 16. Brand Story — About

**File:** `about-story.jpg` · **Aspect:** 3:4 portrait · **Used on:** About page story section

> Warm brand-story photograph: a pair of hands with neat unpolished nails carefully holding a folded sheet of soft white non-woven fabric above a pale oak worktable, alongside a fabric swatch book and a small notebook with handwriting out of focus. Soft golden side light from a window, blush and warm nude palette, intimate and human atmosphere conveying craft and care. Shot on 50mm at f/2.2, shallow depth of field, gentle film grain, matte editorial grade, no text, no logos, no faces.

---

## 17. Founder Portrait

**File:** `about-founder.jpg` · **Aspect:** 4:5 portrait · **Used on:** About page founder message

> Elegant editorial portrait of a poised South Asian businesswoman in her late thirties, standing three-quarter to camera in a softly lit minimal office with an off-white plaster wall behind her, wearing a tailored blush-toned blazer over an ivory silk blouse, warm confident half-smile, hands relaxed. Soft large-source window light from the left, warm nude and rose palette, shallow depth of field. Shot on 85mm at f/2, natural skin texture, subtle film grain, matte editorial retouch. Premium founder portrait for a luxury wellness brand, no text, no branding.

> **Note:** replace with an actual photograph of Priyankka Sing Gautam before launch — this generated stand-in is for layout only and should not be published as a depiction of a real person.

---

## 18. Global Capabilities

**File:** `about-capabilities.jpg` · **Aspect:** 16:9 landscape · **Used on:** About page capabilities section

> Wide corporate photograph of a spotless finished-goods warehouse for hygiene products: neatly aligned unbranded white cartons stacked on pale wooden pallets in long receding rows, soft diffused daylight from high windows, polished pale floor, one worker in white uniform walking in the distance for scale. Warm neutral palette with faint rose light, orderly geometry, calm and premium industrial mood. Shot on 28mm at f/5.6, matte editorial grade, no text, no logos, no signage.

---

## 19. Open Graph / Social Card

**File:** `og-comfylady.jpg` · **Aspect:** 1200 × 630 (1.91:1) · **Used on:** Social sharing previews

> Luxury brand social share card image: a soft blush-to-ivory gradient background with a delicate rose-pink light bloom in the upper right, a single unbranded white sanitary pad and one dried rose stem arranged with generous space in the lower left, soft directional light and long gentle shadows. Composition intentionally leaves the centre-right clear for an overlaid wordmark. Shot on 85mm at f/5.6, matte editorial finish, premium feminine wellness aesthetic, no text, no logos.

Overlay the Comfylady wordmark in Fahkwang Light (300) after generation.
