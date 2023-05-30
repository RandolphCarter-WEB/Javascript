export default function SettingsPage(target) {
    return () => {
        target.innerHTML = `
            <h1>This is Page for Settings</h1>
        `;
    };
}