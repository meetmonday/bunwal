# bunwal v0.0-demo
Как pywal, но на js

### Цель:
- Не делать огромный комбайн как pywal в плане функций
- Добавить настраиваемость через config файл
- (Возможно) web-ui для конфигурации или тонкой подстройки палитры на свое усмотрение

### Чекпоинты:
- Генерировать палитры по алгоритму pywal (есть, но пока без подстроек цветов)
- Собирать шаблоны на основе палитры
- Обеспечить базовую совместимость с шаблонами и параметрами pywal (чтобы заменить wal на bunwal и все работало как раньше)

## Сборка и запуск
Для сборки и работы над проектом требуется установить [Bun](https://bun.com/)

### Запуск
```bash
bun i
bun start
```
### Сборка
```bash
bun run build
```

Готовый файл будет в папке ./build/