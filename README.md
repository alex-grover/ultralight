# ultralight

## Getting Started

First, set up the repository:

```sh
gh repo clone alex-grover/ultralight
cd ultralight
bun install
bun vercel env pull
```

Next, set up the database:

```sh
brew install postgresql@17 libpq
createdb ultralight
bun db:migrate
```

Then, run the development server:

```sh
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
