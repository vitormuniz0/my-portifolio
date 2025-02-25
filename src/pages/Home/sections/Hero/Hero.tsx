import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../Components/StyledsButton/styledButton";
import theme from "../../../../theme";
import AnimatedBackground from "../../../../Components/AnimatedBackground/AnimatedBackground";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),

  [theme.breakpoints.up('xs')]: {
    paddingTop:"100px"

  },
  [theme.breakpoints.up('md')]: {
    paddingTop:"0"
  }


}));

const StyledImg = styled("img")(() => ({
  width: "75%",
  maxWidth: "250px",
  borderRadius: "50%",
  border: `2px solid ${theme.palette.primary.contrastText}`,
  margin: "auto",
  display: "block",
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={5}
            textAlign="center"
            display="flex"
            justifyContent="center"
            position="relative"
          >
            <Box
              position="absolute"
              width={"100%"}
              top={-100}
              height="100%"
              zIndex={0}
            >
              <AnimatedBackground />
            </Box>
            <StyledImg
              src={Avatar}
              alt="Avatar"
              style={{ position: "relative", zIndex: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={7} textAlign="center">
            <Typography color="primary.contrastText" variant="h2" pb={2}>
              Vitor Muniz
            </Typography>
            <Typography color="primary.contrastText" variant="h3">
              I'm a Software Developer
            </Typography>
            <Grid container spacing={2} justifyContent="center" mt={2} pt={3}>
              <Grid item xs={12} sm={6} md={4}>
                <StyledButton onClick={() => console.log("Download")}>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StyledButton onClick={() => console.log("contact")}>
                  <MailOutlineIcon />
                  <Typography>Contact Me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
