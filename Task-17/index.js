const services = [
  {
    title: "Dry Cleaning",
    image:
      "https://www.mycleaners.in/public/assets/images/Dryclean-002-min.jpg",
    price: 200.0,
  },

  {
    title: "Leather and Suede Cleaning",
    image:
      "https://greenercleaner.net/wp-content/uploads/2016/04/cleaning-leather-jacket-in-chicago.jpg",
    price: 999.0,
  },
  {
    title: "Ironing",
    image: "https://images.herzindagi.info/image/2020/Apr/cloyhing.jpg",
    price: 30.0,
  },
  {
    title: "Wedding Dress Cleaning",
    image:
      "https://cdn.shopify.com/s/files/1/0067/1521/1879/articles/rsz_wgp_commercial_photoshoot_-_0032.jpg?v=1601431300",
    price: 2400.0,
  },
  {
    title: "Wash and Fold",
    image:
      "https://laundryhouse.net/wp-content/uploads/2019/03/wash-fold-no-time.jpg",
    price: 160.0,
  },
  {
    title: "Stain Removal",
    image:
      "https://www.chemdry.com/sites/default/files/2022-01/Mobile_1000x600_SpecialtyStain.webp",
    price: 500.0,
  },
];

const cart = [];
let totalCartValue = 0;

function checkCartEmpty() {
  if (cart.length == 0) {
    document.getElementById("cart-empty-error").style.display = "block";
  } else {
    successMessage();
  }
}

function changeService(services) {
  const img = services[0].image;
  const title = services[0].title;
  const price = services[0].price;

  document.getElementById("product-img").src = img;
  document.getElementById("service-name").innerHTML = title;
  document.getElementById("service-price").innerHTML = price;
}

changeService(services);

function cartProduct(cart) {
  let str = `<tr>
  <th>S.no</th>
                  <th>Service Name</th>
                  <th>Price</th>
                </tr>`;

  for (let i = 1; i <= cart.length; i++) {
    str += `
    <tr>
      <td>${i}</td>
      <td>${cart[i - 1].title}</td>
      <td>\&#8377; ${cart[i - 1].price}</td>
    </tr>
    `;
  }

  document.getElementById("cart-data-table").innerHTML = str;
}

function successMessage() {
  document.getElementById("cart-empty-error").style.display = "none";
  document.getElementById("successMsg").style = "display: block; ";
}

function addItem() {
  document.getElementById("show-empty").style.display = "none";

  let temp = services.shift();
  totalCartValue += temp.price;
  document.getElementById("totalCartValue").innerHTML = `${totalCartValue}`;
  cart.push(temp);
  cartProduct(cart);
  changeService(services);
  document.getElementById("book-now-btn").style =
    "background-color: blueviolet;";
  document.getElementById("cart-empty-error").style.display = "none";
}

function skipService() {
  services.shift();
  changeService(services);
}
