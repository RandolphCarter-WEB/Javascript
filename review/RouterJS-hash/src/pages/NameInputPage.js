export default function NameInputPage(target) {
    return () => {
        target.innerHTML = `
            <h1>This is Page for User info</h1>
        `;
    };
}