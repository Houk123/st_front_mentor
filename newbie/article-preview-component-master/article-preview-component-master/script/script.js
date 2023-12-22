function show() {
    var modal = document.getElementById("modal");
    var button = document.getElementById('circle');
    if(modal.style.display == 'none'){
        if(window.innerWidth > 600){
            var button = document.getElementById('circle');
            modal.style.display = 'block';
            positionModalAboveButton(modal, button);

            window.addEventListener('resize', function(){
                positionModalAboveButton(modal, button);
            });
        }else{
            var between = document.getElementsByClassName("between");
            var info = document.getElementsByClassName("info");

            modal.style.display = "block";
            positionModalAboveDiv(modal, between[0], info[0]);

            window.addEventListener('resize', function(){
                positionModalAboveDiv(modal, between[0], info[0]);
            });
        }
    }else{
        modal.style.display = "none";
    }
}

function positionModalAboveButton(modal, button){
    var buttonRect = button.getBoundingClientRect();
    modal.style.left = buttonRect.left - 95 + "px";
    modal.style.top = buttonRect.bottom - 100 + "px";
    modal.style.height = "50px";
    modal.style.width = "225px"
}

function positionModalAboveDiv(modal, div, width){
    var divReact = div.getBoundingClientRect();
    var widthReact = width.getBoundingClientRect();
    modal.style.left = "2rem";
    modal.style.height = divReact.height + 2.5*13 + "px";
    modal.style.width = widthReact.width + "px";
}
