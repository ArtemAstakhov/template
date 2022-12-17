export class API {
  headers;

  constructor(config) {
    this.headers = config.headers;
    this.baseUrl = config.baseUrl;
  }

  async getUserInfo() {
    return Promise.resolve({ id: 10 });
  }

  //   createTask(task) {
  //     fetch(`${this.baseUrl}/tasks`, {
  //       method: "POST",
  //       headers: this.headers,
  //       body: JSON.stringify(task),
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         return data;
  //       });
  //   }

  async createTask(task) {
    const response = await fetch(`${this.baseUrl}/tasks`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  }

  //   deleteTask(id) {
  //     fetch(`${this.baseUrl}/tasks/${id}`, {
  //       method: "DELETE",
  //       headers: this.headers,
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         return data;
  //       });
  //   }

  async deleteTask(id) {
    const response = await fetch(`${this.baseUrl}/tasks/${id}`, {
      method: "DELETE",
      headers: this.headers,
    });
    const data = await response.json();

    return data;
  }

  //   getTaskList() {
  //     fetch(`${this.baseUrl}/tasks`, {
  //       method: "GET",
  // headers: this.headers,
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         return data;
  //       });
  //   }

  async getTaskList() {
    const response = await fetch(`${this.baseUrl}/tasks`, {
      method: "GET",
      headers: this.headers,
    });
    const data = await response.json();

    return data;
  }
}
