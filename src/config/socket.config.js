import io from "socket.io-client";
import siteConfig from "./site.config";

const socket = io(siteConfig.socketUrl, {
  secure: true,
  rejectUnauthorized: false,
});
export default socket