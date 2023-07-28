import { SERVER_URL } from "./constants"
export default async function loadUserData() {
    fetch(`${SERVER_URL}/users/mail?email=elias`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("userData", JSON.stringify(data))
        })
        .catch(error => console.log(error))
}