function fibonacci(num) {
    if(num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

onmessage = function ({ data }) {
    const num = data.num;
    console.log("[SYSTEM] main stream MSG >> ", data);
    if(num == null || num === "") {
        throw new Error("[SYSTEM] There is no number specified");
    }
    const result = fibonacci(num);
    postMessage(result);
}