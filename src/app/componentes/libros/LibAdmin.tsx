export const LibAdmin = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered border border-black ">
            <thead className="text-center">
              <tr>
                <th style={{ width: "10%" }}>Codigo</th>
                <th style={{ width: "30%" }}>Autor</th>
                <th style={{ width: "25%" }}>Titulo</th>
                <th style={{ width: "10%" }}>Fecha</th>
                <th style={{ width: "15%" }}>Categoria</th>
                <th style={{ width: "10%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>1</td>
                <td>Juan</td>
                <td>Juanito peres y rapunsel</td>
                <td>2020</td>
                <td>Terror</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#008000" }}
                  ></i>
                  &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#FF0000" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Luis</td>
                <td>luis y sus amigos</td>
                <td>2019</td>
                <td>Fantasia</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#008000" }}
                  ></i>
                  &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#FF0000" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Esteban</td>
                <td>hansel y gretel</td>
                <td>2015</td>
                <td>Drama</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#008000" }}
                  ></i>
                  &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#FF0000" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
