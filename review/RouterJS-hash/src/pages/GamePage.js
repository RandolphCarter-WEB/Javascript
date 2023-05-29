export default function GamePage(target) {
    return () => {
        target.innerHTML = `
            <h1>This is Page for game</h1>
        `;
    };
}