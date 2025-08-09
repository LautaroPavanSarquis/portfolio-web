export default function HeroSection(){

    return (
        
        <section id="Herosection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title" >
                        Hey, I'm Lauta
                    </p>

                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                        Full Stack 
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Estudiante de la Tecnicatura en Programación, enfocado en el desarrollo backend con .NET y SQL. Apunto a construir soluciones mantenibles y de calidad, aplicando buenas prácticas de programación y tests unitarios. Me interesa incorporar tecnologías actuales como cloud computing y trabajar en entornos colaborativos donde pueda aportar valor desde el primer día.
                    </p>
                </div>
                <button className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero section"></img>
            </div>

        </section>
        
    )
    ;
}