import cande from "../../../assets/img/candelariobeso.jpeg";
import gabo from "../../../assets/img/gabrielgarciamarquez.jpg";
import jorg from "../../../assets/img/jorgeisacs.webp";
import jose from "../../../assets/img/joseeustasio.jpg";

export const Acerca = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src={gabo}
                  className="card-img-top"
                  alt=""
                  style={{ width: "100%", height: "400px" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">Lider de proyecto</h4>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.This is a longer card with supporting text
                    below as a natural lead-in to additional content. This
                    content is a little bit longer.This is a longer card with
                    supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={cande}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "400px" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">Senior</h4>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.This is a longer card with supporting text
                    below as a natural lead-in to additional content. This
                    content is a little bit longer.This is a longer card with
                    supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={jorg}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "400px" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">Junior</h4>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.This is a longer card
                    with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.This
                    is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={jose}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "400px" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">Tester</h4>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.This is a longer card with supporting text
                    below as a natural lead-in to additional content. This
                    content is a little bit longer.This is a longer card with
                    supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
