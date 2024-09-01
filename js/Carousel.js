//album + Indicators
let teller = 0;
const rij = ["../assets/lift1.jpg", "../assets/lift2.jpg", "../assets/lift3.jpg"];

const indicators = document.getElementsByClassName("indicator");
let autoSlideInterval;

function updateImageAndIndicator() {
    const carouselImage = document.getElementsByClassName("carousel-image")[0];
    if (carouselImage) {
        carouselImage.style.transition = "transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)";
        carouselImage.style.backgroundImage = `url(${rij[teller]})`;
        carouselImage.style.transform = "translateX(0)"; // Reset position after transition
    }
    updateIndicators();
}

function updateIndicators() {
    for (let i = 0; i < indicators.length; i++) {
        if (i === teller) {
            indicators[i].classList.add("active");
        } else {
            indicators[i].classList.remove("active");
        }
    }
}

function volg() {
    teller++;
    if (teller === rij.length) {
        teller = 0;
    }
    updateImageAndIndicator();
    resetAutoSlide(); // Reset auto-slide timer
}

function terug() {
    teller--;
    if (teller < 0) {
        teller = rij.length - 1;
    }
    updateImageAndIndicator();
    resetAutoSlide(); // Reset auto-slide timer
}

function startAutoSlide() {
    autoSlideInterval = setInterval(volg, 3000); // 5 seconds auto-slide
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Stop auto-slide
    startAutoSlide(); // Restart auto-slide
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("neext").addEventListener("click", volg);
    document.getElementById("prevv").addEventListener("click", terug);
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", function () {
            teller = parseInt(this.getAttribute("data-index"));
            updateImageAndIndicator();
            resetAutoSlide(); // Reset auto-slide timer
        });
    }
    updateImageAndIndicator();
    startAutoSlide(); // Start auto-slide initially
});

//Dhtml
function keuze() {
    
    var links = document.querySelectorAll("nav ul li a");
    links.forEach(function(link) {
        link.classList.remove("active");
    });
    
    var currentLink = document.getElementById("keuze");
    currentLink.classList.add("active");
}



//voor scroll appear
document.addEventListener("DOMContentLoaded", function() {
    const offerItems = document.querySelectorAll(".offerte-container");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); 

    offerItems.forEach(item => {
        observer.observe(item);
    });
});

//contact formulier




//cookies beleid
