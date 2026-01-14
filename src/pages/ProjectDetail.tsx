import { useParams, Link } from "react-router-dom";
import project1 from "../assets/peribumi.png";
import project2 from "../assets/elbarra.png";
import project3 from "../assets/To-Do-List.png";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="project-detail">
      <Link to="/" className="back-link">
        ← BACK
      </Link>

      <h1>PROJECT DETAIL</h1>

      <div className="project-card-detail">
        {id === "1" && (
          <>
            <img
              src={project1}
              alt="Peribumi Consultant"
              className="project-image-detail"
            />
            <h2>Peribumi Consultant</h2>
            <p>
              Website pelatihan dan sertifikasi berbasis Laravel dengan sistem
              pembelian, authentication, email verification dan review rating
            </p>
          </>
        )}

        {id === "2" && (
          <>
            <img
              src={project2}
              alt="Elbarra Nursery"
              className="project-image-detail"
            />
            <h2>Elbarra Nursery</h2>
            <p>
              Website katalog tanaman dengan tampilan modern dan sistem
              manajemen produk yang dibuat dengan Go + React + MySQL
            </p>
          </>
        )}

        {id === "3" && (
          <>
            <img
              src={project3}
              alt="To-Do List App"
              className="project-image-detail"
            />
            <h2>To-Do List App</h2>
            <p>Aplikasi manajemen tugas berbasis Python + Vue dan MySQL.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
