import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pagos = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [opcionPago, setOpcionPago] = useState('efectivo');
  const [tarjetaDebito, setTarjetaDebito] = useState('');
  const [vencimiento, setVencimiento] = useState('');
  const [dni, setDNI] = useState('');
  const [carrito, setCarrito] = useState([]);
  const [ordenProcesada, setOrdenProcesada] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCarrito(storedCart);
  }, []);

  const handleCompra = () => {
    // Simulamos el procesamiento de la orden y almacenamos una ID única en localStorage
    const orderId = Date.now(); // Generar una ID única
    localStorage.setItem('orden_' + orderId, JSON.stringify({ nombre, apellido, direccion, opcionPago, tarjetaDebito, vencimiento, dni, carrito }));
    setOrdenProcesada(true);
    localStorage.removeItem('cart'); // Limpiar el carrito
  };

  if (ordenProcesada) {
    return (
      <div className="container">
        <h2>ORDEN PROCESADA</h2>
        <p>GRACIAS POR SU COMPRA</p>
        <Link to="/">Volver a la página principal</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Resumen de Compra</h2>
      <ul>
        {carrito.map(item => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>

      <h2>Datos del Cliente</h2>
      <div className="form-group">
        <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        <input type="text" placeholder="Apellido" value={apellido} onChange={e => setApellido(e.target.value)} />
        <input type="text" placeholder="Dirección" value={direccion} onChange={e => setDireccion(e.target.value)} />
        <select value={opcionPago} onChange={e => setOpcionPago(e.target.value)}>
          <option value="efectivo">Efectivo</option>
          <option value="debito">Débito</option>
        </select>
        {opcionPago === 'debito' && (
          <div>
            <input type="text" placeholder="Tarjeta de Débito" value={tarjetaDebito} onChange={e => setTarjetaDebito(e.target.value)} />
            <input type="text" placeholder="Vencimiento" value={vencimiento} onChange={e => setVencimiento(e.target.value)} />
            <input type="text" placeholder="DNI" value={dni} onChange={e => setDNI(e.target.value)} />
          </div>
        )}
      </div>

      <button onClick={handleCompra} className="btn btn-primary">
        Comprar
      </button>
    </div>
  );
};

export default Pagos;