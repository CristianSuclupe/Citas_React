import Paciente from "./Paciente"
import PropTypes from 'prop-types';

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          { pacientes.map( paciente => (
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comineza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  )
}

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired
};
export default ListadoPacientes