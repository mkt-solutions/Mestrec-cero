export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  icon: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    title: "Carnes na Brasa",
    icon: "Flame",
    items: [
      { name: "Coxa e sobre coxa" },
      { name: "Galeto na brasa" },
      { name: "Costela de porco" },
      { name: "Espeto misto" },
      { name: "Filé mignon" },
      { name: "Linguiça" },
      { name: "Lombo" },
      { name: "Maminha" },
      { name: "Picanha" },
      { name: "Alcatra" },
    ],
  },
  {
    title: "Massas",
    icon: "Beef",
    items: [
      { name: "Nhoque (sugo)" },
      { name: "Nhoque (bolonhesa)" },
      { name: "Lasanha (bolonhesa)" },
      { name: "Lasanha (quatro queijos)" },
      { name: "Ravioli (bolonhesa)" },
      { name: "Ravioli (sugo)" },
      { name: "Caneloni misto (queijo e presunto) ao sugo" },
      { name: "Espaguete à bolonhesa" },
      { name: "Espaguete alho e óleo" },
      { name: "Espaguete parisiense" },
      { name: "Capeletti à bolonhesa" },
      { name: "Conchilione ao quatro queijos" },
      { name: "Conchilione ao sugo" },
    ],
  },
  {
    title: "Pizzas",
    icon: "Pizza",
    items: [
      { name: "Mussarela" },
      { name: "Calabresa" },
      { name: "Portuguesa" },
      { name: "Quatro Queijos" },
      { name: "Marguerita" },
      { name: "Frango com Catupiry" },
    ],
  },
  {
    title: "Saladas",
    icon: "Salad",
    items: [
      { name: "Salada Mista" },
      { name: "Salada de Maionese" },
      { name: "Salada de Palmito" },
    ],
  },
  {
    title: "Tortas Salgadas",
    icon: "PieChart",
    items: [
      { name: "Torta de Frango" },
      { name: "Torta de Palmito" },
      { name: "Torta de Camarão" },
    ],
  },
  {
    title: "Sobremesas",
    icon: "IceCream",
    items: [
      { name: "Pudim de Leite" },
      { name: "Mousse de Chocolate" },
      { name: "Frutas da Estação" },
    ],
  },
];
