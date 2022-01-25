const objSlider1 = {
    'sectorCount' : 6,
    'addToClass' : 'out',
    'btnNextClass' : 'next',
    'btnPrevClass' : 'prev',
    'arrImg' : ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    'pathToImgs' : './assets/img/',
}

const objSlider2 = {
    'sectorCount' : 3,
    'addToClass' : 'out2',
    'btnNextClass' : 'next2',
    'btnPrevClass' : 'prev2',
    'arrImg' : ['0.jpg', '1.jpg', '2.jpg', '3.jpg'],
    'pathToImgs' : './assets/img2/',
}



let slider1 = new Slider(objSlider1);
slider1.imgRender();

new Slider(objSlider2).imgRender();

