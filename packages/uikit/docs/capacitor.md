# capacitor

[capacitor](https://capacitorjs.com/solution/vue)

Capacitor allows for easy native mobile app development using [vue](https://vuejs.org)

## setting up app

```bash
pnpm exec cap init <name> <id> --web-dir=<build-directory>
```

## building dist

this is the same as compiling the vue app to dist.

```bash
pnpm run build
```

## add platforms

```bash
pnpm exec cap add android # android

# or

pnpm exec cap add ios # ios
```

## copy specified build to target platform

```bash
pnpm exec cap copy
```

## run the app on the target platform

```bash
pnpm exec cap open ios
```