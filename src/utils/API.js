import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function () {
    return axios.get("https://randomuser.me/api/?nat=us&results=30");
  },
};
