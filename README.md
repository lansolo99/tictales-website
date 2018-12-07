# Tictales website

Single page website

Use the /dist folder

## Run

### Installing

```
npm install
```

### Before run

If index is a html page, switch the browser sync mode in the gulfile.js to the proxy mode and run apache/nginx parallel

```
    // Dynamic (use with mamp)
    proxy: 'localhost:8888',
```

else

```
    // Static
    server: {
      baseDir: './src'
    },
```

### Run dev mode

From the root folder :

```
gulp
```

### Generate new build

From the root folder :

```
gulp build
```

### Contact form (contact.php)

Contact form works with a Sendgrid API key
you can generate your own and replace in contact.php or use mine

Think about replacing the recipient address with yours

```
$email->addTo("youremail@serve.ext", "Tictales studio");

```
