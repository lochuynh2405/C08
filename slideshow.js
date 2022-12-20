var index = 0;

function chuyenSlide(truocsau){
    var slideshow = document.getElementById("slideshow");
    var imageQuanlity = slideshow.querySelectorAll('img').length - 1;

    if(index + truocsau > imageQuanlity){
        index = 0;
    }
    else if (index + truocsau < 0){
        index = imageQuanlity;
    }
    else index += truocsau;

    for(var i = 0; i <= imageQuanlity; i++){
        if(i == index){
            slideshow.children[i].classList.remove("slides");
        }

        if(i != index && !slideshow.children[i].classList.contains("slides")){
            slideshow.children[i].classList.add("slides");
        }
    }
}

function hienThiSlideKeTiep(){
    chuyenSlide(1);
}

function hienThiSlideTruocDo(){
    chuyenSlide(-1);
}

chuyenSlide(0);