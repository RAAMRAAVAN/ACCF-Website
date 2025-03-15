import { FiberManualRecord, LocationCity, Mail, Phone } from "@mui/icons-material";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import GoogleMapEmbed from "../../(components)/GoogleMap";
import SocialIcons from "../SocialIcons";
import AnimatedImages from "../Animation"
const Hospitals = [{ name: "Barpeta Cancer Centre", link: "https://dibrugarhcancercentre.org/" }, { name: "Dibrugarh Cancer Centre", link: "https://dibrugarhcancercentre.org/" }]
const Facilities = [{ Loader: "#0076bd", name: "PET-CT and Medical Cyclotron", image: "/Facilities/PET_CT.jpg", text: "The medical Cyclotron Machine can produce the radio-active substance (FDG) required for PET-CT investigation. This Medical Cyclotron Facility is the only one of its kinds installed in Eastern India in Government set-up. Dual Head Gama Camera has been procured and installed for clinical use. PET CT imagining is available since August 16. With commissioning of Medical Cyclotron facility, the radio pharmaceutical will be available on site and more number of patients can be taken up for PET CT with no waiting period" },
{ Loader: "#0076bd", name: "Bone Marrow Transplant", image: "/Facilities/bmt.jpg", text: "Bone marrow transplantation, also called as hematopoietic stem cell transplantation, is a sophisticated procedure performed in selected centres.In this procedure, stem cells are collected from a person (called as donor) and transfused to the patient (called as recipient). Previously, stem cells were collected from bone marrow of donors, but now a days, for most cases, stem cells are collected from peripheral veins only.These stem cells collected from donor ultimately goes to the bone marrow of the patient and produces blood cells for the patient.Depending upon the donor, BMT can be autologous or allogenic. In autologous BMT, stem cells are collected from the patient only. In allogenic BMT, stem cells are collected from a relative (brother, sister or parent) or an unrelated person. Allogenic BMT can be of 3 types- matched sibling donor (MSD) type, Haplo match donor (Haplo BMT)type, and matched unrelated donor (MUD) type. Haplo BMT and MUD BMT is difficult to perform compared to MSD BMT. BMT can be lead to cure in various hematological cancers.Aplastic anemia, acute leukemia, multiple myeloma, relapsed lymphoma are some of the common diseases where BMT is performed.BMT is one of the most intensive treatments ever devised to treat a disease. It needs a lot of expertise and collaboration between the physician, nursing staff, pathologists, microbiologists, dietician, intensivists etc.BMT is available only in selected centres in India. Many patients from Assam goes outside for BMT. Availability of BMT in State Cancer Institute will be a definitive moment in the landscape of cancer care in Assam- patients will be able to get quality care at an affordable price." }
]
const Footer = (props) => {
    const {HospitalDetails}=props;
    return (<>
        <Box display="flex" width="100%" flexDirection="column" alignItems="center">
            <Grid container justifyContent="center" width="90%">
                {/* Our Hospitals */}
                <Grid item xs={2}>
                    <Typography variant="h6" marginBottom={1}>Our Hospitals</Typography>
                    {Hospitals.map((Hospital) => {
                        return (<Link href={Hospital.link} passHref legacyBehavior key={Hospital.name}><Typography color="gray" fontSize="12">{Hospital.name}</Typography></Link>)
                    })}
                </Grid>
                {/* Facilities */}
                <Grid item xs={4}>
                    <Typography variant="h6" marginBottom={1} width="100%" display="flex">Facilities</Typography>
                    <List sx={{ padding: 0, display: "flex" }}>
                        <Grid container>
                            {Facilities.map((Facility) => {
                                return (<Grid item xs={6} key={Facility.name}><Link href='/' passHref legacyBehavior>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemIcon sx={{ minWidth: "10px", color: "gray" }}>
                                            <FiberManualRecord fontSize="small" sx={{ fontSize: "8px" }} />
                                        </ListItemIcon>
                                        <ListItemText secondary={Facility.name} />
                                    </ListItem>
                                </Link></Grid>)
                            })}
                        </Grid>
                    </List>
                </Grid>
                {/* Contact us */}
                <Grid item xs={2}>
                    <Typography variant="h6" marginBottom={1}>Contact Us</Typography>
                    <Typography color="gray" marginY={1} marginTop={2} fontSize={12}><Phone sx={{ color: "gray", marginRight: "5px" }} />{HospitalDetails.PhoneNumber}</Typography>
                    <Typography color="gray" marginY={1} fontSize={12}><Mail sx={{ color: "gray", marginRight: "5px" }} />info@accf.in</Typography>
                    <Typography color="gray" marginY={1} fontSize={12}><LocationCity sx={{ color: "gray", marginRight: "5px", textAlign: "justify" }} />{HospitalDetails.Address}</Typography>
                    <SocialIcons Facebook={HospitalDetails.Facebook} Twitter={HospitalDetails.Twitter} LinkedIn={HospitalDetails.LinkedIN} Instagram={HospitalDetails.Insta}/>
                </Grid>
                {/* Location */}
                <Grid item xs={3}>
                    <Typography variant="h6" marginBottom={1}>Landmark</Typography>
                    <GoogleMapEmbed URL={HospitalDetails.Location}/>
                </Grid>
            </Grid>
            <AnimatedImages/>
        </Box>
    </>)
}
export default Footer;