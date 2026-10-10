import { Resort } from '../types';

export const resortsData: Resort[] = [
  {
    id: 'resort-amirsoy-chalets',
    slug: 'amirsoy-alpine-wellness-chalets',
    name: 'Amirsoy Alpine Wellness Chalets',
    nameEn: 'Amirsoy Alpine Wellness Chalets',
    location: 'Чимган, Тянь-Шань',
    locationEn: 'Chimgan, Tian Shan',
    country: 'Узбекистан',
    category: 'alpine',
    categoryLabel: 'Альпийский велнес-резорт',
    categoryLabelEn: 'Alpine Wellness Resort',
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Уединенные шале из натурального кедра на склонах Тянь-Шаня с подогреваемым инфинити-бассейном и видом на заснеженные пики.',
    shortDescriptionEn: 'Secluded cedar chalets on the slopes of Tian Shan with a heated alpine infinity pool overlooking snowy peaks.',
    fullDescription: 'Amirsoy Alpine Wellness Chalets — флагманский горный курорт нового поколения в Центральной Азии. Расположенные на высоте 1 650 метров среди реликтовых можжевеловых рощ, шале совмещают скандинавскую архитектуру, панорамное остекление и аутентичный горный уют. Спа-центр курорта предлагает японские купели фурако с горной водой, термальные сауны и авторские спа-ритуалы на тянь-шаньских травах.',
    fullDescriptionEn: 'Amirsoy Alpine Wellness Chalets stands as a benchmark of modern alpine luxury in Central Asia. Nestled at 1,650m amidst juniper forests, these luxury residences feature floor-to-ceiling mountain glazing, heated cedar hot tubs, and bespoke botanical spa therapies.',
    pricePerNight: 340,
    currency: 'USD',
    rating: 4.96,
    reviewsCount: 128,
    capacity: 6,
    amenities: [
      'Подогреваемый инфинити-бассейн',
      'Панорамный спа-комплекс и хаммам',
      'Ресторан альпийской кухни с дровяным грилем',
      'Ski-in / Ski-out доступ к канатным дорогам',
      'Приватный камин в каждом шале',
      'Консьерж-сервис и вертолетная площадка',
      'Йога-терраса с видом на пик Чимган',
      'Высокоскоростной Wi-Fi Starlink'
    ],
    roomTypes: [
      {
        id: 'chalet-deluxe',
        name: 'Панорамное Шале Deluxe',
        nameEn: 'Deluxe Panoramic Chalet',
        price: 340,
        capacity: 2,
        sizeM2: 85,
        description: 'Двухуровневое шале с дровяным камином, открытой террасой и ванной с панорамным видом на долину.',
        descriptionEn: 'Duplex chalet with a wood-burning fireplace, expansive balcony, and freestanding stone bath gazing over the valley.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        features: ['Камин', 'Терраса 25 м²', 'Кровать King Size', 'Кофемашина Nespresso']
      },
      {
        id: 'chalet-presidential',
        name: 'Президентское Шале с Купелью',
        nameEn: 'Presidential Chalet with Hot Tub',
        price: 580,
        capacity: 4,
        sizeM2: 160,
        description: 'Просторная резиденция с 2 спальнями, приватной сауной, открытой гидромассажной купелью на террасе и персональным шеф-поваром.',
        descriptionEn: 'Expansive residence featuring two en-suite bedrooms, private sauna, outdoor cedar hot tub, and private chef service.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        features: ['Приватная сауна', 'Гидромассажная купель', '2 спальни', 'Персональный батлер']
      }
    ],
    faq: [
      {
        question: 'Как добраться до курорта из Ташкента?',
        questionEn: 'How to reach the resort from Tashkent?',
        answer: 'Курорт находится в 85 км (около 1 часа 20 минут) от Ташкента по современной автостраде. Мы организуем премиальный трансфер на автомобилях Mercedes-Benz V-Class.',
        answerEn: 'The resort is located 85 km (around 1h 20m) from Tashkent via modern highway. We provide luxury Mercedes-Benz V-Class chauffeured transfers.'
      },
      {
        question: 'Работает ли инфинити-бассейн зимой?',
        questionEn: 'Is the infinity pool heated during winter?',
        answer: 'Да, открытый инфинити-бассейн подогревается круглый год до комфортной температуры +36°C.',
        answerEn: 'Yes, our open-air infinity pool is heated year-round to a soothing +36°C.'
      }
    ],
    isDemo: true
  },
  {
    id: 'resort-silk-road-samarkand',
    slug: 'samarkand-regency-heritage-resort',
    name: 'Samarkand Regency Silk Road Resort',
    nameEn: 'Samarkand Regency Silk Road Resort',
    location: 'Самарканд, Гребной канал',
    locationEn: 'Samarkand, Rowing Canal',
    country: 'Узбекистан',
    category: 'heritage',
    categoryLabel: 'Бутик-отель наследия',
    categoryLabelEn: 'Boutique Heritage Resort',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Пятизвездочный оазис у водной глади с элементами восточного зодчества, мраморными террасами и спа-хаммамом.',
    shortDescriptionEn: 'A five-star waterfront sanctuary combining oriental architectural motifs, marble terraces, and signature marble hamam.',
    fullDescription: 'Курорт расположен на территории ультрасовременного комплекса «Silk Road Samarkand» на берегу бирюзового канала. Интерьеры вдохновлены эпохой Тимуридов, тончайшим шелком и лазурными орнаментами. В распоряжении гостей спа-клуб с олимпийским бассейном, рестораны высокой узбекской и паназиатской кухни, а также исторический этнопарк «Вечный Город».',
    fullDescriptionEn: 'Located along the serene Samarkand waterway, this landmark resort reimagines royal Silk Road heritage with modern five-star opulence. Guests enjoy private lakefront dining, Turkish marble hamams, and immediate access to the Eternal City cultural park.',
    pricePerNight: 290,
    currency: 'USD',
    rating: 4.94,
    reviewsCount: 94,
    capacity: 4,
    amenities: [
      'Крытый и открытый олимпийские бассейны',
      'Мраморный турецкий хаммам и соляная комната',
      'Ресторан «Эмир» с дегустацией самаркандских вин',
      'Вид на исторический парк «Вечный город»',
      'Приватный пирс и прогулочные катера',
      'Круглосуточный фитнес-центр Technogym'
    ],
    roomTypes: [
      {
        id: 'room-silk-deluxe',
        name: 'Deluxe с Видом на Канал',
        nameEn: 'Deluxe Canal View Suite',
        price: 290,
        capacity: 2,
        sizeM2: 55,
        description: 'Элегантный номер с балконом, отделкой из натурального оникса и шелковым текстилем ручной работы.',
        descriptionEn: 'Elegant suite featuring water-facing balcony, onyx stone bathroom, and handwoven silk accents.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
        features: ['Вид на воду', 'Ванна из мрамора', 'Балкон', 'King-size кровать']
      },
      {
        id: 'room-regal-suite',
        name: 'Королевский Сьют Тимуридов',
        nameEn: 'Timurid Royal Suite',
        price: 520,
        capacity: 3,
        sizeM2: 120,
        description: 'Роскошные апартаменты с гостиной, обеденной зоной, гардеробной и персональным хаммамом.',
        descriptionEn: 'Regal suite offering grand salon, formal dining area, dressing room, and private en-suite marble steam bath.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        features: ['Собственный хаммам', 'Гостиная зона', 'Винный шкаф', 'VIP трансфер']
      }
    ],
    faq: [
      {
        question: 'Далеко ли курорт от площади Регистан?',
        questionEn: 'How far is the resort from Registan Square?',
        answer: 'Поездка на автомобиле до центра города и площади Регистан занимает 12–15 минут. Курорт предоставляет бесплатный шаттл.',
        answerEn: 'It is a 12–15 minute drive to Registan Square. Complimentary executive shuttles operate hourly.'
      }
    ],
    isDemo: true
  },
  {
    id: 'resort-charvak-infinity',
    slug: 'charvak-azure-lake-retreat',
    name: 'Charvak Azure Lake & Beach Retreat',
    nameEn: 'Charvak Azure Lake & Beach Retreat',
    location: 'Чарвак, Побережье',
    locationEn: 'Charvak Lake Shoreline',
    country: 'Узбекистан',
    category: 'nature',
    categoryLabel: 'Природный ретрит у озера',
    categoryLabelEn: 'Nature Lake Retreat',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61752af3337?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Каскадный комплекс вилл над лазурным Чарваком с панорамными стеклянными террасами и приватным причалом.',
    shortDescriptionEn: 'Cascading cliffside villas over azure Charvak waters with panoramic glass terraces and private sailboat marina.',
    fullDescription: 'Charvak Azure Retreat расположен на уединенном скалистом мысе, откуда открывается круговая панорама бирюзовой воды и заснеженных пиков Чаткала. Каждая вилла спроектирована так, чтобы стереть границу между интерьером и природой благодаря раздвижным стеклянным порталам Schüco.',
    fullDescriptionEn: 'Perched on a dramatic lakeside promontory, this retreat provides uninterrupted 360-degree vistas of turquoise waters and craggy peaks. Minimalist glass architecture ensures serene immersion.',
    pricePerNight: 310,
    currency: 'USD',
    rating: 4.91,
    reviewsCount: 76,
    capacity: 4,
    amenities: [
      'Инфинити-бассейн на краю обрыва',
      'Приватный песчаный пляж и яхтенный причал',
      'Ресторан средиземноморской и рыбной кухни',
      'Паддлбординг, каяки и водные прогулки',
      'Открытый кинотеатр под звездами',
      'Панорамная сауна с спуском к воде'
    ],
    roomTypes: [
      {
        id: 'villa-cliff-water',
        name: 'Вилла Cliffside с Инфинити-Купелью',
        nameEn: 'Cliffside Villa with Plunge Pool',
        price: 310,
        capacity: 2,
        sizeM2: 70,
        description: 'Панорамная вилла с приватной террасой, гидромассажной ванной с видом на бирюзовую гладь Чарвака.',
        descriptionEn: 'Waterfront villa boasting private deck, heated plunge bath, and unobstructed lake horizons.',
        image: 'https://images.unsplash.com/photo-1510414842594-a61752af3337?auto=format&fit=crop&w=800&q=80',
        features: ['Инфинити-купель', 'Вид на воду', 'Шезлонги', 'Завтрак на вилле']
      }
    ],
    faq: [
      {
        question: 'Есть ли доступ к озеру для купания?',
        questionEn: 'Is there direct swimming access to the lake?',
        answer: 'Да, у курорта есть приватный оборудованный пляж и деревянный пирс с лестницами для безопасного спуска в воду.',
        answerEn: 'Yes, the retreat features a private secluded beach and wooden sun-deck with stairs into crystal lake waters.'
      }
    ],
    isDemo: true
  },
  {
    id: 'resort-zaamin-plateau',
    slug: 'zaamin-supa-plateau-lodge',
    name: 'Zaamin Forest & Canyon Eco-Lodge',
    nameEn: 'Zaamin Forest & Canyon Eco-Lodge',
    location: 'Заамин, Плато Супа',
    locationEn: 'Zaamin, Supa Plateau',
    country: 'Узбекистан',
    category: 'lodge',
    categoryLabel: 'Горный лодж и эко-резорт',
    categoryLabelEn: 'Mountain Eco-Lodge',
    heroImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Эко-лодж на высоте 2 000 метров среди арчовых заповедных лесов, каньонов и панорамных мостов.',
    shortDescriptionEn: 'An architectural eco-lodge at 2,000m amidst ancient juniper reserves, canyons, and starlit skies.',
    fullDescription: 'Zaamin Forest Eco-Lodge построен из натурального камня, сибирской лиственницы и стекла с минимальным воздействием на экосистему национального парка. Насыщенный фитонцидами горный воздух исцеляет дыхательную систему, а стеклянные купола лоджа позволяют наблюдать за Млечным Путем.',
    fullDescriptionEn: 'Constructed from natural sandstone, reclaimed timber, and structural glass, this retreat harmonizes with pristine Zaamin National Park. Botanical forest bathing and unpolluted celestial skies provide unmatched rejuvenation.',
    pricePerNight: 260,
    currency: 'USD',
    rating: 4.89,
    reviewsCount: 62,
    capacity: 4,
    amenities: [
      'Фито-спа с процедурами на горном меде и арче',
      'Панорамный ресторан с органическими фермерскими блюдами',
      'Астрономический телескоп для гостей',
      'Экологические хайкинг-маршруты с гидом',
      'Дровяная русская баня на родниковой воде',
      'Конные прогулки по каньонам'
    ],
    roomTypes: [
      {
        id: 'lodge-juniper',
        name: 'Лодж «Реликтовая Арча»',
        nameEn: 'Juniper Forest Lodge',
        price: 260,
        capacity: 2,
        sizeM2: 65,
        description: 'Панорамный номер с круговой верандой, камином на дровах и видом на каньон Чор-Танга.',
        descriptionEn: 'Panoramic suite with wrap-around deck, log fireplace, and view of the rugged canyon.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        features: ['Камин', 'Вид на каньон', 'Органический мини-бар', 'Телескоп']
      }
    ],
    faq: [
      {
        question: 'Подходит ли курорт для отдыха с детьми?',
        questionEn: 'Is this lodge family friendly?',
        answer: 'Да, на территории есть эко-тропы, контактная ферма и безопасные игровые зоны на свежем воздухе.',
        answerEn: 'Yes, family suites, guided nature walks, and safe outdoor play lawns are available.'
      }
    ],
    isDemo: true
  },
  {
    id: 'resort-bukhara-boutique',
    slug: 'bukhara-caravan-palace-spa',
    name: 'Bukhara Heritage Caravan Palace & Spa',
    nameEn: 'Bukhara Heritage Caravan Palace & Spa',
    location: 'Бухара, Старый город',
    locationEn: 'Bukhara, Old City',
    country: 'Узбекистан',
    category: 'spa',
    categoryLabel: 'Спа-ретрит восточного наследия',
    categoryLabelEn: 'Heritage Spa Retreat',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Аутентичный бутик-отель во дворце бухарского купца XIX века с тенистым внутренним двориком айваном и спа-бассейном.',
    shortDescriptionEn: 'An authentic boutique retreat in a restored 19th-century merchant mansion with shaded aivan courtyard.',
    fullDescription: 'Расположенный в сердце старой Бухары в двух шагах от Ляби-Хауз, отель бережно сохранил оригинальную резьбу по ганчу, расписные деревянные потолки и колоритный внутренний дворик. Подземный спа-комплекс предлагает традиционные банные процедуры с розовой водой и натуральными маслами.',
    fullDescriptionEn: 'Located steps from Lyabi-Khauz, this restored historic estate showcases exquisite ganch plaster carving, painted wood ceilings, and peaceful courtyard water basins. The subterranean spa features rose-water rituals and essential oils.',
    pricePerNight: 230,
    currency: 'USD',
    rating: 4.95,
    reviewsCount: 110,
    capacity: 3,
    amenities: [
      'Внутренний бассейн в кирпичном сводчатом гроте',
      'Бухарский хаммам с банщиком и пилингом кесе',
      'Чайная церемония во внутреннем дворе с пахлавой',
      'Терраса на крыше с видом на минарет Калян',
      'Винный погреб с редкими коллекционными винами',
      'Бесплатный трансфер на ж/д вокзал Каган'
    ],
    roomTypes: [
      {
        id: 'room-bukhara-suite',
        name: 'Сьют «Бухарский Айван»',
        nameEn: 'Bukhara Aivan Suite',
        price: 230,
        capacity: 2,
        sizeM2: 50,
        description: 'Номер с исторической резьбой по дереву, антикварными коврами ручной работы и ванной из меди.',
        descriptionEn: 'Heritage room boasting carved wooden cornices, antique silk carpets, and handcrafted copper soaking tub.',
        image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
        features: ['Антикварная мебель', 'Медная ванна', 'Вид во внутренний сад', 'Чайный набор']
      }
    ],
    faq: [
      {
        question: 'Включен ли традиционный завтрак?',
        questionEn: 'Is traditional breakfast included?',
        answer: 'Да, каждое утро подается богатый бухарский завтрак во внутреннем дворике: свежий каймак, горячие лепешки, инжирное варенье и сухофрукты.',
        answerEn: 'Yes, a lavish courtyard breakfast with clotted kaymak, warm tandoor bread, and fig preserves is included.'
      }
    ],
    isDemo: true
  },
  {
    id: 'resort-dolomites-chalet',
    slug: 'dolomiti-sanctuary-alpine-resort',
    name: 'Dolomiti Sanctuary Alpine & Spa Chalet',
    nameEn: 'Dolomiti Sanctuary Alpine & Spa Chalet',
    location: 'Валь-Гардена, Доломиты',
    locationEn: 'Val Gardena, Dolomites',
    country: 'Италия',
    category: 'alpine',
    categoryLabel: 'Альпийское шале люкс-класса',
    categoryLabelEn: 'Luxury Alpine Chalet',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Парящий подогреваемый стеклянный бассейн над долиной, дизайн из швейцарского кедра и мишленовский ресторан.',
    shortDescriptionEn: 'A cantilevered glass infinity pool floating above the valley, Swiss stone pine design, and Michelin dining.',
    fullDescription: 'Dolomiti Sanctuary — шедевр альпийской архитектуры, заслуживший мировое признание. Открытый консольный бассейн с прозрачным дном буквально парит над пропастью на высоте 1 400 метров, открывая панораму на массив Селла.',
    fullDescriptionEn: 'A masterwork of alpine architecture. The heated cantilevered infinity pool with glass bottom floats above the valley floor, framing the legendary limestone crags of the Sella massif.',
    pricePerNight: 640,
    currency: 'USD',
    rating: 4.98,
    reviewsCount: 154,
    capacity: 4,
    amenities: [
      'Консольный инфинити-бассейн с подогревом',
      'Альпийский спа-центр площадью 2 500 м²',
      'Мишленовский ресторан авторской тирольской кухни',
      'Хвойные сауны с панорамным остеклением',
      'Прямой доступ к трассам Селла-Ронда',
      'Винный погреб с 10 000 бутылок'
    ],
    roomTypes: [
      {
        id: 'room-dolomiti-sky',
        name: 'Sky Penthouse Suite',
        nameEn: 'Sky Penthouse Suite',
        price: 640,
        capacity: 2,
        sizeM2: 95,
        description: 'Пентхаус с панорамной террасой, собственной сауной из кедра и открытым камином.',
        descriptionEn: 'Top-floor penthouse with glass balcony, private pine sauna, and open hearth fireplace.',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        features: ['Приватная сауна', 'Панорама 180°', 'Камин', 'Шампанское по прибытии']
      }
    ],
    faq: [
      {
        question: 'Включен ли ски-пасс в стоимость проживания?',
        questionEn: 'Is ski pass included?',
        answer: 'Консьерж оформляет Dolomiti Superski пассы прямо на стойке регистрации без очередей.',
        answerEn: 'Our concierge prepares your Dolomiti Superski passes upon check-in with zero waiting.'
      }
    ],
    isDemo: true
  },
  {
    id: 'resort-kyoto-ryokan',
    slug: 'kyoto-zen-bamboo-onsen-retreat',
    name: 'Kyoto Arashiyama Zen Onsen Sanctuary',
    nameEn: 'Kyoto Arashiyama Zen Onsen Sanctuary',
    location: 'Арасияма, Киото',
    locationEn: 'Arashiyama, Kyoto',
    country: 'Япония',
    category: 'spa',
    categoryLabel: 'Велнес-рёкан с термальными источниками',
    categoryLabelEn: 'Traditional Wellness Onsen',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Медитативный рёкан у бамбуковой рощи с индивидуальными термальными ваннами из дерева хиноки.',
    shortDescriptionEn: 'Meditative ryokan bordering bamboo forests with private hinoki cypress outdoor thermal spring baths.',
    fullDescription: 'Оазис безмятежности в историческом районе Арасияма. Татами из натурального тростника, раздвижные перегородки сёдзи и шум реки Ои создают атмосферу абсолютного погружения в традиционный японский дзен.',
    fullDescriptionEn: 'A sanctuary of profound serenity bordering the sacred bamboo groves. Handcrafted tatami mats, shoji screens, and the soothing sound of the Oi River accompany private natural onsen baths.',
    pricePerNight: 550,
    currency: 'USD',
    rating: 4.97,
    reviewsCount: 88,
    capacity: 2,
    amenities: [
      'Приватный открытый онсэн ротэнбуро из хиноки',
      'Традиционный ужин кайсэки от шефа с 3 звездами Мишлен',
      'Медитативный сад камней и моховые поляны',
      'Чайный домик с мастером церемоний',
      'Юката и кимоно из натурального шелка для гостей',
      'Трансфер на рикше по Арасияме'
    ],
    roomTypes: [
      {
        id: 'room-zen-garden',
        name: 'Вилла «Дзен-Сад» с Онсэном',
        nameEn: 'Zen Garden Villa with Private Onsen',
        price: 550,
        capacity: 2,
        sizeM2: 75,
        description: 'Традиционный сьют с приватным садом камней и открытой горячей купелью с природной минеральной водой.',
        descriptionEn: 'Authentic suite opening onto private rock courtyard and open-air natural geothermal cypress bath.',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
        features: ['Приватный онсэн', 'Сад камней', 'Ужин Кайсэки в номер', 'Татами']
      }
    ],
    faq: [
      {
        question: 'Что включает ужин кайсэки?',
        questionEn: 'What does the Kaiseki dinner include?',
        answer: 'Сезонный гастрономический сет из 10–12 блюд японской кухни высокой сложности, сервируемый персонально в вашей вилле.',
        answerEn: 'A seasonal multi-course tasting menu of 10–12 exquisite plates served personally in your villa.'
      }
    ],
    isDemo: true
  },
  {
    id: 'resort-cappadocia-cave',
    slug: 'cappadocia-celestial-cave-suites',
    name: 'Celestial Cave Suites & Wellness Spa',
    nameEn: 'Celestial Cave Suites & Wellness Spa',
    location: 'Учхисар, Каппадокия',
    locationEn: 'Uchisar, Cappadocia',
    country: 'Турция',
    category: 'contemporary',
    categoryLabel: 'Бутик-отель в скале',
    categoryLabelEn: 'Boutique Cave Suites',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Высеченные в вулканическом туфе дизайнерские сьюты с террасами для наблюдения за сотнями воздушных шаров.',
    shortDescriptionEn: 'Carved volcanic tufa designer suites with prime dawn terraces gazing at hundreds of hot air balloons.',
    fullDescription: 'Отель расположен на самой высокой точке Каппадокии у подножия крепости Учхисар. Каждая комната сохранила тысячелетнюю структуру древних пещерных жилищ, дополненную полами с подогревом, медными ваннами и бассейнами в гротах.',
    fullDescriptionEn: 'Positioned at the highest geological peak in Cappadocia beneath Uchisar Castle, this property transforms ancient monastic caves into ultra-luxurious cliffside dwelling spaces.',
    pricePerNight: 420,
    currency: 'USD',
    rating: 4.96,
    reviewsCount: 142,
    capacity: 2,
    amenities: [
      'Терраса на крыше для встречи рассвета с воздушными шарами',
      'Бассейн с подогревом внутри пещерного грота',
      'Аутентичный анатолийский спа и хаммам',
      'Ресторан высокой кухни на террасе',
      'Приватная организация полетов на шарах',
      'Винный погреб в скальной породе'
    ],
    roomTypes: [
      {
        id: 'room-cave-balloon',
        name: 'Balloon View Master Cave Suite',
        nameEn: 'Balloon View Master Cave Suite',
        price: 420,
        capacity: 2,
        sizeM2: 80,
        description: 'Пещерный сьют с частной открытой террасой, гидромассажной ванной и панорамным видом на долину Гёреме.',
        descriptionEn: 'Cave suite with a private sunset deck, heated hydrotherapy tub, and direct sunrise views of balloon launches.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        features: ['Вид на шары', 'Джакузи в пещере', 'Теплый пол', 'Камин']
      }
    ],
    faq: [
      {
        question: 'Видно ли шары прямо из номера?',
        questionEn: 'Can we view balloons directly from the room?',
        answer: 'Да, терраса сьюта расположена на первой линии обзора, и шары пролетают буквально в десятках метров от отеля.',
        answerEn: 'Yes, our panoramic decks face directly towards the launch valley; balloons often drift right over our terraces.'
      }
    ],
    isDemo: true
  }
];
