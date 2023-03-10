# Лабораторная работа №3 по Веб-программированию

## [Посмотреть приложение](https://isaev-top.org/studs/dasha/lab-3)

## Содержание проекта

Разработано приложение на базе JavaServer Faces Framework, которое осуществляет проверку попадания точки в заданную область на координатной плоскости.

Приложение включает в себя 2 facelets-шаблона - стартовую страницу и основную страницу приложения, а также набор управляемых бинов (managed beans), реализующих логику на стороне сервера.

### Стартовая страница содержит следующие элементы:

- Интерактивные часы, показывающие текущие дату и время, обновляющиеся раз в 13 секунд.
- Ссылку, позволяющую перейти на основную страницу приложения.

### Основная страница приложения содержит следующие элементы:

- Набор компонентов для задания координат точки и радиуса области. Приложение осуществляет валидацию данных, если компонент допускает ввод заведомо некорректных данных (таких, например, как буквы в координатах точки).
- Динамически обновляемую картинку, изображающую область на координатной плоскости в соответствии с номером варианта и точки, координаты которых были заданы пользователем. Клик по картинке иницилаизирует сценарий, осуществляющий определение координат новой точки и отправку их на сервер для проверки её попадания в область. Цвет точек зависит от факта попадания / непопадания в область. Смена радиуса также инициализирует перерисовку картинки.
- Таблицу со списком результатов предыдущих проверок.
- Ссылку, позволяющую вернуться на стартовую страницу.

### Дополнительные свойства приложения:

- Все результаты проверки сохраняются в базе данных под управлением СУБД PostgreSQL.
- Для доступа к БД используется ORM EclipseLink.
- Для управления списком результатов используется Session-scoped Managed Bean.
- Конфигурация управляемых бинов задана с помощью аннотаций.
