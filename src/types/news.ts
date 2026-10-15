export interface CommentItem {
  id: string;
  author: string;
  location: string;
  timestamp: string;
  content: string;
  upvotes: number;
  isNytPick?: boolean;
  isReaderPick?: boolean;
}

export interface Article {
  id: string;
  title: string;
  deck: string;
  category: string;
  subcategory?: string;
  kicker?: string;
  byline: string;
  readTime: string;
  date: string;
  commentsCount: number;
  imageUrl?: string;
  imageCaption?: string;
  imageCredit?: string;
  imageAlt?: string;
  leadParagraph?: string;
  paragraphs: string[];
  pullQuote?: string;
  isLive?: boolean;
  liveBadgeText?: string;
  bulletPoints?: string[];
  comments?: CommentItem[];
  tags?: string[];
  relatedArticleIds?: string[];
}

export type SectionTab = 
  | 'All'
  | 'U.S.'
  | 'World'
  | 'Business'
  | 'Arts'
  | 'Lifestyle'
  | 'Opinion'
  | 'Video'
  | 'Shows'
  | 'Games'
  | 'Cooking'
  | 'Wirecutter'
  | 'The Athletic';

export type GameKey = 'wordle' | 'connections' | 'spellingBee' | 'mini' | 'strands' | 'crossword';
