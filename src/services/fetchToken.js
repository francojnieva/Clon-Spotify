
import axios from "axios";

const URL = 'https://accounts.spotify.com/api/token'
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET

export async function tokenApiSpotify() {
	try {
		const response = await axios.post(
			`${URL}`,
			`grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		)
		const result = response.data
		return	result.access_token
	} catch (error) {
		console.error("Error al obtener el token:", error)
	}
}

