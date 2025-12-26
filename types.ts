
export interface Poster {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export type Category = 'All' | 'Minimalist' | 'Cyberpunk' | 'Typographic' | 'Brutalist' | 'Abstract';
