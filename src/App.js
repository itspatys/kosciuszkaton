import "./App.scss"

import Header from "./containers/Header"
import Hero from "./containers/Hero"
import SectionDivider from "./components/SectionDivider"
import Topic from "./containers/Topic"
import SectionGradient from "./components/SectionGradient"

const App = () => {
    return (
        <div className="main">
            <Header />
            <Hero />
            <SectionDivider name="temat" />
            <Topic />
            <SectionGradient />
            <SectionDivider name="harmonogram" />
        </div>
    )
}

export default App