import { BrowserRouter, Route, Routes} from "react-router-dom"
import {HomePage} from "../pages/HomePage"
import {ListTripsPage} from "../pages/ListTripsPage"
import {ApplicationFormPage} from "../pages/ApplicationFormPage"
import {LoginPage} from "../pages/LoginPage"
import {AdminHomePage} from "../pages/AdminHomePage"
import {CreateTripPage} from "../pages/CreateTripPage"
import {TripDetailsPage} from "../pages/TripDetailsPage"



export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>  
                <Route index element={<HomePage />} ></Route>
                <Route path="trips/list" element={<ListTripsPage/>} ></Route>
                <Route path="trips/application" element={<ApplicationFormPage/>} ></Route>
                <Route path="login" element={<LoginPage/>} ></Route>
                <Route path="admin/trips/list" element={<AdminHomePage/>} ></Route>
                <Route path="admin/trips/create" element={<CreateTripPage/>} ></Route>
                <Route path="admin/trips/:id" element={<TripDetailsPage/>} ></Route>
                

            </Routes>
        </BrowserRouter>
    )
}