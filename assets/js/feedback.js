const stars = document.querySelectorAll('.star');
const btnFeedback = document.getElementById('btnFeedback');
const text = document.getElementById('comment');



window.addEventListener('load', function() {
    history.pushState(null, document.title, location.href);
  });
  
  window.addEventListener('popstate', function(event) {
    history.pushState(null, document.title, location.href);
  });
  
stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        highlightStars(index);
    });

    star.addEventListener('click', () => {
        highlightStars(index);
        //selectStar(index);
    });
});

function highlightStars(index) {
    stars.forEach((star, i) => {
        if (i <= index) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

//function selectStar(index) {
//    stars.forEach((star, i) => {
//        if (i <= index) {
//            star.classList.add('active');
//        } else {
//            star.classList.remove('active');
//        }
//    });
//}

window.addEventListener("load", init());

function init() {
    btnStart();
}
function btnStart() {
    btnFeedback.disabled = true;

    text.addEventListener('input', () => {
        if (text.value.trim() !== '') {
            btnFeedback.disabled = false;
            btnFeedback.classList.add('btnEnabled');
        } else {
            btnFeedback.disabled = true;
            btnFeedback.classList.remove('btnEnabled');
        }
    });
}
