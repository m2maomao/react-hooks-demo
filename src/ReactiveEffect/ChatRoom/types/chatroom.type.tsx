interface Connection {
  connect(): void;
  disconnect(): void;
}
interface ConnectionProps {
  serverUrl: string;
  roomId: string;
}

export type {
  Connection,
  ConnectionProps
}