# Next.js Supabase GraphQL Apollo TypeScript Starter

## Description
This repository serves as a starting point for building web applications using Next.js, Supabase, GraphQL, Apollo Client, and TypeScript. It provides a structured foundation with pre-configured settings for seamless integration of these technologies, allowing developers to quickly bootstrap their projects and focus on building features.

## Features
- **Next.js**: React framework for server-rendered React applications.
- **Supabase**: Open-source Firebase alternative with real-time and secure user authentication, data storage, and serverless functions.
- **GraphQL**: A query language for APIs, enabling efficient data fetching and manipulation.
- **Apollo Client**: A comprehensive state management library for managing application data and UI state using GraphQL.
- **TypeScript**: A statically typed superset of JavaScript, providing enhanced code quality and developer productivity.

## Getting Started
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/nextjs-supabase-graphql-apollo-typescript-starter.git
2. **Install packages**:
   ```bash
    cd next-supabase-starter
    yarn install
   ```
3. **Set Up Supabase**:
- Create a Supabase account at [Supabase.io](https://supabase.io/) or use Docker images and start the database with ```npx supabase start```.
- Create a new project and note down the Supabase URL and public API key.
- Update the `.env` file with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=
```
5. **Open Your Browser**:
Visit [http://localhost:3000](http://localhost:3000) to see your application running.
