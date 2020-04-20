export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9db4a7b03fca55a69840db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jqxmppbq',
                  apiId: 'f55a7375-83fa-4aac-b77e-e5f8af88ffa8'
                },
                {
                  buildHookId: '5e9db4a75d3dcf63ee4c5ef0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-anzfufbv',
                  apiId: 'af7a9232-475e-40bc-810a-74ebec886b4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StijnHellem/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-anzfufbv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
