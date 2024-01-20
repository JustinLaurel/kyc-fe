"use client";
import { useEffect } from "react";
import axios from "axios";

export default function Login() {
  useEffect(() => {
    init();
  }, []);

  async function init() {
    try {
      window.location.href = "http://localhost:8080/oauth2/authorize?client_id=myapp&response_type=code";
    } catch (error) {
      console.log(`error`, error);
    }
  }

  return (<div></div>);
}