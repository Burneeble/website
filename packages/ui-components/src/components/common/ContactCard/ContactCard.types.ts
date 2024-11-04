import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * ContactCard props
 */
export interface ContactCardProps {
  icon: string | IconDefinition;
  title: string;
  description: string;
  mainColor: string;
  buttonText: string;
}
