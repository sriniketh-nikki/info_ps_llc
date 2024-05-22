interface CardProps {
  logo: any;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
//   console.log(props);
  return (
    <>
      <div className="mt-3 mb-3 shadow-lg customCard">
        <div className="card" style={{ width: "21rem", height: "33rem" }}>
          <img
            src={props.logo}
            className="card-img-top"
            alt="logo"
            height="230px"
            style={{ objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{props.title}</h5>
            <p className="card-text mt-4">{props.description}</p>
          </div>
        </div>
        </div>
    </>
  );
}
