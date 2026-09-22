import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  base,
  lang: 'ru-RU',
  title: 'ООО «ИССИТ»',
  description: 'Кормовые концентраты и добавки для сельскохозяйственных животных: БиоГард, ГлюкаСол, СорбДиар, Лизунец, ПроБуфф',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'ООО «ИССИТ» — кормовые концентраты для сельского хозяйства' }],
    ['meta', { property: 'og:description', content: 'БиоГард, ГлюкаСол ПРО, ГлюкаСол Баланс, СорбДиар, Лизунец ПроВит, ПроБуфф. Производство — Республика Беларусь. Оптовые поставки по РФ.' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ИССИТ',

    nav: [
      { text: 'Главная', link: '/' },
      {
        text: 'Каталог продукции',
        link: '/products/',
        activeMatch: '/products'
      },
      { text: 'О компании', link: '/about' },
      { text: 'Качество и доверие', link: '/quality' },
      { text: 'Контакты', link: '/contacts' }
    ],

    sidebar: {
      '/products/': [
        {
          text: 'Каталог продукции',
          items: [
            { text: 'Обзор каталога', link: '/products/' },
            { text: 'БиоГард', link: '/products/biogard' },
            { text: 'ГлюкаСол ПРО', link: '/products/glukasol-pro' },
            { text: 'ГлюкаСол Баланс', link: '/products/glukasol-balans' },
            { text: 'СорбДиар', link: '/products/sorbdiar' },
            { text: 'Лизунец ПроВит', link: '/products/lizunets' },
            { text: 'ПроБуфф', link: '/products/probuff' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск по сайту' },
          modal: {
            noResultsText: 'Ничего не найдено',
            resetButtonTitle: 'Сбросить запрос',
            footer: {}
          }
        }
      }
    },

    outline: {
      label: 'На этой странице'
    },

    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    lastUpdated: { text: 'Обновлено', formatOptions: { dateStyle: 'short', timeStyle: 'short' } },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    footer: {
      message: 'ООО «ИССИТ» — оптовые поставки кормовых концентратов. Работа с юридическими лицами.',
      copyright: '© 2026 ООО «Инженерные силовые системы и технологии»'
    }
  }
})