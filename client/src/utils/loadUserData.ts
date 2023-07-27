export default async function loadUserData() {
    fetch("http://localhost:3001/users/mail?email=elias")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("userData", JSON.stringify(data))
        })
        .catch(error => console.log(error))
}