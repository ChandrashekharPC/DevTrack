import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {

    return(

        <div style={{display:"flex"}}>

            <Sidebar/>

            <div
                style={{
                    flex:1,
                    background:"#F8FAFC",
                    minHeight:"100vh"
                }}
            >

                <Navbar/>

                <div style={{padding:"30px"}}>

                    {children}

                </div>

            </div>

        </div>

    );

}

export default DashboardLayout;