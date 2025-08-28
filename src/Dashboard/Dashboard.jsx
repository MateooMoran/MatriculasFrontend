// Dashboard.jsx
import storeAuth from '../context/storeAuth';
import InformationCards from '../Dashboard/InformationCards';
function Dashboard() {
  const nombre = storeAuth((state) => state.nombre);
  const apellido = storeAuth((state) => state.apellido);
  return (
    <div>
      <header className="py-8 text-center">
        <h2 className="text-3xl font-bold text-sec">
          Bienvenido {nombre} {apellido} 👋
        </h2>
      </header>
      <InformationCards />
    </div>
  );
}

export default Dashboard;