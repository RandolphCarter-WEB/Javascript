export const checkID = (targetID) => {
    const IDPattern_SP = /[$-/:-?{-~!"^_`\[\]]/;
    const IDPattern_numOfWord = /.{3,}/;

    let ID_Result = [];

    if(!targetID.value.match(IDPattern_SP)) {
        ID_Result[0] = `<p>특수 문자가 없어야 됩니다. >> True</p>`;
    } else {
        ID_Result[0] = `<p class="RedWord">특수 문자가 없어야 됩니다. >> False</p>`;
    }

    if(!targetID.value.match(IDPattern_numOfWord)) {
        ID_Result[1] = `<p>3글자 이상입니다. >> True</p>`;
    } else {
        ID_Result[1] = `<p class="RedWord">3글자 이상입니다. >> False</p>`;
    }

    return ID_Result;
}

export const checkPW = (targetPW) => {
    const PWPattern_SP = /[$-/:-?{-~!"^_`\[\]]/;
    const PWPattern_small = /[a-z]/g;
    const PWPattern_big = /[A-Z]/g;
    const PWPattern_num = /[0-9]/;
    const PWPattern_numOfWord = /.{8,}/;

    let PW_Result = [];

    if(targetPW.value.match(PWPattern_SP)) {
        PW_Result[0] = `<p>특수 문자가 하나라도 존재해야 됩니다. >> True</p>`;
    } else {
        PW_Result[0] = `<p class="RedWord">특수 문자가 하나라도 존재해야 됩니다. >> False</p>`;
    }

    if(targetPW.value.match(PWPattern_small)) {
        PW_Result[1] = `<p>소문자가 하나라도 존재해야 됩니다. >> True</p>`;
    } else {
        PW_Result[1] = `<p class="RedWord">소문자가 하나라도 존재해야 됩니다. >> False</p>`;
    }

    if(targetPW.value.match(PWPattern_big)) {
        PW_Result[2] = `<p>대문자가 하나라도 존재해야 됩니다. >> True</p>`;
    } else {
        PW_Result[2] = `<p class="RedWord">대문자가 하나라도 존재해야 됩니다. >> False</p>`;
    }

    if(targetPW.value.match(PWPattern_num)) {
        PW_Result[3] = `<p>숫자가 하나라도 존재해야 됩니다. >> True</p>`;
    } else {
        PW_Result[3] = `<p class="RedWord">숫자가 하나라도 존재해야 됩니다. >> False</p>`;
    }

    if(targetPW.value.match(PWPattern_numOfWord)) {
        PW_Result[4] = `<p>8글자 이상입니다. >> True</p>`;
    } else {
        PW_Result[4] = `<p class="RedWord">8글자 이상입니다. >> False</p>`;
    }

    return PW_Result;
}