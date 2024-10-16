"use client";

import { useEffect } from "react";
import AOS from "aos";

function AOSClient() {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
}

export default AOSClient;