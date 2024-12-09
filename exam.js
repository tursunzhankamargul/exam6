function listProductNames() {
    const products = ['Сабын', 'Чипсы', 'Картоп', 'Нан', 'Су']

    products.forEach(product => {
        alert(listProductNames(products));
    });



};

const eShop = {
    name: "Tech Store",
    phoneNumber: "+77054742339",
    products: [
        {
            productName: "Телевизор",
            category: "Электроника",
            price: 500000,
            stock: 7
        },
        {
            productName: "Плисос",
            category: "Электроника",
            price: 150000,
            stock: 20
        },
        {
            productName: "Шағын тоңазытқыш",
            category: "Тұрмыстық техника",
            price: 80000,
            stock: 5
        },
        {
            productName: "Кір машина",
            category: "Тұрмыстық техника",
            price: 30000,
            stock: 15
        },
        {
            productName: "Журнал",
            category: "Баспа өнімдері",
            price: 5000,
            stock: 50
        }
    ]
};

console.log(eShop);




let products = [];

function addProduct() {
    let name = prompt("Телевизор:");
    let price = parseFloat(prompt(35000));
    let quantity = parseInt(prompt(15));
    let category = prompt("Тұрмыстық техника");

    if (!name, isNaN(price), isNaN(quantity)|| !category) {
        alert(addProduct(prompt), (parseFloat), (parseInt));
        return;
    }

    let product = {
        name: "Тоңазтқыш",
        price: 20000,
        quantity: 20,
        category: "Электроника"
    };

    products.push(product);

    alert("Өнім сәтті қосылды!");
    console.log("Қазіргі өнімдер:", products);
}

addProduct();


