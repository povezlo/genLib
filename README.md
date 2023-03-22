# GenLib

Це навчальний проект для компанії Genesis.
Створено на Ангулар 15. Також використовував бібліотеки Angular Material, Hls.js
Код написаний на typescript.

Запустити проект - npm run start
Запустити тести - npm run test

Програма містить дві сторінки.

- Головна Courses page (сторінка, на якій відображається список курсів).
  При наведенні на картинку курсу спливатиме вікно, що показує без звуку короткий урок у вікні.
  Реалізовано пагінацію
- Сторінка огляду курсу. Course Preview page.
  Містить відеоплеєр, який відображає відео поточного уроку. Детальну інформацію про курс. Праворуч Video Lessons Playlist (список уроків)/
  При натисканні в плейлисті на картинку уроку відеоплеєр відображатиме цей урок.
  Також реалізований у плеєрі режим прискорення/зменшення відео. При натисканні +/- прискорюватиметься/зменшуватиметься швидкість.
  При натисканні 0 – скидання до норми.
  Також зберігається поточний прогрес кожного уроку.

При старті програми відбувається автоматична авторизація за допомогою APP_INITIALIZER.
Створені інтерсептори: httpErrors для вилову помилок із сервера. Token – для додавання токена у кожен запит на сервер.
Створено пайпи show-rating-stars (перетворює числовий рейтинг на зірочки)
і transform-time (перетворює формат наприклад: 620 sec на 10 min 20 sec )
Створено директиву video-preview-modal для показу спливаючого попапа з відео
Створені послуги:

- api-client-base
- auth (для роботи з авторизацією)
- courses (відповідає за отримання курсів з бека)
- loader (для роботи з лоадером)
- notification (для роботи з повідомленнями)
- token (для роботи з токенами)
- Video-lessons-player (для роботи з плейлистом уроків)

This app was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.
This project is educational. until 03/22/2023 I'm going to cover it with tests and fix all bugs, fix styles
Such libraries were also used: Angular Material for create UI components, Hls.js for video.

At the moment I have created two pages: the main page with a list of courses and the preview course page.
The courses page, I implemented video viewing on hover, pagination. Made a custom rating, loader. skillbox. video component. Made a pipe to convert time to format (620 => 10 min => 20 sec). I made a directive for displaying a modal window on hover, where the video will be shown. Made auth, api, courses, video, loader, token, notification services. Created interceptors to intercept errors and add a token to the request to the server. On the preview course pages, when you click on a lesson, the selected lesson is loaded. Made saving the progress of the watched video in localstorage. If you press the "+" key -> Increase playback ratio:, if press "-" -> Decrease playback ratio, Default playback ratio: 0

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
