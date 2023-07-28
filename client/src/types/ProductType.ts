export interface Product {
  idProduct: number;
  name: string;
  description: string;
  stock: number;
  price: number;
  category: {
    name: string;
  }
  topic_1: string;
  detail_1: string;
  topic_2?: string,
  detail_2?: string,
  topic_3?: string,
  detail_3?: string,
  topic_4?: string;
  detail_4?: string;
  topic_5?: string;
  detail_5?: string;
  topic_6?: string;
  detail_6?: string;
  topic_7?: string;
  detail_7?: string;
  topic_8?: string;
  detail_8?: string;
  photos?: [
    {
      name: string;
    }
  ];
  [index: string]: string | number | undefined | Product["photos"] | Product["category"];
}
