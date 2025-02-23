import { useEffect } from "react"; // Solo importa lo que realmente necesitas
import { useNavigate } from "react-router-dom";
import '../styles/Profile.css';

const Profile = ({ user }) => {
  const navigate = useNavigate();
  // Redirige a la página Home si el usuario no está logueado
  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirige a la página de inicio
    }
  }, [user, navigate]);

  if (!user) {
    return <p>No has iniciado sesión.</p>;
  }

  return (
    <div className="profile">
      <h2>Bienvenido, {user.username}</h2>
      <p>Nickname: {user.username}</p>
      <p>Email: {user.username}@gmail.com</p>
      <p>Teléfono: 123 456 789</p>
    </div>
  );
};

export default Profile;
