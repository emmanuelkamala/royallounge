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

const hots = [
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

const mains = [
  {
    title: 'Falafel Platter',
    price: '£12.99',
    tags: 'Fried crushed chickpeas served with Mix salad,Hummus, Mutabbal and Labneh',
  },
  {
    title: 'ROYAL vegetarian Platter',
    price: '£12.99',
    tags: '7 types of our Lebanese specialties hot and cold.',
  },
  {
    title: 'ROYAL Vegan Platter',
    price: '£12.99',
    tags: '7 types of our Lebanese specialties hot and cold.',
  },
  {
    title: 'Shish Tawook',
    price: '£13.99',
    tags: 'Grilled, marinated diced chicken served with Mix salad, Hummus, Mutabbal, Labneh and bulgur',
  },
  {
    title: 'Kafta Meshwi',
    price: '£13.99',
    tags: 'Mixed beef and lamb mince skewers served with Mix salad, Hummus, Mutabbal, Labneh and bulgur',
  },
  {
    title: 'Lamb Platter',
    price: '£16.49',
    tags: 'Grilled, Lamb diced served with Mix salad, Hummus, Mutabbal, Labneh and bulgur'
  }
];

const desserts = [
  {
    title: 'Baklava',
    price: '£4.49',
  },
  {
    title: 'Halawa Aljibn',
    price: '£4.49',
  },
  {
    title: 'Tiramisu',
    price: '£4.49',
  },
  {
    title: 'Ice Cream',
    price: '£1.99',
    tags: '1 Ball',
  },
];

const softDrinks = [
  {
    title: 'Coca cola, Pepsi, Sprite, Fanta, Lemonade, Red Bull',
    price: '£2.75',
  },
  {
    title: 'Water',
    price: '£2.00',
  },
  {
    title: 'Iced Tea',
    price: '£2.00',
  },
];

const hotDrinks = [
  {
    title: 'Espresso',
    price: '£2.75',
  },
  {
    title: 'Double Espresso',
    price: '£2.99',
  },
  {
    title: 'Americano',
    price: '£2.75',
  },
  {
    title: 'Cappuccino',
    price: '£2.95',
  },
  {
    title: 'Latte',
    price: '£2.95',
  },
  {
    title: 'Hot Chocolate',
    price: '£2.75',
  },
  {
    title: 'Arabic Coffee',
    price: '£3.45',
  },
  {
    title: 'Arabic Tea',
    price: '£2.95',
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

export default { salads, starters, recognition, hots, hotDrinks, softDrinks, desserts, mains };
