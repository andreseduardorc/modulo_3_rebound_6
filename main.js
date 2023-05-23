const productos = [
    { id: 'martini', nombre: 'Martini', detalle: 'Martini', precio: 2990 },
    { id: 'capuccino', nombre: 'Cappuccino', detalle: 'Cappuccino', precio: 1370 },
    { id: 'latte', nombre: 'Latte', detalle: 'Latte', precio: 1350 },
    { id: 'mojito', nombre: 'Mojito', detalle: 'Mojito', precio: 2290 },
    { id: 'riso', nombre: 'riso', detalle: 'Insalata de riso', precio: 6750 },
    { id: 'cipollotti', nombre: 'cipollotti', detalle: 'Insalata ai cipollotti', precio: 5990 },
    { id: 'caprese', nombre: 'caprese', detalle: 'Insalata caprese', precio: 8250 }
  ];
  
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const itemsContainer = document.querySelector('.items-container');
  const detalleContainer = document.querySelector('.detalle-container');
  const totalContainer = document.querySelector('.total-container');
  let total = 0;
  
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', actualizarCuenta);
  });
  
  function actualizarCuenta() {
    const seleccionados = obtenerSeleccionados();
  
    itemsContainer.innerHTML = '';
    detalleContainer.innerHTML = '';
    total = 0;
  
    seleccionados.forEach((producto) => {
  
      const detalleElement = document.createElement('div');
      detalleElement.textContent = producto.detalle;
      detalleContainer.appendChild(detalleElement);
  
      const precioElement = document.createElement('div');
      precioElement.textContent = `$${producto.precio.toFixed()}`;
      itemsContainer.appendChild(precioElement);
  
      total += producto.precio;
    });
  
    totalContainer.textContent = `Total: $${total.toFixed()}`;
  }
  
  function obtenerSeleccionados() {
    const seleccionados = [];
  
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const productoId = checkbox.getAttribute('id');
        const producto = productos.find((p) => p.id === productoId);
  
        if (producto) {
          seleccionados.push(producto);
        }
      }
    });
  
    return seleccionados;
  }
  