# Shatter slider 
## Адаптивный сладер с эффектом шторок V1.0


Shatter slider - слайдер с эффектом шторок, написан на "ванильном Javascript", универсальный, адаптивный, прост в использовании

## Использование
1. В своем файле index.html создайте блок с определенным классом, куда будет помещен слайдер
**для каждого слайдера на странице используется свой класс**
```sh
    <div class="out"></div>
    <div class="out2"></div>
```
2. В index.html подключите файл с классом слайдера Slider.js
```sh
 <script src="./js/Slider.js"></script>
```
3. В папке своего проекта расположите файлы изображений, которые должны быть именованы '0.jpg' '1.jpg' и т.д. Желательно подготовить файлы изображений одинакового размера
```sh
.\assets\img\0.jpg
.\assets\img\1.jpg
.\assets\img\2.jpg
...
.\assets\img\5.jpg
```

4. В основном файле js (н-р script.js) создайте объект со следующими свойствами
```sh
 const objSlider1 = {
    'sectorCount' : 6,
    'addToClass' : 'out',
    'btnNextClass' : 'next',
    'btnPrevClass' : 'prev',
    'arrImg' : ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    'pathToImgs' : './assets/img/',
}
```
- sectorCount - кол-во шторок (на мой взгляд, оптимально 4-6)
- addToClass - класс блока, куда будет помещен слайдер (без точки)
- btnNextClass - класс кнопки "Next" (без точки)
- btnPrevClass - класс кнопки "Prev" (без точки)
- arrImg - перечень имен картинок для вывода (в виде массива)
- pathToImgs - путь к файлам картинок
- 
5. И последнее - создание объекта с методом render()
```sh
new Slider(objSlider1).imgRender();
```

## License

MIT
**Free Software**
Author: Jnik2003 (Georgii Nikitinas)
email:  kaunas16@gmail.com

