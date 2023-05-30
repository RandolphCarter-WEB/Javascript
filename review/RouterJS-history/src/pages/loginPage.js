export default function LoginPage(target) {
    return () => {
        target.innerHTML = `
            <h1>This is Page for User info</h1>
        `;
    };
}