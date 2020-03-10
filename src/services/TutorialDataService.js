import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users/create", data);
  }

  update(id, data) {
    return http.post(`/users/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new TutorialDataService();
