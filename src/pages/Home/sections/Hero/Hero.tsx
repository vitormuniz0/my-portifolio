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
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
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
          <Grid item xs={12} md={5} textAlign="center">
            <Box position="relative" display="inline-block">
              <Box position="absolute" width={"150%"} top={-100} right={0} zIndex={-1}>
                <AnimatedBackground />
              </Box>
              <StyledImg src={Avatar} alt="Avatar" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7} textAlign="center">
            <Typography color="primary.contrastText" variant="h3">
              Vitor Muniz
            </Typography>
            <Typography color="primary.contrastText" variant="h5">
              I'm a Software Developer
            </Typography>
            <Grid container spacing={2} justifyContent="center" mt={2}>
              <Grid item xs={12} sm={6} md={4}>
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StyledButton>
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