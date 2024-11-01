/**
 * ReviewCard props
 */
export interface ReviewerInfo {
  avatar: string;
  name: string;
  country: string;
}
export interface ReviewCardProps {
  user: ReviewerInfo;
  rating: number;
  review: string;
}
