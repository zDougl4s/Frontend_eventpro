const BASE_URL = "http://localhost:3002"
const UPDATE_DETAILS_URL = `${BASE_URL}/updatedetails/`

export const logInUser = (userData, setUser) => {
    fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ user: userData }),
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem("jwt", res.jwt);
            setUser(res.user)
            return res;
        })
}

export const createNewUser = (userData) => {
    fetch("http://localhost:3002/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ user: userData }),
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem("jwt", res.jwt);
            return res;
        }).then((data) => console.log(data))
}

export const updateUser = (id, body, setUser) => {
    fetch(`http://localhost:3002/users/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(body),
    })
    .then((res) => res.json())
    .then(setUser)
}

const post = (url, body) => {
    const configObject = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            // "Authorization": localStorage.token

        },
        body: JSON.stringify(body)
    }
    return fetch(url, configObject)
}

const getToken = () => localStorage.getItem("jwt");

const getUser = () => JSON.parse(atob(this.getToken().split(".")[1]));

export const validateToken = () => {
    return fetch("http://localhost:3002/validate", {
        headers: {
            Authorization: `Bearer ${ getToken() }`,
        }
    })
    .then(res => res.json())
}


export const updateDetails = body => post(UPDATE_DETAILS_URL, body).then(res => res.json())

export const buyTicket = (userId, eventId) => {
    fetch("http://localhost:3002/tickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ user_id: userId, event_id: eventId }),
    })
    .then((res) => res.json())
    .then(console.log)
}
