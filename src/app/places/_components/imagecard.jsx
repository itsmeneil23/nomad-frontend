import Link from "next/link";

export default function ImageCard({ imageSrc, title, description, buttonText }) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imageSrc} alt={`${title} Image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            className="btn btn-primary"
            href={"/places/placesDetail"}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
