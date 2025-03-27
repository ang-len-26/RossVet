import { useEffect, useState } from "react";
import { getProfile } from "./services/api";

const Profile = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getProfile()
      .then((data) => setUser(data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      {user ? (
        <p>
          Bienvenido, {user.name} ({user.email})
        </p>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default Profile;
