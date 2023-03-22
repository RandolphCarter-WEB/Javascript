let i = 4;

const obj01 = {
    key01 : "value01",
    ["key02"] : "value02",
    ["key03" + "_num01"] : "value03",
    ["key" + ++i] : "value04",
    ["key" + ++i] : "value05",
    ["key" + ++i] : "value06",
    ["key" + ++i] : "value07"
};