import { Destination } from '../types';

export const destinationsData: Destination[] = [
  {
    id: 'samarkand',
    slug: 'samarkand',
    name: 'Самарканд',
    nameEn: 'Samarkand',
    region: 'Шёлковый путь',
    regionEn: 'Silk Road',
    country: 'Узбекистан',
    heroImage: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Жемчужина Шелкового пути с лазурными куполами Регистана, монументальными медресе и многовековым величием.',
    shortDescriptionEn: 'The jewel of the Silk Road with azure domes of Registan, monumental madrasahs and timeless oriental majesty.',
    fullDescription: 'Самарканд — перекрёсток культур с более чем 2750-летней историей. Здесь бирюзовая майолика отражает лучи солнца, а грандиозные ансамбли площади Регистан, мавзолея Гур-Эмир и мечети Биби-Ханым поражают своим масштабом. Путешествие в Самарканд объединяет высокое восточное гостеприимство, изысканную гастрономию и глубокую медитативную атмосферу древней архитектуры.',
    fullDescriptionEn: 'Samarkand is a crossroad of civilizations with over 2,750 years of history. Turquoise tilework mirrors the morning light while the grand ensembles of Registan Square and Gur-e-Amir inspire wonder. A journey here blends high Silk Road hospitality with contemplative architecture.',
    suggestedDuration: '3–4 дня',
    bestSeason: 'Апрель – Июнь, Сентябрь – Ноябрь',
    categories: ['Культура', 'Архитектура', 'История'],
    tags: ['Шелковый путь', 'ЮНЕСКО', 'Восточная сказка'],
    rating: 4.95,
    altitude: '702 м',
    highlights: [
      'Ансамбль площади Регистан на рассвете',
      'Мавзолей Гур-Эмир и усыпальница Тимуридов',
      'Некрополь Шахи-Зинда с невероятной мозаикой',
      'Ароматный Сиабский базар с самаркандскими лепешками'
    ],
    highlightsEn: [
      'Registan Square architectural ensemble at dawn',
      'Gur-e-Amir Mausoleum and Timurid heritage',
      'Shah-i-Zinda necropolis with intricate mosaic art',
      'Atmospheric Siab Bazaar with freshly baked breads'
    ],
    relatedTours: ['tour-silk-road-classic', 'tour-samarkand-architecture'],
    relatedResorts: ['resort-silk-road-samarkand']
  },
  {
    id: 'chimgan',
    slug: 'chimgan',
    name: 'Чимган',
    nameEn: 'Chimgan',
    region: 'Тянь-Шань',
    regionEn: 'Tian Shan',
    country: 'Узбекистан',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Альпийское уединение в отрогах Чаткальского хребта: кристальный воздух, хвойные леса и горные спа-отели.',
    shortDescriptionEn: 'Alpine tranquility in the foothills of the Chatkal range: crisp mountain air, coniferous groves, and wellness retreats.',
    fullDescription: 'Чимган — главная горная ривьера Узбекистана, расположенная всего в 80 км от Ташкента. Здесь на высоте от 1600 метров царит целебный микроклимат, создающий безупречные условия для велнес-ретритов, хайкинга к живописным водопадам и зимнего катания в современных горнолыжных комплексах Амирсай.',
    fullDescriptionEn: 'Chimgan is the premier alpine escape of Uzbekistan, nestled at 1,600+ meters above sea level. Clean mountain air, breathtaking panoramic summits, and state-of-the-art ski and wellness resorts like Amirsoy provide an unrivaled mountain holiday.',
    suggestedDuration: '3–5 дней',
    bestSeason: 'Круглый год',
    categories: ['Горы', 'Wellness', 'Природа'],
    tags: ['Альпийский ретрит', 'Горные лыжи', 'Хайкинг'],
    rating: 4.92,
    altitude: '1 620 – 3 309 м',
    highlights: [
      'Панорамные канатные дороги комплекса Амирсай',
      'Утренние медитации с видом на Большой Чимган',
      'Прогулки по реликтовым можжевеловым рощам',
      'Альпийские спа-процедуры с горными травами'
    ],
    highlightsEn: [
      'Panoramic cable car ascents at Amirsoy Resort',
      'Morning meditations facing the Greater Chimgan peak',
      'Treks through endemic juniper forests',
      'Alpine botanical spa rituals with local herbs'
    ],
    relatedTours: ['tour-chimgan-wellness', 'tour-tian-shan-trek'],
    relatedResorts: ['resort-amirsoy-chalets', 'resort-chimgan-zenith']
  },
  {
    id: 'charvak',
    slug: 'charvak',
    name: 'Чарвак',
    nameEn: 'Charvak',
    region: 'Бостанлык',
    regionEn: 'Bostanlyk',
    country: 'Узбекистан',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61752af3337?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Бирюзовое высокогорное водохранилище в окружении скалистых пиков, идеальное для яхтинга и уединенного отдыха у воды.',
    shortDescriptionEn: 'A sparkling turquoise mountain reservoir framed by craggy peaks, ideal for scenic sailing and serene water-side seclusion.',
    fullDescription: 'Чарвакское водохранилище впечатляет аквамариновым оттенком чистейшей горной воды, стекающей с ледников Пскема и Чаткала. Побережье усеяно панорамными виллами, инфинити-бассейнами с видом на водную гладь и приватными пляжными клубами.',
    fullDescriptionEn: 'Charvak Lake captivates visitors with vivid azure waters fed by alpine glacial rivers. The shorelines feature private boutique villas, infinity pools gazing over the waters, and bespoke boat expeditions.',
    suggestedDuration: '2–4 дня',
    bestSeason: 'Май – Сентябрь',
    categories: ['Природа', 'Водный отдых', 'Wellness'],
    tags: ['Бирюзовая вода', 'Инфинити-бассейн', 'Панорамный вид'],
    rating: 4.88,
    altitude: '900 м',
    highlights: [
      'Закаты над зеркальной водной гладью',
      'Приватные круизы на парусной яхте',
      'Парапланеризм с посадкой на песчаную косу',
      'Ужины из свежей форели в панорамном ресторане'
    ],
    highlightsEn: [
      'Sunsets reflecting across still mirror waters',
      'Private sunset cruises on chartered sailboats',
      'Tandem paragliding over the emerald reservoir',
      'Gourmet lakefront trout dinners at panoramic decks'
    ],
    relatedTours: ['tour-charvak-weekend', 'tour-chimgan-wellness'],
    relatedResorts: ['resort-charvak-infinity']
  },
  {
    id: 'bukhara',
    slug: 'bukhara',
    name: 'Бухара',
    nameEn: 'Bukhara',
    region: 'Шёлковый путь',
    regionEn: 'Silk Road',
    country: 'Узбекистан',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Священный город-музей под открытым небом с купольными торговыми рядами и минаретом Калян.',
    shortDescriptionEn: 'The sacred open-air museum city of dome bazaars, shaded courtyards, and the legendary Kalyan Minaret.',
    fullDescription: 'Бухара — живой памятник исламской архитектуры и средневековой учености. Прогулки по узким улочкам старого города с аутентичными караван-сараями и старинными хаммамами XVI века позволяют почувствовать неспешный ритм жизни древнего Востока.',
    fullDescriptionEn: 'Bukhara stands as a living testament to medieval Central Asian architecture. Winding clay alleys, 16th-century dome trade halls, and historic bathhouses invite travelers to slow down and savor Silk Road elegance.',
    suggestedDuration: '3 дня',
    bestSeason: 'Март – Май, Сентябрь – Октябрь',
    categories: ['Культура', 'История', 'Архитектура'],
    tags: ['Старый город', 'Минарет Калян', 'Восточный хаммам'],
    rating: 4.93,
    altitude: '229 м',
    highlights: [
      'Минарет и мечеть Калян в лучах заката',
      'Атмосферный ансамбль Ляби-Хауз у векового водоема',
      'Традиционные банные ритуалы в хаммаме XVI века',
      'Мастерские ремесленников по чеканке и вышивке сюзане'
    ],
    highlightsEn: [
      'Kalyan Minaret illuminated by soft golden dusk',
      'Lyabi-Khauz pool surrounded by centenarian mulberry trees',
      'Ancient oriental hamam purification rituals',
      'Artisan workshops specializing in Suzani embroidery'
    ],
    relatedTours: ['tour-bukhara-heritage', 'tour-silk-road-classic'],
    relatedResorts: ['resort-bukhara-boutique']
  },
  {
    id: 'khiva',
    slug: 'khiva',
    name: 'Хива',
    nameEn: 'Khiva',
    region: 'Хорезм',
    regionEn: 'Khorezm',
    country: 'Узбекистан',
    heroImage: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Крепость Ичан-Кала — застывшая во времени сказка из глиняных стен, бирюзовых минаретов и дворцов ханов.',
    shortDescriptionEn: 'The fortress city of Ichan-Kala — a preserved desert jewel of mudbrick battlements and turquoise minarets.',
    fullDescription: 'Внутри крепостных стен Ичан-Калы время словно остановилось. Каждый поворот глинобитных улочек открывает резные деревянные колонны Джума-мечети, лазурный минарет Кальта-Минор и террасы с видом на песчаные барханы пустыни Кызылкум.',
    fullDescriptionEn: 'Within the fortress walls of Ichan-Kala, time feels paused. Every brick reveals carved elm pillars at Juma Mosque, the dazzling cyan tilework of Kalta Minor, and panoramic sunset terraces.',
    suggestedDuration: '2–3 дня',
    bestSeason: 'Апрель – Май, Сентябрь – Октябрь',
    categories: ['История', 'Архитектура', 'ЮНЕСКО'],
    tags: ['Ичан-Кала', 'Глинобитная крепость', 'Оазис'],
    rating: 4.96,
    altitude: '100 м',
    highlights: [
      'Прогулка по крепостной стене на закате',
      'Джума-мечеть с 218 резными деревянными колоннами',
      'Магия минарета Кальта-Минор',
      'Ужин на крыше с видом на древнюю цитадель'
    ],
    highlightsEn: [
      'Sunset walks along ancient fortress battlements',
      'Juma Mosque with 218 carved wooden pillars',
      'The vibrant blue ceramics of Kalta Minor',
      'Rooftop dinners gazing across the desert citadel'
    ],
    relatedTours: ['tour-khiva-oasis', 'tour-silk-road-classic'],
    relatedResorts: ['resort-khiva-palace']
  },
  {
    id: 'tashkent',
    slug: 'tashkent',
    name: 'Ташкент',
    nameEn: 'Tashkent',
    region: 'Столица',
    regionEn: 'Capital',
    country: 'Узбекистан',
    heroImage: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Зеленый мегаполис, сочетающий роскошные пятизвездочные отели, монументальный модернизм и современный арт-лайфстайл.',
    shortDescriptionEn: 'A leafy metropolis combining five-star urban wellness hotels, monumental modernism, and refined dining.',
    fullDescription: 'Столица Узбекистана — динамичный центр высокой гастрономии, искусства и комфорта. От широких тенистых платановых аллей и уникальных станций метро до концептуальных ресторанов и спа-комплексов мирового уровня.',
    fullDescriptionEn: 'The capital of Uzbekistan is a vibrant center for culinary excellence, modernist architecture, and luxury wellness. Expansive parks, ornate subway stations, and premier hotel suites offer the perfect hub.',
    suggestedDuration: '2–3 дня',
    bestSeason: 'Круглый год',
    categories: ['Гастрономия', 'Культура', 'Городской отдых'],
    tags: ['Премиум отели', 'Арт-галереи', 'Высокая кухня'],
    rating: 4.87,
    altitude: '450 м',
    highlights: [
      'Архитектурный шедевр — Ташкентский метрополитен',
      'Музей прикладного искусства во дворце дипломата',
      'Авторский плов в Центре плова',
      'Роскошный спа-отдых в премиальных отелях города'
    ],
    highlightsEn: [
      'The underground marble palaces of Tashkent Metro',
      'State Museum of Applied Arts in an imperial mansion',
      'Authentic degustation at the Central Plov Centre',
      'Urban spa rejuvenation in world-class wellness facilities'
    ],
    relatedTours: ['tour-tashkent-modernist'],
    relatedResorts: ['resort-tashkent-grand']
  },
  {
    id: 'zaamin',
    slug: 'zaamin',
    name: 'Заамин',
    nameEn: 'Zaamin',
    region: 'Джизак',
    regionEn: 'Jizzakh',
    country: 'Узбекистан',
    heroImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: '«Узбекская Швейцария» — национальный парк с реликтовыми арчовыми лесами, горными плато и кристальными водопадами.',
    shortDescriptionEn: 'The "Uzbek Switzerland" — an alpine national park with endemic juniper forests, plateau canyons, and waterfalls.',
    fullDescription: 'Зааминский горно-лесной заповедник славится своим чистейшим хвойным воздухом и мягким высокогорным климатом. На плато Супа построены стеклянный панорамный подвесной мост и современные эко-резорты, гармонично вписанные в дикую природу.',
    fullDescriptionEn: 'Zaamin National Park is celebrated for its pristine juniper forests and invigorating alpine atmosphere. The Supa Plateau features glass skywalks and contemporary nature lodges integrated into mountain landscapes.',
    suggestedDuration: '2–4 дня',
    bestSeason: 'Май – Октябрь',
    categories: ['Природа', 'Горы', 'Экотуризм'],
    tags: ['Арчовые леса', 'Горный воздух', 'Подвесной мост'],
    rating: 4.91,
    altitude: '2 000 – 3 500 м',
    highlights: [
      'Панорамный стеклянный мост над каньоном',
      'Тысячелетняя реликтовая арча Бобо-Янгок',
      'Каньоны Чор-Танга и водопад Шаршара',
      'Звездное небо без светового загрязнения'
    ],
    highlightsEn: [
      'Panoramic glass suspension bridge over the canyon',
      'The millenary sacred juniper tree Bobo-Yangok',
      'Chor-Tanga ravines and mountain waterfalls',
      'Unspoiled dark-sky stargazing from alpine chalets'
    ],
    relatedTours: ['tour-zaamin-nature'],
    relatedResorts: ['resort-zaamin-plateau']
  },
  {
    id: 'fergana',
    slug: 'fergana',
    name: 'Ферганская долина',
    nameEn: 'Fergana Valley',
    region: 'Восточный Узбекистан',
    regionEn: 'Eastern Uzbekistan',
    country: 'Узбекистан',
    heroImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Плодородная колыбель восточных ремесел: риштанская лазурная керамика, маргиланский шелк и фруктовые сады.',
    shortDescriptionEn: 'The cradle of Silk Road crafts: Rishtan azure ceramics, Margilan handmade silk, and lush fruit orchards.',
    fullDescription: 'Ферганская долина — сердце традиционного ремесленного мастерства. Здесь в Маргилане мастера вручную ткут хан-атлас и икат по секретам тысячелетней давности, а в Риштане гончары создают посуду с неповторимой глазурью из травяной золы ишкор.',
    fullDescriptionEn: 'The Fergana Valley is the spiritual core of Central Asian crafts. From Margilan silk factories preserving natural dyes to the famed Rishtan pottery studios firing handmade Ishkor glazes, it offers authentic immersion.',
    suggestedDuration: '3–4 дня',
    bestSeason: 'Апрель – Октябрь',
    categories: ['Культура', 'Ремесла', 'Гастрономия'],
    tags: ['Риштанская керамика', 'Маргиланский шелк', 'Сады'],
    rating: 4.86,
    altitude: '580 м',
    highlights: [
      'Шелковая фабрика «Ёдгорлик» в Маргилане',
      'Мастер-класс у потомственных гончаров Риштана',
      'Дворец Худояр-хана в Коканде',
      'Ферганские гранаты, абрикосы и инжир прямо из сада'
    ],
    highlightsEn: [
      'Yodgorlik Silk Factory workshops in Margilan',
      'Private ceramic masterclass with Rishtan masters',
      'Palace of Khudayar Khan in historic Kokand',
      'Organic orchards bursting with pomegranates and figs'
    ],
    relatedTours: ['tour-fergana-crafts'],
    relatedResorts: ['resort-fergana-valley']
  },
  {
    id: 'cappadocia',
    slug: 'cappadocia',
    name: 'Каппадокия',
    nameEn: 'Cappadocia',
    region: 'Анатолия',
    regionEn: 'Anatolia',
    country: 'Турция',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Сюрреалистичные лунные долины, пещерные бутик-отели премиум-класса и сотни парящих воздушных шаров на рассвете.',
    shortDescriptionEn: 'Surreal volcanic landscapes, bespoke cave suites, and hundreds of hot air balloons drifting at golden dawn.',
    fullDescription: 'Каппадокия объединяет древнюю историю подземных городов и непревзойденный люкс аутентичных пещерных отелей. Утренний подъем на воздушном шаре над долинами Любви и Монахов дарит ни с чем не сравнимые эмоции.',
    fullDescriptionEn: 'Cappadocia combines mystical rock-hewn valleys with boutique luxury carved straight into ancient volcanic tufa stone. Watching hundreds of balloons take flight at dawn from your private terrace is pure poetry.',
    suggestedDuration: '3–4 дня',
    bestSeason: 'Апрель – Июнь, Сентябрь – Октябрь',
    categories: ['Приключения', 'Романтика', 'Архитектура'],
    tags: ['Воздушные шары', 'Пещерный отель', 'Закаты'],
    rating: 4.97,
    altitude: '1 050 м',
    highlights: [
      'Полет на рассвете на приватном воздушном шаре',
      'Проживание в дизайнерском пещерном сьюте с джакузи',
      'Конные прогулки по Долине Мечей на закате',
      'Дегустация анатолийских вин в подземных погребах'
    ],
    highlightsEn: [
      'Dawn balloon flight over fairytale chimneys',
      'Private cave suite stay with panoramic jacuzzi',
      'Sunset horseback riding through the Valley of Swords',
      'Anatolian boutique wine tasting in volcanic cellars'
    ],
    relatedTours: ['tour-cappadocia-dream'],
    relatedResorts: ['resort-cappadocia-cave']
  },
  {
    id: 'dolomites',
    slug: 'dolomites',
    name: 'Доломитовые Альпы',
    nameEn: 'The Dolomites',
    region: 'Южный Тироль',
    regionEn: 'South Tyrol',
    country: 'Италия',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Драматичные зубчатые пики ЮНЕСКО, зеркальные альпийские озера и спа-резорты с открытыми подогреваемыми бассейнами.',
    shortDescriptionEn: 'Dramatic jagged UNESCO limestone peaks, mirror lakes, and alpine spa chalets with year-round heated infinity pools.',
    fullDescription: 'Доломиты — вершина европейской эстетики горного отдыха. Роскошные шале из кедрового дерева, панорамные сауны с видом на розовеющие вершины Энросадиры и мишленовская тирольская гастрономия создают эталонный отдых.',
    fullDescriptionEn: 'The Dolomites represent the gold standard of European alpine luxury. Scented stone-pine chalets, heated glass-front saunas overlooking the pink Alpenglow, and Michelin-starred Tyrolean cuisine deliver perfection.',
    suggestedDuration: '5–7 дней',
    bestSeason: 'Июнь – Октябрь, Декабрь – Март',
    categories: ['Горы', 'Wellness', 'Лакшери'],
    tags: ['Альпийские пики', 'Подогреваемый бассейн', 'Тироль'],
    rating: 4.98,
    altitude: '1 200 – 3 343 м',
    highlights: [
      'Парящий инфинити-бассейн над долиной Валь-Гардена',
      'Лодочная прогулка по изумрудному озеру Брайес',
      'Альпийский велнес с сенокосными ваннами и хвоей',
      'Обед в панорамной хижине на высоте 2400 метров'
    ],
    highlightsEn: [
      'Suspended infinity pool overlooking Val Gardena',
      'Vintage wooden rowing on emerald Lake Braies',
      'Alpine botanical wellness with hay bath rituals',
      'Gourmet lunch at 2,400 meters mountain refugio'
    ],
    relatedTours: ['tour-dolomites-wellness'],
    relatedResorts: ['resort-dolomites-chalet']
  },
  {
    id: 'kyoto',
    slug: 'kyoto',
    name: 'Киото',
    nameEn: 'Kyoto',
    region: 'Кансай',
    regionEn: 'Kansai',
    country: 'Япония',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Дзен-сады камней, традиционные рёканы с горячими источниками онсэн и медитативная философия утонченного покоя.',
    shortDescriptionEn: 'Zen stone gardens, historic ryokans with cedar onsen baths, and the meditative philosophy of refined serenity.',
    fullDescription: 'Древняя имперская столица Японии погружает в мир гармонии и тишины. Бамбуковые рощи Арасиямы, чайные церемонии в закрытых павильонах и аутентичные рёканы с приватными термальными ваннами открывают истинный смысл велнес-перезагрузки.',
    fullDescriptionEn: 'Japan’s imperial sanctuary invites travelers into deep stillness. Whispering bamboo groves of Arashiyama, private tea ceremonies in historic pavilions, and heritage ryokans with natural thermal spring onsens create deep renewal.',
    suggestedDuration: '4–6 дней',
    bestSeason: 'Март – Май, Октябрь – Ноябрь',
    categories: ['Культура', 'Wellness', 'Философия'],
    tags: ['Рёкан', 'Онсэн', 'Бамбуковая роща', 'Дзен'],
    rating: 4.96,
    altitude: '50 м',
    highlights: [
      'Приватный онсэн в кедровой бочке под открытым небом',
      'Чайная церемония мастера школы Урасэнкэ',
      'Утренняя медитация в уединенном дзен-монастыре',
      'Сезонный ужин кайсэки из 12 перемен блюд'
    ],
    highlightsEn: [
      'Private cedar onsen soak under the open forest canopy',
      'Intimate tea master ceremony in historic tearoom',
      'Morning mindfulness meditation in Zen temple courtyard',
      '12-course Kaiseki gastronomic journey'
    ],
    relatedTours: ['tour-kyoto-zen'],
    relatedResorts: ['resort-kyoto-ryokan']
  },
  {
    id: 'iceland',
    slug: 'iceland',
    name: 'Исландия',
    nameEn: 'Iceland',
    region: 'Северная Атлантика',
    regionEn: 'North Atlantic',
    country: 'Исландия',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Земля вулканов и льда: бирюзовые геотермальные лагуны, водопады и роскошные эко-лоджи под северным сиянием.',
    shortDescriptionEn: 'Land of fire and ice: turquoise geothermal lagoons, glacier fjords, and luxury eco-lodges beneath the Aurora.',
    fullDescription: 'Исландия — непревзойденное место силы, где пар поднимается над вулканическими разломами, а бирюзовые воды Голубой Лагуны питают тело природными минералами и кремнием. Панорамные сьюты со стеклянными потолками позволяют любоваться танцем Авроры прямо из постели.',
    fullDescriptionEn: 'Iceland is an otherworldly sanctuary where geothermal steam billows across moss-covered lava fields. Mineral-rich thermal waters and luxury eco-retreats featuring glass-roofed stargazing suites offer an escape like no other.',
    suggestedDuration: '5–8 дней',
    bestSeason: 'Сентябрь – Апрель (Сияние), Июнь – Август (Белые ночи)',
    categories: ['Природа', 'Wellness', 'Приключения'],
    tags: ['Северное сияние', 'Геотермальная лагуна', 'Вулканы'],
    rating: 4.95,
    altitude: '0 – 1 000 м',
    highlights: [
      'Геотермальные ритуалы в Голубой Лагуне с белой глиной',
      'Охота за северным сиянием с персональным астрономом',
      'Вертолетная экскурсия над ледниками и кратерами',
      'Панорамная сауна с видом на Атлантический океан'
    ],
    highlightsEn: [
      'Silica mineral rituals at the Blue Lagoon spa retreat',
      'Aurora Borealis safari with a private astronomer',
      'Helicopter flight over active craters and glaciers',
      'Panoramic oceanfront cliffside sauna'
    ],
    relatedTours: ['tour-iceland-aurora'],
    relatedResorts: ['resort-iceland-retreat']
  }
];
