import axios from "axios";

export default {
    // Gets all books
    getBurgers: function () {
        return axios.get("/");
    },
    // Gets the book with the given id
    getBurger: function (id) {
        return axios.get("/api/burgers/" + id);
    },
    // Deletes the book with the given id
    deleteBurger: function (id) {
        return axios.delete("/api/burgers/" + id);
    },
    // Saves a book to the database
    saveBurger: function (burgerData) {
        return axios.post("/api/burgers", burgerData);
    },
    devourBurger: function (devoured) {
        return axios.put("/api/burgers/" + devoured);
    },

};
