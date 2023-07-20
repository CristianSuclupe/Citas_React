
const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Cristian</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">10 de Diciembre de 2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reiciendis, 
          necessitatibus cumque ab vitae blanditiis explicabo reprehenderit totam optio pariatur aut consectetur maxime possimus 
          nihil praesentium nostrum magnam quod quasi.</span>
        </p>
      </div>
  )
}

export default Paciente