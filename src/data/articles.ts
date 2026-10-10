import { Article } from '../types';

export const articlesData: Article[] = [
  {
    id: 'article-silk-road-revival',
    slug: 'the-silk-road-timeless-grandeur',
    title: 'Шёлковый путь: Вечное величие древних караванов',
    titleEn: 'The Silk Road: Timeless Grandeur of Ancient Caravans',
    category: 'История и культура',
    categoryEn: 'History & Culture',
    readTime: '6 мин',
    coverImage: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'Как тысячелетние торговые маршруты между Востоком и Западом сформировали непревзойденную эстетику архитектуры и гостеприимства Центральной Азии.',
    excerptEn: 'How millenary trading pathways between East and West forged an unmatched aesthetic of architecture and hospitality.',
    publishedAt: '12 мая 2026',
    author: {
      name: 'Диёра Усманова',
      role: 'Главный редактор NOMAD Journal',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Тысячи лет назад караваны, груженные рулонами китайского шелка, персидскими коврами, драгоценными камнями и редкими специями, пересекали бескрайние пески Кызылкума и суровые перевалы Тянь-Шаня. На перекрестках этих дорог расцветали города-оазисы, ставшие духовными и культурными центрами мира.',
        textEn: 'Thousands of years ago, camel caravans laden with bolts of Chinese silk, Persian carpets, and precious spices traversed the Kyzylkum sands and rugged Tian Shan passes to build flourishing oasis metropolises.'
      },
      {
        type: 'quote',
        text: '«Самарканд — жемчужина Востока. В других городах свет исходит с неба, а в Бухаре и Самарканде он поднимается от земли».',
        textEn: '“Samarkand is the pearl of the East. In other cities light descends from heaven; in Samarkand and Bukhara it rises from the earth.”',
        author: 'Древняя восточная мудрость'
      },
      {
        type: 'heading',
        text: 'Архитектурный ренессанс эпохи Тимуридов',
        textEn: 'The Timurid Architectural Renaissance'
      },
      {
        type: 'paragraph',
        text: 'При Амире Темуре и его потомках Самарканд превратился в столицу мира. Сюда созывались лучшие зодчие, каллиграфы и мозаичисты из Дамаска, Шираза и Дели. Именно тогда зародился уникальный лазурный стиль: огромные ребристые купола, геометрическая майолика и тончайшая роспись золотом кундаль.',
        textEn: 'Under Amir Timur, Samarkand turned into the pinnacle of worldly beauty. Master artisans assembled from across Eurasia to develop the signature ribbed turquoise domes and intricate gold kundal frescoes.'
      }
    ]
  },
  {
    id: 'article-samarkand-secrets',
    slug: 'secret-geometry-of-samarkand',
    title: 'Сакральная геометрия Самарканда: Как читать лазурные узоры',
    titleEn: 'Sacred Geometry of Samarkand: Deciphering Azure Tilework',
    category: 'Архитектура',
    categoryEn: 'Architecture',
    readTime: '5 мин',
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'За каждым орнаментом Регистана и Шахи-Зинда скрываются точные математические формулы, отражающие гармонию вселенной и космоса.',
    excerptEn: 'Behind every tiled portal of Registan and Shah-i-Zinda lie exact mathematical harmonics mirroring the cosmic order.',
    publishedAt: '28 апреля 2026',
    author: {
      name: 'Тимур Мансуров',
      role: 'Архитектурный критик',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Вглядываясь в мозаичные панно Шахи-Зинда, невозможно избавиться от ощущения оптической глубины. Мастера XIV–XV веков применяли квазикристаллические структуры за 500 лет до того, как западная математика описала мозаики Пенроуза.',
        textEn: 'Gazing into the mosaic walls of Shah-i-Zinda reveals hypnotic optical depth. Timurid craftsmen utilized quasicrystalline symmetries five centuries before modern physics.'
      },
      {
        type: 'heading',
        text: 'Цвет как символ неба и бесконечности',
        textEn: 'Color as a Metaphor for the Infinite Sky'
      },
      {
        type: 'paragraph',
        text: 'Бирюзовый и кобальтовый цвета были не просто декоративным решением. Бирюза (фируза) символизировала победу над хаосом, небесный купол и божественное покровительство. Солнечный свет, отражаясь от глазури под разным углом, оживляет фасад на протяжении всего дня.',
        textEn: 'The vivid shades of cobalt and turquoise were sacred. Glazed tiles captured passing sunlight, transforming rigid brick portals into living, shifting celestial tapestries throughout the day.'
      }
    ]
  },
  {
    id: 'article-bukhara-slow-travel',
    slug: 'bukhara-the-art-of-slow-living',
    title: 'Бухара: Искусство замедляться и слушать тишину',
    titleEn: 'Bukhara: The Art of Slow Living and Listening to Silence',
    category: 'Вдохновение',
    categoryEn: 'Inspiration',
    readTime: '4 мин',
    coverImage: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'Почему Бухара стала главным местом для осознанного отдыха, где время течет по законам вечности среди тенистых айванов.',
    excerptEn: 'Why sacred Bukhara has emerged as the premier sanctuary for mindful slow travel and contemplation.',
    publishedAt: '19 апреля 2026',
    author: {
      name: 'Диёра Усманова',
      role: 'Главный редактор NOMAD Journal',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'В эпоху цифрового шума и вечной спешки Бухара предлагает редчайшую роскошь: право никуда не спешить. Здесь утро начинается не со звука будильника, а с мягкого шороха листьев старых тутовников у Ляби-Хауз и аромата свежезаваренного зеленого чая с шафраном.',
        textEn: 'In an age of digital noise and perpetual haste, Bukhara provides the rarest luxury: the privilege of stillness. Mornings begin with rustling leaves around centuries-old ponds and aromatic saffron tea.'
      },
      {
        type: 'quote',
        text: '«Остановись на мгновение, путник. То, что ты ищешь в суете мира, уже ждет тебя в тени бухарского дворика».',
        textEn: '“Pause for a breath, traveler. What you chase across the frantic world is already awaiting you within a shaded Bukhara courtyard.”',
        author: 'Суфийская притча'
      }
    ]
  },
  {
    id: 'article-khiva-clay-fairytale',
    slug: 'exploring-ancient-khiva-desert-oasis',
    title: 'Хива: Живая крепость из песка и солнечного света',
    titleEn: 'Exploring Ancient Khiva: Desert Citadel in Sunlight',
    category: 'Путешествия',
    categoryEn: 'Travel',
    readTime: '7 мин',
    coverImage: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'Путеводитель по крепости Ичан-Кала: как провести 48 часов внутри нетронутого средневекового оазиса без толп туристов.',
    excerptEn: 'A luxury guide to Ichan-Kala fortress: how to experience 48 hours inside an unspoiled medieval citadel.',
    publishedAt: '05 апреля 2026',
    author: {
      name: 'Рустам Каримов',
      role: 'Путешественник и гид',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Ичан-Кала — единственный полностью сохранившийся глинобитный город Центральной Азии. Стены высотой до 10 метров с массивными зубцами надежно защищали ханов от песчаных бурь и набегов кочевников.',
        textEn: 'Ichan-Kala remains the only completely preserved walled mudbrick city in Central Asia. Massive fortress crenellations sheltered khanates from desert sandstorms.'
      },
      {
        type: 'heading',
        text: 'Секрет правильного времени суток',
        textEn: 'The Magic of Dawn and Dusk'
      },
      {
        type: 'paragraph',
        text: 'Главное правило посещения Хивы — проснуться до рассвета. Когда улицы пустынны, а первые лучи солнца окрашивают минарет Кальта-Минор в пронзительно-синий цвет, крепость раскрывает свою подлинную душу.',
        textEn: 'The essential rule of visiting Khiva is waking before dawn. When empty lanes echo only your footsteps and early sunbeams strike Kalta Minor, the fortress whispers its deepest mysteries.'
      }
    ]
  },
  {
    id: 'article-uzbek-gastronomy',
    slug: 'philosophy-of-uzbek-plov-and-feasting',
    title: 'Философия узбекского дастархана: От плова к высокой кухне',
    titleEn: 'Philosophy of the Uzbek Feast: From Plov to Haute Cuisine',
    category: 'Гастрономия',
    categoryEn: 'Gastronomy',
    readTime: '5 мин',
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'Почему узбекская трапеза — это не просто еда, а священный акт единения, дружбы и выражения глубочайшего уважения к гостю.',
    excerptEn: 'Why dining in Central Asia transcends nourishment to become a sacred communion of friendship and honor.',
    publishedAt: '22 марта 2026',
    author: {
      name: 'Шахноза Алиева',
      role: 'Гастрономический куратор',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Плов в Узбекистане — это культурный феномен, внесенный в список нематериального культурного наследия ЮНЕСКО. В каждом регионе рецепт свой: в Ташкенте плов праздничный и щедрый, в Самарканде — выложенный слоями с нежнейшей желтой морковью, в Бухаре — диетический суфийский.',
        textEn: 'Plov in Uzbekistan is a UNESCO-inscribed intangible cultural heritage masterpiece. Every province retains its prized secret: Tashkent’s festive saffron lamb, Samarkand’s layered yellow carrot elegance, Bukhara’s delicate herbal broth.'
      }
    ]
  },
  {
    id: 'article-chimgan-mountain-escape',
    slug: 'mountain-escapes-near-tashkent',
    title: 'Чимган и Амирсай: Альпийский рай в полутора часах от столицы',
    titleEn: 'Chimgan & Amirsoy: Alpine Paradise 90 Minutes from the Capital',
    category: 'Горы и природа',
    categoryEn: 'Mountains & Nature',
    readTime: '6 мин',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'Как горы Западного Тянь-Шаня превратились в одно из самых востребованных направлений для премиального круглогодичного отдыха.',
    excerptEn: 'How the Western Tian Shan range evolved into a premier year-round sanctuary for luxury mountain holidays.',
    publishedAt: '10 марта 2026',
    author: {
      name: 'Рустам Каримов',
      role: 'Путешественник и гид',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Всего 80 километров скоростной трассы отделяют оживленный Ташкент от хвойного благоухания Чимгана. Зимой это первоклассный горнолыжный отдых на склонах европейского уровня, а летом — прохладный оазис с инфинити-бассейнами, глядящими на горные хребты.',
        textEn: 'Just 80 kilometers of modern highway divide dynamic Tashkent from the crisp pine fragrances of Chimgan. In winter it is premier skiing; in summer a temperate refuge with mountain-view infinity pools.'
      }
    ]
  },
  {
    id: 'article-wellness-retreat-guide',
    slug: 'the-science-of-wellness-retreats',
    title: 'Велнес нового поколения: Наука восстановления сил на природе',
    titleEn: 'Next-Gen Wellness: The Science of Nature Restoration',
    category: 'Wellness',
    categoryEn: 'Wellness',
    readTime: '5 мин',
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'Фитонциды горных лесов, термальные минеральные воды и цифровой детокс: почему перезагрузка на природе работает лучше спа в мегаполисе.',
    excerptEn: 'Forest phytoncides, mineral thermal waters, and digital detox: why natural sanctuary resets surpass urban day spas.',
    publishedAt: '24 февраля 2026',
    author: {
      name: 'Камилла Исаева',
      role: 'Велнес-консультант NOMAD',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Исследования показывают, что всего три дня пребывания в высокогорной лесной зоне снижают уровень кортизола на 43% и активизируют естественные защитные силы организма. Сочетание плавания в подогреваемой воде на свежем воздухе и глубокого сна в кедровых шале восстанавливает циркадные ритмы.',
        textEn: 'Studies prove that just 72 hours immersed in high-altitude botanical sanctuaries lowers cortisol by 43% while boosting immune resilience.'
      }
    ]
  },
  {
    id: 'article-packing-retreat-essentials',
    slug: 'what-to-pack-for-a-luxury-nature-retreat',
    title: 'Гардероб для горного ретрита: Элегантность и комфорт',
    titleEn: 'Packing for a Luxury Mountain Retreat: Style & Comfort',
    category: 'Лайфстайл',
    categoryEn: 'Lifestyle',
    readTime: '4 мин',
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'Кашемир, мембраны, органический лен и правильная обувь: как составить капсульный гардероб для премиального отдыха на природе.',
    excerptEn: 'Cashmere, technical membranes, organic linen, and tailored footwear for sophisticated outdoor escapes.',
    publishedAt: '15 февраля 2026',
    author: {
      name: 'Камилла Исаева',
      role: 'Велнес-консультант NOMAD',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Люксовый отдых в горах требует гармонии между функциональностью и безупречным стилем. Теплый кашемировый кардиган согреет во время вечернего коктейля у открытого камина, а легкая ветрозащитная куртка обеспечит комфорт во время утренней прогулки к водопаду.',
        textEn: 'Luxury nature travel balances high function with understated tailoring. A warm cashmere wrap for fireside cocktails and breathable shells for alpine trails create effortless versatility.'
      }
    ]
  },
  {
    id: 'article-responsible-tourism',
    slug: 'sustainable-luxury-responsible-tourism',
    title: 'Ответственная роскошь: Как беречь наследие и природу',
    titleEn: 'Sustainable Luxury: Preserving Heritage and Nature',
    category: 'Эко-туризм',
    categoryEn: 'Eco-Tourism',
    readTime: '6 мин',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'Философия NOMAD LUXURY: поддержка местных ремесленников, отказ от пластика и нулевой углеродный след в природных заповедниках.',
    excerptEn: 'The NOMAD philosophy: empowering artisan cooperatives, zero single-use plastic, and minimal environmental footprint.',
    publishedAt: '02 февраля 2026',
    author: {
      name: 'Диёра Усманова',
      role: 'Главный редактор NOMAD Journal',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Истинная роскошь XXI века неотделима от ответственности. Выбирая отдых в аутентичных отелях, путешественники поддерживают сохранение старинных ремесел — от гончарного искусства Риштана до ткачества маргиланского шелка, передающихся из поколения в поколение.',
        textEn: 'True 21st-century luxury is inseparable from stewardship. Staying in heritage properties directly finances ancient artisan livelihoods and preserves vulnerable ecosystems.'
      }
    ]
  },
  {
    id: 'article-travel-planning-guide',
    slug: 'planning-flawless-central-asia-itinerary',
    title: 'Гид по планированию идеального путешествия по Центральной Азии',
    titleEn: 'Flawless Travel Planning: Central Asian Masterclass',
    category: 'Советы',
    categoryEn: 'Travel Tips',
    readTime: '5 мин',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
    excerpt: 'Сезоны, скоростные поезда, визовые правила и тонкости бронирования: все, что нужно знать для безупречного отпуска.',
    excerptEn: 'Seasons, high-speed rail, regional connectivity, and booking wisdom for a seamless luxury itinerary.',
    publishedAt: '18 января 2026',
    author: {
      name: 'Рустам Каримов',
      role: 'Путешественник и гид',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    blocks: [
      {
        type: 'paragraph',
        text: 'Лучшее время для путешествия по городам Шелкового пути — весна (апрель-май) и золотая осень (сентябрь-октябрь), когда температура комфортна для долгих прогулок. А горные резорты Чимгана прекрасны круглый год: летом здесь спасение от жары, а зимой — мягкий пушистый снег.',
        textEn: 'The ideal Silk Road window embraces spring (April–May) and golden autumn (September–October) for balmy walks. Mountain sanctuaries in Chimgan thrive year-round with summer breezes and powder snow.'
      }
    ]
  }
];
