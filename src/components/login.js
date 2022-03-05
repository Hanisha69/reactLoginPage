import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const LoginPage = ()=>{
    return(
        <div class="login-container">
            <form action="index.html">
          <FontAwesomeIcon icon={faUserCircle} className="avt" /> 
            <h2>welcome</h2>
            <div className="input-div one">
                <div className="icon">
                <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="holder">
                    <input type="text" className="input" placeholder="Username" />
                </div>
            </div>
            <div className="input-div two">
                <div className="icon">
                <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="holder">
                    <input type="password" className="input" placeholder="Password" />
                </div>
            </div>
            <input type="submit" className="btn" value="Login" />
            </form>
        </div>
    );
}
export default LoginPage;