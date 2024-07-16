# Ifood Clone

# Technologies

- NextJs (https://nextjs.org/)
- Neon.Tech (https://neon.tech/)
- Tailwind CSS (https://tailwindcss.com/)
- Shadcn/ui (https://ui.shadcn.com/)

# VS Code Plugins

- Prettier (esbenp.prettier-vscode)
- Eslint (dbaeumer.vscode-eslint)
- Tailwind CSS (bradlc.vscode-tailwindcss)
- Prisma (Prisma.prisma)
- EditorConfig (EditorConfig.EditorConfig)
- Docker (ms-azuretools.vscode-docker)

# Figma

- https://www.figma.com/file/oyvGyUIHPRRDfLOvCUvU9d/%5BLIVE%5D-FSW-Foods-(Copy)?type=design&node-id=381%3A7368&mode=dev&t=53glyTjkXynFWsoR-1

# Setup

```sh
npm init
```

# Database Seed

```sh
npx prisma db seed
```

# Database Migration (Example)

```sh
npx prisma migrate dev --name init_database
npx prisma migrate dev --name add_created_at
```
