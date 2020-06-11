# Experiments if ESM loads modules asynchronously

ES Modules (ESM) loads modules asynchronously.

The results to run main.mjs is following.

```
esm/main.mjs
mod1.mjs
mod2.mjs
mod3.mjs
read a file asynchronously in mod1.mjs
```

However, the followings can be happened because modules are loaded asynchronously.
The order of `mod1.mjs`, `mod2.mjs`, and `mod3.mjs` is not guaranteed.

```
esm/main.mjs
mod1.mjs
mod3.mjs
mod2.mjs
read a file asynchronously in mod1.mjsd
```

or 

```
esm/main.mjs
mod2.mjs
mod3.mjs
mod1.mjs
read a file asynchronously in mod1.mjs
```