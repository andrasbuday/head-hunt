const standardBasePath = `/`

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  const basePath = themeOptions.basePath || standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/@lekoarts/gatsby-theme-cara/templates/cara.tsx`),
  })

  createPage({
    path: '/test/',
    component: require.resolve(`./src/@lekoarts/gatsby-theme-cara/templates/role.tsx`),
  })
}
