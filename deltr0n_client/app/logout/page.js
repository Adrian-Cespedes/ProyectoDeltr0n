"use client";

export default function logoutPage() {
    // redirect to main page and set localStorage to ""
    localStorage.setItem("RUC", "");
    window.location.href = "/";
}