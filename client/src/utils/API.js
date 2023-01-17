// route to get logged in user's info (needs the token)
export const getUser = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
    };
    export const createUser = (userData) => {
        return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        });
    };
export const loginUser = (userData) => {
        return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        });
};
  // save view data for a logged in user
    export const saveView = (viewData, token) => {
        return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(viewData),
        });
    };
  // remove saved view data for a logged in user
    export const deleteView = (viewId, token) => {
        return fetch(`/api/users/views/${viewId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
        },
        });
    };
  // make a search to google books api
  // https://www.googleapis.com/books/v1/volumes?q=harry+potter
//   export const searchGoogleBooks = (query) => {
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//   };

//may take out later probs dont need this