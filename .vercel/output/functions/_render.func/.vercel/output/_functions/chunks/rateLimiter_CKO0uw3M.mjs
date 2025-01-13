const ipRequestMap = /* @__PURE__ */ new Map();
function createRateLimiter({ maxRequests, windowMs }) {
  return function rateLimiter(context) {
    const now = Date.now();
    const ip = context.clientAddress || "unknown";
    console.log("IP - ", ip);
    let localStorageData = null;
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem(`rateLimiter_${ip}`);
      if (storedData) {
        localStorageData = JSON.parse(storedData);
      }
    }
    let requestData = ipRequestMap.get(ip) || localStorageData || { count: 0, resetTime: now + windowMs };
    if (now > requestData.resetTime) {
      requestData = { count: 1, resetTime: now + windowMs };
    } else {
      requestData.count++;
    }
    ipRequestMap.set(ip, requestData);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(`rateLimiter_${ip}`, JSON.stringify(requestData));
    }
    if (requestData.count > maxRequests) {
      return false;
    }
    return true;
  };
}

export { createRateLimiter as c };
