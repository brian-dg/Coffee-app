import Image from "next/image";
import useQuisco from "../hooks/useQuisco";

const Categoria = ({ categoria }) => {
const {handleClickCategoria,categoriaActual} = useQuisco();
  const { nombre, icono, id } = categoria;
  
  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-400': ''} flex items-centers gap-4 w-full border p-5 hover:bg-amber-400`}>
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt="imagen icono"
        className="mr-5"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}>
          {nombre}
      </button>
    </div>
  );
};

export default Categoria;
