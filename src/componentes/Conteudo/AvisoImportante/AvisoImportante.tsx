export default function AvisoImportante() {
  return (
    <section className="bg-yellow-200 br- border-l-4 border-yellow-500 p-4 mt-2  ">
      <h3 className=" font-bold text-2xl text-orange-600 " >Aviso importante:</h3>
      <p>Alguns alunos e alunas estão perigando reprovação nesta UC!</p>
    
    <div className="flex justify-around  " >
      <div className="bg-blue-300 p-8 m-2 rounded-xl " >UM</div>
      <div className="bg-green-300 p-8 m-2 rounded-xl" >DOIS</div>
      <div className="bg-red-300 p-8 m-2 rounded-xl" >TRES</div>
    </div>
    </section>
  );
}
