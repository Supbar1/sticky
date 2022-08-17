import { Link } from "react-router-dom";
import "../../style.css";

export default function Section1() {
  return (
    <section className="padding-block-900">
      <div className="even-columns">
        <div className="margin center">
          <h1 className="fs-primary-heading fw-bold margin">
            Our passion are sticks!
          </h1>
          <p className="fs-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur modi eligendi quidem? Accusantium velit delectus
            necessitatibus blanditiis unde? Error illum dolor, est non modi ex
            debitis cupiditate necessitatibus aut voluptatem.
          </p>
          <Link to="products">
            <button className="button ">Grab your stick!</button>
          </Link>
        </div>
        <div className="center">
          <img
            src="https://st2.depositphotos.com/1967477/5333/v/600/depositphotos_53335539-stock-illustration-tree-silhouette.jpg"
            alt="big stick"
          />
        </div>
      </div>
    </section>
  );
}
