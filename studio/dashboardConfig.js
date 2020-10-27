export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f9868e8d062b214166b1a97',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-ws4eqdyz',
                  apiId: '4d6e3585-b7bf-4aeb-9bc4-445385c49f86'
                },
                {
                  buildHookId: '5f9868e9d6bee61831eaa165',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-web-pgtqkkxy',
                  apiId: '9fe665d3-db4d-48c9-9a76-ce0ed266af5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/patrickhanke/sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-web-pgtqkkxy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
