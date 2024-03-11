import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout"
import ItemArtist from "./components/ItemArtist/ItemArtist"

function App() {

	return (
		
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout><Home /></Layout>} />
				<Route path="/artist/:id" element={<Layout><ItemArtist /></Layout>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
