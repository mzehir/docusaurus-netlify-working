import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HarmonyERP',
  tagline: 'Üreticiler için tasarlanmış en kapsamlı ERP programı',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Logo',
        src: 'img/appbar-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Eğitim',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://cloud.harmonyerp.cloud/',
          label: 'harmonycloud',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Kurumsal',
          items: [
            {
              label: 'Hakkımızda',
              to: 'https://www.harmonyerp.cloud/hakkimizda/',
            },
            {
              label: 'Çözümler',
              to: 'https://www.harmonyerp.cloud/cozumler/',
            },
            {
              label: 'Başarı Hikayeleri',
              to: 'https://www.harmonyerp.cloud/basari-hikayeleri/',
            },
            {
              label: 'İş Ortaklarımız',
              to: 'https://www.harmonyerp.cloud/is-ortaklarimiz/',
            },
            {
              label: 'Blog',
              to: 'https://www.harmonyerp.cloud/category/blog/',
            },
            {
              label: 'Teklif İste',
              to: 'https://www.harmonyerp.cloud/teklif-iste/',
            },
            {
              label: 'İletişim',
              to: 'https://www.harmonyerp.cloud/iletisim/',
            },
            {
              label: 'Kullanıcı Sözleşmesi ve Gizlilik',
              to: 'https://www.harmonyerp.cloud/gizlilik/',
            },
            {
              label: 'Bilgi Güvenliği Politikası',
              to: 'https://www.harmonyerp.cloud/bilgi-guvenligi-politikasi/',
            },
          ],
        },

        {
          title: 'Çözümlerimiz',
          items: [
            {
              label: 'Üretim Takip Programı',
              to: 'https://www.harmonyerp.cloud/cozumler/uretim-takip-programi/',
            },
            {
              label: 'Muhasebe Programı',
              to: 'https://www.harmonyerp.cloud/cozumler/muhasebe-programi/',
            },
            {
              label: 'Satış – CRM Modülü',
              to: 'https://www.harmonyerp.cloud/cozumler/crm-programi-ve-satis-yonetimi/',
            },
            {
              label: 'İnsan Kaynakları Yönetimi',
              to: 'https://www.harmonyerp.cloud/cozumler/insan-kaynaklari-yonetimi/',
            },
            {
              label: 'MES',
              to: 'https://www.harmonyerp.cloud/cozumler/mes-manufacturing-execution-system/',
            },
            {
              label: 'Satınalma Yönetimi',
              to: 'https://www.harmonyerp.cloud/cozumler/satinalma-yonetimi/',
            },
            {
              label: 'Stok Takip Programı',
              to: 'https://www.harmonyerp.cloud/cozumler/stok-takip-programi/',
            },
            {
              label: 'Bakım Onarım Yönetimi',
              to: 'https://www.harmonyerp.cloud/cozumler/bakim-onarim-yonetimi/',
            },
            {
              label: 'Kalite Yönetimi',
              to: 'https://www.harmonyerp.cloud/cozumler/kalite-yonetim-modulu/',
            },
          ],
        },

        {
          title: 'Sektörler',
          items: [
            {
              label: 'Savunma Sanayi',
              to: 'https://www.harmonyerp.cloud/savunma-sanayi/',
            },
            {
              label: 'Otomotiv',
              to: 'https://www.harmonyerp.cloud/otomotiv/',
            },
            {
              label: 'Endüstriyel Makine Üretimi',
              to: 'https://www.harmonyerp.cloud/endustriyel-makine-uretimi/',
            },
            {
              label: 'Metal İşleme',
              to: 'https://www.harmonyerp.cloud/metal-isleme/',
            },
            {
              label: 'Plastik Enjeksiyon',
              to: 'https://www.harmonyerp.cloud/plastik-enjeksiyon/',
            },
            {
              label: 'Mobilya',
              to: 'https://www.harmonyerp.cloud/mobilya/',
            },
            {
              label: 'Tekstil',
              to: 'https://www.harmonyerp.cloud/tekstil/',
            },
            {
              label: 'Fason Üretim',
              to: 'https://www.harmonyerp.cloud/fason-uretim/',
            },
          ],
        },

        {
          title: 'İletişim',
          items: [
            {
              html: `
                      <div class="footer-contact-item">
                        <span class="footer-icon-card">
                          <svg fill="#0E4A8E" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15"><path d="M7.5,0C4.05365,0,1.25,2.80365,1.25,6.25c0,4.65576,5.66223,8.4845,5.90332,8.64502.10498.07019.22583.10498.34668.10498s.2417-.03479.34668-.10498c.24109-.16052,5.90332-3.98926,5.90332-8.64502,0-3.44635-2.80396-6.25-6.25-6.25ZM7.5,13.60657c-1.18561-.87952-5-3.97339-5-7.35657C2.5,3.49304,4.74304,1.25,7.5,1.25s5,2.24304,5,5c0,3.38318-3.81409,6.47705-5,7.35657ZM7.5,3.75c-1.37848,0-2.5,1.12152-2.5,2.5,0,1.37878,1.12152,2.5,2.5,2.5,1.37878,0,2.5-1.12122,2.5-2.5,0-1.37848-1.12122-2.5-2.5-2.5ZM7.5,7.5c-.68939,0-1.25-.56061-1.25-1.25s.56061-1.25,1.25-1.25c.68909,0,1.25.56061,1.25,1.25s-.56091,1.25-1.25,1.25Z"></path></svg>
                        </span>
                        <div>
                          <b>İstanbul Ofis</b><br/>
                          İkitelli OSB Mh. 10. Cadde 34 Portall Plaza No: 7D/5 34490<br/>
                          Başakşehir - İstanbul / TÜRKİYE
                        </div>
                      </div>
                    `
            },
            {
              html: `
                      <div class="footer-contact-item">
                        <span class="footer-icon-card">
                          <svg fill="#0E4A8E" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15"><path d="M12.3 15h-.2c-2.1-.2-4.1-1-5.9-2.1-1.6-1-3.1-2.5-4.1-4.1C1 7 .2 5 0 2.9-.1 1.8.7.8 1.8.7H4c1 0 1.9.7 2 1.7.1.6.2 1.1.4 1.7.3.7.1 1.6-.5 2.1l-.4.4c.7 1.1 1.7 2.1 2.9 2.9l.4-.5c.6-.6 1.4-.7 2.1-.5.6.3 1.1.4 1.7.5 1 .1 1.8 1 1.7 2v2c0 .5-.2 1-.6 1.4-.3.4-.8.6-1.4.6zM4 2.1H2c-.2 0-.3.1-.4.2-.1.1-.1.3-.1.4.2 1.9.8 3.7 1.8 5.3.9 1.5 2.2 2.7 3.7 3.7 1.6 1 3.4 1.7 5.3 1.9.2 0 .3-.1.4-.2.1-.1.2-.2.2-.4v-2c0-.3-.2-.5-.5-.6-.7-.1-1.3-.3-2-.5-.2-.1-.4 0-.6.1l-.8.9c-.2.2-.6.3-.9.1C6.4 10 5 8.6 4 6.9c-.2-.3-.1-.7.1-.9l.8-.8c.2-.2.2-.4.1-.6-.2-.6-.4-1.3-.5-2 0-.3-.2-.5-.5-.5zm7.7 4.5c-.4 0-.7-.2-.7-.6-.2-1-1-1.8-2-2-.4 0-.7-.4-.6-.8.1-.4.5-.7.9-.6 1.6.3 2.8 1.5 3.1 3.1.1.4-.2.8-.6.9h-.1zm2.6 0c-.4 0-.7-.3-.7-.6-.3-2.4-2.2-4.3-4.6-4.5-.4-.1-.7-.5-.6-.9 0-.4.4-.6.8-.6 3.1.3 5.4 2.7 5.8 5.8 0 .4-.3.7-.7.8z"></path></svg>
                        </span>
                        <div>
                          <b>Telefon</b><br/>
                          0264 606 07 16
                        </div>
                      </div>
                    `
            },
            {
              html: `
                      <div class="footer-contact-item">
                        <span class="footer-icon-card">
                          <svg fill="#0E4A8E" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15"><path d="M12.8 2.2C11.4.8 9.5 0 7.5 0S3.6.8 2.2 2.2C.8 3.6 0 5.5 0 7.5 0 11.6 3.4 15 7.5 15c1.6 0 3.3-.5 4.6-1.5.3-.2.4-.7.1-1-.2-.3-.7-.4-1-.1-1.1.8-2.4 1.3-3.7 1.3-3.4 0-6.1-2.8-6.1-6.1 0-1.6.6-3.2 1.8-4.3C4.3 2 5.9 1.4 7.5 1.4c1.6 0 3.2.6 4.3 1.8 1.2 1.2 1.8 2.7 1.8 4.3v.7c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4V4.8c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7-.4-.4-1.1-.7-1.9-.7-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1 0 1.9-.5 2.5-1.2.5.7 1.3 1.2 2.2 1.2 1.5 0 2.7-1.2 2.7-2.7v-.7c.1-2-.7-3.9-2.1-5.3zM7.5 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
                        </span>
                        <div>
                          <b>E-Posta</b><br/>
                          info@harmonyerp.com.tr
                        </div>
                      </div>
                    `
            },
            {
              html: `
                      <div class="footer-social">
                        <a href="https://www.linkedin.com/company/harmonyerp/" class="social-icon linkedin" target="_blank" rel="noopener">
                          <svg data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" width="32" height="32"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UCsNqWI9IOO0_EZzg73UF9Sg" class="social-icon youtube" target="_blank" rel="noopener">
                          <svg data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true" width="32" height="32"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                        </a>
                        <a href="https://twitter.com/harmonyerp" class="social-icon x" target="_blank" rel="noopener">
                          <svg class="ugb-custom-icon" id="Capa_1" enable-background="new 0 0 1226.37 1226.37" viewBox="0 0 1226.37 1226.37" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32"><path d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                        </a>
                        <a href="https://www.instagram.com/harmonyerp/" class="social-icon instagram" target="_blank" rel="noopener">
                          <svg data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" width="32" height="32"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>
                        <a href="https://www.facebook.com/harmonyerptr" class="social-icon facebook" target="_blank" rel="noopener">
                          <svg data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" width="32" height="32"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                        </a>
                      </div>
                    `
            },
          ],
        },
      ],

      copyright: `<span style="font-weight:bold;">Kurumsal Yazılım A. Ş.</span> © ${new Date().getFullYear()} Her Hakkı Saklıdır.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
