# ngVikings 2020

Website for ngVikings conference. This website is based on [GDGToulouse DevFest](https://github.com/GDGToulouse/site-devfest-2020/) project.

## Requirement

* [Install Hugo](https://gohugo.io/getting-started/installing/)
  Note: you need to install the extended version.

* If you need to use tools, or deploy, you also need [NodeJS](https://nodejs.org/en/).

## Run Local site

Just run

```bash
hugo server -D
```

Notice that the `-D` flag is used to render draft elements,
you also can add the `-F` to build elements planed for future.

More information [here](https://gohugo.io/commands/hugo_server/)

## Build

Just run

```bash
hugo
```


## Edit data

You can edit

* general information about the site into the `config.toml` file.
* some data into `data/*.yml` files, for header and footer information, team or schedule data.
* some content into `content/**` files.
* some static assets like images into the `static/*` folder
