import Footer from "./footerComponent";
import Navbar from "./navbarComponent";

export default function Layout({ children }){
    return(
        <>
            <Navbar/>
            <main className="container mx-auto">
                {children}
            </main>
            <Footer/>
        </>
    )
}