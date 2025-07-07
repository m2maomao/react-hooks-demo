import type { Connection, ConnectionProps } from "./types";

const createConnection = (options: ConnectionProps): Connection => {
  return {
    connect() {
      console.log('✅ 建立连接 ', options.roomId, '聊天室位于' + options.serverUrl + '...');
    },
    disconnect() {
      console.log('❌ 断开连接 ', options.roomId, '聊天室位于' + options.serverUrl + '...');
    }
  }
}
export default createConnection;