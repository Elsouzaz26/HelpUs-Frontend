import io from "socket.io-client";
import siteConfig from "./site.config";

export const socket = io(siteConfig.socketUrl, {
  secure: true,
  rejectUnauthorized: false,
});
