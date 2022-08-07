import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../context/Auth/hook/useAuth";

const Home = () => {
  const navigator = useNavigate();
  const context = useAuth();

  return <>
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: 'purple',
          letterSpacing: '2px',
          fontSize: '2rem',
        }}
      >Welcome <span
        style={{
          letterSpacing: '5px',
        }}
      >{context.user?.name}</span></h2>
      <Button
        clickable={true}
        title="LOGOUT"
        size={10}
        onClick={() => {
          context.signOut();
          navigator('/')
        }} />
    </div>
  </>
}

export default Home;