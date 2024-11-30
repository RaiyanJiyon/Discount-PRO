import SuccessToaster from "../components/ToasterNotification/SuccessToaster";
import 'react-toastify/dist/ReactToastify.css';


const Practice = () => {

const handleSuccess = () => {
    SuccessToaster("Successfully Logged In!");
};
    return (
        <div>
            <button onClick={handleSuccess}>Click</button>
        </div>
    );
};

export default Practice;