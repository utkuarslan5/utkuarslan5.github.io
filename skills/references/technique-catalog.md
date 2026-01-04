# Technique Catalog

Specific visual techniques organized by what they achieve. Not generic advice — concrete moves.

---

## Creating Visual Hierarchy

### The Dominant Element
Make ONE thing unmistakably primary. Everything else serves it.
```
Hero headline: 64px+ bold
Supporting text: 18px regular, 60% opacity
Background: everything else recedes
```

### Size Contrast Ratio
Maintain at least 1.5x ratio between hierarchy levels:
```
H1: 48px → H2: 32px → H3: 21px → Body: 16px
Not: H1: 24px → H2: 22px → H3: 20px (too flat)
```

### Weight Separation
Use font weight to create levels without size change:
```
Primary: 700 (bold)
Secondary: 500 (medium)  
Tertiary: 400 (regular)
Muted: 400 + reduced opacity
```

### The 60-30-10 Rule
For any design surface:
- 60% dominant color/element
- 30% secondary
- 10% accent
Prevents visual noise and creates clear focus.

---

## Typography Techniques

### Display Type Styling
For headlines and hero text:
```css
letter-spacing: -0.02em;  /* Tighten tracking */
line-height: 1.1;         /* Snug leading */
font-weight: 600-800;     /* Bold but not black */
```

### Body Text Optimization
For readability:
```css
line-height: 1.5-1.7;     /* Generous leading */
max-width: 65ch;          /* ~65 characters per line */
font-size: 16-18px;       /* Never smaller for body */
```

### Optical Alignment
Text often needs visual adjustment to look aligned:
- Left-align quotes, bullets optically hang outside margin
- Headlines may need 1-2px left nudge to align with body
- Centered text blocks need extra bottom padding

### Type Pairing Formulas
**Contrast approach**: Serif display + Sans body (or reverse)
```
Playfair Display + Source Sans Pro
Libre Baskerville + Inter
```

**Superfamily approach**: Same family, different weights
```
Roboto Slab (headlines) + Roboto (body)
IBM Plex Sans (headlines) + IBM Plex Mono (code)
```

---

## Color Techniques

### The Anchor Color System
Start with ONE brand/primary color. Derive everything:
```
Primary: hsl(220, 90%, 50%)
Primary-light: hsl(220, 90%, 95%)  /* Backgrounds */
Primary-dark: hsl(220, 90%, 30%)   /* Text on light */
Neutral: hsl(220, 10%, 50%)        /* Grays inherit hue */
```

### Accessible Color Contrast
Minimum contrast ratios:
```
Body text: 4.5:1 (WCAG AA)
Large text (24px+): 3:1
UI elements: 3:1
Decorative: no requirement
```

### Gradient Crafting
Avoid banding with these techniques:
```css
/* Add slight hue shift */
background: linear-gradient(135deg, 
  hsl(220, 80%, 50%),    /* Blue */
  hsl(260, 80%, 50%)     /* Purple — hue shifted */
);

/* Or add middle stop */
background: linear-gradient(135deg,
  #4F46E5 0%,
  #7C3AED 50%,
  #A855F7 100%
);
```

### Dark Mode Color Shifts
Don't just invert. Adjust:
```
Light mode text: hsl(0, 0%, 10%)    /* Near black */
Dark mode text: hsl(0, 0%, 85%)     /* NOT pure white */

Light mode bg: hsl(0, 0%, 100%)
Dark mode bg: hsl(220, 20%, 10%)    /* Tinted, not pure black */
```

---

## Layout Techniques

### The 8px Grid
Base all spacing on multiples of 8:
```
Micro: 4px (exception for tight spaces)
Small: 8px
Medium: 16px
Large: 24px
XL: 32px
XXL: 48px, 64px, 96px
```

### Asymmetric Balance
Create visual interest while maintaining stability:
```
┌─────────────────────────────────┐
│ ██████████████       ████      │
│ ████████████         ████      │
│                      ████      │
│ ████  ████  ████              │
└─────────────────────────────────┘
Heavy left, balanced by position of right element
```

### The Z-Pattern
For pages scanned quickly (marketing, landing pages):
```
[Logo/Nav]──────────────[CTA]
      ╲                ╱
       ╲              ╱
        ╲            ╱
[Feature]──────────[Feature]
```
Place important content along the Z.

### The F-Pattern
For content-heavy pages (articles, dashboards):
```
[████████████████████████]
[███████████████]
[████████████]
[██████████████████]
```
Front-load each line with key information.

### Negative Space Ratios
More whitespace = more premium feel:
```
Budget feel: padding: 12px 16px;
Standard: padding: 16px 24px;
Premium: padding: 24px 40px;
Luxury: padding: 48px 80px;
```

---

## Shadow & Depth Techniques

### Layered Shadows
Single shadows look flat. Layer for realism:
```css
box-shadow: 
  0 1px 2px rgba(0,0,0,0.07),
  0 2px 4px rgba(0,0,0,0.07),
  0 4px 8px rgba(0,0,0,0.07),
  0 8px 16px rgba(0,0,0,0.07);
```

### Elevation Scale
Consistent shadow depth communicates hierarchy:
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);    /* Subtle lift */
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);      /* Cards */
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);    /* Modals */
--shadow-xl: 0 20px 25px rgba(0,0,0,0.15);   /* Dramatic */
```

### Inner Shadows for Depth
Create inset, pressed, or contained feel:
```css
box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);  /* Pressed */
box-shadow: inset 0 1px 0 rgba(255,255,255,0.1); /* Top highlight */
```

---

## Animation Techniques

### Entrance Choreography
Stagger elements for sophisticated reveals:
```css
.item { animation: fadeUp 0.5s ease-out forwards; }
.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 50ms; }
.item:nth-child(3) { animation-delay: 100ms; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Easing Functions
```css
/* Entering elements: ease-out */
transition: transform 0.3s ease-out;

/* Exiting elements: ease-in */
transition: opacity 0.2s ease-in;

/* Moving elements: ease-in-out */
transition: left 0.4s ease-in-out;

/* Bouncy/playful: custom cubic-bezier */
transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Micro-interactions
Subtle feedback that creates polish:
```css
/* Button hover: slight lift */
button:hover { transform: translateY(-2px); }

/* Input focus: expand subtly */
input:focus { transform: scale(1.02); }

/* Link hover: underline draw */
a::after { 
  transform: scaleX(0);
  transition: transform 0.2s;
}
a:hover::after { transform: scaleX(1); }
```

---

## Data Visualization Techniques

### Chart Color Selection
- Use sequential colors for ordered data
- Use diverging colors for positive/negative
- Reserve red/green for specific meanings
- Ensure distinguishability without color

### Data-Ink Ratio
Maximize data, minimize decoration:
```
Remove: Unnecessary gridlines, 3D effects, decorative elements
Keep: Labels, data points, essential axes
Add only: Annotations that aid understanding
```

### Number Typography
```css
/* Use tabular figures for aligned numbers */
font-variant-numeric: tabular-nums;

/* Proper minus signs */
−42 not -42

/* Thousands separators */
1,234,567 or 1 234 567
```

---

## Presentation Techniques

### The Billboard Test
Each slide should communicate ONE idea readable from the back of a room:
- Max 6 words in headlines
- Max 3 bullet points (prefer 1-2)
- Image should be self-explanatory

### Progressive Disclosure
Reveal complexity gradually:
```
Slide 1: Single key metric
Slide 2: Metric + context
Slide 3: Metric + context + supporting data
```

### The Rule of Thirds
Place focal points at grid intersections:
```
┌───┬───┬───┐
│   │ ★ │   │
├───┼───┼───┤
│   │   │ ★ │
├───┼───┼───┤
│ ★ │   │   │
└───┴───┴───┘
```

---

## Quick Wins for Instant Polish

1. **Double the padding** you think you need
2. **Reduce to 2-3 colors** maximum
3. **Pick one great font** instead of two mediocre ones
4. **Align everything** to an invisible grid
5. **Add subtle shadows** to lift elements
6. **Increase contrast** between hierarchy levels
7. **Remove every element** that doesn't earn its place