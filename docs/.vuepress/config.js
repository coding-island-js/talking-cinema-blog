module.exports = {
  title: 'Talking Cinema Movie Reviews',
  base: '/',
  dest: 'public',
  description: 'Talking Cinema Movie Reviews',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Sal',
      avatar: '/assets/img/sal.jpg',
      link: 'https://wowthemes.net/donate',
      linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'twitter',
          link: 'https://twitter.com/talkingcinema99',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
    },
    smoothScroll: true
  },
}
