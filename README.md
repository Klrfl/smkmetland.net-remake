# smkmetland.net remake

![smkmetland.net remake homepage](./public/assets/smkmetland.net-homepage.png)

So basically [smkmetland.net](https://smkmetland.net) is really ugly right now,
so I decided to remake it with Astro. The blog posts are fetched directly from
the original site's Wordpress API and then prebuilt into HTML files. So it's not
going to update when there is a new post.

## 🧞 Development

This website is obviously about SMK Metland, so it fetches posts from the `posts`
endpoint of `smkmetland.net/ppdb`. But sometimes, the site just go down and would not
work. For that reason, for development you should change the endpoint to some
other wordpress website (that has a public `posts` endpoint). Copy the `.env.example`
to a file named `.env`, then put your endpoint there.

```sh
cp .env.example .env
```

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into
our [Discord server](https://astro.build/chat).
