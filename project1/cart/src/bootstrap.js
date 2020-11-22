import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart </div>`;

  el.innerHTML = cartText;
};

// handle situation #1 or possibly #2
if (process.env.NODE_ENV === 'development') {
  // Are we really running in isolation
  const el = document.querySelector("#cart-dev");

  // Assuming our container doesn't have an element
  // with id 'cart-dev'
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}
export { mount };