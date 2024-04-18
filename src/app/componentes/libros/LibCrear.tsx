export const LibCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6 position-relative">
              <label htmlFor="aut" className="form-label">
                Autor
              </label>
              <input
                type="text"
                className="form-control border border-black"
                id="aut"
                name="aut"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="titu" className="form-label">
                Titulo
              </label>
              <input
                type="text"
                className="form-control border border-black"
                id="titu"
                name="titu"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="fech" className="form-label">
                Fecha
              </label>
              <input
                type="date"
                className="form-control border border-black"
                id="fech"
                name="fech"
                required
              />
            </div>

            <div className="col-md-6 position-relative">
              <label htmlFor="prec" className="form-label">
                Precio
              </label>
              <input
                type="number"
                className="form-control border border-black"
                id="prec"
                name="prec"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="cat" className="form-label">
                Categoria
              </label>
              <select className="form-select border border-black" id="cat" name="cat" required>
                <option selected disabled value="">
                  Seleccione la categoria
                </option>
                <option>Drama</option>
                <option>Fantasia</option>
                <option>Novela</option>
                <option>Terror</option>
                <option>Comedia</option>

              </select>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar Libro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
