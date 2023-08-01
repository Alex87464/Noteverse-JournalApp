import StockTable from './StockTable';

export const StockPage = () => {
  // Definición del arreglo stockData
  const stockData = [
    {
      id: 1,
      nombre: 'Camisa de manga larga',
      descripcion: 'Camisa de color azul con botones en la parte frontal.',
      codigo: '000001',
      categoria: 'Ropa',
      precio: 25.99,
      cantidad: 32,
      estado: 'disponible',
    },
    {
      id: 2,
      nombre: 'Remera de boca',
      descripcion: 'Remera de boca con el numero 10 y nombre de Riquelme.',
      codigo: '000002',
      categoria: 'Remeras',
      precio: 225.99,
      cantidad: 5,
      estado: 'disponible',
    },
    {
      id: 3,
      nombre: 'Vestido rosa',
      descripcion: 'Vestido completo de color rosa con colgantes.',
      codigo: '000003',
      categoria: 'Vestidos',
      precio: 48.99,
      cantidad: 12,
      estado: 'oferta',
    },
    // Agrega más objetos con datos similares para otros productos
  ];

  return (
    <div style={{ marginLeft: '240px', padding: '16px' }}>
      {/* Ajusta el valor del margen izquierdo según el ancho de tu Navbar */}
      <h1>Stock Page</h1>
      <p>Aquí debajo se verá la tabla con los datos de la ropa en stock</p>
      <StockTable data={stockData} />
    </div>
  );
};

export default StockPage;
