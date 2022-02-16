const listApi = {
  getList: () => {
    return new Promise((resolve, reject) => {

      // Wait 500ms --> return result
      setTimeout(() => {
        resolve({
          data: [
            { name: "Hello Hùng", completed: false },
            { name: "Hello Cee", completed: true },
            { name: "Hello Facebook", completed: false },
            { name: "Hello Google", completed: false },
            { name: "Hello Fortna", completed: false },
          ]
        })
      }, 500);
    })
  }
}

export default listApi;