const TableList = `{
    "list" : [
        {"name":"Alfreds Futterkiste", "country":"Germany"},
        {"name":"Berglunds snabbkop", "country":"Sweden"},
        {"name":"Island Trading", "country":"UK"},
        {"name":"Koniglich Essen", "country":"Germany"},
        {"name":"Laughing Bacchus Winecellars", "country":"Canada"},
        {"name":"Magazzini Alimentari Riuniti", "country":"Italy"},
        {"name":"North/South", "country":"UK"},
        {"name":"Paris specialites", "country":"France"}
    ]
}`;

const TableCell = JSON.parse(TableList).list;

class CustomTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).append(quiz13_03.content.cloneNode(true));
    }
  
    setElement = () => {
        const ListName = document.createElement("p");
        const ListCountry = document.createElement("p");
        const tableCell = this.shadowRoot.querySelector(".tableCell");

        ListName.setAttribute("value", this.Name);
        ListName.textContent = this.Name;

        ListCountry.setAttribute("value", this.Country);
        ListCountry.textContent = this.Country;

        tableCell.append(ListName, ListCountry);
    };
  
    connectedCallback() {
        const InputData = document.querySelector("#searchData");
        const resultTable = this.shadowRoot.querySelector(".tableCell");

        InputData.addEventListener("input", (e) => {
            resultTable.innerHTML = "";
            
            for (let i = 0; i < TableCell.length; i++) {
                const customTable = document.createElement("table-cell");
                
                if (TableCell[i].name.match(new RegExp(`^${e.target.value}`))) {
                    customTable.Name = TableCell[i].name;
                    customTable.Country = TableCell[i].country;
                    resultTable.appendChild(customTable);
                    customTable.setElement();
                }
            }
        });
    }
}

customElements.define("table-cell", CustomTable);

//TODO: refresh에 대한 정의가 다시 이뤄져야됨.
for (let i = 0; i < TableCell.length; i++) {
    const customTable = document.createElement("table-cell");
    customTable.Name = TableCell[i].name;
    customTable.Country = TableCell[i].country;
    document.querySelector(".resultTable").appendChild(customTable);
    customTable.setElement();
}
  