const images = [
    "https://momento360.com/e/u/cbe506a8c76f461b8e0144f07a2d62d6?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/5e6e7c7ad30f4405999f45269b200a4f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/e145ff10f0c44f0499630e2b6c83139b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/90afbd40ff39480bbb88915973eba045?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/c2ef996ab573403f805c37ff65e52d82?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/c98ba5a2885343a4b91e86419e5b54e3?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/9a466b333dce4f5f95b82f9d16e3d45f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/e1fa099a42884d589fd4b4f6b37b9bb0?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/d8f5bd77588545059578cdfb85ba1d5a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/205d0241986b4a64a11e502fa7530421?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&pan-speed=0.3",
    "https://momento360.com/e/u/c6ef66ab8a3046f2b33a433e35de2ba2?utm_campaign=embed&utm_source=other&heading=-126&pitch=-20.3&field-of-view=75&size=medium&pan-speed=0.3",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcvAK8d7UylynQahhTq8UTyxOXQT6aal_CA&s"
];

let imageIndex = 0;

function displayImage() {
    const iframe = document.getElementById('image-frame');
    iframe.src = images[imageIndex];
}

document.getElementById('next-image-btn').addEventListener('click', () => {
    imageIndex = (imageIndex + 1) % images.length;
    displayImage();
});

document.getElementById('previous-image-btn').addEventListener('click', () => {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    displayImage();
});

// Display the first image on page load
window.onload = displayImage;
