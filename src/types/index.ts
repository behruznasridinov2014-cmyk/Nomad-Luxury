export type Language = 'ru' | 'en';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  region: string;
  regionEn: string;
  country: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  shortDescriptionEn: string;
  fullDescription: string;
  fullDescriptionEn: string;
  suggestedDuration: string;
  bestSeason: string;
  categories: string[];
  tags: string[];
  rating: number;
  altitude?: string;
  highlights: string[];
  highlightsEn: string[];
  relatedTours: string[];
  relatedResorts: string[];
}

export type ResortCategory =
  | 'alpine'
  | 'spa'
  | 'heritage'
  | 'lodge'
  | 'nature'
  | 'beach'
  | 'countryside'
  | 'contemporary';

export interface RoomType {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  capacity: number;
  sizeM2: number;
  description: string;
  descriptionEn: string;
  image: string;
  features: string[];
}

export interface ResortFAQ {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

export interface Resort {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  location: string;
  locationEn: string;
  country: string;
  category: ResortCategory;
  categoryLabel: string;
  categoryLabelEn: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  shortDescriptionEn: string;
  fullDescription: string;
  fullDescriptionEn: string;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  capacity: number;
  amenities: string[];
  roomTypes: RoomType[];
  faq: ResortFAQ[];
  isDemo: boolean;
}

export type TourCategory =
  | 'culture'
  | 'architecture'
  | 'nature'
  | 'mountains'
  | 'gastronomy'
  | 'wellness'
  | 'adventure'
  | 'family';

export interface ItineraryDay {
  day: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  activities: string[];
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  destination: string;
  destinationEn: string;
  destinationId: string;
  duration: string;
  durationEn: string;
  category: TourCategory;
  categoryLabel: string;
  categoryLabelEn: string;
  price: number;
  currency: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  shortDescriptionEn: string;
  itinerary: ItineraryDay[];
  included: string[];
  includedEn: string[];
  difficulty: string;
  maxGroupSize: number;
  rating: number;
}

export interface ArticleBlock {
  type: 'paragraph' | 'heading' | 'quote';
  text: string;
  textEn: string;
  author?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  excerptEn: string;
  blocks: ArticleBlock[];
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface BookingRequest {
  id: string;
  referenceNumber: string;
  createdAt: string;
  type: 'resort' | 'tour';
  itemId: string;
  itemTitle: string;
  itemImage: string;
  checkIn?: string;
  checkOut?: string;
  nights?: number;
  guests: number;
  roomTypeId?: string;
  roomTypeName?: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  specialRequests?: string;
  totalPrice: number;
  currency: string;
  status: 'confirmed' | 'cancelled';
  isDemo: true;
}

export interface PlannerState {
  destination: string;
  durationDays: number;
  travelStyle: string;
  budgetLevel: string;
  travelersCount: number;
  preferredVibes: string[];
}

export interface ItineraryDayPlan {
  dayNumber: number;
  title: string;
  location: string;
  morning: string;
  afternoon: string;
  evening: string;
  recommendedStay: string;
  tips: string;
}

export interface GeneratedItinerary {
  id: string;
  title: string;
  summary: string;
  estimatedCostTotal: number;
  currency: string;
  days: ItineraryDayPlan[];
}
