export const searchData = (e, target) => {
    target.innerHTML = "";

    const tableCustom = new CustomTable();
    const searchPattern = new RegExp(`${e.target.value}`, "i");

    tableCustom.render(target, searchPattern);
};
  
class CustomTable extends HTMLElement {
    constructor() {
        super();
    }
  
    render($target, regexp) {
        const item = Data.searchData.filter((element) => regexp.test(element.name));
        $target.innerHTML = this.returnTemplate(item);
    }
  
    returnTemplate(item) {
        return `
            <table>
                <tbody>
                    ${item.map((element) => `
                        <tr>
                            <td>${element.Id}</td>
                            <td>${element.name}</td>
                        </tr>
                    `).join("\n")}
                </tbody>
            </table>
        `;
    }
}
  
if (`customElements` in window) {
    customElements.define("result-table", CustomTable);
}
  
const Data = {
    searchData: [
        { name: "Apple", Id: "123" },
        { name: "Bpple", Id: "124" },
        { name: "Cpple", Id: "125" },
        { name: "Dpple", Id: "126" },
        { name: "Epple", Id: "127" },
        { name: "Fpple", Id: "128" },
        { name: "Gpple", Id: "129" },
        { name: "Hpple", Id: "130" },
        { name: "Ipple", Id: "131" },
        { name: "Jpple", Id: "132" },
        { name: "Kpple", Id: "133" },
        { name: "Lpple", Id: "134" },
        { name: "Mpple", Id: "135" },
        { name: "Npple", Id: "136" },
        { name: "Opple", Id: "137" },
        { name: "Ppple", Id: "138" },
        { name: "Qpple", Id: "139" },
        { name: "Rpple", Id: "140" },
        { name: "Spple", Id: "141" },
        { name: "Tpple", Id: "142" },
        { name: "Upple", Id: "143" },
        { name: "Vpple", Id: "144" },
        { name: "Wpple", Id: "145" }
    ]
};
  