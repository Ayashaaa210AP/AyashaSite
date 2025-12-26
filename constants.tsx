
import { Poster, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Minimalist', 'Cyberpunk', 'Typographic', 'Brutalist', 'Abstract'];

export const POSTERS: Poster[] = [
  {
    id: '1',
    title: 'Neon Genesis',
    category: 'Cyberpunk',
    image: 'https://picsum.photos/seed/cyber/800/1200',
    description: 'A dive into the digital abyss where light meets darkness in a neon-soaked future.',
    tags: ['Neon', 'Future', 'Glow']
  },
  {
    id: '2',
    title: 'Silent Void',
    category: 'Minimalist',
    image: 'https://picsum.photos/seed/minimal/800/1200',
    description: 'Exploring the beauty of negative space and the power of a single line.',
    tags: ['Mono', 'Space', 'Lines']
  },
  {
    id: '3',
    title: 'Helvetica Rage',
    category: 'Typographic',
    image: 'https://picsum.photos/seed/type/800/1200',
    description: 'When letters become architecture and words create worlds.',
    tags: ['Bold', 'Type', 'Grid']
  },
  {
    id: '4',
    title: 'Concrete Jungle',
    category: 'Brutalist',
    image: 'https://picsum.photos/seed/brutal/800/1200',
    description: 'Raw materials, sharp edges, and the unapologetic honesty of structure.',
    tags: ['Raw', 'Structure', 'Form']
  },
  {
    id: '5',
    title: 'Chromatic Echo',
    category: 'Abstract',
    image: 'https://picsum.photos/seed/abstract/800/1200',
    description: 'A visual representation of sound waves through color distortion.',
    tags: ['Color', 'Vibe', 'Energy']
  },
  {
    id: '6',
    title: 'Digital Soul',
    category: 'Cyberpunk',
    image: 'https://picsum.photos/seed/soul/800/1200',
    description: 'The intersection of humanity and machine intelligence.',
    tags: ['Blue', 'Tech', 'Cyber']
  }
];
