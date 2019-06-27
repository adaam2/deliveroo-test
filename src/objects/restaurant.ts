import Tag from "./tag";

export default interface Restaurant {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  tags: Tag[];
};
