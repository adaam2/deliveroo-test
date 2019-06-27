import Neighbourhood from "./neighbourhood";
import { Url } from "url";
import Tag from "./tag";

export default interface Restaurant {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  tags: Tag[];
};
