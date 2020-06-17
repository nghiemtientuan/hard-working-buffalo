## Requirement
- PHP 7.2.24
- Mysql 8
- Laravel 5.8
- npm or yarn (recommend)

## Setup

- Install laravel
```BASH
composer install
php artisan key:generate
```

- Install node modules
```BASH
npm install
#or
yarn
```

- Clone bower
```BASH
bower update
```

- Dev admin
```BASH
npm run dev
#or
npm run watch
```

- Build production all
```BASH
npm run production
```

- Config .env
```BASH
cp .env.example .env
```

Config .env file

- Run migration
```BASH
# Run migration
php artisan migrate --seed
```

## Run jobs queues
```BASH
php artisan queue:work --queue=high,default --tries=10
```
