# Kitchen Visualizer - Progressive Material Selection Guide

## System Overview
This system allows users to **progressively build their selection** by choosing materials one at a time and seeing incremental changes, rather than forcing complete combinations.

## Material Options Available

### Countertops (2 options):
- `african-rainbow`
- `agatha-black`

### Backsplashes (2 options):
- `alaska-gray`
- `alaska-white`

### Cabinets (2 options):
- `beige`
- `white`

---

## SPACE 1 - Progressive Image Set

### Directory: `assets/space-material-variations/1/`

#### Base Image:
- `default.jpg` ← **Starting view (no materials selected)**

#### Single Material Selections:
- `african-rainbow.jpeg` ← **Only countertop changed**
- `agatha-black.jpeg` ← **Only countertop changed**
- `alaska-gray.jpeg` ← **Only backsplash changed**
- `alaska-white.jpeg` ← **Only backsplash changed**
- `beige.jpeg` ← **Only cabinet changed**
- `white.jpeg` ← **Only cabinet changed**

#### Two Material Combinations:
- `african-rainbow-alaska-gray.jpeg`
- `african-rainbow-alaska-white.jpeg`
- `african-rainbow-beige.jpeg`
- `african-rainbow-white.jpeg`
- `agatha-black-alaska-gray.jpeg`
- `agatha-black-alaska-white.jpeg`
- `agatha-black-beige.jpeg`
- `agatha-black-white.jpeg`
- `alaska-gray-beige.jpeg`
- `alaska-gray-white.jpeg`
- `alaska-white-beige.jpeg`
- `alaska-white-white.jpeg`

#### Three Material Combinations:
- `african-rainbow-alaska-gray-beige.jpeg`
- `african-rainbow-alaska-gray-white.jpeg`
- `african-rainbow-alaska-white-beige.jpeg`
- `african-rainbow-alaska-white-white.jpeg`
- `agatha-black-alaska-gray-beige.jpeg`
- `agatha-black-alaska-gray-white.jpeg`
- `agatha-black-alaska-white-beige.jpeg`
- `agatha-black-alaska-white-white.jpeg`

**Total for Space 1: 23 images** (1 default + 6 single + 8 double + 8 triple)

---

## SPACE 2 - Progressive Image Set

### Directory: `assets/space-material-variations/2/`

Same 23 image structure as Space 1, but for Space 2 interior.

---

## SPACE 3 - Progressive Image Set

### Directory: `assets/space-material-variations/3/`

Same 23 image structure as Space 1, but for Space 3 interior.

---

## Current Progress

### Space 1: `assets/space-material-variations/1/`
- [x] `default.jpg` ✅
- [x] `african-rainbow.jpeg` ✅
- [x] `alaska-gray.jpeg` ✅
- [x] `beige.jpeg` ✅
- [x] `african-rainbow-alaska-gray.jpeg` ✅
- [x] `african-rainbow-beige.jpeg` ✅
- [x] `alaska-gray-beige.jpeg` ✅
- [x] `african-rainbow-alaska-gray-beige.jpeg` ✅
- [ ] `agatha-black.jpeg` ← **Currently working on**
- [ ] `alaska-white.jpeg`
- [ ] `white.jpeg`
- [ ] *[remaining combinations with agatha-black, alaska-white, white]*

### Space 2: `assets/space-material-variations/2/`
- [ ] Not started (0/23)

### Space 3: `assets/space-material-variations/3/`
- [ ] Not started (0/23)

**Overall Progress: 8/69 images complete**

---

## User Experience Flow

### How Progressive Selection Works:

1. **User starts**: Sees `default.jpg` (clean space)
2. **User clicks "African Rainbow" countertop**: Sees `african-rainbow.jpeg`
3. **User clicks "Alaska Gray" backsplash**: Sees `african-rainbow-alaska-gray.jpeg`
4. **User clicks "Beige" cabinet**: Sees `african-rainbow-alaska-gray-beige.jpeg`
5. **User clicks "African Rainbow" again**: **Deselects** it, sees `alaska-gray-beige.jpeg`
6. **User clicks "Agatha Black"**: Sees `agatha-black-alaska-gray-beige.jpeg`

### Key Benefits:
- **Incremental visualization**: See each change build up
- **Flexible deselection**: Click any material again to remove it
- **Natural workflow**: Match how people actually make decisions
- **No forced combinations**: Don't need all materials selected

---

## File Naming Convention

### Pattern: `[countertop]-[backsplash]-[cabinet].jpeg`

### Examples:
- No selections: `default.jpg`
- One material: `african-rainbow.jpeg`
- Two materials: `african-rainbow-alaska-gray.jpeg`
- Three materials: `african-rainbow-alaska-gray-beige.jpeg`

### Rules:
- Materials appear in **alphabetical order by category**: countertop, then backsplash, then cabinet
- Use **hyphens** to separate material names
- **Omit** unselected materials from filename
- **Extension**: `.jpeg` for combinations, `.jpg` for default

---

## Next Steps

1. **Complete Space 1**: Finish remaining combinations with agatha-black, alaska-white, white
2. **Create Space 2**: Copy Space 1 structure but with Space 2 base images
3. **Create Space 3**: Copy Space 1 structure but with Space 3 base images
4. **Test thoroughly**: Verify all combinations load correctly
5. **Optimize**: Consider image compression for performance

---

## System Advantages

This progressive system is **superior to traditional combo-only systems** because:

- **Better UX**: Users see incremental changes
- **More flexible**: Any combination of 0-3 materials works
- **Realistic workflow**: Matches how people actually design
- **Fewer required images**: Don't need every possible combination upfront
- **Graceful degradation**: Missing combinations fall back to default