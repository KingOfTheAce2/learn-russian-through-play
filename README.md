# Learn Russian Through Play

A playful project that transforms Russian learning into a game-inspired journey. Progress through levels, collect words, practice phrases, and complete simple challenges that build real skills. Everything is designed to keep learning light, fun, and driven by curiosity. You advance at your own pace while enjoying small tasks that feel rewarding.

## Two Versions Available

This project offers two distinct learning experiences tailored to different audiences:

### Kids Edition (`kids.html`)
- **Colorful, story-driven adventure** with Masha and Shura
- Fun mini-games and playful activities
- Bright gradients and retro pixel art style
- Perfect for children learning Russian
- Engaging narrative that makes learning feel like play

### Professional Edition (`adults.html`)
- **Business and travel contexts** for real-world application
- Practical vocabulary and phrases for adults
- Clean, professional interface with modern design
- Ideal for adult learners and professionals
- Scenarios focused on work, travel, and daily life

Both versions teach all 33 Russian letters through interactive gameplay, native audio pronunciation, and spaced repetition.

## Development

### Running the Games

```bash
# Install dependencies
npm install

# Run landing page (choose between kids/adults)
npm run dev

# Run kids version directly
npm run dev:kids

# Run adults version directly
npm run dev:adults
```

### Building for Production

```bash
# Build all versions (landing page + both games)
npm run build

# Build only kids version
npm run build:kids

# Build only adults version
npm run build:adults

# Preview production build
npm run preview
```

## Project Structure

```
learn-russian-through-play/
├── index.html              # Landing page for version selection
├── kids.html               # Kids game entry point
├── adults.html             # Adults game entry point
├── src/
│   ├── main-kids.ts        # Kids game configuration
│   ├── main-adults.ts      # Adults game configuration
│   ├── game/
│   │   ├── scenes/         # Kids version scenes
│   │   └── scenes/adult/   # Adults version scenes
│   ├── systems/            # Shared game systems
│   └── data/               # Letter and vocabulary data
└── dist/                   # Built files (after npm run build)
```

## Deployment

Each version can be deployed independently:

1. **Landing Page**: Deploy `index.html` to let users choose their version
2. **Kids Only**: Deploy `kids.html` and associated assets
3. **Adults Only**: Deploy `adults.html` and associated assets
4. **Both Versions**: Deploy all HTML files for a complete offering

Example URLs:
- `yoursite.com/` - Landing page
- `yoursite.com/kids.html` - Kids version
- `yoursite.com/adults.html` - Adults version

## Technical Stack

- **Phaser 3** - Game framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tooling and multi-page app support
- **Web Speech API** - Russian text-to-speech
- **localStorage** - Save game progress

## Features

- All 33 Russian letters (Cyrillic alphabet)
- Native audio pronunciation
- Interactive mini-games
- Spaced repetition system
- Progress tracking
- Story-based learning (kids) or scenario-based learning (adults)
- Transliteration toggle
- Save/load functionality

## Architecture Notes

- Both games share common code (systems, base scenes, sprites)
- Each has its own entry point that sets the learning mode
- No mode selection screen - direct entry to appropriate content
- Learning mode is set at startup and persists in save data
- Can be hosted at different URLs or subdomains for brand separation
