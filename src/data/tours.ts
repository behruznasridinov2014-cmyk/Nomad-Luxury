import { Tour } from '../types';

export const toursData: Tour[] = [
  {
    id: 'tour-silk-road-classic',
    slug: 'grand-silk-road-odyssey',
    title: 'Гранд-тур: Легенды Великого Шёлкового пути',
    titleEn: 'Grand Silk Road Odyssey: Samarkand, Bukhara & Khiva',
    destination: 'Самарканд, Бухара, Хива',
    destinationEn: 'Samarkand, Bukhara, Khiva',
    destinationId: 'samarkand',
    duration: '8 дней / 7 ночей',
    durationEn: '8 Days / 7 Nights',
    category: 'culture',
    categoryLabel: 'Культура и история',
    categoryLabelEn: 'Culture & Heritage',
    price: 1890,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Эксклюзивное путешествие по трем жемчужинам Узбекистана с проживанием в бутик-отелях, приватными экспертами-историками и скоростным поездом «Афросиаб».',
    shortDescriptionEn: 'Exclusive journey through Uzbekistan’s three ancient capitals with boutique stays, private historian guides, and Afrosiyob express trains.',
    difficulty: 'Легкий',
    maxGroupSize: 8,
    rating: 4.98,
    included: [
      'Проживание в премиальных бутик-отелях 5*',
      'Все трансферы на автомобилях представительского класса',
      'Билеты на скоростной поезд «Афросиаб» (бизнес-класс)',
      'Индивидуальный гид-востоковед высшей категории',
      'Все входные билеты в исторические комплексы без очередей',
      'Гастрономические обеды и ужины в авторских ресторанах'
    ],
    includedEn: [
      'Accommodations in luxury boutique 5* heritage hotels',
      'Chauffeured transfers in premium vehicles',
      'Afrosiyob high-speed train tickets in Business Class',
      'Private expert orientalist guide throughout',
      'VIP skip-the-line entrance to all monuments',
      'Gourmet Silk Road banquets and wine pairings'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Прибытие в Ташкент и знакомство со столицей',
        titleEn: 'Arrival in Tashkent & Capital Exploration',
        description: 'Встреча в VIP-терминале аэропорта, размещение в отеле, вечерняя прогулка по тенистым бульварам и гастрономический ужин.',
        descriptionEn: 'VIP airport greeting, check-in, sunset promenade along leafy avenues and introductory banquet.',
        activities: ['VIP-встреча', 'Прогулка по скверу Амира Темура', 'Ужин авторской узбекской кухни']
      },
      {
        day: 2,
        title: 'Скоростной поезд в Самарканд: Магия Регистана',
        titleEn: 'Afrosiyob to Samarkand: The Azure Registan',
        description: 'Утренний переезд в Самарканд, экскурсия по площади Регистан с выходом на приватный балкон медресе Тилля-Кари.',
        descriptionEn: 'High-speed morning train, private tour of Registan with exclusive access to the upper galleries.',
        activities: ['Поезд Афросиаб', 'Ансамбль Регистан', 'Мавзолей Гур-Эмир', 'Дегустация самаркандских вин']
      },
      {
        day: 3,
        title: 'Шахи-Зинда, обсерватория Улугбека и шелковая бумага',
        titleEn: 'Shah-i-Zinda & Ancient Silk Papermaking',
        description: 'Посещение бирюзового некрополя Шахи-Зинда и ремесленной мастерской «Конигил», производящей шелковую бумагу вручную.',
        descriptionEn: 'Explore the celestial blue mosaics of Shah-i-Zinda and ancient handmade silk papermaking at Konigil.',
        activities: ['Некрополь Шахи-Зинда', 'Мастер-класс по бумаге', 'Сиабский базар']
      },
      {
        day: 4,
        title: 'Бухара — город тысячи легенд',
        titleEn: 'Sacred Bukhara: Minarets & Dome Bazaars',
        description: 'Прибытие в Бухару, осмотр ансамбля Пои-Калян, крепости Арк и вечерний чай у Ляби-Хауз.',
        descriptionEn: 'Arrival in Bukhara, exploring the towering Kalyan minaret, the Ark fortress, and tea at Lyabi-Khauz.',
        activities: ['Минарет Калян', 'Крепость Арк', 'Торговые купола Токи-Заргарон']
      },
      {
        day: 5,
        title: 'Тайны суфизма и традиционный хаммам XVI века',
        titleEn: 'Sufi Heritage & 16th-Century Hamam Rituals',
        description: 'Посещение суфийского комплекса Бахауддина Накшбанди и спа-ритуал в древнем хаммаме Бозори Корд.',
        descriptionEn: 'Pilgrimage to the Sufi sanctuary of Naqshbandi followed by restorative oriental cleansing in historic hamam.',
        activities: ['Комплекс Накшбанди', 'Дворец Ситораи Мохи-Хоса', 'Традиционный хаммам']
      },
      {
        day: 6,
        title: 'Переезд через пустыню Кызылкум в Хиву',
        titleEn: 'Kyzylkum Desert Crossing to Ancient Khiva',
        description: 'Комфортабельное путешествие через барханы красной пустыни вдоль древнего русла Амударьи.',
        descriptionEn: 'Comfortable journey through red desert sands along the ancient Amu Darya river valley.',
        activities: ['Фото-стоп в песках Кызылкума', 'Закат над стенами Ичан-Калы']
      },
      {
        day: 7,
        title: 'Ичан-Кала: Застывшее время в глиняном оазисе',
        titleEn: 'Ichan-Kala Fortress: A Living Open-Air Museum',
        description: 'Целый день внутри нетронутой крепости: минарет Кальта-Минор, Джума-мечеть и дворец Таш-Хаули.',
        descriptionEn: 'Full immersion inside the citadel: Kalta Minor, the 218 carved pillars of Juma Mosque, and stone palaces.',
        activities: ['Дворец Таш-Хаули', 'Минарет Ислам-Ходжа', 'Ужин с хорезмскими танцами']
      },
      {
        day: 8,
        title: 'Завершение тура и вылет из Ургенча',
        titleEn: 'Farewell & Urgench Airport Departure',
        description: 'Утренний шоппинг традиционных хорезмских ковров и трансфер в международный аэропорт.',
        descriptionEn: 'Morning artisan souvenir browsing and VIP transfer to Urgench airport for departure.',
        activities: ['VIP трансфер в аэропорт', 'Вылет домой']
      }
    ]
  },
  {
    id: 'tour-chimgan-wellness',
    slug: 'chimgan-alpine-zen-wellness',
    title: 'Чимган: Альпийский велнес и горное спокойствие',
    titleEn: 'Chimgan Alpine Zen & High Mountain Wellness',
    destination: 'Чимган',
    destinationEn: 'Chimgan',
    destinationId: 'chimgan',
    duration: '4 дня / 3 ночи',
    durationEn: '4 Days / 3 Nights',
    category: 'wellness',
    categoryLabel: 'Wellness и релакс',
    categoryLabelEn: 'Wellness & Relaxation',
    price: 980,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Абсолютная перезагрузка в кедровых шале Амирсая: открытый теплый бассейн с видом на пики, хайкинг по хвойным рощам и фито-терапия.',
    shortDescriptionEn: 'Complete alpine renewal in Amirsoy cedar chalets: heated infinity pool facing summits, forest bathing, and botanical spa rituals.',
    difficulty: 'Легкий',
    maxGroupSize: 6,
    rating: 4.96,
    included: [
      '3 ночи в шале Deluxe Amirsoy Resort',
      'Ежедневные йога-сессии на открытой террасе',
      'Неограниченный доступ в спа-центр и инфинити-бассейн',
      '3 авторские спа-процедуры на выбор',
      'Персональный горный проводник для трекинга',
      'Органическое трехразовое питание от шефа'
    ],
    includedEn: [
      '3 nights in Deluxe Chalet at Amirsoy Resort',
      'Daily morning alpine yoga & breathing sessions',
      'Unlimited thermal spa & infinity pool access',
      '3 bespoke botanical spa therapies included',
      'Private nature guide for gentle scenic hikes',
      'Full-board organic farm-to-table cuisine'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Прибытие в горы и закатный релакс в бассейне',
        titleEn: 'Mountain Arrival & Sunset Pool Soak',
        description: 'Трансфер из Ташкента, заселение в шале, приветственный чай с горными травами и отдых в подогреваемом бассейне под открытым небом.',
        descriptionEn: 'Transfer from Tashkent, chalet check-in, welcome mountain herbal tea, and heated pool soak watching sunset over peaks.',
        activities: ['Трансфер на Mercedes V-Class', 'Чек-ин в шале', 'Инфинити-бассейн']
      },
      {
        day: 2,
        title: 'Практика пранаямы и трек к водопаду Гулькам',
        titleEn: 'Pranayama Practice & Gulkam Gorge Trek',
        description: 'Дыхательная гимнастика на рассвете, легкий живописный хайкинг по реликтовым можжевельникам и пикник с панорамным видом.',
        descriptionEn: 'Morning breathwork, gentle hike through ancient juniper forests, and organic alpine picnic.',
        activities: ['Утренняя йога', 'Хайкинг с гидом', 'Горный спа-массаж']
      },
      {
        day: 3,
        title: 'Канатная дорога на вершину и термальный спа-день',
        titleEn: 'Summit Cableways & Thermal Spa Rejuvenation',
        description: 'Подъем в панорамной гондоле на высоту 2290 м, созерцание панорамы Тянь-Шаня и день восстановительных процедур.',
        descriptionEn: 'Gondola ride to 2,290m summit, panoramic tea, followed by hot stone and thermal steam treatments.',
        activities: ['Подъем на фуникулере', 'Массаж горячими базальтовыми камнями', 'Кедровая купель фурако']
      },
      {
        day: 4,
        title: 'Завтрак на террасе и возвращение обновленным',
        titleEn: 'Terrace Breakfast & Restored Return',
        description: 'Финальная медитация, неспешный фермерский завтрак и комфортный трансфер в город.',
        descriptionEn: 'Final mindfulness session, artisan farm breakfast, and chauffeured transfer back to Tashkent.',
        activities: ['Медитация', 'Завтрак на террасе', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-charvak-weekend',
    slug: 'charvak-luxury-water-weekend',
    title: 'Чарвак: Уикенд на лазурном озере и приватный яхтинг',
    titleEn: 'Charvak Azure Escape: Sailing & Lakeside Serenity',
    destination: 'Чарвак',
    destinationEn: 'Charvak',
    destinationId: 'charvak',
    duration: '3 дня / 2 ночи',
    durationEn: '3 Days / 2 Nights',
    category: 'nature',
    categoryLabel: 'Природа и вода',
    categoryLabelEn: 'Nature & Waterfront',
    price: 690,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61752af3337?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Отдых на первой линии Чарвакского водохранилища: аренда парусной яхты на закате, ужины из речной форели и сапбординг.',
    shortDescriptionEn: 'Premier lakeside escape on Charvak: private chartered sailboat cruise, paddleboarding, and waterside dining.',
    difficulty: 'Легкий',
    maxGroupSize: 6,
    rating: 4.91,
    included: [
      '2 ночи в панорамной вилле у воды',
      '3-часовой приватный круиз на яхте с капитаном',
      'Сапборды и гидроциклы с инструктором',
      'Ужин-барбекю из свежей форели на берегу'
    ],
    includedEn: [
      '2 nights in a cliffside lakeside villa',
      '3-hour private sunset sailing with skipper',
      'Paddleboards & watercraft gear included',
      'Waterfront fresh trout barbecue dinner'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Заселение на виллу и сап-прогулка в закатных лучах',
        titleEn: 'Villa Check-in & Sunset SUP Cruise',
        description: 'Прибытие на курорт, размещение и спокойное катание на сапбордах по гладкой бирюзовой воде.',
        descriptionEn: 'Arrival, villa orientation, and tranquil sunset paddleboarding.',
        activities: ['Чек-ин', 'Сапбординг', 'Ужин на террасе']
      },
      {
        day: 2,
        title: 'Парусная регата и пикник в уединенной бухте',
        titleEn: 'Private Sailboat Cruise & Hidden Cove Picnic',
        description: 'Выход на парусной яхте в удаленные живописные заливы озера с купанием в кристальной воде.',
        descriptionEn: 'Cruising the emerald waters to secluded fjord-like coves for swimming and champagne.',
        activities: ['Яхтинг', 'Купание с борта', 'Пикник от шефа']
      },
      {
        day: 3,
        title: 'Утренний заплыв и возвращение',
        titleEn: 'Morning Swim & Departure',
        description: 'Заплыв в инфинити-бассейне, завтрак с видом на горы и выезд.',
        descriptionEn: 'Morning swim in infinity pool, breakfast, and return journey.',
        activities: ['Бассейн', 'Завтрак', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-samarkand-architecture',
    slug: 'samarkand-astronomy-and-architecture',
    title: 'Самарканд: Архитектура Тимуридов и тайны звезд',
    titleEn: 'Samarkand: Timurid Architecture & Starlight Mysteries',
    destination: 'Самарканд',
    destinationEn: 'Samarkand',
    destinationId: 'samarkand',
    duration: '3 дня / 2 ночи',
    durationEn: '3 Days / 2 Nights',
    category: 'architecture',
    categoryLabel: 'Архитектура',
    categoryLabelEn: 'Architecture',
    price: 620,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Глубокое погружение в математическую гармонию мозаик, астрономию Мирзо Улугбека и инженерные тайны древних зодчих.',
    shortDescriptionEn: 'In-depth exploration of geometric tile harmonics, Ulugbek astronomy, and ancient architectural engineering.',
    difficulty: 'Легкий',
    maxGroupSize: 10,
    rating: 4.94,
    included: [
      '2 ночи в отеле Silk Road Samarkand',
      'Лекция ведущего профессора архитектуры',
      'Ночной доступ к площади Регистан с подсветкой',
      'Посещение секстанта обсерватории Улугбека'
    ],
    includedEn: [
      '2 nights in Silk Road Samarkand resort',
      'Private lecture with architectural historian',
      'Private evening illumination tour of Registan',
      'Ulugbek Observatory visit with astronomer'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Регистан в лучах подсветки',
        titleEn: 'Registan Evening Light',
        description: 'Прибытие и эксклюзивный вечерний тур по подсвеченным памятникам.',
        descriptionEn: 'Arrival and magical evening walk under illuminated portals.',
        activities: ['Чек-ин', 'Ночная экскурсия по Регистану']
      },
      {
        day: 2,
        title: 'Мавзолеи и геометрия орнаментов',
        titleEn: 'Mausoleums & Tile Symmetry',
        description: 'Детальное изучение мозаик Шахи-Зинда и инженерных решений купола Гур-Эмир.',
        descriptionEn: 'Analyzing sacred geometry and engineering behind the turquoise domes.',
        activities: ['Шахи-Зинда', 'Гур-Эмир', 'Мастер-класс мозаики']
      },
      {
        day: 3,
        title: 'Обсерватория и отъезд',
        titleEn: 'Observatory & Farewell',
        description: 'Визит в обсерваторию Улугбека и Сиабский базар.',
        descriptionEn: 'Exploring 15th-century astronomical instruments and bazaar tasting.',
        activities: ['Обсерватория', 'Базар', 'Выезд']
      }
    ]
  },
  {
    id: 'tour-zaamin-nature',
    slug: 'zaamin-canyons-and-skywalk',
    title: 'Заамин: Заповедные каньоны и прогулка над облаками',
    titleEn: 'Zaamin: Pristine Canyons & Glass Skybridge Trek',
    destination: 'Заамин',
    destinationEn: 'Zaamin',
    destinationId: 'zaamin',
    duration: '3 дня / 2 ночи',
    durationEn: '3 Days / 2 Nights',
    category: 'mountains',
    categoryLabel: 'Горы и трекинг',
    categoryLabelEn: 'Mountains & Trekking',
    price: 540,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Прогулка по 300-метровому стеклянному подвесному мосту на плато Супа, трекинг к водопадам и чистейший арчовый воздух.',
    shortDescriptionEn: 'Walking the 300m suspension glass bridge over Supa Canyon, waterfall trekking, and healing juniper air.',
    difficulty: 'Средний',
    maxGroupSize: 8,
    rating: 4.88,
    included: [
      '2 ночи в Zaamin Canyon Eco-Lodge',
      'Билеты на стеклянный панорамный подвесной мост',
      'Трекинг с профессиональным инструктором',
      'Фермерский обед с тандыр-кебабом в горах'
    ],
    includedEn: [
      '2 nights in Zaamin Canyon Eco-Lodge',
      'Glass skybridge tickets',
      'Mountain guide for canyon gorges',
      'Authentic mountain tandoor lunch'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Подъем на плато Супа',
        titleEn: 'Ascent to Supa Plateau',
        description: 'Дорога по горному серпантину, заселение в лодж и вечерний костер.',
        descriptionEn: 'Scenic serpentine drive, lodge check-in, and starlit bonfire.',
        activities: ['Серпантин', 'Костер под звездами']
      },
      {
        day: 2,
        title: 'Стеклянный мост и каньоны Чор-Танга',
        titleEn: 'Glass Bridge & Ravine Treks',
        description: 'Острые ощущения на подвесном стеклянном мосту и спуск к горным ручьям.',
        descriptionEn: 'Thrilling skywalk on the suspension bridge followed by stream hikes.',
        activities: ['Стеклянный мост', 'Каньон', 'Горный обед']
      },
      {
        day: 3,
        title: 'Дерево желаний Бобо-Янгок и отъезд',
        titleEn: 'Bobo-Yangok Sacred Tree & Return',
        description: 'Визит к тысячелетнему ореховому дереву и возвращение.',
        descriptionEn: 'Visiting the millenary sacred tree and return drive.',
        activities: ['Бобо-Янгок', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-fergana-crafts',
    slug: 'fergana-silk-ceramics-mastery',
    title: 'Фергана: Магия шелка и лазурной керамики',
    titleEn: 'Fergana: Ancient Silk Weaving & Ceramic Mastery',
    destination: 'Ферганская долина',
    destinationEn: 'Fergana Valley',
    destinationId: 'fergana',
    duration: '4 дня / 3 ночи',
    durationEn: '4 Days / 3 Nights',
    category: 'culture',
    categoryLabel: 'Культура и ремесла',
    categoryLabelEn: 'Culture & Crafts',
    price: 720,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Индивидуальные мастер-классы у легендарных мастеров Риштана и Маргилана, дворец Худояр-хана в Коканде и дегустация фруктов.',
    shortDescriptionEn: 'Hands-on private masterclasses with master potters of Rishtan and silk weavers of Margilan.',
    difficulty: 'Легкий',
    maxGroupSize: 8,
    rating: 4.89,
    included: [
      '3 ночи в лучших бутик-отелях долины',
      'Приватный мастер-класс по росписи риштанской керамики',
      'Экскурсия по шелкоткацкой мануфактуре «Ёдгорлик»',
      'Все трансферы и персональный гид'
    ],
    includedEn: [
      '3 nights in premium valley hotels',
      'Private ceramic glazing workshop in Rishtan',
      'Behind-the-scenes Yodgorlik silk tour',
      'Private car and cultural guide'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Коканд — столица ханов',
        titleEn: 'Kokand Khanate Splendor',
        description: 'Перевал Камчик на комфортабельном авто, осмотр дворца Худояр-хана.',
        descriptionEn: 'Crossing Kamchik Mountain Pass, touring Khudayar Khan Palace.',
        activities: ['Перевал Камчик', 'Дворец хана']
      },
      {
        day: 2,
        title: 'Риштан: Искусство гончаров',
        titleEn: 'Rishtan: Master Potters',
        description: 'Создание собственного керамического блюда с натуральной глазурью ишкор.',
        descriptionEn: 'Crafting your own ceramic plate using ancestral Ishkor botanical glazes.',
        activities: ['Гончарный круг', 'Роспись посуды']
      },
      {
        day: 3,
        title: 'Маргилан: Шелк ручной работы',
        titleEn: 'Margilan: Living Silk',
        description: 'Наблюдение за разматыванием коконов тутового шелкопряда и плетением иката.',
        descriptionEn: 'Witnessing natural cocoon unraveling, botanical dyeing, and ikat weaving.',
        activities: ['Шелковая фабрика', 'Покупка тканей']
      },
      {
        day: 4,
        title: 'Фруктовые сады и возвращение',
        titleEn: 'Orchards & Return',
        description: 'Дегустация ферганских гранатов и возвращение через перевал в Ташкент.',
        descriptionEn: 'Seasonal fruit tasting in orchards and scenic return drive.',
        activities: ['Фермерский сад', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-cappadocia-dream',
    slug: 'cappadocia-hot-air-balloon-romance',
    title: 'Каппадокия: Полеты на воздушных шарах и пещерный люкс',
    titleEn: 'Cappadocia: Sunrise Hot Air Balloons & Cave Luxury',
    destination: 'Каппадокия',
    destinationEn: 'Cappadocia',
    destinationId: 'cappadocia',
    duration: '4 дня / 3 ночи',
    durationEn: '4 Days / 3 Nights',
    category: 'adventure',
    categoryLabel: 'Приключения и романтика',
    categoryLabelEn: 'Adventure & Romance',
    price: 1450,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Гарантированный рассветный полет на премиальном шаре, проживание в пещерном сьюте с панорамной ванной и конный тур на закате.',
    shortDescriptionEn: 'Guaranteed sunrise balloon flight, bespoke cave suite with heated tub, and sunset horseback riding.',
    difficulty: 'Легкий',
    maxGroupSize: 6,
    rating: 4.97,
    included: [
      '3 ночи в Celestial Cave Suites',
      'Приватный или премиум-полет на воздушном шаре с шампанским',
      'Конная прогулка на закате по Долине Роз',
      'Индивидуальный тур по подземному городу Каймаклы'
    ],
    includedEn: [
      '3 nights in Celestial Cave Suites',
      'Premium sunrise balloon flight with champagne',
      'Sunset horseback trail through Rose Valley',
      'Private exploration of Kaymakli subterranean city'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Заселение в пещерный замок',
        titleEn: 'Cave Castle Check-In',
        description: 'Прибытие, расселение в скальном сьюте и ужин с видом на долины.',
        descriptionEn: 'Arrival, rock suite orientation, and cliffside dining.',
        activities: ['Чек-ин', 'Закатный коктейль']
      },
      {
        day: 2,
        title: 'Рассветный полет на шаре',
        titleEn: 'Dawn Flight of Hundreds of Balloons',
        description: 'Взлет на рассвете, парение над скальными столбами и бокал шампанского при приземлении.',
        descriptionEn: 'Floating over fairy chimneys at first light, landing celebration.',
        activities: ['Полет на шаре', 'Подземный город']
      },
      {
        day: 3,
        title: 'Конный тур и долина Любви',
        titleEn: 'Horseback Trail & Love Valley',
        description: 'Прогулка верхом на чистокровных анатолийских лошадях в закатном свете.',
        descriptionEn: 'Riding graceful horses through red volcanic canyons at dusk.',
        activities: ['Конный тур', 'Дегустация вин']
      },
      {
        day: 4,
        title: 'Фотосессия на террасе и вылет',
        titleEn: 'Terrace Photo Session & Departure',
        description: 'Утренний чай с летающими шарами на фоне и трансфер в аэропорт.',
        descriptionEn: 'Rooftop morning coffee watching the skies and airport transfer.',
        activities: ['Завтрак на террасе', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-dolomites-wellness',
    slug: 'dolomites-alpine-spa-and-peaks',
    title: 'Доломиты: Альпийский спа-ретрит и озеро Брайес',
    titleEn: 'Dolomites: High Alpine Spa Sanctuary & Lake Braies',
    destination: 'Доломитовые Альпы',
    destinationEn: 'The Dolomites',
    destinationId: 'dolomites',
    duration: '6 дней / 5 ночей',
    durationEn: '6 Days / 5 Nights',
    category: 'wellness',
    categoryLabel: 'Wellness и горы',
    categoryLabelEn: 'Wellness & Mountains',
    price: 2400,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Роскошные шале из кедра, подогреваемые парящие бассейны с видом на Селла-Ронду, частная лодка на озере Брайес и мишленовские ужины.',
    shortDescriptionEn: 'Cedar chalets, floating heated pools gazing at Sella Ronda, private vintage rowing on Lake Braies, and Michelin gastronomy.',
    difficulty: 'Легкий',
    maxGroupSize: 6,
    rating: 4.99,
    included: [
      '5 ночей в Dolomiti Sanctuary Alpine Resort',
      'Ежедневный спа-уход с альпийскими травами и сеном',
      'Приватная аренда старинной деревянной лодки на Lago di Braies',
      '2 гастрономических ужина в ресторанах гида Мишлен'
    ],
    includedEn: [
      '5 nights in Dolomiti Sanctuary Alpine Resort',
      'Daily botanical mountain hay and herb spa rituals',
      'Private vintage wooden boat charter on Lake Braies',
      '2 Michelin-star gourmet dining experiences'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Прибытие в Южный Тироль',
        titleEn: 'South Tyrol Arrival',
        description: 'Трансфер из Венеции или Больцано, заселение в шале с камином.',
        descriptionEn: 'Scenic alpine transfer, check-in, fireplace welcome drink.',
        activities: ['Чек-ин', 'Вечерний спа-релакс']
      },
      {
        day: 2,
        title: 'Озеро Брайес на рассвете',
        titleEn: 'Lago di Braies at Sunrise',
        description: 'Приватный выход на деревянной лодке по зеркальной бирюзовой глади до наплыва туристов.',
        descriptionEn: 'Exclusive dawn boat ride before public hours, mirror water photography.',
        activities: ['Лодочная прогулка', 'Альпийский пикник']
      },
      {
        day: 3,
        title: 'Трекинг к Tre Cime di Lavaredo',
        titleEn: 'Tre Cime di Lavaredo Panorama',
        description: 'Легкий трекинг вокруг трех знаменитых башен с панорамным обедом в хижине.',
        descriptionEn: 'Gentle scenic circuit around the iconic three limestone pinnacles.',
        activities: ['Трекинг', 'Обед в рифуджо']
      },
      {
        day: 4,
        title: 'День глубокого велнеса',
        titleEn: 'Day of Deep Alpine Wellness',
        description: 'Травяные сауны, ванны из альпийского сена и инфинити-бассейн над долиной.',
        descriptionEn: 'Alpine stone pine saunas, hay flower baths, cantilevered warm pool.',
        activities: ['Спа-ритуалы', 'Йога на террасе']
      },
      {
        day: 5,
        title: 'Валь-Гардена и гастрономия',
        titleEn: 'Val Gardena & Fine Dining',
        description: 'Прогулка по колоритной альпийской деревушке и праздничный ужин от шефа.',
        descriptionEn: 'Alpine village stroll, woodcarving studios, and Michelin celebration feast.',
        activities: ['Гастрономический ужин']
      },
      {
        day: 6,
        title: 'Выезд и прощание с Альпами',
        titleEn: 'Farewell Alpine Peaks',
        description: 'Завтрак со свежим альпийским молоком и трансфер в аэропорт.',
        descriptionEn: 'Final mountain views and executive transfer to airport.',
        activities: ['Завтрак', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-kyoto-zen',
    slug: 'kyoto-spiritual-zen-retreat',
    title: 'Киото: Медитативный дзен, чайные сады и онсэн',
    titleEn: 'Kyoto: Spiritual Zen Mindfulness & Onsen Springs',
    destination: 'Киото',
    destinationEn: 'Kyoto',
    destinationId: 'kyoto',
    duration: '5 дней / 4 ночи',
    durationEn: '5 Days / 4 Nights',
    category: 'culture',
    categoryLabel: 'Культура и дух',
    categoryLabelEn: 'Culture & Spirit',
    price: 2100,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Закрытые храмовые сады Киото, чайная церемония с мастером, термальные ванны онсэн и прогулки по бамбуковому лесу на рассвете.',
    shortDescriptionEn: 'Exclusive temple gardens, tea ceremonies with masters, healing onsen waters, and Arashiyama bamboo serenity.',
    difficulty: 'Легкий',
    maxGroupSize: 6,
    rating: 4.97,
    included: [
      '4 ночи в люксовом рёкане с приватным онсэном',
      'Приватный доступ в дзен-сад камней до открытия',
      'Традиционная чайная церемония Урасэнкэ',
      '2 ужина высокой кухни Кайсэки в номере'
    ],
    includedEn: [
      '4 nights in luxury ryokan with private cedar onsen',
      'VIP before-hours access to historic Zen stone garden',
      'Private tea ceremony with master practitioner',
      '2 Kaiseki in-suite multi-course gastronomic banquets'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Прибытие в Арасияму',
        titleEn: 'Arashiyama Welcome',
        description: 'Заселение в рёкан, погружение в горячий термальный источник.',
        descriptionEn: 'Ryokan check-in, yukata fitting, and private mineral onsen soak.',
        activities: ['Онсэн', 'Ужин Кайсэки']
      },
      {
        day: 2,
        title: 'Бамбуковая роща и медитация в храме',
        titleEn: 'Bamboo Forest Dawn & Zazen Practice',
        description: 'Утренняя прогулка среди шелестящего бамбука и практика сидячей медитации Дзадзен.',
        descriptionEn: 'Dawn stroll through Arashiyama bamboo and guided Zen meditation.',
        activities: ['Бамбуковый лес', 'Медитация Дзадзен']
      },
      {
        day: 3,
        title: 'Искусство чая и сад мхов',
        titleEn: 'Tea Mastery & Moss Temple',
        description: 'Посещение мистического храма Сайкодзи с тысячей видов мха и закрытое чаепитие.',
        descriptionEn: 'Temple moss garden contemplation and authentic matcha ceremony.',
        activities: ['Сад мхов', 'Чайная церемония']
      },
      {
        day: 4,
        title: 'Исторический Гион и театр гейш',
        titleEn: 'Historic Gion Evening',
        description: 'Вечерняя прогулка по кварталу деревянных чайных домиков Гион.',
        descriptionEn: 'Evening walking tour of lantern-lit wooden tea houses in Gion.',
        activities: ['Прогулка по Гиону', 'Ужин']
      },
      {
        day: 5,
        title: 'Финальный онсэн и отъезд',
        titleEn: 'Final Onsen Soak & Departure',
        description: 'Утреннее купание в кедровой бочке и трансфер на вокзал Синкансэн.',
        descriptionEn: 'Morning cedar soak, traditional breakfast, and Shinkansen train transfer.',
        activities: ['Онсэн', 'Завтрак', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-iceland-aurora',
    slug: 'iceland-aurora-and-geothermal-lagoon',
    title: 'Исландия: Северное сияние и геотермальные лагуны',
    titleEn: 'Iceland: Aurora Borealis & Geothermal Blue Lagoon',
    destination: 'Исландия',
    destinationEn: 'Iceland',
    destinationId: 'iceland',
    duration: '6 дней / 5 ночей',
    durationEn: '6 Days / 5 Nights',
    category: 'adventure',
    categoryLabel: 'Приключения и природа',
    categoryLabelEn: 'Adventure & Nature',
    price: 2650,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Купание в Голубой Лагуне, ночная охота за северным сиянием на суперджипах, ледяные пещеры и спа под открытым небом.',
    shortDescriptionEn: 'Soaking in Blue Lagoon silica waters, superjeep Aurora safaris, glacier ice caves, and open-sky geothermal spas.',
    difficulty: 'Средний',
    maxGroupSize: 8,
    rating: 4.96,
    included: [
      '5 ночей в люксовых эко-лоджах со стеклянным куполом',
      'VIP Retreat Spa в Голубой Лагуне',
      'Охота за сиянием на модифицированных внедорожниках Arctic Trucks',
      'Исследование хрустальной ледяной пещеры Ватнайёкюдль'
    ],
    includedEn: [
      '5 nights in glass-domed Aurora eco-lodges',
      'VIP Retreat Spa access at Blue Lagoon',
      'Superjeep Northern Lights safari with photographer',
      'Vatnajökull glacier crystal ice cave exploration'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Прибытие и VIP Retreat Spa',
        titleEn: 'Arrival & Retreat Spa Soak',
        description: 'Прилет в Кеблавик, прямое перемещение в приватный спа-комплекс лагуны с кремневыми масками.',
        descriptionEn: 'Arrival, direct transfer to Blue Lagoon Retreat spa, subterranean steam rooms.',
        activities: ['Голубая лагуна', 'Спа-ритуал']
      },
      {
        day: 2,
        title: 'Золотое кольцо и гейзеры',
        titleEn: 'Golden Circle & Strokkur Geysir',
        description: 'Водопад Гюдльфосс, извергающийся гейзер Строккюр и разлом тектонических плит Тингведлир.',
        descriptionEn: 'Gullfoss waterfall, exploding Strokkur geyser, and Thingvellir rift valley.',
        activities: ['Гейзеры', 'Водопады']
      },
      {
        day: 3,
        title: 'Хрустальные ледяные пещеры',
        titleEn: 'Glacier Blue Ice Cave',
        description: 'Поездка на ледник Ватнайёкюдль и спуск в сверкающий сапфировый ледяной грот.',
        descriptionEn: 'Superjeep ride across glacier tongue and stepping into deep blue crystal caves.',
        activities: ['Ледяная пещера', 'Трекинг по льду']
      },
      {
        day: 4,
        title: 'Черные пляжи Вик и водопады Скоугафосс',
        titleEn: 'Black Sand Beach Vik & Waterfalls',
        description: 'Базальтовые колонны Рейнисфьяра и мощные струи водопада Сельяландсфосс.',
        descriptionEn: 'Basalt sea stacks at Reynisfjara black sand beach and waterfall trails.',
        activities: ['Черный пляж', 'Водопады']
      },
      {
        day: 5,
        title: 'Ночная погоня за Авророй',
        titleEn: 'Chasing the Northern Lights',
        description: 'Выезд в глубь острова с профессиональным астрофотографом для съемки танца Авроры.',
        descriptionEn: 'Nighttime safari into wilderness away from city light pollution with hot cocoa.',
        activities: ['Северное сияние', 'Фотосессия']
      },
      {
        day: 6,
        title: 'Вылет домой',
        titleEn: 'Departure',
        description: 'Утренний завтрак и трансфер в аэропорт Кеблавик.',
        descriptionEn: 'Hearty Nordic breakfast and airport transfer.',
        activities: ['Завтрак', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-tashkent-modernist',
    slug: 'tashkent-modernism-and-gastronomy',
    title: 'Ташкент: Модернизм, арт-галереи и гастрономия',
    titleEn: 'Tashkent: Architectural Modernism & Modern Gastronomy',
    destination: 'Ташкент',
    destinationEn: 'Tashkent',
    destinationId: 'tashkent',
    duration: '2 дня / 1 ночь',
    durationEn: '2 Days / 1 Night',
    category: 'gastronomy',
    categoryLabel: 'Гастрономия и арт',
    categoryLabelEn: 'Gastronomy & Art',
    price: 380,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1920&q=80',
    gallery: ['https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80'],
    shortDescription: 'Знакомство с шедеврами сейсмического модернизма, закрытая экскурсия по ташкентскому метрополитену и ужин от шефа-новатора.',
    shortDescriptionEn: 'Discovering 20th-century earthquake modernism, underground subway palaces, and avant-garde Central Asian dining.',
    difficulty: 'Легкий',
    maxGroupSize: 10,
    rating: 4.88,
    included: [
      '1 ночь в люксовом городском отеле',
      'Экскурсия с искусствоведом по станциям метро и мозаикам',
      'Дегустационный ужин из 7 блюд современной узбекской кухни'
    ],
    includedEn: [
      '1 night in luxury 5* urban property',
      'Art historian tour of marble metro stations & mosaics',
      '7-course contemporary Uzbek gastronomy tasting'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Метрополитен и модернизм',
        titleEn: 'Underground Marble & Modernism',
        description: 'Исследование станций «Космонавты», «Алишера Навои» и советских монументальных мозаик Жарского.',
        descriptionEn: 'Visiting Kosmonavtlar, Alisher Navoi stations, and architectural facades.',
        activities: ['Метро-тур', 'Арт-галерея', 'Ужин']
      },
      {
        day: 2,
        title: 'Центр плова и базар Чорсу',
        titleEn: 'Besh Qozon Plov & Chorsu Bazaar',
        description: 'Приготовление плова в гигантских казанах и купольный базар Чорсу.',
        descriptionEn: 'Giant tandoor cauldrons tasting and blue dome bazaar shopping.',
        activities: ['Дегустация плова', 'Базар Чорсу']
      }
    ]
  },
  {
    id: 'tour-bukhara-heritage',
    slug: 'bukhara-secret-courtyards-and-sufism',
    title: 'Бухара: Тайные дворики и мудрость Востока',
    titleEn: 'Bukhara: Hidden Courtyards & Sufi Wisdom',
    destination: 'Бухара',
    destinationEn: 'Bukhara',
    destinationId: 'bukhara',
    duration: '3 дня / 2 ночи',
    durationEn: '3 Days / 2 Nights',
    category: 'culture',
    categoryLabel: 'Культура и история',
    categoryLabelEn: 'Culture & Heritage',
    price: 580,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    gallery: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'],
    shortDescription: 'Прогулки по закрытым караван-сараям, чаепитие с травниками, посещение мастерских золотого шитья и хаммам.',
    shortDescriptionEn: 'Wandering hidden merchant courtyards, herbal tea tastings, gold embroidery ateliers, and hamam rejuvenation.',
    difficulty: 'Легкий',
    maxGroupSize: 8,
    rating: 4.93,
    included: [
      '2 ночи в бухарском бутик-отеле',
      'Приватный хаммам с восточным скрабом',
      'Мастер-класс по золотому шитью',
      'Все входные билеты и гид'
    ],
    includedEn: [
      '2 nights in boutique heritage palace',
      'Private ancient hamam ritual',
      'Gold thread embroidery studio visit',
      'All monuments & personal guide'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ляби-Хауз и торговые купола',
        titleEn: 'Lyabi-Khauz Evening',
        description: 'Чай у векового водоема и прогулка по торговым куполам.',
        descriptionEn: 'Evening tea under mulberry trees and jewelry domes.',
        activities: ['Чек-ин', 'Чайная церемония']
      },
      {
        day: 2,
        title: 'Мавзолей Саманидов и хаммам',
        titleEn: 'Samanid Brickwork & Hamam',
        description: 'Шедевр кирпичной кладки IX века и банный ритуал.',
        descriptionEn: '9th-century Samanid geometry and cleansing hamam.',
        activities: ['Мавзолей', 'Хаммам']
      },
      {
        day: 3,
        title: 'Дворец луны и звезд',
        titleEn: 'Palace of Moon & Stars',
        description: 'Летняя резиденция последнего эмира Бухары Ситораи Мохи-Хоса.',
        descriptionEn: 'Summer palace of the last Emir of Bukhara.',
        activities: ['Дворец эмира', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-khiva-oasis',
    slug: 'khiva-desert-oasis-citadel',
    title: 'Хива: Оазис в песках и сокровища ханов',
    titleEn: 'Khiva: Living Desert Citadel & Khan Treasures',
    destination: 'Хива',
    destinationEn: 'Khiva',
    destinationId: 'khiva',
    duration: '3 дня / 2 ночи',
    durationEn: '3 Days / 2 Nights',
    category: 'architecture',
    categoryLabel: 'Архитектура и история',
    categoryLabelEn: 'Architecture & History',
    price: 590,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1920&q=80',
    gallery: ['https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80'],
    shortDescription: 'Погружение в аутентичную крепость Ичан-Кала: ночные экскурсии с факелами, подъем на минарет Ислам-Ходжа и хорезмский шашлык.',
    shortDescriptionEn: 'Torchlight night walks inside Ichan-Kala, ascending Islam Khodja minaret, and traditional Khorezm gastronomy.',
    difficulty: 'Легкий',
    maxGroupSize: 8,
    rating: 4.95,
    included: [
      '2 ночи в аутентичном отеле внутри крепости',
      'Ночной тур с факелами по Ичан-Кале',
      'Дегустация знаменитых зеленых хорезмских пельменей «Шивит Оши»',
      'Билеты во все музеи и дворцы'
    ],
    includedEn: [
      '2 nights in a fortress heritage hotel',
      'Torchlight after-dark Citadel walk',
      'Tasting of local herb pasta "Shivit Oshi"',
      'Monuments and royal palace tickets'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Вход через ворота Ата-Дарваза',
        titleEn: 'Gate of Ata-Darvaza',
        description: 'Заселение в отель внутри стен крепости и закатный чай на крыше.',
        descriptionEn: 'Stepping through medieval gates, rooftop tea viewing fortress.',
        activities: ['Чек-ин', 'Закатная терраса']
      },
      {
        day: 2,
        title: '218 колонн и ханские покои',
        titleEn: '218 Wooden Pillars & Throne Halls',
        description: 'Джума-мечеть, лазурный минарет Кальта-Минор и гарем дворца Таш-Хаули.',
        descriptionEn: 'The acoustic wooden pillars of Juma Mosque and harem courtyard.',
        activities: ['Джума-мечеть', 'Таш-Хаули', 'Ночной тур']
      },
      {
        day: 3,
        title: 'Крепость Куня-Арк и отъезд',
        titleEn: 'Kunya-Ark Bastion & Departure',
        description: 'Панорамный вид с бастиона Ак-Шейх-Бобо и выезд в аэропорт Ургенч.',
        descriptionEn: 'Panoramic rampart vista and transfer to Urgench airport.',
        activities: ['Смотровой бастион', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-tian-shan-trek',
    slug: 'tian-shan-alpine-ridges-adventure',
    title: 'Тянь-Шань: Экспедиция к горным вершинам',
    titleEn: 'Tian Shan: High Alpine Ridges Trekking Expedition',
    destination: 'Чимган',
    destinationEn: 'Chimgan',
    destinationId: 'chimgan',
    duration: '4 дня / 3 ночи',
    durationEn: '4 Days / 3 Nights',
    category: 'mountains',
    categoryLabel: 'Горы и приключения',
    categoryLabelEn: 'Mountains & Adventure',
    price: 780,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1920&q=80',
    gallery: ['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'],
    shortDescription: 'Активный маршрут по отрогам Чаткальского хребта: перевал Песочный, петроглифы Бельдерсая и ночевка в горных шале.',
    shortDescriptionEn: 'Active expedition across Chatkal alpine ridges: Sandy Pass, Beldersay ancient petroglyphs, and luxury chalet stays.',
    difficulty: 'Активный',
    maxGroupSize: 6,
    rating: 4.91,
    included: [
      'Проживание в комфортных горных лоджах',
      'Профессиональный горный гид и спасательное снаряжение',
      'Питание и горные энерго-сеты во время переходов',
      'Все трансферы на внедорожниках Toyota Land Cruiser'
    ],
    includedEn: [
      'Luxury mountain lodge accommodation',
      'Certified alpine mountain leader',
      'Organic high-energy expedition nutrition',
      'Toyota Land Cruiser 4x4 transfers'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ущелье Бельдерсай и петроглифы',
        titleEn: 'Beldersay Gorge & Petroglyphs',
        description: 'Хайкинг к древним наскальным рисункам эпохи бронзы.',
        descriptionEn: 'Trek to bronze-age rock carvings overlooking the valley.',
        activities: ['Хайкинг', 'Петроглифы']
      },
      {
        day: 2,
        title: 'Перевал Песочный и долина Мраморной речки',
        titleEn: 'Sandy Pass & Marble River',
        description: 'Преодоление живописного перевала и купание в чистейших ваннах реки.',
        descriptionEn: 'Crossing alpine pass and natural marble water cascading pools.',
        activities: ['Горный трек', 'Пикник у воды']
      },
      {
        day: 3,
        title: 'Гребень Большого Чимгана',
        titleEn: 'Greater Chimgan Ridge Trail',
        description: 'Подъем на панорамные точки с видом на Charvak Lake сверху.',
        descriptionEn: 'Ridge trek offering bird’s-eye vistas of Charvak lake below.',
        activities: ['Панорамный подъем', 'Ужин у костра']
      },
      {
        day: 4,
        title: 'Отдых в спа и трансфер',
        titleEn: 'Spa Recovery & Return',
        description: 'Восстановление мышц в сауне и возвращение в город.',
        descriptionEn: 'Muscle recovery in cedar hot tubs and transfer.',
        activities: ['Спа', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-family-silk-road',
    slug: 'family-adventure-fairytale-uzbekistan',
    title: 'Семейная сказка Востока: Самарканд и горы для детей',
    titleEn: 'Family Silk Road Fairytale: Culture & Mountains for Kids',
    destination: 'Самарканд',
    destinationEn: 'Samarkand',
    destinationId: 'samarkand',
    duration: '5 дней / 4 ночи',
    durationEn: '5 Days / 4 Nights',
    category: 'family',
    categoryLabel: 'Семейный отдых',
    categoryLabelEn: 'Family Holiday',
    price: 1100,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    gallery: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'],
    shortDescription: 'Интерактивные квесты в восточных дворцах, мастер-классы по выпечке лепешек, катание на лошадях и комфорт для родителей.',
    shortDescriptionEn: 'Interactive treasure hunts in royal palaces, tandoor bread baking classes, pony treks, and comfort for parents.',
    difficulty: 'Легкий',
    maxGroupSize: 8,
    rating: 4.95,
    included: [
      '4 ночи в семейных сьютах 5*',
      'Детские интерактивные квесты с аниматором-гидом',
      'Кулинарный мастер-класс по лепке самсы и лепешек',
      'Посещение эко-фермы и катание на пони'
    ],
    includedEn: [
      '4 nights in family connecting suites',
      'Kid-friendly historical treasure hunts',
      'Hands-on tandoor bread making workshop',
      'Eco-farm animal encounters and pony rides'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Прибытие и сказка Востока',
        titleEn: 'Arrival in Fairytale Land',
        description: 'Встреча в сказочных восточных костюмах и размещение в отеле.',
        descriptionEn: 'Thematic costumed welcome and family suite check-in.',
        activities: ['Чек-ин', 'Семейный ужин']
      },
      {
        day: 2,
        title: 'Квест «Сокровища Амира Темура»',
        titleEn: 'Treasure Hunt of Amir Timur',
        description: 'Увлекательный игровой квест на площади Регистан с поиском старинных знаков.',
        descriptionEn: 'Playful historical riddle game across Registan madrasahs.',
        activities: ['Квест', 'Мастер-класс лепешек']
      },
      {
        day: 3,
        title: 'Этнопарк «Вечный Город» и катера',
        titleEn: 'Eternal City Park & Boats',
        description: 'Прогулка на лодках по каналу и мастер-класс гончарного дела для всей семьи.',
        descriptionEn: 'Waterway boat ride and clay modeling for children.',
        activities: ['Катер', 'Гончарное дело']
      },
      {
        day: 4,
        title: 'Поездка в горы и пикник',
        titleEn: 'Foothills Day & Picnic',
        description: 'Легкая прогулка по горным полянам, сбор цветов и катание на пони.',
        descriptionEn: 'Gentle nature walk, flower picking, and open-air family feast.',
        activities: ['Лошади', 'Пикник']
      },
      {
        day: 5,
        title: 'Сладкий базар и вылет',
        titleEn: 'Sweet Bazaar & Farewell',
        description: 'Покупка восточных сладостей, пахлавы и трансфер в аэропорт.',
        descriptionEn: 'Tasting halva and dried melons at bazaar and airport transfer.',
        activities: ['Базар', 'Трансфер']
      }
    ]
  },
  {
    id: 'tour-gastronomy-plov-silk-road',
    slug: 'gourmet-flavors-silk-road-gastronomy',
    title: 'Гастрономическая одиссея: Великие вкусы Шёлкового пути',
    titleEn: 'Silk Road Gourmet Odyssey: 100 Flavors of Central Asia',
    destination: 'Ташкент, Самарканд, Бухара',
    destinationEn: 'Tashkent, Samarkand, Bukhara',
    destinationId: 'tashkent',
    duration: '5 дней / 4 ночи',
    durationEn: '5 Days / 4 Nights',
    category: 'gastronomy',
    categoryLabel: 'Гастрономия',
    categoryLabelEn: 'Gastronomy',
    price: 1350,
    currency: 'USD',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    gallery: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'],
    shortDescription: 'Дегустация 5 разновидностей плова, шашлыков на виноградной лозе, десертов из шафрана и вин старейшего завода Ховренко.',
    shortDescriptionEn: 'Tasting 5 distinct regional plov recipes, vine-wood charcoal kebabs, saffron delicacies, and Khovrenko vintage wines.',
    difficulty: 'Легкий',
    maxGroupSize: 8,
    rating: 4.96,
    included: [
      '4 ночи в пятизвездочных отелях',
      'Все дегустационные сеты и приватные мастер-классы от ошпазов',
      'Винная дегустация в погребах завода им. Ховренко (Самарканд)',
      'Персональный шеф-сопровождающий'
    ],
    includedEn: [
      '4 nights in 5* boutique luxury hotels',
      'All masterchef plov workshops and tastings',
      'Historic wine & balsam tasting at Khovrenko Cellars',
      'Dedicated culinary guide throughout'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Свадебный ташкентский плов',
        titleEn: 'Tashkent Wedding Plov',
        description: 'Дегустация плова с бараниной, конской колбасой казы и перепелиными яйцами.',
        descriptionEn: 'Tasting rich saffron plov with tender lamb and quail eggs.',
        activities: ['Besh Qozon', 'Чайхана']
      },
      {
        day: 2,
        title: 'Самарканд: Слоеный плов и винные погреба',
        titleEn: 'Samarkand Layered Plov & Vintage Wines',
        description: 'Приготовление знаменитого раздельного самаркандского плова с желтой морковью.',
        descriptionEn: 'Learning the secret layering of Samarkand plov and winery visit.',
        activities: ['Мастер-класс', 'Винные погреба']
      },
      {
        day: 3,
        title: 'Бухарский Оши-Софи на травах',
        titleEn: 'Bukhara Oshi Sofi Dietetic Plov',
        description: 'Диетический суфийский плов в медном казане без обжарки.',
        descriptionEn: 'Tasting boiled ceremonial Oshi Sofi plov prepared in copper cauldron.',
        activities: ['Оши-Софи', 'Пряный базар']
      },
      {
        day: 4,
        title: 'Гиждуванский шашлык и тандыр-гушт',
        titleEn: 'Gijduvan Kebabs & Mountain Tandoor Lamb',
        description: 'Поездка в ремесленный Гиждуван на легендарные сочные шашлыки.',
        descriptionEn: 'Excursion to Gijduvan for world-famous tender minced kebabs.',
        activities: ['Шашлыки', 'Гончарный дом']
      },
      {
        day: 5,
        title: 'Чайная церемония и завершение тура',
        titleEn: 'Grand Tea Ceremony & Return',
        description: 'Праздничный финальный обед со сладостями нишалда и вылет.',
        descriptionEn: 'Final sweet celebration with Nishalda halva and airport transfer.',
        activities: ['Чайная церемония', 'Трансфер']
      }
    ]
  }
];
