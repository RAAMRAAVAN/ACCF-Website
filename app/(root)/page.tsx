"use client";
import Image from "next/image";
import ImageSlider from "../(components)/ImageSlider";
import DoctorCards from "../(components)/DoctorCard/DoctorCards";
import Facilities from "../(components)/Facilities";
import Accomplishments from "../(components)/Accomplishments";
import WhatsHappening from "../(components)/WhatsHappening";
import OurHospitals from "../(components)/OurHospitals";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
export default function Home() {
  const [homeContent, setHomeContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await fetch("/api/home_text");
        const data = await response.json();
        if (response.ok) {
          setHomeContent(data.result[0]);
          // console.log("Images=", data.result);
        } else {
          console.error("Error:", data.error);
        }
      } catch (error) {
        console.error("Failed to fetch hospital details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHome();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Box display="flex" alignItems="end" flexDirection="column">
        <Box display="flex" width="100%" sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <ImageSlider />
          <Box display="flex" padding={2} flexDirection="column" sx={{ width: { xs: "100%", md: "40%" } }}>
            <Typography variant="h5">{homeContent.heading}</Typography>
            <Typography textAlign="justify">{homeContent.description}</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" margin={1}>
        <Typography variant="h5" fontWeight="bolder" marginLeft={3}>Consultants</Typography>
        <DoctorCards />
      </Box>
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Typography color="blue" fontWeight="bold" variant="h5">Our Accomplishments</Typography>
        <Typography >As on 1st February 2025</Typography>
      </Box>
      <Accomplishments />
      <Typography variant="h5" fontWeight="bold" paddingX={4}>
        Facilities
      </Typography>
      <Facilities />
      <WhatsHappening />
      <Typography variant="h5" paddingX={4} fontWeight="bold" marginBottom={3}>
        OUR HOSPITALS
      </Typography>
      <OurHospitals/>
    </>
  );
}
