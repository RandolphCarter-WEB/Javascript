let namespaceA = (function() {
    let privateValue = "private Value";
    return {
        printPrivateApi : function() {
            console.log("[System] you can access private value >> " + privateValue);
        }
    }
})();

namespaceA.printPrivateApi();
console.dir(namespaceA);