const createConnection = () => {
  return {
    connect() {
      console.log('✅ 连接中...');
    },
    disconnect() {
      console.log('❎ 断开连接...');
    }
  }
}

export {
  createConnection
};