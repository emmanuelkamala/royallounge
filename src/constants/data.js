import images from './images';

const salads = [
  {
    title: 'Tabbouleh',
    price: '£6.49',
    tags: 'Cucumbers, tomatoes, herbs, onions,lemon juice, olive oil and toasted bread',
  },
  {
    title: 'Fatoush',
    price: '£6.49',
    tags: 'Oriental mixed salad',
  },
  {
    title: 'Oriental salad',
    price: '£6.49',
    tags: 'Oriental mixed salad',
  },
  {
    title: 'Farmer‘s Salad',
    price: '£6.49',
    tags: 'Mixed salad with onions, olives and sheep cheese',
  },
  {
    title: 'Khiar Bil Laban',
    price: '£5.49',
    tags: 'Yogurt with cucumber & mint ( Tzatziki )',
  },
];

const starters = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const recognition = [
  {
    imgUrl: images.recognition02,
    title: 'Bib Gourmond',
    subtitle: 'Greatest dining experience at an affordable price.',
  },
  {
    imgUrl: images.recognition01,
    title: 'Rising Star',
    subtitle: 'We are one of the fastest upcoming restaurant.',
  },
  {
    imgUrl: images.recognition05,
    title: 'AA Hospitality',
    subtitle: 'We have the finest customer service available.',
  },
  {
    imgUrl: images.recognition03,
    title: 'Outstanding Chef',
    subtitle: 'Chef that understands his business.',
  },
];

export default { salads, starters, recognition };
