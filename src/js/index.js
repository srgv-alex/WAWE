// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

Fancybox.bind('[data-fancybox]', {});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

import filter from './modules/filters.js';
filter();
import swiper from './modules/swiper.js';
swiper();
