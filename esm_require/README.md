# Experiments if ESM loads modules asynchronously

ES Modules (ESM) loads modules asynchronously.

The results to run main.mjs is following.

```
main
mod1
mod2
mod3
read
```

However, the followings can be happened because modules are loaded asynchronously.

```
main
mod1
mod3
mod2
read
```

or 

```
main
mod2
mod3
mod1
read a file asynchronously
```

and so on...