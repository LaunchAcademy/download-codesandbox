import { Module } from "./Module";
import Directory from "./Directory";

interface ApiResponse {
  data: {
    modules?: Module[];
    directories?: Directory[];
  };
}

export default ApiResponse;
