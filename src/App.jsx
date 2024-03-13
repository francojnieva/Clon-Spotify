import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout"
import ItemArtist from "./components/ItemArtist/ItemArtist"
import ItemAlbum from "./components/ItemAlbum/ItemAlbum"
import NotFound from "./pages/NotFound/NotFound"

function App() {

	return (
		
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout><Home /></Layout>} />
				<Route path="/artist/:id" element={<Layout><ItemArtist /></Layout>} />
				<Route path="/album/:id" element={<Layout><ItemAlbum /></Layout>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
