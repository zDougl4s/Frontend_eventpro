

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

export const createNewUser = (userData,setUser) => {
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
        }).then(res => {
            setUser(res.user)
            return res;
        })
        .then((data) => console.log(data))
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


const getToken = () => localStorage.getItem("jwt");


export const validateToken = () => {
    return fetch("http://localhost:3002/validate", {
        headers: {
            Authorization: `Bearer ${ getToken() }`,
        }
    })
    .then(res => res.json())
}


// export const updateDetails = body => post(UPDATE_DETAILS_URL, body).then(res => res.json())

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

export const userTickets = (userId) => { fetch('http://localhost:3002/tickets')
        .then((data) => data.json())
.then((res) => {
            return res;
        })
.then((data) =>data.filter(ticket => ticket.user_id === userId))
}

export const eventById = (id) => {
    fetch(`http://localhost:3002/events/${id}`)
        .then((data) => data.json())
        .then((res) => {
            return res;
        })
}

export const fetchDeleteTicket = (id) => {
    return fetch(`http://localhost:3002/tickets/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json());
};