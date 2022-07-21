export const goToTripsList = (navigate) => {
    navigate("/trips/list")
}
;
export const goToLoginPage = (navigate) => {
    navigate("/login")
};

export const goToDetails = (navigate) => {
    navigate(`/admin/trips/:id`)
}

export const goToForm = (navigate) => {
    navigate("/trips/application")
}

export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToAdminPage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}