import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div> ${name}</div>`;
  }

  el.innerHTML = products;
  // ReactDOM.render(<App />,el); // React example of doing this
};

// handle situation #1 or possibly #2
if (process.env.NODE_ENV === 'development') {
  // Are we really running in isolation
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element
  // with id 'dev-products'
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}
export { mount };
