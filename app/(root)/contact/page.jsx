"use client";
import { LocationCity, Mail, Phone } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useHospital } from "../../(root)/layout";
const page = () => {
    const HospitalDetails = useHospital();
    return (<>
        <Box display="flex" width="100%" justifyContent="center">
            <Box display="flex" width="70%" padding={2} sx={{ backgroundColor: "#eeebeb", borderRadius: "10px", height: "600px" }} flexDirection="column" alignItems="center">
                <Typography variant="h5" marginY={1} fontWeight="bold">Contact Us</Typography>
                <Typography color="gray" marginY={1}>Any question or remarks? Write us a message.</Typography>
                <Grid container display="flex" width="90%" sx={{ backgroundColor: "#eeebeb", borderRadius: "10px", height: "600px" }}>
                    <Grid item xs={5} backgroundColor="#3e2093" borderRadius="10px" padding={4}>
                        <Typography color="white" variant="h6">Contact Information</Typography>
                        <Typography color="gray" marginY={1}>Fill up the form and our team will get back to you within 24 hours</Typography>
                        <Typography color="gray" marginY={1} marginTop={2}><Phone sx={{ color: "yellow", marginRight: "5px" }} />{HospitalDetails.PhoneNumber}</Typography>
                        <Typography color="gray" marginY={1}><Mail sx={{ color: "yellow", marginRight: "5px" }} />info@accf.in</Typography>
                        <Typography color="gray" marginY={1}><LocationCity sx={{ color: "yellow", marginRight: "5px" }} />{HospitalDetails.Address}</Typography>
                    </Grid>
                    <Grid item container xs={7} backgroundColor="white" borderRadius="10px" justifyContent="center" padding={5}>
                        <Grid item xs={6}>
                            <Typography>Name</Typography>
                            <TextField id="standard-basic" variant="standard" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Last Name</Typography>
                            <TextField id="standard-basic" variant="standard" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>E-Mail</Typography>
                            <TextField id="standard-basic" variant="standard" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Phone No</Typography>
                            <TextField id="standard-basic" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Message</Typography>
                            <TextField
                                id="outlined-multiline-static"
                                // label="Multiline"
                                multiline
                                rows={4}
                                placeholder="Enter your message"
                                fullWidth
                            />
                        </Grid>
                        <Button variant="contained" fullWidth size="small">Submit</Button>
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    </>)
}
export default page;