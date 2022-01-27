class Slider {
    constructor(objSlider) {
        this.sectorCount = objSlider.sectorCount;
        this.addToClass = objSlider.addToClass;
        this.btnNextClass = objSlider.btnNextClass;
        this.btnPrevClass = objSlider.btnPrevClass;
        this.arrImg = objSlider.arrImg;
        this.pathToImgs = objSlider.pathToImgs;
    }

    imgRender() {

        // генерируем img --------
        const parent = document.querySelector(`.${this.addToClass}`);
        parent.classList.add('parent');
        let out = '';
        for (let i = 0; i < this.sectorCount; i++) {
            out += `<img class="image image${i} " src='${this.pathToImgs}0.jpg' alt="pic">`
        }
        parent.innerHTML = out;

        let images = document.querySelectorAll(`.${this.addToClass} .image`);

        let img = new Image();
        img.src = `${this.pathToImgs}0.jpg`;

        img.addEventListener('load', () => init(this.sectorCount));

        function init(sectors) {

            let parentWidth = parent.offsetWidth;
            let imageHeight = images[0].offsetHeight;
            parent.style.height = `${imageHeight}px`;
            let sectorWidth = Math.ceil(parentWidth / sectors);

            images.forEach((item, ind) => {

                item.style.clip = `rect(0px, ${sectorWidth + sectorWidth * ind}px ,${imageHeight}px , ${sectorWidth * ind}px)`
            })
        }
        window.addEventListener('resize', () => init(this.sectorCount));

        // генерируем btn

        let btnPrev = document.createElement('button');
        btnPrev.classList.add(`${this.btnPrevClass}`, `btn-prev`);
        parent.append(btnPrev);

        let btnNext = document.createElement('button');
        btnNext.classList.add(`${this.btnNextClass}`, `btn-next`);
        parent.append(btnNext);

        //---

        let count = 0;

        let buttonPlus = document.querySelector(`.${this.btnNextClass}`);
        let buttonMinus = document.querySelector(`.${this.btnPrevClass}`);            

        buttonPlus.addEventListener('click', () => startAnimation(`next`, this.arrImg, this.pathToImgs));
        buttonMinus.addEventListener('click', () => startAnimation(`prev`, this.arrImg, this.pathToImgs));

        function startAnimation(direction = 'next', arrImg, pathToImgs) {
console.log(this)
            images.forEach(item => {
                if (!item.classList.contains('start')) {
                    item.classList.add('start');
                }
            })
            setTimeout(() => main(arrImg), 300);

            function main(arrImg) {

                if (direction == 'next') {
                    count++;
                    count == arrImg.length ? count = 0 : false;
                    show();
                } else {
                    count--;
                    count < 0 ? count = arrImg.length - 1 : false;
                    show();
                }
            }

            function show() {
                images.forEach((item, ind) => {
                    item.src = `${pathToImgs}${count}.jpg`;
                    setTimeout(() => {
                        item.classList.remove('start')
                    }, ind * 200);
                })
            }
        }
    }
}