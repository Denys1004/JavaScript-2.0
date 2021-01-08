document.addEventListener("DOMContentLoaded", function(event) {

    // SHOW POPOUT
    function showPopOut(popoutId){
        window.scrollTo(0, 0);
        let pop = document.getElementById(popoutId).getElementsByClassName("modal")[0];
        let close_popout_btn = document.getElementById(popoutId).getElementsByClassName("close_popout")[0];
        pop.classList.add('show_popout');
        disableScrolling()
        // CLOSE POPOUT
        close_popout_btn.onclick = (e) =>{
            e.preventDefault();
            pop.classList.remove('show_popout');
            enableScrolling()
        } 
    }

    // SCROLL BEHAVIOUR WHEN POPOUT IS OPEN
    function disableScrolling(){
        document.querySelector('body').classList.add('stop-scrolling');
    }
    function enableScrolling(){
        document.querySelector('body').classList.remove('stop-scrolling');
    }

    // SETTING POPOUT ON ELEMENT
    document.getElementById('open_popout1').onclick = () => {showPopOut('popout1')}
    document.getElementById('open_popout2').onclick = () => {showPopOut('popout2')}
    document.getElementById('open_popout3').onclick = () => {showPopOut('popout3')}

})
