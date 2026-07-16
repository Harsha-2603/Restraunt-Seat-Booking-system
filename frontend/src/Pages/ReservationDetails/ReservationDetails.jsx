import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ReservationDetails = () => {
    const [reservations, setReservations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchReservations = async () => {
        try {
            const response = await axios.get("http://localhost:4000/reservation-details-api/get");
            const payload = response.data;
        
            if (Array.isArray(payload)) {
            setReservations(payload);
            } else if (Array.isArray(payload?.reservations)) {
            setReservations(payload.reservations);
            } else {
            setReservations([]);
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message || "Unable to load reservations.");
            setReservations([]);
        } finally {
            setIsLoading(false);
        }
        };

        fetchReservations();
    }, []);

    return (
        <div className="container mt-5">
        <h1 className="text-center mb-4">Reservation Details</h1>

        {isLoading ? (
            <p className="text-center">Loading reservations...</p>
        ) : error ? (
            <p className="text-center text-danger">{error}</p>
        ) : Array.isArray(reservations) && reservations.length > 0 ? (
            <table className="table table-bordered table-striped">
            <thead>
                <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Email</th>
                <th>Seats</th>
                </tr>
            </thead>

            <tbody>
                {reservations.map((reservation) => (
                <tr key={reservation._id || `${reservation.email}-${reservation.date}` }>
                    <td>
                    {reservation.firstName} {reservation.lastName}
                    </td>
                    <td>{reservation.date}</td>
                    <td>{reservation.time}</td>
                    <td>{reservation.email}</td>
                    <td>{reservation.numberOfSeats ?? "-"}</td>
                </tr>
                ))}
            </tbody>
            </table>
        ) : (
            <p className="text-center">No reservations found.</p>
        )}
        </div>
    );
    };

    export default ReservationDetails;