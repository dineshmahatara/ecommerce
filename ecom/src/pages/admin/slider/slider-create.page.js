import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SliderForm from "./slider-form.component";
import { slider_svc } from "./slider.service";

const AdminSliderCreate = () => {
    let navigate = useNavigate();
    const addSlider = async (data) => {
        try{
            let response = await slider_svc.addSlider(data);
            toast.success(response.msg)
            navigate("/admin/sliders")
        } catch(err) {
            toast.error(err);
        }
    }
    return (<>
        <div className="container-fluid px-4">
            <h1 className="mt-4">Slider Create</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item ">
                    <NavLink to="/admin">
                        Dashboard
                    </NavLink>
                </li>
                <li className="breadcrumb-item ">
                    <NavLink to="/admin/sliders">
                        Slider Listing
                    </NavLink>
                </li>
                <li className="breadcrumb-item active">
                    Slider Create
                </li>
            </ol>
            
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    Slider Form
                </div>
                <div className="card-body">
                    
                    <SliderForm submitForm={addSlider}/>
                    
                </div>
            </div>
        </div>
    </>)
}

export default AdminSliderCreate;