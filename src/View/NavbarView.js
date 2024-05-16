import Register from "../components/LearnerComponent/Register";
import { Provider } from "react-redux";
import { store } from "../store/Enrollstore";
import Navbar from "../components/LearnerComponent/Navbar";


function NavbarView() {
    //localStorage.setItem('id',1)
    return (
        <div className="App">
            <Provider store={store}>
            <Navbar />
               
            </Provider>
        </div>
    );
}

export default NavbarView;