import "../../style.css";
export default function Section1() {
  return (
    <>
      <section className="padding-block-900">
        <div className="containerr">
          <div className="even-columns">
            <div className="center">
              <h1 className="fs-primary-heading fw-bold">
                Our passion are sticks!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur modi eligendi quidem? Accusantium velit delectus
                necessitatibus blanditiis unde? Error illum dolor, est non modi
                ex debitis cupiditate necessitatibus aut voluptatem.
              </p>
              <button className="button">Grab your stick!</button>
            </div>
            <div className="bor">
              <img
                src="https://st2.depositphotos.com/1967477/5333/v/600/depositphotos_53335539-stock-illustration-tree-silhouette.jpg"
                alt="big stick"
              />
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
}
