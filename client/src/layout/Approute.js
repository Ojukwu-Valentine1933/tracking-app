import LandingPageComponentPage from "../pages/LandingPageComponentPage";
import { Route, Routes} from "react-router-dom";
import Modal from "../component/Auth/Modal";
const Approute = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPageComponentPage/>}/>
            <Route path="/auth/*" element={<Modal />} />

        </Routes>
    )
}
export default Approute;

