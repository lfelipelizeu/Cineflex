export default function Movie ({ title, img }) {
    return (
        <div className="movie">
            <img src={img} alt={title} />
        </div>
    );
}