const createConnection = () => {
  return {
    connect() {
      console.log('connected...');
    },
    disconnect() {
      console.log('disconnected...');
    }
  }
}

export {
  createConnection
}