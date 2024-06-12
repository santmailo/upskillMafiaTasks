let msg = "";
const cart = {
  services: [],
  total: 0,

  addItem(service) {
    console.log("hello world");
    this.services.push(service);
    this.total += parseFloat(service.price);
    document.getElementById("show-empty").style.display = "none";
    this.updateCart();
  },

  removeItem(serviceId) {
    const index = this.services.findIndex(
      (service) => service.id === serviceId
    );

    if (index !== -1) {
      this.total -= parseFloat(this.services[index].price);
      this.services.splice(index, 1);
    }
    this.updateCart();
    if (cart.total == 0) {
      document.getElementById("show-empty").style.display = "block";
    }
  },

  updateCart() {
    const cartServiceContainer = document.querySelector("#cart-data-table");

    cartServiceContainer.innerHTML = "";

    let str = `<tr>
                  <th>S.no</th>
                  <th>Service Name</th>
                  <th>Price</th>
                </tr>`;

    this.services.forEach((service, i) => {
      msg += `${i + 1} - ${service.name} - ${service.price} \n`;
      str += `
    <tr>
      <td>${i + 1}</td>
      <td>${service.name}</td>
      <td>\&#8377; ${service.price}</td>
    </tr>
    `;
    });
    cartServiceContainer.innerHTML = str;
    document.getElementById("totalCartValue").textContent = this.total;
  },
};

document.querySelectorAll(".service-container").forEach((serviceElement) => {
  const id = serviceElement.dataset.id;
  const name = serviceElement.dataset.name;
  const price = serviceElement.dataset.price;

  const addButton = serviceElement.querySelector(".add-to-cart");

  addButton.addEventListener("click", () => {
    if (addButton.textContent.includes("Add Item")) {
      cart.addItem({ id, name, price });
      addButton.innerHTML = "Remove Item &#x2212;";
      addButton.classList.replace("add-to-cart", "remove-from-cart");
    } else {
      cart.removeItem(id);
      addButton.innerHTML =
        'Add Item <i class="fa fa-plus-circle" aria-hidden="true"></i>';
      addButton.classList.replace("remove-from-cart", "add-to-cart");
    }
  });
});

function successMessage() {
  document.getElementById("cart-empty-error").style.display = "none";
  document.getElementById("successMsg").style = "display: block; ";
  sendMail();
}

function checkCartEmpty() {
  if (cart.services.length == 0) {
    document.getElementById("cart-empty-error").style.display = "block";
    document.getElementById("successMsg").style.display = "none";
  } else {
    successMessage();
  }
  removeMsg();
}

function removeMsg() {
  setTimeout(() => {
    document.getElementById("cart-empty-error").style.display = "none";
    document.getElementById("successMsg").style.display = "none";
  }, 2000);
}

// function sendMail using emailJS
function sendMail() {
  (function () {
    emailjs.init({
      publicKey: "QH0YzqDmd4fDR2__1",
    });
  })();

  var params = {
    to: document.querySelector("#email").value,
    to_name: document.querySelector("#userName").value,
    message: msg,
  };

  var serviceId = "service_y7z99mu"; // email service ID
  var templateId = "template_eabafpr"; // template id

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      alert("Email Sent Successfully");
    })
    .catch((err) => alert("error"));
}
