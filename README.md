# Vite bug reproduction - Dependency optimizer causes duplicate library

## Reproduction

1. `npm install`
2. `cd packages/consumer`
3. `npx vite`
4. Open browser console and see `common-library` logged twice.

Issue not reproducible when dependency optimizer is disabled:

1. Run `NO_DEP_OPTIMIZER=true npx vite`
2. See that `common-library` is console logged only once.

## Explanation

In a monorepo project where both a package defined in the monorepo and an
external package are consuming a shared package that originates from the
monorepo, that shared package ends up being included twice in the dev server -
once via pre-bundling, and once normally.

Disabling the dependency pre-bundling avoids the issue.

## Workaround

In each Vite config in the monorepo disable dependency pre-bundling for each
monorepo package.

## Details

Reproducible in a Yarn and NPM monorepo.

In this simple reproduction I used side-effect imports only - reproducible with
named imports too.

In this simple reproduction I didn't define package.json dependencies -
reproducible even if dependencies are defined correctly.
