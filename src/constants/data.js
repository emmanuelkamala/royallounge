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
    title: 'Hummus',
    price: '£6.49',
    tags: 'Chickpeas puree, tahini, garlic, lemon juice and oliveoil served with bread.',
  },
  {
    title: 'Mutabbal',
    price: '£6.49',
    tags: 'Grilled aubergine puree, tahini, yoghurt, garlic,lemon juice and olive oil served with bread.',
  },
  {
    title: 'Labneh',
    price: '£5.49',
    tags: 'Homemade, white cream cheese with Garlic and peppermint',
  },
  {
    title: 'MUHAMMARA',
    price: '£5.49',
    tags: 'Chilli paste, tahini, walnuts, onions, garlic and olive oil',
  },
  {
    title: 'TARATOR DEJAJ',
    price: '£6.49',
    tags: 'Cooked chicken breast drizziled tarator sauce (yoghurt, tahini, garlic lemon juice and olive oil).',
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
