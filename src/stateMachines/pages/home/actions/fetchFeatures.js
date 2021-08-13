import { assign } from '@xstate/immer'

const fetchFeatures = assign(context => context.features = [
  {
    title: "State",
    body: `It uses **Xstate** for managing the state of the whole application, because it has the following benefits:

<br/>

- It uses statecharts for defining the state of each component of the application
- It does the application Poka Yoke (mistake-proofing)
- It has a dev tool that shows you a nice chart for each component state`,
  },
  {
    title: "Style",
    body: `It uses **Tailwind** for stylizing the application which is really customizable and has many utilities out-of-the-box. Additionally, it uses **autoprefixer**, **normalization** and **css-modules**`,
  },
  {
    title: "Internationalization",
    body: `It uses **react-intl** for internationalization, you just have to add the files into \`src/internationalization/languages\` folder using the language code that you want to support and that's it`,
  },
  {
    title: "Routes",
    body: `It uses **react-navi** for creating routes. Navi is a modern router for React that uses Suspense, Hooks and function composition to make real-world routing simple`,
  },
  {
    title: "Public and private routes",
    body: `You do not need to create your routes manually:
  
<br/>

- If you want to create a public route, you have to add a file in the \`src/page/public\` folder
- If you want to create a private route, you have to add a file in the \`src/page/private\` folder
- The private route is restricted using the \`isAuthenticated.js\` file and you can customize it`,
  },
  {
    title: "Bundler",
    body: `It uses **Webpack**, and it is configured for supporting code splitting, and if you run \`npm bundle-report\`, it will create a html file for checking the code splitting.`,
  },
  {
    title: "Clean code",
    body: `It contains tools for writting a clean code, such as:
    
<br/>

- Prettier
- Eslint
- Husky
- Lintstaged
- Commitizen
- Commitlint`,
  },
  {
    title: "PWA",
    body: `It uses **Workbox** for becoming your web in a progresive web app.`,
  },
  {
    title: "Containerization",
    body: `This starter has been dockerized in order to you can run it on all operating systems`,
  },
  {
    title: "React helmet",
    body: `It uses **react helmet** for managing the head tags`,
  },
  {
    title: "Immer",
    body: `It uses **Immer** (German for: always) for mutating the state`,
  },
  {
    title: "Static markdown",
    body: `It uses **Mdx** for processing markdown files that contains **mdx** extension`,
  },
  {
    title: "Dynamic markdown",
    body: `It uses **remark** for processing markdown that comes in props or state form`,
  },
  {
    title: "Changelog",
    body: `It has a changelog generator, you just have to run \`npm run generate:patch\`, \`npm run generate:minor\` or \`npm run generate:major\``,
  },
  {
    title: "Fast refresh",
    body: `It uses **react-refresh** and **@pmmmwh/react-refresh-webpack-plugin** libraries for refreshing changes without reloading all the application`,
  },
])

export {
  fetchFeatures
}