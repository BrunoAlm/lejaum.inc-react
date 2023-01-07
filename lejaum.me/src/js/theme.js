// Theme vars
// const userTheme = LocalStorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Theme check
export const themeCheck = () => {
    if ((userTheme === "dark") || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        return;
    }
}

// ThemeSwitch
export const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");

}