const people = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' }
];

const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        image: 'https://source.unsplash.com/200x200/?headphones',
        price: 99.99,
        desc: 'High-quality wireless headphones with noise cancellation.'
    },
    {
        id: 2,
        name: 'Smartwatch',
        image: 'https://source.unsplash.com/200x200/?smartwatch',
        price: 199.99,
        desc: 'Feature-rich smartwatch with health tracking.'
    },
    {
        id: 3,
        name: 'Gaming Mouse',
        image: 'https://source.unsplash.com/200x200/?mouse',
        price: 49.99,
        desc: 'Ergonomic gaming mouse with RGB lighting.'
    },
    {
        id: 4,
        name: 'Mechanical Keyboard',
        image: 'https://source.unsplash.com/200x200/?keyboard',
        price: 129.99,
        desc: 'High-performance mechanical keyboard with customizable keys.'
    }
];

module.exports = { people, products };
