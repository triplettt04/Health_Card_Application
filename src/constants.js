const constants = {
    pageEntries: [
        {
            entries: ["Username", "Password"],
            entryClass: "login"
        },
        {
            entries: ["First Name", "Birthday"],
            entryClass: "personalInfo"
        },
    ],
    isMobile: true,
    // As we add pages add their page number here
    // so that we can easily switch the order
    loginPage: 1,
    formPage: 2,
};

export default constants;
