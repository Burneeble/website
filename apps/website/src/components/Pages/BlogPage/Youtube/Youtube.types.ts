export interface YoutubeProps {
  className?: string;
  video: YoutubeVideo[] | null;
}

export interface YoutubeVideo {
  thumbnail: string;
  title: string;
  url: string;
}
