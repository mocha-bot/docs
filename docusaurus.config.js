// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const darkCodeTheme = themes.dracula;

const siteUrl = 'https://docs.mocha-bot.xyz';
const siteTitle = 'Mocha Bot Documentation';
const siteDescription =
  'Mocha is a Discord bot that links channels across Discord servers into shared rooms. Learn how to invite the bot, connect servers, manage rooms, share invitations, and use personalization, ratings, and more.';
const siteKeywords = [
  'mocha',
  'mocha bot',
  'discord bot',
  'discord cross server chat',
  'multi server discord',
  'discord bridge bot',
  'discord rooms',
  'discord bot documentation',
  'discord server bridge',
  'cross-server messaging',
];
const ogImage = 'img/og-image.svg';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteTitle,
  tagline: 'Drink mocha with people across the universe',
  url: siteUrl,
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  favicon: 'img/logo-mocha.svg',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // GitHub pages deployment config.
  organizationName: 'mocha-bot',
  projectName: 'docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Extra head tags for SEO and PWA — canonical hint, robots, theme color,
  // structured data, manifest, and Apple/mask icon links.
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#000000',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'application-name',
        content: 'Mocha Bot Docs',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: siteUrl,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/manifest.json',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/img/logo-mocha.svg',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'mask-icon',
        href: '/img/logo-mocha.svg',
        color: '#ffd700',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteTitle,
        alternateName: 'Mocha Bot Docs',
        url: siteUrl,
        description: siteDescription,
        inLanguage: 'en',
        publisher: {
          '@type': 'Organization',
          name: 'Mocha Bot',
          url: 'https://mocha-bot.xyz',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/img/logo-mocha.png`,
          },
        },
      }),
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mocha-bot/docs/tree/master/docs/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          routeBasePath: 'changelog',
          path: 'blog',
          blogTitle: 'Changelog',
          blogDescription:
            'Release notes, documentation updates, and behind-the-scenes notes from the Mocha team.',
          blogSidebarTitle: 'Recent updates',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Mocha Bot Changelog',
            description:
              'Release notes and documentation updates for the Mocha Discord bot.',
            copyright: `Copyright © ${new Date().getFullYear()} Mocha Bot, Inc.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        docsRouteBasePath: '/',
        indexBlog: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        searchBarShortcutHint: false,
      }),
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        swRegister: false,
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo-mocha.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#000000',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo-mocha.svg',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo-mocha.svg',
            color: '#ffd700',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: ogImage,
      metadata: [
        {name: 'description', content: siteDescription},
        {name: 'keywords', content: siteKeywords.join(', ')},
        {name: 'author', content: 'Mocha Bot'},

        // Open Graph
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: siteTitle},
        {property: 'og:title', content: siteTitle},
        {property: 'og:description', content: siteDescription},
        {property: 'og:url', content: siteUrl},
        {property: 'og:image', content: `${siteUrl}/${ogImage}`},
        {property: 'og:image:alt', content: 'Mocha Bot Documentation'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'og:locale', content: 'en_US'},

        // Twitter
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: siteTitle},
        {name: 'twitter:description', content: siteDescription},
        {name: 'twitter:image', content: `${siteUrl}/${ogImage}`},
        {name: 'twitter:image:alt', content: 'Mocha Bot Documentation'},
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Mocha Bot',
        logo: {
          alt: 'Mocha Bot',
          src: 'img/logo-mocha.svg',
        },
        items: [
          {
            to: '/changelog',
            label: 'Changelog',
            position: 'right',
          },
          {
            href: 'https://mocha-bot.xyz',
            position: 'right',
            label: 'Website',
          },
          {
            href: 'https://github.com/mocha-bot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Getting Started', to: '/tutorials/getting-started'},
              {label: 'Commands', to: '/category/commands'},
              {label: 'Rooms', to: '/category/rooms'},
              {label: 'FAQ', to: '/others/frequent-searches'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Support Server', href: 'https://discord.mocha-bot.xyz/'},
              {label: 'Website', href: 'https://mocha-bot.xyz'},
              {label: 'Pricing', to: '/web/pricing'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Changelog', to: '/changelog'},
              {label: 'GitHub', href: 'https://github.com/mocha-bot'},
              {
                label: 'Edit on GitHub',
                href: 'https://github.com/mocha-bot/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mocha Bot, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
