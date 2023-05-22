import { Link, useLocation} from "react-router-dom"


const HomePage=()=>{

    const location = useLocation();
    
    return (
        <>
        <h1>Home page</h1>
        <Link to= {location?.state?.from  ?? "/"}>Back</Link> 
        </>
    )
}

export default HomePage