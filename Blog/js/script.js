const searchon = document.querySelector('#searchopen');
const searchoff = document.querySelector('#removesearch');
const searchinput = document.querySelector('.searchinput');

searchinput.style.display = "none";

searchon.addEventListener('click', () => {
    if (searchinput.style.display === 'none') {
        searchinput.style.display = 'flex';
    } else {
        searchinput, style.display = 'none';
    }
});

searchoff.addEventListener('click', () => {
    if (searchinput.style.display === 'flex') {
        searchinput.style.display = 'none';
    } else {
        searchinput.style.display = 'flex';
    }
});

// slider header
const posts = [
    {
        title: "Satay Chicken",
        desc: "Satay is traditionally served with satay sauce, which is a fresh peanut sauce, a must for any true satay lover. This Thai kebab or satay recipe comes to us courtesy of a family that has both Malaysian and Thai roots. This recipe is easy, authentic, and irresistible! Juicy, tender chicken skewers soaked in a flavorful marinade, cooked on the grill.",
        link: "#",
        bgImg: "image/satay.webp",
        label: "Meat"
    },
    {
        title: "Curry Laksa",
        desc: "In Malaysias central region, which encompasses Kuala Lumpur, Selangor and Negeri Sembilan, curry laksa - yellow noodles, rice vermicelli or a combination of both in a spicy gravy enriched with coconut milk - is a firm favourite. Typically, curry laksa is topped with chunky pieces of chicken, fish balls, and so on.",
        link: "#",
        bgImg: "image/curryLaksa.jpg",
        label: "Noodle"
    },
    {
        title: "Nasi Lemak",
        desc: "Nasi lemak is a dish originating in Malay cuisine that consists of fragrant rice cooked in coconut milk and pandan leaf. It is commonly found in Malaysia, where it is considered the national dish. It is also a native dish in neighbouring areas with significant ethnic Malay populations such as Singapore and Southern Thailand.",
        link: "#",
        bgImg: "image/NasiLemakAyamGoreng.png",
        label: "Rice"
    },
    {
        title: "Roti Canai",
        desc: "Roti canai is a traditional pan-fried flatbread made with flour, water, eggs, and fat of Indian origin, but mainly associated with Malaysia, and surrounding countries like Indonesia, Brunei, and Thailand. The dough for roti canai is repeatedly folded, so the final product has a layered texture, a soft interior, and a crispy outer layer.",
        link: "#",
        bgImg: "image/roticanai.png",
        label: "Bread"
    }
];

let currentSlide = 0;
function showSlide(slideIndex) {
    const slide = posts[slideIndex];
    document.querySelector('.headertitle').textContent = slide.title;
    document.querySelector('.headerpera').textContent = slide.desc;
    document.querySelector('.headerbtn').href = slide.link;
    document.querySelector('.headerimg').style.background = `url('${slide.bgImg}')no-repeat center center/cover`;
}

// initial slide
showSlide(currentSlide);

//header Posts Change Slider
const headerPosts = document.querySelector('.headercards');

const headerPostsCards = () => {
    const updateSlider = () => {
        headerPosts.innerHTML = '';
        for (let i = currentSlide; i < currentSlide + 4; i++) {
            const post = posts[i % posts.length];
            const postElement = document.createElement('a');
            postElement.classList.add('headercard');
            postElement.classList.add('flex');
            postElement.href = `${post.link}`;
            postElement.innerHTML = `
            <img src="${post.bgImg}" alt="">
                        <div class="hcardinfo">
                            <span>${post.label}</span>
                            <h3>${post.title}</h3>
                        </div>
            `
            headerPosts.appendChild(postElement);
        }
    };
    // left right scroll
    const leftbtn = document.getElementById('sleft');
    const rightbtn = document.getElementById('sright');

    leftbtn.addEventListener('click', function () {
        // 4 posts show at headerslider
        currentSlide = (currentSlide - 5 + posts.length) % posts.length;
        updateSlider();
        showSlide(currentSlide);
    });

    rightbtn.addEventListener('click', function () {
        // 4 posts show at headerslider
        currentSlide = (currentSlide + 5) % posts.length;
        updateSlider();
        showSlide(currentSlide);
    });


    //initialize the slider
    updateSlider();
};

headerPostsCards();

function nextSlide() {
    currentSlide = (currentSlide + 1) % posts.length;
    showSlide(currentSlide);
    headerPostsCards(currentSlide);
};

// change slide every 3 seconds
setInterval(nextSlide, 3000);

// nav sticky

const mainnav = document.querySelector('.mainnav');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 2) {
        mainnav.classList.add('sticky');
    }
    else {
        mainnav.classList.remove('sticky');
    }
});

// darkmode js
/*const darkmode = document.querySelector('#checkbox');
let body = document.body;
const logoImage = document.querySelector('.logo img');
const logoImage2 

// check if there is a stored dark mode preference in localstorage
const idDarkMode = localStorage.getItem('darkMode') == 'true';

// set initial state based on the stored preference
if (idDarkMode) {
    body.classList.add('dark');
    darkmode.checked = true;
} else {

}

darkmode.addEventListener('change', () => {
    if (darkmode.checked) {
        body.classList.add('dark');
        localStorage.setItem('darkmode', 'true');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('darkmode', 'false');
    }
})*/

// navbar on off js //
const navdiv = document.querySelector('.navonoff');
const navtoggle = document.querySelector('#checkbox2');
const navlist = document.querySelector('.navlist');

navtoggle.addEventListener('change', () => {
    if (navtoggle.checked) {
        navlist.style.right = '-150px'
    } else {
        navlist.style.right = '-400px'
    }
})