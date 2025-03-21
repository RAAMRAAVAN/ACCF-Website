"use client";

import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import Footer from "../(components)/Footer/Footer";
import Header from "../(components)/Header/Header";
import { Box } from "@mui/material";

// Define the expected type for hospital details
interface HospitalDetailsType {
    Location?: string;
}

// Create Context with a default empty object
const HospitalContext = createContext<HospitalDetailsType | null>(null);

export function useHospital() {
    return useContext(HospitalContext);
}

export default function Layout({ children }: { children: ReactNode }) {
    const [HospitalDetails, setHospitalDetails] = useState<HospitalDetailsType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHospitalDetails = async () => {
            try {
                const response = await fetch("/api/hospital_details");
                const data = await response.json();
                if (response.ok) {
                    setHospitalDetails(data.result);
                    console.log("Hospital Details:", data.result);
                } else {
                    console.error("Error:", data.error);
                }
            } catch (error) {
                console.error("Failed to fetch hospital details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHospitalDetails();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <HospitalContext.Provider value={HospitalDetails}>
            <Header HospitalDetails={HospitalDetails} />
            <Box display="flex" flexDirection="column" width="100%" boxShadow="5px 5px 15px rgba(0, 0, 0, 0.3)" marginBottom={3}>
                {children}
            </Box>
            <Footer HospitalDetails={HospitalDetails} />
        </HospitalContext.Provider>
    );
}
