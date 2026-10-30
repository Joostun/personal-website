# Justin Yu's personal website

A single static page: `index.html` plus images, fonts, video and the resume in `public/`. No build step.

## Run locally

```sh
python3 -m http.server   # from the repo root
# open http://localhost:8000
```

## Deploy

Hosted on Cloudflare as a Worker with static assets (`wrangler.jsonc`). Every push to `main` redeploys.
`.assetsignore` lists repo files that aren't served.
