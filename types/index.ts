import { IconType } from "react-icons";

export interface EventType {
  id: string;
  title: string;
  date: string;
  time:string;
  image: string;
  location: string;
  category: string;
  tags: string[];
}


export interface CategoryType {
  id: number;
  name: string;
  icon: IconType;
  count: number;
  color: string;
}