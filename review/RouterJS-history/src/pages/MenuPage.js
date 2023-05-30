export default function MenuPage(target) {
    return () => {
        target.innerHTML = `
            <h1>This is Page for menu</h1>
        `;
    };
}