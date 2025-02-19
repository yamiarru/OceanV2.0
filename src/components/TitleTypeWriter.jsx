import Typewriter from "typewriter-effect";
import imgShopping from "../assets/imgs/shopping.png";

const TitleTypeWriter = () => {
  return (
    <section className="row align-items-center">
      <div className="col-12 col-md-7">
        <h1 className="display-5 titulo">
          Nuestras ofertas de {" "}
          <span style={{ color: "#d883cf" }}> VERANO 2025</span> 🛍️
        </h1>
        <h3 className="text-center">
          <Typewriter
            options={{
              strings: [" ✋ 30% OFF 🔥"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50, 
              delay: 75, 
            }}
          />
        </h3>
      </div>
      <div className="col-12 col-md-5 text-center">
        <img
          style={{ width: "450px", maxWidth: "250%" }}
          src={imgShopping}
          alt="Ecommerce"
          className="img-fluid text-center px-3"
        />
      </div>
    </section>
  );
};

export default TitleTypeWriter;
