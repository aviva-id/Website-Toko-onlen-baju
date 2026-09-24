/* =========================================
   DATA PRODUK
   ========================================= */

const products = {

    sunny: [

        {
            name: "Sunset Legging",
            price: "Rp 249.000",
            image: "reference/celana.jpg",
            description:
                "Celana panjang dengan desain casual yang cocok digunakan untuk liburan, jalan-jalan, dan aktivitas santai."
        },

        {
            name: "Musim hujan Basic",
            price: "Rp 199.000",
            image: "reference/baju.jpg",
            description:
                "Jas hujan minimalis dengan bahan ringan dan nyaman untuk digunakan sepanjang hari."
        },

        {
            name: "Padel Shirt",
            price: "Rp 299.000",
            image: "reference/baju(1).jpg",
            description:
                "T-Shirt dengan tampilan santai dan modern, cocok dipadukan dengan celana pendek atau jeans."
        }

    ],


    europe: [

        {
            name: "Paris Classic",
            price: "Rp 399.000",
            image: "reference/1.jpg",
            description:
                "Gaya klasik yang terinspirasi dari street fashion Eropa."
        },

        {
            name: "Violet",
            price: "Rp 599.000",
            image: "reference/3.jpg",
            description:
                "Outerwear dengan siluet klasik yang cocok digunakan untuk tampilan formal maupun casual."
        },

        {
            name: "Milan Dress",
            price: "Rp 429.000",
            image: "reference/5.jpg",
            description:
                "Gaun ala Gothic yang simpel namun memberikan tampilan yang elegan."
        }

    ],


    sport: [

        {
            name: "Runner Tee",
            price: "Rp 229.000",
            image: "reference/alat olga.jpg",
            description:
                "T-shirt olahraga ringan dengan desain breathable untuk menemani aktivitas latihan."
        },

        {
            name: "Active Jacket",
            price: "Rp 449.000",
            image: "reference/alat olga(1).jpg",
            description:
                "Jaket olahraga dengan desain sporty yang cocok untuk running dan aktivitas outdoor."
        },

        {
            name: "Training Set",
            price: "Rp 499.000",
            image: "reference/alat olga.jpg",
            description:
                "Set pakaian training yang nyaman untuk gym, workout, dan kegiatan olahraga lainnya."
        }

    ]

};


/* =========================================
   MENYIMPAN PRODUK YANG SEDANG DILIHAT
   ========================================= */

let currentIndex = {

    sunny: 0,

    europe: 0,

    sport: 0

};


/* =========================================
   MENAMPILKAN PRODUK
   ========================================= */

function displayProduct(category) {

    const product = products[category][currentIndex[category]];

    const image =
        document.getElementById(category + "-image");

    const name =
        document.getElementById(category + "-name");

    const price =
        document.getElementById(category + "-price");

    const description =
        document.getElementById(category + "-description");

    const number =
        document.getElementById(category + "-number");


    image.src = product.image;

    name.textContent = product.name;

    price.textContent = product.price;

    description.textContent = product.description;


    number.textContent =
        `${String(currentIndex[category] + 1).padStart(2, "0")} / ${String(products[category].length).padStart(2, "0")}`;
}


/* =========================================
   NEXT / BACK
   ========================================= */

function changeProduct(category, direction) {

    currentIndex[category] += direction;


    // Jika sudah sampai produk terakhir
    if (currentIndex[category] >= products[category].length) {

        currentIndex[category] = 0;

    }


    // Jika menekan back pada produk pertama
    if (currentIndex[category] < 0) {

        currentIndex[category] =
            products[category].length - 1;

    }


    displayProduct(category);

}


/* =========================================
   LOAD PRODUK PERTAMA
   ========================================= */

displayProduct("sunny");

displayProduct("europe");

displayProduct("sport");