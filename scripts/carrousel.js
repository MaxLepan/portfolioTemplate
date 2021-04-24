import Splide from '@splidejs/splide';

new Splide( '.splide', {
    type    : 'loop',
    perPage: 4,
    perMove: 1,
    autoplay: true,

} ).mount();