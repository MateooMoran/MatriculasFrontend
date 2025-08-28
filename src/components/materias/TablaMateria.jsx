import { Edit, Trash } from "lucide-react";

function TablaMateria({
  materias = [],
  campos = [],
  loading = false,
  handleEdit = () => {},
  handleDelete = () => {},
}) {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(210px,1fr))]">
      {/* Cargamos el Skeleton  */}
      {loading ? (
        [...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md animate-pulse p-6 border border-gray-100 flex flex-col gap-3"
          >
            {campos.map((_, j) => (
              <div key={j} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
            <div className="flex gap-2 mt-3">
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))
      ) : materias.length === 0 ? (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500 text-lg">
            No hay materias que coincidan con la búsqueda
          </p>
        </div>
      ) : (
        [...materias].reverse().map((est) => (
          <div
            key={est._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6 border border-gray-100 flex flex-col gap-3"
          >
            {campos.map((campo) => (
              <div key={campo.value} className="flex flex-col">
                <span className="font-semibold text-gray-500 text-sm tracking-wide">
                  {campo.label}
                </span>
                <p className="text-gray-700 text-base truncate">{est[campo.value]}</p>
              </div>
            ))}
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => handleEdit(est)}
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Editar materia"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete(est._id)}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                aria-label="Eliminar materia"
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TablaMateria;