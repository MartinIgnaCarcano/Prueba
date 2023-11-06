
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

function App() {
    return (
        <>
            <Router>
                <Header />
                    <Container style={{ minHeight: "100vh", minWidth: "100%", padding: "0" }}>
                        <Suspense fallback={<Loader />}>
                            <AppRoutes />
                        </Suspense>
                    </Container>
                <Footer />
            </Router>
        </>
    )
}

export default App
