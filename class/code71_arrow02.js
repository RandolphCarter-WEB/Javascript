const getObj1 = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    
    keys.forEach(key => {
        console.log("Key >> " + key);
    });
    
    values.forEach(value => {
        console.log("Value >> " + value);
    });
};

const getObj2 = (object = {key : value}) => {
    console.log(`key >> ${key}`);
    console.log(`value >> ${value}`);
}

const obj = {
    abc: "ABC",
    def: "DEF",
    hij: "HIJ"
};
  
getObj1(obj);
getObj2(obj);