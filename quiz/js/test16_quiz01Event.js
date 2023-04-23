export const userLogin = (Id, Pw, target) => {
    target.innerHTML = "";

    const idPattern = /^[a-z\d]{3,}$/i;
    const pwPattern = /^[a-z\d]{8,}$/i;

    const idInfo = Id.match(idPattern) ? "[ID] Success to input ID <br>" : "[ID] Fail to Login >> input 2 word over. <br>";
    const pwInfo = Pw.match(pwPattern) ? "[PW] Success to input pw <br>" : "[PW] Fail to Login >> input 8 word over. <br>";

    target.innerHTML += idInfo;
    target.innerHTML += pwInfo;

    idInfo.includes("Success") && pwInfo.includes("Success") ? alert(`Hello ${Id}`) : false;
}