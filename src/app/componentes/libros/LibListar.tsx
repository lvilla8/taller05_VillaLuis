export const LibListar = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered border border-black ">
            <thead className="text-center">
              <tr>
                <th style={{ width: "5%" }}>Codigo</th>
                <th style={{ width: "40%" }}>Autor</th>
                <th style={{ width: "30%" }}>Titulo</th>
                <th style={{ width: "10%" }}>Fecha</th>
                <th style={{ width: "15%" }}>Categoria</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>1</td>
                <td>Juan</td>
                <td>Juanito peres y rapunsel</td>
                <td>2020</td>
                <td>Terror</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Luis</td>
                <td>luis y sus amigos</td>
                <td>2019</td>
                <td>Fantasia</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Esteban</td>
                <td>hansel y gretel</td>
                <td>2015</td>
                <td>Drama</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
